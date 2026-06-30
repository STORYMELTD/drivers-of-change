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
  // ── Bab→mural bridge (Stage C) tunables ──
  const BAB_ROLL_END     = 0.40;  // p where the gear reaches center & stops traveling
  const BAB_IDLE_SPIN    = 18;    // deg of extremely-slow idle spin over roll-end → 1
  const BAB_HIRES_AT     = 0.38;  // p to swap #babImg to hi-res, just before the zoom
  const BAB_FADE_START   = 0.90;  // p where bab crossfades out into the mural
  const BAB_WIN_OX       = 0.506; // window-origin x as fraction of the gate image (measured)
  const BAB_WIN_OY       = 0.35;  // window-origin y as fraction of the gate image (measured)
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
      document.body.style.overflow = '';   // enable native scroll for the pinned bab
      window.scrollTo(0, 0);
      var hi = new Image(); hi.src = 'assets/images/bab alamoud-hi.webp';  // preload zoom tier
      seatGearOnBab();
      initBabScroll();
    }, 900);
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

  // Option 1 rest pose: the persistent gear stays in #driverLayer (fixed) at
  // screen-center, mural rolling size (0.60), seated on the track. This is both
  // the bridge's p≥0.40 hold pose and the gear's home for the entire mural —
  // it only spins from here; it never travels.
  function restGearCenter() {
    if (!D.muralGear) return;
    var size = gearBasePx() * GEAR_MURAL_SCALE;   // 0.60
    D.muralGear.style.position = 'fixed';
    D.muralGear.style.width    = size + 'px';
    D.muralGear.style.height   = size + 'px';
    D.muralGear.style.left     = (window.innerWidth / 2 - size / 2) + 'px';
    D.muralGear.style.bottom   = Math.round(TRACK_H_PX * 0.15) + 'px';
  }

  // ══════════════════════════════════════════
  // SCREEN 3 — BAB AL-AMOUD
  // Pinned ~300vh; scrub scroll progress p drives the gate zoom, then hands off
  // to the mural in ONE continuous native scroll — no wheel accumulator, no cut.
  // (Stage B. The full gear scale/roll/rotate choreography lands in Stage C as
  //  an expansion of driveBab().)
  // ══════════════════════════════════════════
  function initBabScroll() {
    if (typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    ScrollTrigger.create({
      trigger:     D.babSection,
      start:       'top top',
      end:         function () { return '+=' + (window.innerHeight * 3); },  // ~300vh
      pin:         true,
      pinSpacing:  true,
      scrub:       true,
      onUpdate:    function (self) { driveBab(self.progress); },
      onLeave:     function () { handoffToMural(); },
    });

    ScrollTrigger.refresh();
  }

  // p (0..1) drives the whole bridge (Stage C).
  //   0     → 0.40 : gear shrinks 1.15→0.60 while rolling right to screen-center,
  //                   rotating circumference-accurately (SLOW).
  //   0.40  → 1.00 : gear holds center, idle-spins ~18°; the gate scene deep-zooms
  //                   1→10 about the window origin and crossfades into the mural.
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

    // crossfade bab out so the zoom dissolves into the mural behind it
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

  // Hand off to the mural when the bab pin completes (p=1). One-way (S.babDone).
  // No scrollTo / overflow toggling — native scroll is already live and simply
  // continues into #storyStage, whose triggers begin at progress 0. The mural
  // drive and chapter triggers are unchanged.
  // The bab gear has faded out at the gate window (nothing carried over). The
  // mural's own gear re-enters from the LEFT EDGE and rolls to center over the
  // first ~12% of mural scroll (set up in initScrollEngine), rotating fresh.
  function handoffToMural() {
    if (S.babDone) return;
    S.babDone = true;
    S.phase   = 'mural';
    D.storyNav.classList.add('visible');
    scaleMural();
    buildLayers();
    initScrollEngine();   // places the fresh gear at the left edge + entrance roll-in
    ScrollTrigger.refresh();

    // TEMP VERIFY (remove before final): bridge geometry at the live viewport
    var _o = babWindowOrigin(), _vw = window.innerWidth, _vh = window.innerHeight,
        _sz = gearBasePx() * GEAR_MURAL_SCALE, _pc = _o.x;
    console.log('[BRIDGE VERIFY] window origin px=(' + _o.x.toFixed(1) + ',' + _o.y.toFixed(1) +
      ') %=(' + (_o.x / _vw * 100).toFixed(2) + '%vw,' + (_o.y / _vh * 100).toFixed(2) + '%vh) | ' +
      'gear park left=' + (_pc - _sz / 2).toFixed(1) + 'px center=' + (_pc / _vw * 100).toFixed(2) + '%vw');
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

    D.storyStage.style.height = (S.muralW - vw + vh) + 'px';

    D.muralLayers.style.width  = S.muralW + 'px';
    D.muralLayers.style.height = vh + 'px';

    D.gearSystem.style.width  = S.muralW + 'px';
    D.gearSystem.style.height = TRACK_H_PX + 'px';

    // The persistent driver gear is posed by driveBab() during the bab bridge
    // and rests at screen-center/0.60 in the mural (Option 1). Only re-apply that
    // rest pose here when the mural is live, so a resize keeps it centered;
    // during loader/landing/bab the bridge owns the gear.
    if (S.phase === 'mural') restGearCenter();

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

    const vw          = window.innerWidth;
    const travelX     = -(S.muralW - vw);
    const totalTravel = S.muralW - vw;
    const gearSmPx    = gearBasePx() * GEAR_MURAL_SCALE;   // 0.60 rest/rolling size

    // 1. BASE MURAL PAN
    gsap.to(D.muralWrap, {
      x: travelX, ease: 'none',
      scrollTrigger: {
        trigger: D.storyStage, start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: self => { S.scrollProgress = self.progress; onScrollUpdate(self.progress); },
      }
    });

    // (Stage C fix) The bab gear faded out at the window — a FRESH gear re-enters
    // here from the LEFT EDGE and rolls to center over the first ~12% of mural
    // scroll, then holds center and only spins. No angle carry; it rolls fresh.
    const seat = Math.round(TRACK_H_PX * 0.15);
    D.muralGear.style.opacity  = '1';                 // restore (was faded at the window)
    D.muralGear.style.position = 'fixed';
    D.muralGear.style.width    = gearSmPx + 'px';
    D.muralGear.style.height   = gearSmPx + 'px';
    D.muralGear.style.bottom   = seat + 'px';
    D.muralGear.style.left     = (-gearSmPx / 2) + 'px';   // left edge, half cropped

    // ENTRANCE: roll left edge → center across the first ~12% of mural scroll.
    gsap.fromTo(D.muralGear,
      { left: -gearSmPx / 2 },
      { left: (vw / 2 - gearSmPx / 2), ease: 'none',
        scrollTrigger: {
          trigger: D.storyStage, start: 'top top',
          end: () => '+=' + (totalTravel * 0.12), scrub: true,
        }
      });

    // GEAR ROTATION: fresh from 0, circumference-accurate to the mural pan, clockwise.
    const circumference = Math.PI * gearSmPx;
    const muralDegrees  = (totalTravel / circumference) * 360;
    gsap.fromTo(D.muralGear,
      { rotation: 0 },
      { rotation: muralDegrees, ease: 'none',
        scrollTrigger: {
          trigger: D.storyStage, start: 'top top', end: 'bottom bottom', scrub: true,
        }
      });

    // 5. LAYERS — reveal container, then animate (float / sway / fade-in)
    D.muralLayers.style.visibility = 'visible';
    gsap.to(D.muralLayers, { opacity: 1, duration: 0.5, delay: 0.2 });

    STORY_DATA.layers.forEach(layer => {
      const el = D.muralLayers.querySelector('[data-layer-id="' + layer.id + '"]');
      if (!el) return;

      // No horizontal parallax. All layers are depth 1.0 (locked decision:
      // full-canvas-origin layers must move exactly with the mural or the
      // composition breaks). Layers are children of #muralWrap, so they ride
      // the base pan automatically — no per-layer x-tween needed.
      // (The old tween read layer.depth, which is undefined, producing x:NaN
      //  and corrupting the float/sway transforms on the same elements.)

      if (layer.type === 'sway') {
        gsap.to(el, { rotation: 1.5, repeat: -1, yoyo: true, duration: 3 + Math.random() * 2, ease: 'sine.inOut', delay: Math.random() * 2, transformOrigin: '50% 100%' });
      }
      if (layer.type === 'float') {
        gsap.to(el, {
          y: -(8 + Math.random() * 6), repeat: -1, yoyo: true,
          duration: 2.5 + Math.random() * 2, ease: 'sine.inOut', delay: Math.random(),
        });
      }

      // Fade in
      if (layer.triggerAt === 0) {
        gsap.to(el, { opacity: 1, duration: 0.9, delay: 0.3 });
      } else {
        ScrollTrigger.create({
          trigger: D.storyStage,
          start: () => 'top+=' + (layer.triggerAt * totalTravel) + 'px top',
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 0.9 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      }
    });

    // 6. CHAPTER BOXES: animate in/out as gear enters/exits zone
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.getElementById('cbox-' + i);
      if (!box) return;

      const enterScroll = ch.scrollStart * totalTravel;
      const exitScroll  = ch.scrollEnd   * totalTravel;
      const buf         = totalTravel * 0.015;

      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (enterScroll + buf) + 'px top',
        onEnter:     () => gsap.to(box, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }),
        onLeaveBack: () => gsap.to(box, { opacity: 0, y: 24, duration: 0.4 }),
      });
      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (exitScroll - buf) + 'px top',
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
        const max = document.body.scrollHeight - window.innerHeight;
        gsap.to(window, { scrollTo: ch.scrollStart * max, duration: 1.2, ease: 'power2.inOut' });
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
      scaleMural();
      drawTrack();
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
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
