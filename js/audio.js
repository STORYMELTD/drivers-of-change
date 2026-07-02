/**
 * DRIVERS OF CHANGE — Procedural audio (Web Audio, no files)
 * StoryMe · Pengon · 2025
 *
 * One global `SFX`. All sound is synthesised — no asset files. The ambient
 * MUSIC track is a separate HTML <audio> element owned by main.js; SFX here is
 * ducked well under it and is fully silent while muted.
 *
 * Respects mute (single opt-in toggle) and a LITE mode (reduced-motion /
 * coarse-pointer / low-core): LITE keeps only cheap one-shots (click, chime,
 * whoosh) and SKIPS the continuous drive synthesis (gear hum + tick + track
 * roll), which is the battery/CPU-heavy part.
 */
(function () {
  'use strict';

  var AC = window.AudioContext || window.webkitAudioContext;

  // ── LITE: skip heavy continuous synthesis on mobile / low-power / reduced-motion ──
  var mq = function (q) { try { return window.matchMedia(q).matches; } catch (e) { return false; } };
  var LITE = mq('(prefers-reduced-motion: reduce)') ||
             mq('(pointer: coarse)') ||
             ((navigator.hardwareConcurrency || 8) <= 4);

  var ctx = null;         // AudioContext (lazily created on first gesture)
  var master = null;      // SFX bus gain (mute = 0), ducked under the music
  var noiseBuf = null;    // shared white-noise buffer for roll/whoosh/click
  var enabled = false;

  // continuous drive nodes (built once, only when !LITE)
  var humOsc = null, humGain = null, humFilt = null;
  var rollSrc = null, rollGain = null, rollFilt = null;
  var driveBuilt = false;

  // drive-speed tracking (deg/sec, smoothed)
  var lastRot = 0, lastT = 0, tickAccum = 0;
  var targetSpeed = 0, curSpeed = 0, rafId = null;
  var zoomFired = false;   // one-shot latch for the bab whoosh

  function now() { return ctx ? ctx.currentTime : 0; }

  function makeNoise() {
    var n = ctx.sampleRate * 1.2;
    noiseBuf = ctx.createBuffer(1, n, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  }

  // Build the always-running continuous drive voices (silent until speed rises).
  function buildDrive() {
    if (driveBuilt || LITE) return;
    driveBuilt = true;

    // gear hum — low sine through a gentle lowpass
    humOsc  = ctx.createOscillator();
    humFilt = ctx.createBiquadFilter();
    humGain = ctx.createGain();
    humOsc.type = 'sine';
    humOsc.frequency.value = 55;
    humFilt.type = 'lowpass';
    humFilt.frequency.value = 320;
    humGain.gain.value = 0;
    humOsc.connect(humFilt).connect(humGain).connect(master);
    humOsc.start();

    // track roll — looped noise through a bandpass (a soft rolling rumble)
    rollSrc  = ctx.createBufferSource();
    rollFilt = ctx.createBiquadFilter();
    rollGain = ctx.createGain();
    rollSrc.buffer = noiseBuf;
    rollSrc.loop = true;
    rollFilt.type = 'bandpass';
    rollFilt.frequency.value = 240;
    rollFilt.Q.value = 0.7;
    rollGain.gain.value = 0;
    rollSrc.connect(rollFilt).connect(rollGain).connect(master);
    rollSrc.start();
  }

  // rAF loop: smooth speed → hum/roll gains; decay so they fade when scrolling stops.
  function loop() {
    if (!enabled || LITE) { rafId = null; return; }
    curSpeed += (targetSpeed - curSpeed) * 0.2;
    targetSpeed *= 0.85;                       // stale target fades if drive() stops firing
    var norm = Math.min(1, curSpeed / 800);
    var t = now();
    if (humGain) {
      humGain.gain.setTargetAtTime(0.030 * norm, t, 0.05);
      humOsc.frequency.setTargetAtTime(52 + norm * 46, t, 0.10);
    }
    if (rollGain) rollGain.gain.setTargetAtTime(0.040 * norm, t, 0.05);
    rafId = requestAnimationFrame(loop);
  }

  // ── one-shot helpers ──────────────────────────────────────────────
  function ping(freq, peak, dur, type) {
    var o = ctx.createOscillator(), g = ctx.createGain(), t = now();
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  function noiseHit(peak, dur, filterType, f0, f1, Q) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(),
        g = ctx.createGain(), t = now();
    s.buffer = noiseBuf;
    f.type = filterType;
    f.frequency.setValueAtTime(f0, t);
    if (f1 != null) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    if (Q != null) f.Q.value = Q;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + Math.min(0.06, dur * 0.3));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(master);
    s.start(t); s.stop(t + dur + 0.02);
  }

  // ── public one-shots ──────────────────────────────────────────────
  function tick(v) { if (ready()) noiseHit(0.05 * v, 0.05, 'highpass', 2600, null, 1); }

  var SFX = {
    lite: LITE,

    // Create/resume the context — MUST be called from a user gesture.
    init: function () {
      if (ctx || !AC) return;
      try {
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0;               // starts muted; setEnabled ramps it up
        master.connect(ctx.destination);
        makeNoise();
        buildDrive();
      } catch (e) { ctx = null; }
    },

    // Single mute/opt-in toggle for all SFX (music handled separately in main.js).
    setEnabled: function (on) {
      enabled = !!on;
      if (!ctx) return;
      if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
      master.gain.setTargetAtTime(enabled ? 0.85 : 0.0, now(), 0.03);  // ducked bus level
      if (enabled && !LITE && !rafId) { lastT = 0; rafId = requestAnimationFrame(loop); }
    },

    // Continuous drive feedback — call each scroll frame with the gear's rotation
    // (deg). Derives angular speed → hum pitch/gain + roll gain + rolling ticks.
    // No-op in LITE (heavy) or when muted.
    drive: function (rotationDeg) {
      if (!ready() || LITE) return;
      var t = performance.now();
      if (!lastT) { lastT = t; lastRot = rotationDeg; return; }
      var dt = (t - lastT) / 1000; lastT = t;
      if (dt <= 0 || dt > 0.5) { lastRot = rotationDeg; return; }  // ignore idle gaps
      var dDeg = Math.abs(rotationDeg - lastRot);
      lastRot = rotationDeg;
      targetSpeed = dDeg / dt;                       // deg/sec
      tickAccum += dDeg;
      if (tickAccum >= 20) {                         // one tick per ~20° of roll
        tickAccum = 0;
        if (targetSpeed > 25) tick(Math.min(1, targetSpeed / 900));
      }
    },

    // Soft whoosh on the bab zoom — one-shot, latched so it fires once per entry.
    whoosh: function () {
      if (!ready() || zoomFired) return;
      zoomFired = true;
      noiseHit(0.12, 0.55, 'bandpass', 300, 1400, 0.8);
    },
    resetWhoosh: function () { zoomFired = false; },

    // UI click — nav dots, accordion headers, collapse/expand, close.
    click: function () { if (ready()) noiseHit(0.055, 0.045, 'highpass', 1800, null, 0.9); },

    // Gentle chime/pop when a chapter box or text appears.
    chime: function () {
      if (!ready()) return;
      ping(880, 0.06, 0.42, 'sine');
      ping(1320, 0.035, 0.35, 'sine');
    },
    // Softer pop for hotspot / panel open.
    pop: function () { if (ready()) ping(660, 0.05, 0.18, 'triangle'); },
  };

  function ready() { return enabled && ctx && master; }

  window.SFX = SFX;
})();
