/**
 * DRIVERS OF CHANGE — Light telemetry + global error capture
 * StoryMe · Pengon · 2025
 *
 * Loaded FIRST (before GSAP / app code) so it catches errors during parse/boot.
 * Privacy: no PII, no cookies, no third-party scripts. It reports only what's
 * needed to triage a break — error text, the failed asset URL, coarse load
 * timing, and the User-Agent — via a single navigator.sendBeacon.
 *
 * Network reporting is OFF until you set TELEMETRY_ENDPOINT to your collector
 * URL (any endpoint that accepts a JSON POST). Until then it logs to the console
 * so nothing is silently swallowed. Everything is wrapped so telemetry itself can
 * never throw into the app.
 */
(function () {
  'use strict';

  var TELEMETRY_ENDPOINT = '';   // e.g. 'https://example.com/beacon' — empty = console-only
  var MAX_EVENTS = 24;           // cap network beacons per session (runaway guard)
  var sent = 0;

  function send(type, data) {
    try {
      var payload = {
        t: type,
        ts: Date.now(),
        path: location.pathname,
        vw: window.innerWidth,
        vh: window.innerHeight,
        ua: navigator.userAgent
      };
      for (var k in data) if (Object.prototype.hasOwnProperty.call(data, k)) payload[k] = data[k];

      // Always surface locally so a dev sees it even with no endpoint configured.
      (type === 'error' || type === 'rejection' ? console.error : console.warn)('[telemetry]', payload);

      if (TELEMETRY_ENDPOINT && navigator.sendBeacon && sent < MAX_EVENTS) {
        sent++;
        var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TELEMETRY_ENDPOINT, blob);
      }
    } catch (e) { /* telemetry must never break the app */ }
  }

  function clip(s, n) { return s ? String(s).slice(0, n || 600) : ''; }

  // Public hook the app uses for handled asset failures (layers, audio, etc.).
  window.__telemetry = {
    beacon: send,
    assetError: function (url, tag) { send('asset', { asset: clip(url, 300), tag: tag || '' }); }
  };

  // Global JS errors AND resource (img/script/audio) load failures. Capture phase
  // so resource errors — which don't bubble — are seen here too.
  window.addEventListener('error', function (e) {
    try {
      var el = e && e.target;
      if (el && el !== window && el.tagName) {
        send('asset', { asset: clip(el.currentSrc || el.src || el.href, 300), tag: el.tagName });
        return;
      }
      send('error', {
        message: clip(e.message, 300),
        source: clip(e.filename, 200),
        line: e.lineno || 0,
        col: e.colno || 0,
        stack: clip(e.error && e.error.stack, 700)
      });
    } catch (err) {}
  }, true);

  window.addEventListener('unhandledrejection', function (e) {
    try {
      var r = e && e.reason;
      send('rejection', {
        message: clip(r && r.message ? r.message : r, 300),
        stack: clip(r && r.stack, 700)
      });
    } catch (err) {}
  });

  // Coarse load timing — one beacon once the page settles.
  window.addEventListener('load', function () {
    try {
      var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
      if (nav) {
        send('timing', {
          ttfb: Math.round(nav.responseStart),
          dcl: Math.round(nav.domContentLoadedEventEnd),
          load: Math.round(nav.loadEventEnd)
        });
      }
    } catch (err) {}
  });
})();
