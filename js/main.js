/**
 * DRIVERS OF CHANGE — Main Engine v7 CLEAN
 * StoryMe · Pengon · 2025
 */

(function () {
  'use strict';

  const MURAL_W          = 15615;
  const MURAL_H          = 1901;
  const GEAR_FULL_PX     = 490;
  const GEAR_MURAL_SCALE = 0.60;
  const GEAR_INTRO_SCALE = 1.15;  // initial (pre-scroll) gear is 15% larger; rolling size unchanged
  const TRACK_H_PX       = 72;
  // ── Bab→mural bridge tunables ──
  const BAB_ROLL_END       = 0.40;  // phase-1 p where the gear reaches the window & stops traveling
  const BAB_IDLE_SPIN      = 18;    // deg of extremely-slow idle spin over roll-end → 1
  const BAB_HIRES_AT       = 0.38;  // p to swap #babImg to hi-res, just before the zoom
  const BAB_FADE_START     = 0.40;  // phase-1 p where the gate begins crossfading out (→ 1.0)
  const BAB_WIN_OX         = 0.506; // window-origin x as fraction of the gate image (measured)
  const BAB_WIN_OY         = 0.35;  // window-origin y as fraction of the gate image (measured)
  const BAB_SLIDE_START    = 0.80;  // slide mode: p where the city starts sliding in from the right
  const GEAR_ENTER_FRAC    = 0.12;  // phase-2: fraction of the pan over which the gear rolls in from the edge
  const GEAR_SETTLE_X_FRAC = 0.50;  // phase-2: gear settle center as a fraction of vw (single knob)
  const IL_CANVAS_W      = 1496;  // UX artboard width  (matches loader reference)
  const IL_CANVAS_H      = 807;   // UX artboard height (matches loader reference)
  const IL_GEAR_X        = 1050;
  const IL_GEAR_Y        = 544;

  const S = {
    phase: 'loading',
    muralW: 0, muralH: 0, muralScale: 1,
    babProgress: 0, babDone: false,
    scrollProgress: 0, currentChapter: -1,
    panelOpen: false, audioEnabled: false,
    trackImgEl: null,
    reveal: 'slide',            // 'slide' (default) | 'crossfade' — from ?reveal=crossfade
    babZoomPx: 0, panPx: 0,     // phase-1 (gate) and phase-2 (pan) scroll distances
    st1: null, st2: null,       // the two phase ScrollTriggers (for resize re-pose)
  };

  const D = {
    loader:        document.getElementById('loader'),
    loaderGearWrap:document.getElementById('loaderGearWrap'),
    loaderGear:    document.getElementById('loaderGear'),
    loaderPct:     document.getElementById('loaderPct'),
    landing:       document.getElementById('landing'),
    driveBtn:      document.getElementById('driveBtn'),
    babSection:    document.getElementById('babSection'),
    babImg:        document.getElementById('babImg'),
    storyStage:    document.getElementById('storyStage'),
    muralViewport: document.getElementById('muralViewport'),
    muralWrap:     document.getElementById('muralWrap'),
    muralImg:      document.getElementById('muralImg'),
    muralLayers:   document.getElementById('muralLayers'),
    gearSystem:    document.getElementById('gearSystem'),
    driverLayer:   document.getElementById('driverLayer'),
    trackCanvas:   document.getElementById('trackCanvas'),
    muralGear:     document.getElementById('muralGear'),
    chaptersEl:    document.getElementById('chaptersEl'),
    hotspotsEl:    document.getElementById('hotspotsEl'),
    hotspotPanel:  document.getElementById('hotspotPanel'),
    panelContent:  document.getElementById('panelContent'),
    closePanel:    document.getElementById('closePanel'),
    storyNav:      document.getElementById('storyNav'),
    navDots:       document.getElementById('navDots'),
    progressFill:  document.getElementById('progressFill'),
    chapterLabel:  document.getElementById('chapterLabel'),
    ambientAudio:  document.getElementById('ambientAudio'),
    audioToggle:   document.getElementById('audioToggle'),
  };

  // ══════════════════════════════════════════
  // INIT
  // ══════════════════════════════════════════
  function init() {
    // All layers invisible until scroll engine positions them
    document.body.style.overflow = 'hidden';
    D.muralLayers.style.opacity    = '0';
    D.muralLayers.style.visibility = 'hidden';

    scaleMural();
    buildNav();
    buildChapterBoxes();
    buildHotspots();
    setupEvents();
    runLoader();
  }

  // ══════════════════════════════════════════
  // SCREEN 1 — LOADER
  // Runs on its own timer — does NOT wait for mural to load
  // ══════════════════════════════════════════
  function runLoader() {
        // Position gear at Illustrator convergence point
    D.loaderGearWrap.style.left = ((IL_GEAR_X / IL_CANVAS_W) * 100) + '%';
    D.loaderGearWrap.style.top  = ((IL_GEAR_Y / IL_CANVAS_H) * 100) + '%';

    // Preload track only - layers load on demand
    var trackImg = new Image();
    trackImg.onload = function() { S.trackImgEl = trackImg; drawTrack(); };
    trackImg.src = 'assets/images/gear track long-01.png';

    // Timer-based loader - 3 seconds minimum
    var pct = 0;
    var ticker = setInterval(function() {
      pct = Math.min(pct + (Math.random() * 9 + 2), 94);
      if (D.loaderPct) D.loaderPct.textContent = Math.round(pct) + '%';
    }, 100);

    setTimeout(function() {
      clearInterval(ticker);
      if (D.loaderPct) D.loaderPct.textContent = '100%';
      setTimeout(function() {
        D.loader.classList.add('out');
        S.phase = 'landing';
      }, 350);
    }, 3000);
  }

  // ══════════════════════════════════════════
  // SCREEN 2 — LANDING
  // ══════════════════════════════════════════
  function startJourney() {
    if (S.phase !== 'landing') return;
    S.phase = 'bab';
    D.landing.classList.add('out');
    setTimeout(() => {
      D.landing.style.display = 'none';
      D.babSection.classList.add('visible');
      document.body.style.overflow = '';   // enable native scroll
      window.scrollTo(0, 0);
      var hi = new Image(); hi.src = 'assets/images/bab alamoud-hi.webp';  // preload zoom tier
      // slide is the production reveal; crossfade kept only behind ?reveal=crossfade
      S.reveal = (new URLSearchParams(location.search).get('reveal') === 'crossfade') ? 'crossfade' : 'slide';
      applyRevealZ();
      seatGearOnBab();
      buildJourney();
    }, 900);
  }

  // Reveal mode z-order. The gate (#babSection) is a fixed overlay; the city
  // (#muralViewport) sits behind it for crossfade, or above it for slide so it
  // can slide in over the gate. #driverLayer (gear) always stays on top.
  function applyRevealZ() {
    D.muralViewport.style.zIndex = (S.reveal === 'slide') ? '30' : '';  // '' → CSS default (10)
  }

  // Build the whole journey up front: the city sits behind the gate overlay from
  // scroll 0, and #storyStage owns one continuous scroll (gate zoom → city pan).
  function buildJourney() {
    if (typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    S.phase = 'mural';                 // journey is live; input handlers engage
    D.storyNav.classList.add('visible');
    scaleMural();                      // sizes mural + sets #storyStage height (incl. babZoomPx)
    buildLayers();
    initScrollEngine();                // the two phase triggers + layer/chapter triggers
    ScrollTrigger.refresh();
  }

  // Base (un-scaled) gear pixel size for the current viewport — single source
  // of truth shared by the bridge and the mural drive:
  //   gearBasePx = GEAR_FULL_PX * (vh / MURAL_H) * 2
  function gearBasePx() {
    return GEAR_FULL_PX * (window.innerHeight / MURAL_H) * 2;
  }

  // Stage A — relocate the SINGLE #muralGear node into the fixed driver overlay
  // and seat it on the bab track at its p=0 pose (intro size, center at the left
  // edge so it reads 50% cropped). No duplication — same DOM node throughout.
  function seatGearOnBab() {
    if (!D.driverLayer || !D.muralGear) return;
    var size = gearBasePx() * GEAR_INTRO_SCALE;   // 1.15
    D.driverLayer.appendChild(D.muralGear);
    D.muralGear.style.position  = 'fixed';
    D.muralGear.style.width     = size + 'px';
    D.muralGear.style.height    = size + 'px';
    D.muralGear.style.left      = (-size / 2) + 'px';   // center on left edge
    D.muralGear.style.bottom    = Math.round(TRACK_H_PX * 0.15) + 'px';  // mural seat (matches handoff)
    gsap.set(D.muralGear, { rotation: 0 });
  }

  // ══════════════════════════════════════════
  // SCREEN 3 — BAB AL-AMOUD  (PHASE 1: gate overlay zoom)
  // The gate is a fixed overlay; the city sits behind it from scroll 0. p (0..1)
  // over the first babZoomPx of scroll drives the gear-on-gate choreography, the
  // deep window zoom, and the reveal (mode-specific city positioning + gate fade).
  // ══════════════════════════════════════════
  function driveBab(p) {
    if (!D.muralGear) return;
    var base    = gearBasePx();
    var sizeBig = base * GEAR_INTRO_SCALE;   // 1.15
    var sizeEnd = base * GEAR_MURAL_SCALE;   // 0.60
    var vw      = window.innerWidth;
    var seat    = Math.round(TRACK_H_PX * 0.15);
    var rollDist = babWindowOrigin().x;       // gear center parks at the window's on-screen x
    var size, centerX, angle;

    if (p <= BAB_ROLL_END) {
      var u   = p / BAB_ROLL_END;             // 0..1 across the roll
      size    = sizeBig + (sizeEnd - sizeBig) * u;
      centerX = rollDist * u;                 // 0 → screen center
      angle   = rollAngle(u, sizeBig, sizeEnd, rollDist);
    } else {
      var v   = (p - BAB_ROLL_END) / (1 - BAB_ROLL_END);  // 0..1 across the zoom
      size    = sizeEnd;
      centerX = rollDist;
      angle   = rollAngle(1, sizeBig, sizeEnd, rollDist) + BAB_IDLE_SPIN * v;
    }

    // place + spin the persistent driver gear (fixed, in #driverLayer)
    D.muralGear.style.position = 'fixed';
    D.muralGear.style.width    = size + 'px';
    D.muralGear.style.height   = size + 'px';
    D.muralGear.style.left     = (centerX - size / 2) + 'px';
    D.muralGear.style.bottom   = seat + 'px';
    gsap.set(D.muralGear, { rotation: angle });

    // fade the gear OUT at the window before the crossfade completes — nothing is
    // carried into the mural; a fresh gear re-enters from the left edge there.
    D.muralGear.style.opacity = p <= 0.80 ? 1
      : (p >= 0.92 ? 0 : 1 - (p - 0.80) / 0.12);

    if (p >= BAB_HIRES_AT) swapBabHiRes();

    // deep zoom of the gate scene, 0.40 → 1.0
    if (p > BAB_ROLL_END) {
      var z = (p - BAB_ROLL_END) / (1 - BAB_ROLL_END);   // 0..1
      var eased = z < 0.5 ? 4 * z * z * z : 1 - Math.pow(-2 * z + 2, 3) / 2;
      var o = babWindowOrigin();
      D.babImg.style.transformOrigin = o.x + 'px ' + o.y + 'px';
      D.babImg.style.transform = 'scale(' + (1 + eased * 9) + ')';   // 1 → 10
    } else {
      D.babImg.style.transform = 'scale(1)';
    }

    // REVEAL — position the city (#muralWrap) behind/around the gate per mode.
    if (S.reveal === 'slide') {
      // city held off-screen right, then slides in to the left edge (x=0)
      var sx = p < BAB_SLIDE_START ? vw
        : vw * (1 - (p - BAB_SLIDE_START) / (1 - BAB_SLIDE_START));
      gsap.set(D.muralWrap, { x: sx });
    } else {
      gsap.set(D.muralWrap, { x: 0 });   // crossfade: city pinned at its left edge
    }

    // gate crossfade out over 0.40 → 1.0 (reveals the city in crossfade; in slide
    // the city slides over the fading gate)
    D.babSection.style.opacity = p <= BAB_FADE_START
      ? 1
      : 1 - (p - BAB_FADE_START) / (1 - BAB_FADE_START);
  }

  // Circumference-accurate rolling rotation (deg) as the gear's diameter shrinks
  // linearly D0→D1 while its center travels 0→dist. Closed-form integral of
  // dθ = (d(distance)) / (π·D) · 360 over the shrink:
  //   θ = (360/π)·dist·ln(D1/D0)/(D1−D0)   [→ dist/(π·D0)·360 when D1≈D0]
  function rollAngle(u, D0, D1, dist) {
    var Du = D0 + (D1 - D0) * u;
    var dD = D1 - D0;
    if (Math.abs(dD) < 1e-4) return (dist * u) / (Math.PI * D0) * 360;
    return (360 / Math.PI) * dist * Math.log(Du / D0) / dD;
  }

  // On-screen pixel point of the gate "window", computed from the LIVE rendered
  // rect (object-fit:contain, object-position:center bottom) — letterboxing means
  // image-% ≠ viewport-%, so this must be derived, not hardcoded.
  function babWindowOrigin() {
    var vw = window.innerWidth, vh = window.innerHeight;
    var iw = D.babImg.naturalWidth  || 1450;
    var ih = D.babImg.naturalHeight || 725;
    var scale = Math.min(vw / iw, vh / ih);
    var rw = iw * scale, rh = ih * scale;
    var rx = (vw - rw) / 2;   // centered horizontally
    var ry = vh - rh;         // bottom-anchored
    return { x: rx + BAB_WIN_OX * rw, y: ry + BAB_WIN_OY * rh };
  }

  var babHiResSwapped = false;
  function swapBabHiRes() {
    if (babHiResSwapped) return;
    babHiResSwapped = true;
    D.babImg.src = 'assets/images/bab alamoud-hi.webp';
  }

  // PHASE 2 (pan): p2 (0..1) over panPx of scroll. Pans the city horizontally;
  // the gear (which faded out at the gate window in phase 1) re-enters from the
  // very LEFT EDGE, rolls to its settle x over the first GEAR_ENTER_FRAC of the
  // pan, then holds and spins. Reads sizes live so resize stays in sync.
  function panUpdate(p2) {
    if (!D.muralGear) return;
    var vw      = window.innerWidth;
    var size    = gearBasePx() * GEAR_MURAL_SCALE;     // 0.60 rolling size
    var seat    = Math.round(TRACK_H_PX * 0.15);
    var settleX = vw * GEAR_SETTLE_X_FRAC;             // settle center (single knob)

    // pan the city
    gsap.set(D.muralWrap, { x: -p2 * S.panPx });

    // gear entrance: center travels left-edge (x=0) → settleX over the first
    // GEAR_ENTER_FRAC, then holds.
    var enter = Math.min(p2 / GEAR_ENTER_FRAC, 1);
    var cx    = enter * settleX;
    D.muralGear.style.opacity  = '1';
    D.muralGear.style.position = 'fixed';
    D.muralGear.style.width    = size + 'px';
    D.muralGear.style.height   = size + 'px';
    D.muralGear.style.bottom   = seat + 'px';
    D.muralGear.style.left     = (cx - size / 2) + 'px';

    // spin: circumference-accurate to the pan, fresh from 0
    var muralDegrees = (S.panPx / (Math.PI * size)) * 360;
    gsap.set(D.muralGear, { rotation: p2 * muralDegrees });

    S.scrollProgress = p2;
    onScrollUpdate(p2);
  }

  // ══════════════════════════════════════════
  // MURAL SIZING
  // ══════════════════════════════════════════
  function rescaleLayers() {
    D.muralLayers.querySelectorAll('.mural-layer').forEach(img => {
      const layer = STORY_DATA.layers.find(l => l.id === img.dataset.layerId);
      if (!layer) return;
      img.style.left   = Math.round(layer.xPct / 100 * S.muralW) + 'px';
      img.style.top    = Math.round(layer.yPct / 100 * S.muralH) + 'px';
      img.style.width  = Math.round(layer.wPct / 100 * S.muralW) + 'px';
      img.style.height = 'auto';
    });
  }

  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    S.muralScale = vh / MURAL_H;
    S.muralW     = MURAL_W * S.muralScale;
    S.muralH     = vh;

    D.muralImg.style.width    = S.muralW + 'px';
    D.muralImg.style.height   = vh + 'px';
    D.muralImg.style.maxWidth = 'none';
    D.muralImg.style.opacity  = '1'; // base mural always visible

    // #storyStage owns ALL scroll: gate zoom (babZoomPx) + city pan (panPx) + vh.
    S.babZoomPx = vh * 3;                 // was the gate pin distance
    S.panPx     = S.muralW - vw;          // horizontal pan distance
    D.storyStage.style.height = (S.babZoomPx + S.panPx + vh) + 'px';

    D.muralLayers.style.width  = S.muralW + 'px';
    D.muralLayers.style.height = vh + 'px';

    D.gearSystem.style.width  = S.muralW + 'px';
    D.gearSystem.style.height = TRACK_H_PX + 'px';

    // The gear is posed entirely by the phase triggers (driveBab / panUpdate);
    // scaleMural never positions it.

    drawTrack();

    if (D.muralLayers.children.length > 0) rescaleLayers();

    positionChapterBoxes();
    positionHotspots();
  }

  // ══════════════════════════════════════════
  // TRACK — canvas tiling (never stretched)
  // ══════════════════════════════════════════
  function drawTrack() {
    if (!D.trackCanvas || !S.muralW) return;

    if (!S.trackImgEl) {
      const img = new Image();
      img.src    = 'assets/images/gear track long-01.png';
      img.onload = () => { S.trackImgEl = img; drawTrack(); };
      return;
    }

    const tileH      = S.trackImgEl.naturalHeight;
    const tileW      = S.trackImgEl.naturalWidth;
    const trackH     = TRACK_H_PX;
    const tileScale  = trackH / tileH;
    const scaledTileW = tileW * tileScale;

    D.trackCanvas.width        = S.muralW;
    D.trackCanvas.height       = trackH;
    D.trackCanvas.style.width  = S.muralW + 'px';
    D.trackCanvas.style.height = trackH + 'px';

    const ctx = D.trackCanvas.getContext('2d');
    ctx.clearRect(0, 0, S.muralW, trackH);
    for (let x = 0; x < S.muralW; x += scaledTileW) {
      ctx.drawImage(S.trackImgEl, x, 0, scaledTileW, trackH);
    }
  }

  // ══════════════════════════════════════════
  // GSAP SCROLL ENGINE
  // ══════════════════════════════════════════
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // PHASE 1 — gate overlay zoom. Spans the first babZoomPx of #storyStage scroll.
    S.st1 = ScrollTrigger.create({
      trigger: D.storyStage,
      start:   'top top',
      end:     () => '+=' + S.babZoomPx,
      scrub:   true,
      onUpdate: self => driveBab(self.progress),
    });

    // PHASE 2 — horizontal city pan + gear entrance. Spans the remaining panPx.
    S.st2 = ScrollTrigger.create({
      trigger: D.storyStage,
      start:   () => 'top+=' + S.babZoomPx + ' top',
      end:     'bottom bottom',
      scrub:   true,
      onUpdate: self => panUpdate(self.progress),
    });

    // LAYERS — reveal container, then animate (float / sway / fade-in).
    D.muralLayers.style.visibility = 'visible';
    gsap.to(D.muralLayers, { opacity: 1, duration: 0.5, delay: 0.2 });

    STORY_DATA.layers.forEach(layer => {
      const el = D.muralLayers.querySelector('[data-layer-id="' + layer.id + '"]');
      if (!el) return;

      // No horizontal parallax. All layers are depth 1.0 (locked decision:
      // full-canvas-origin layers must move exactly with the mural or the
      // composition breaks). Layers are children of #muralWrap, so they ride
      // the base pan automatically — no per-layer x-tween needed.

      if (layer.type === 'sway') {
        gsap.to(el, { rotation: 1.5, repeat: -1, yoyo: true, duration: 3 + Math.random() * 2, ease: 'sine.inOut', delay: Math.random() * 2, transformOrigin: '50% 100%' });
      }
      if (layer.type === 'float') {
        gsap.to(el, {
          y: -(8 + Math.random() * 6), repeat: -1, yoyo: true,
          duration: 2.5 + Math.random() * 2, ease: 'sine.inOut', delay: Math.random(),
        });
      }

      // Fade in — CRITICAL: offset by babZoomPx so the pan's 0..1 maps past the gate zoom.
      if (layer.triggerAt === 0) {
        gsap.to(el, { opacity: 1, duration: 0.9, delay: 0.3 });
      } else {
        ScrollTrigger.create({
          trigger: D.storyStage,
          start: () => 'top+=' + (S.babZoomPx + layer.triggerAt * S.panPx) + 'px top',
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 0.9 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      }
    });

    // CHAPTER BOXES — animate in/out by pan zone. CRITICAL: offset by babZoomPx,
    // else every chapter fires during the gate zoom.
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.getElementById('cbox-' + i);
      if (!box) return;

      const buf = S.panPx * 0.015;

      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (S.babZoomPx + ch.scrollStart * S.panPx + buf) + 'px top',
        onEnter:     () => gsap.to(box, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }),
        onLeaveBack: () => gsap.to(box, { opacity: 0, y: 24, duration: 0.4 }),
      });
      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (S.babZoomPx + ch.scrollEnd * S.panPx - buf) + 'px top',
        onEnter:     () => gsap.to(box, { opacity: 0, y: -24, duration: 0.5, ease: 'power2.in' }),
        onLeaveBack: () => gsap.to(box, { opacity: 1, y: 0, duration: 0.4 }),
      });
    });
  }

  // ══════════════════════════════════════════
  // SCROLL UPDATE
  // ══════════════════════════════════════════
  function onScrollUpdate(progress) {
    D.progressFill.style.width = (progress * 100) + '%';
    const idx = getChapterAt(progress);
    if (idx !== S.currentChapter) setChapter(idx);
    updateHotspots(progress);

  }

  function lazyLoadLayers(progress) {
    var loadAhead = 0.15;
    D.muralLayers.querySelectorAll('.mural-layer').forEach(function(img) {
      var trigger = parseFloat(img.dataset.trigger || 0);
      var dataSrc = img.dataset.src;
      if (!dataSrc) return;
      if (progress >= (trigger - loadAhead) && img.src !== dataSrc) {
        img.src = dataSrc;
      }
    });
  }

  function getChapterAt(p) {
    for (let i = STORY_DATA.chapters.length - 1; i >= 0; i--) {
      if (p >= STORY_DATA.chapters[i].scrollStart) return i;
    }
    return 0;
  }

  function setChapter(idx) {
    S.currentChapter = idx;
    const ch = STORY_DATA.chapters[idx];
    document.querySelectorAll('.nav-dot').forEach((d, i) => {
      d.classList.toggle('active',  i === idx);
      d.classList.toggle('visited', i <  idx);
    });
    D.chapterLabel.textContent = ch.title;
  }

  // ══════════════════════════════════════════
  // BUILD FUNCTIONS
  // ══════════════════════════════════════════
  function buildNav() {
    STORY_DATA.chapters.forEach((ch, i) => {
      if (i > 0) {
        const line = document.createElement('div');
        line.className = 'nav-dot-line';
        D.navDots.appendChild(line);
      }
      const dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.title     = ch.title;
      dot.addEventListener('click', () => {
        if (S.phase !== 'mural') return;
        // target lands in the PAN region (past the gate zoom)
        const target = S.babZoomPx + ch.scrollStart * S.panPx;
        gsap.to(window, { scrollTo: target, duration: 1.2, ease: 'power2.inOut' });
      });
      D.navDots.appendChild(dot);
    });
  }

  function buildLayers() {
    console.log("muralW:", S.muralW, "muralH:", S.muralH);
    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className           = 'mural-layer';
      img.src                 = layer.src;
      img.loading             = 'lazy';
      img.decoding            = 'async';
      img.alt                 = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.layerId     = layer.id;
      img.dataset.trigger     = layer.triggerAt || 0;
      img.style.position      = 'absolute';
      img.style.left          = Math.round(layer.xPct / 100 * S.muralW) + 'px';
      img.style.top           = Math.round(layer.yPct / 100 * S.muralH) + 'px';
      img.style.width         = Math.round(layer.wPct / 100 * S.muralW) + 'px';
      img.style.height        = 'auto';
      img.style.maxWidth      = 'none';
      img.style.zIndex        = layer.zIndex || 1;
      img.style.pointerEvents = 'none';
      img.style.opacity       = layer.triggerAt ? '0' : '1';
      D.muralLayers.appendChild(img);
    });
  }

  function buildChapterBoxes() {
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.createElement('div');
      box.className  = 'chapter-box';
      box.id         = 'cbox-' + i;
      box.style.opacity   = '0';
      box.style.transform = 'translateY(24px)';

      const closeBtn = document.createElement('button');
      closeBtn.className = 'chapter-box__close';
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.innerHTML = '<img src="assets/images/X.svg" alt="Close"/>';
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        gsap.to(box, { opacity: 0, y: -20, duration: 0.4 });
      });

      const bodyText = (ch.body || []).map(function(p) { return '<p>' + p + '</p>'; }).join('');
      box.innerHTML =
        '<div class="chapter-box__header">' +
          '<p class="chapter-box__label">' + ch.label + '</p>' +
          '<h2 class="chapter-box__title">' + ch.title + '</h2>' +
        '</div>' +
        '<div class="chapter-box__body">' + bodyText + '</div>';
      box.appendChild(closeBtn);
      D.chaptersEl.appendChild(box);
    });
    positionChapterBoxes();
  }

  function positionChapterBoxes() {
    if (!S.muralW) return;
    document.querySelectorAll('.chapter-box').forEach(function(box, i) {
      const ch = STORY_DATA.chapters[i];
      if (!ch) return;
      box.style.left = ((ch.scrollStart + 0.04) * S.muralW) + 'px';
      box.style.top  = (S.muralH * 0.10) + 'px';
    });
  }

  function buildHotspots() {
    STORY_DATA.hotspots.forEach(function(hs) {
      const btn = document.createElement('button');
      btn.className = 'hotspot';
      btn.dataset.id = hs.id;
      btn.setAttribute('aria-label', hs.content.title);
      btn.innerHTML = '<span class="hotspot__ring"></span><span class="hotspot__dot"></span>';
      btn.addEventListener('click', function() { openPanel(hs); });
      D.hotspotsEl.appendChild(btn);
    });
    positionHotspots();
  }

  function positionHotspots() {
    if (!S.muralW) return;
    D.hotspotsEl.querySelectorAll('.hotspot').forEach(function(el, i) {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.style.left = (hs.position.left / 100 * S.muralW) + 'px';
      el.style.top  = (hs.position.top  / 100 * S.muralH) + 'px';
    });
  }

  function updateHotspots(p) {
    D.hotspotsEl.querySelectorAll('.hotspot').forEach(function(el, i) {
      const hs = STORY_DATA.hotspots[i];
      if (hs) el.classList.toggle('visible', p >= hs.triggerAt);
    });
  }

  function openPanel(hs) {
    const c  = hs.content;
    let html = '<p class="panel-chapter">' + c.chapter + '</p>';
    html    += '<h2 class="panel-title">' + c.title + '</h2>';
    html    += '<div class="panel-body">' + c.body.map(function(p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
    if (c.image) html += '<div class="panel-image"><img src="' + c.image + '" alt="' + c.title + '" loading="lazy"/></div>';
    if (c.audio) html += '<div class="panel-audio"><p class="panel-audio-label">Listen</p><audio controls src="' + c.audio + '" preload="none"></audio></div>';
    D.panelContent.innerHTML = html;
    D.hotspotPanel.classList.add('open');
    D.hotspotPanel.setAttribute('aria-hidden', 'false');
    S.panelOpen = true;
  }

  function closePanel() {
    D.hotspotPanel.classList.remove('open');
    D.hotspotPanel.setAttribute('aria-hidden', 'true');
    S.panelOpen = false;
  }

  function toggleAudio() {
    S.audioEnabled = !S.audioEnabled;
    D.audioToggle.querySelector('.ico-on').style.display  = S.audioEnabled ? 'block' : 'none';
    D.audioToggle.querySelector('.ico-off').style.display = S.audioEnabled ? 'none'  : 'block';
    if (S.audioEnabled) {
      D.ambientAudio.src    = STORY_DATA.audio.ambient.src;
      D.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
      D.ambientAudio.play().catch(function() { S.audioEnabled = false; });
    } else {
      D.ambientAudio.pause();
    }
  }

  function setupEvents() {
    D.driveBtn.addEventListener('click', startJourney);
    D.closePanel.addEventListener('click', closePanel);
    D.audioToggle.addEventListener('click', toggleAudio);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && S.panelOpen) { closePanel(); return; }
      if (S.phase !== 'mural') return;
      const step = (document.body.scrollHeight - window.innerHeight) * 0.04;
      if (e.key === 'ArrowRight') window.scrollBy({ top:  step, behavior: 'smooth' });
      if (e.key === 'ArrowLeft')  window.scrollBy({ top: -step, behavior: 'smooth' });
    });

    document.addEventListener('click', function(e) {
      if (S.panelOpen && !D.hotspotPanel.contains(e.target) && !e.target.closest('.hotspot')) closePanel();
    });

    var tx0 = 0;
    document.addEventListener('touchstart', function(e) { tx0 = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', function(e) {
      if (S.phase !== 'mural') return;
      var dx = tx0 - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) window.scrollBy({ top: dx * 3, behavior: 'smooth' });
    }, { passive: true });

    window.addEventListener('resize', debounce(function() {
      scaleMural();   // recomputes muralW, babZoomPx, panPx, #storyStage height
      drawTrack();
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();   // recomputes function-form starts/ends + offsets
        // re-pose the gear/city for the currently-active phase so resize won't desync
        if (S.st1 && S.st1.isActive)      driveBab(S.st1.progress);
        else if (S.st2 && S.st2.isActive) panUpdate(S.st2.progress);
      }
    }, 200));
  }

  function debounce(fn, ms) {
    var t;
    return function() {
      var args = arguments;
      clearTimeout(t);
      t = setTimeout(function() { fn.apply(this, args); }, ms);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
