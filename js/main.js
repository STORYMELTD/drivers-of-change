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
  const GEAR_MURAL_ENTER_SCALE = 1.15;  // phase-2: gear enters this large, shrinks to rolling (bump ~1.5 for more drama)
  const TRACK_H_PX       = 72;
  const CLOSURE_W        = 7022; // closure panorama natural width (mural-space, at MURAL_H)
  const SEAM_OVERLAP_PX  = 280;  // feathered overlap of closure's left edge onto the city (mural-space)
  // ── Bab→mural bridge tunables ──
  const BAB_ROLL_END       = 0.40;  // phase-1 p where the gear reaches the window & stops traveling
  const BAB_IDLE_SPIN      = 18;    // deg of extremely-slow idle spin over roll-end → 1
  const BAB_HIRES_AT       = 0.38;  // p to swap #babImg to hi-res, just before the zoom
  const BAB_CUT_AT         = 0.97;  // phase-1 p where the fully-zoomed gate cuts straight to the mural
  const BAB_WIN_OX         = 0.506; // window-origin x as fraction of the gate image (measured)
  const BAB_WIN_OY         = 0.35;  // window-origin y as fraction of the gate image (measured)
  const GEAR_ENTER_FRAC    = 0.12;  // phase-2: fraction of the pan over which the gear rolls in from the edge
  const GEAR_SETTLE_X_FRAC = 0.50;  // phase-2: gear settle center as a fraction of vw (single knob)
  const CREDITS_FADE_START = 0.92;  // phase-2 p2 where the closure credits overlay begins fading in (→1.0)
  const CLOSURE_GEAR_X_FRAC = 1.02; // closure rest: gear CENTER as fraction of vw — pushed hard right so ~2/3 sits off-frame (only the left arc shows)
  const NAV_DEFAULT_EXPANDED = true; // nav starts expanded (dots+labels); false = starts as the collapsed "Chapters" tab
  const MOTION_MAX_CONCURRENT = 16;  // mural idle-motion: cap simultaneously-running animations
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
    babZoomPx: 0, panPx: 0,     // phase-1 (gate) and phase-2 (full pan) scroll distances
    cityPanPx: 0,               // city-only travel (muralW - vw); chapters/layers/hotspots ride this
    closureW: 0, totalW: 0,     // closure panorama width; full panorama width (city + closure)
    st1: null, st2: null,       // the two phase ScrollTriggers (for resize re-pose)
    rotateBlocked: null,        // portrait-gate state (null = not yet evaluated)
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
    closureImg:    document.getElementById('closureImg'),
    creditsOverlay:document.getElementById('creditsOverlay'),
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
    rotateGate:    document.getElementById('rotateGate'),
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
    setupNavToggle();
    buildChapterBoxes();
    buildHotspots();
    setupEvents();
    setupRotateGate();
    setupLandingParallax();
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
      seatGearOnBab();
      buildJourney();
    }, 900);
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
    buildCullList();                   // x-ranges for viewport culling
    cullLayers(0);                     // initial pass (pan at 0)
    initScrollEngine();                // the two phase triggers + layer/chapter triggers
    ScrollTrigger.refresh();
    setupMuralMotion();                // governed idle animations on `motion` layers
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
  // The gate is a fixed overlay; the city sits behind it (left edge) from scroll 0.
  // p (0..1) over the first babZoomPx of scroll drives the gear-on-gate choreography
  // and the deep window zoom, then the gate cuts away to the mural (direct move).
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

    // drive feedback + soft whoosh once the gate zoom begins (latched in SFX)
    sfx('drive', angle);
    if (p > BAB_ROLL_END) sfx('whoosh'); else sfx('resetWhoosh');

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

    // DIRECT MOVE — the city sits at its left edge (x=0) behind the gate the whole
    // time. The gate stays fully opaque through the zoom, then cuts away at the
    // end, dropping you straight into the mural at its left edge. No slide, no fade.
    gsap.set(D.muralWrap, { x: 0 });
    D.babSection.style.opacity = p < BAB_CUT_AT ? 1 : 0;
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
    var seat    = Math.round(TRACK_H_PX * 0.15);
    var settleX = vw * GEAR_SETTLE_X_FRAC;             // settle center (single knob)

    // pan the city
    gsap.set(D.muralWrap, { x: -p2 * S.panPx });
    cullLayers(-p2 * S.panPx);            // display:none layers outside the viewport band

    // gear entrance: enters LARGE and shrinks to rolling size, while its center
    // travels left-edge (x=0) → settleX, over the first GEAR_ENTER_FRAC; then holds.
    var enter     = Math.min(p2 / GEAR_ENTER_FRAC, 1);
    var base      = gearBasePx();
    var sizeBig   = base * GEAR_MURAL_ENTER_SCALE;
    var sizeSmall = base * GEAR_MURAL_SCALE;           // 0.60 rolling size
    var size      = sizeBig + (sizeSmall - sizeBig) * enter;  // large → 0.60 over the entrance
    var cx        = enter * settleX;
    D.muralGear.style.opacity  = '1';
    D.muralGear.style.position = 'fixed';
    D.muralGear.style.width    = size + 'px';
    D.muralGear.style.height   = size + 'px';
    D.muralGear.style.bottom   = seat + 'px';          // stays bottom-seated; shrinks in place

    // spin: circumference-accurate to the pan, fresh from 0. Reference the ROLLING
    // size (constant) so the changing entrance size doesn't make rotation jump.
    var muralDegrees = (S.panPx / (Math.PI * sizeSmall)) * 360;

    // CLOSURE ease-to-stop. cityFrac is where the city ends within the FULL pan
    // (S.cityPanPx of S.panPx). For p2 in [cityFrac, 1] — the closure landscape —
    // the gear decelerates to a motionless rest hard against the right edge:
    // ease-out spin (zero angular rate at p2=1) and center x eased to
    // CLOSURE_GEAR_X_FRAC·vw (only the left arc shows). Before cityFrac it's the
    // linear roll at settle x, unchanged.
    var cityFrac = S.panPx > 0 ? S.cityPanPx / S.panPx : 1;
    var rotation;
    if (p2 <= cityFrac) {
      rotation = p2 * muralDegrees;
    } else {
      var t = (p2 - cityFrac) / (1 - cityFrac);        // 0..1 across the closure
      var k = 1 - (1 - t) * (1 - t);                   // ease-out → angular rate 0 at end
      // Δ makes angular velocity continuous at the seam (no jerk): the constant
      // city spin rate muralDegrees decays smoothly to zero across the closure.
      var delta = muralDegrees * (1 - cityFrac) / 2;
      rotation  = cityFrac * muralDegrees + delta * k;
      cx        = settleX + (vw * CLOSURE_GEAR_X_FRAC - settleX) * k;  // ease center hard right (only left arc shows)
    }
    D.muralGear.style.left = (cx - size / 2) + 'px';
    gsap.set(D.muralGear, { rotation: rotation });
    sfx('drive', rotation);   // gear hum + track roll + ticks tied to spin speed

    // Closure credits overlay — fade in over the last stretch of the full pan.
    if (D.creditsOverlay) {
      var co = (p2 - CREDITS_FADE_START) / (1 - CREDITS_FADE_START);
      D.creditsOverlay.style.opacity = Math.max(0, Math.min(1, co));
    }

    // City-story progress (0..1 over the CITY only) — feeds chapter label, hotspots
    // and lazy-load so they stay mapped to the city while the full pan extends into
    // the closure. Clamps at 1 once you pan past the city into the landscape.
    var cityProgress = S.cityPanPx > 0 ? Math.min(1, (p2 * S.panPx) / S.cityPanPx) : p2;
    S.scrollProgress = cityProgress;
    onScrollUpdate(cityProgress);
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
    buildCullList();   // left/width changed → refresh the cull ranges
  }

  // ══════════════════════════════════════════
  // LAYER CULLING — only a handful of layers are ever on-screen at once.
  // Precompute each layer's mural-space x-range (from data, no DOM reads) and
  // display:none anything outside [−margin, vw+margin]. Driven by panUpdate's
  // already-computed wrapX, so no per-tick layout reads.
  // ══════════════════════════════════════════
  var cullItems = [];
  function buildCullList() {
    cullItems = [];
    STORY_DATA.layers.forEach(function (layer) {
      var el = D.muralLayers.querySelector('[data-layer-id="' + layer.id + '"]');
      if (!el) return;
      var left  = Math.round(layer.xPct / 100 * S.muralW);
      var width = Math.round(layer.wPct / 100 * S.muralW);
      cullItems.push({ el: el, left: left, right: left + width, shown: null });
    });
  }
  function cullLayers(wrapX) {
    var vw = window.innerWidth;
    var margin = Math.max(300, vw * 0.5);
    for (var i = 0; i < cullItems.length; i++) {
      var it = cullItems[i];
      var on = (it.right + wrapX > -margin) && (it.left + wrapX < vw + margin);
      if (on !== it.shown) { it.el.style.display = on ? '' : 'none'; it.shown = on; }
    }
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

    // Closure panorama, appended to the RIGHT of the city. Its feathered left
    // SEAM_OVERLAP_PX overlaps the city's right edge so the seam crossfades.
    S.closureW  = CLOSURE_W * S.muralScale;
    var overlap = SEAM_OVERLAP_PX * S.muralScale;
    S.totalW    = S.muralW + S.closureW - overlap;   // full panorama width
    if (D.closureImg) {
      D.closureImg.style.left   = (S.muralW - overlap) + 'px';
      D.closureImg.style.width  = S.closureW + 'px';
      D.closureImg.style.height = vh + 'px';
    }
    D.muralWrap.style.width = S.totalW + 'px';

    // #storyStage owns ALL scroll: gate zoom (babZoomPx) + FULL pan (panPx) + vh.
    // S.panPx is the full pan (city + closure). City content keeps its own basis:
    // S.cityPanPx = S.muralW - vw (see initScrollEngine — do NOT swap it for panPx).
    S.babZoomPx  = vh * 3;                 // gate zoom distance
    S.cityPanPx  = S.muralW - vw;          // city-only travel (chapters/layers/hotspots ride this)
    S.panPx      = S.totalW - vw;          // full horizontal pan (into the closure)
    D.storyStage.style.height = (S.babZoomPx + S.panPx + vh) + 'px';

    D.muralLayers.style.width  = S.muralW + 'px';
    D.muralLayers.style.height = vh + 'px';

    // Track spans the FULL panorama (city + closure) so the gear always has rail
    // beneath it — the dented track must not stop at the city edge.
    D.gearSystem.style.width  = S.totalW + 'px';
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

    // Tile across the FULL panorama (city + closure), not just the city, so the
    // gear rolls on rail the whole way. (S.totalW is set by scaleMural; fall back
    // to muralW if drawTrack fires from the image onload before the first size.)
    const trackW     = S.totalW || S.muralW;
    const tileH      = S.trackImgEl.naturalHeight;
    const tileW      = S.trackImgEl.naturalWidth;
    const trackH     = TRACK_H_PX;
    const tileScale  = trackH / tileH;              // uniform scale to track height (never squeezed)
    const scaledTileW = tileW * tileScale;

    D.trackCanvas.width        = trackW;
    D.trackCanvas.height       = trackH;
    D.trackCanvas.style.width  = trackW + 'px';
    D.trackCanvas.style.height = trackH + 'px';

    const ctx = D.trackCanvas.getContext('2d');
    ctx.clearRect(0, 0, trackW, trackH);
    // last tile overruns and clips at the canvas edge — tiled, never stretched
    for (let x = 0; x < trackW; x += scaledTileW) {
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

      // Idle motion is governed centrally (see setupMuralMotion): only layers with
      // a `motion` field animate, gated by IntersectionObserver + a concurrency cap,
      // and fully disabled under prefers-reduced-motion / on mobile.

      // Fade in — offset by babZoomPx (past the gate zoom) and mapped on the CITY
      // travel (S.cityPanPx), NOT the full pan, so it fires at the same city spot
      // even though the pan now extends into the closure.
      if (layer.triggerAt === 0) {
        gsap.to(el, { opacity: 1, duration: 0.9, delay: 0.3 });
      } else {
        ScrollTrigger.create({
          trigger: D.storyStage,
          start: () => 'top+=' + (S.babZoomPx + layer.triggerAt * S.cityPanPx) + 'px top',
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

      // City basis (S.cityPanPx), NOT the full pan — chapters fire at the same spots.
      const buf = S.cityPanPx * 0.015;

      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (S.babZoomPx + ch.scrollStart * S.cityPanPx + buf) + 'px top',
        onEnter:     () => { sfx('chime'); gsap.to(box, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }); },
        onLeaveBack: () => gsap.to(box, { opacity: 0, y: 24, duration: 0.4 }),
      });
      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => 'top+=' + (S.babZoomPx + ch.scrollEnd * S.cityPanPx - buf) + 'px top',
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
    lazyLoadLayers(progress);
  }

  // JS-driven lazy load: assign src once the pan progress comes within loadAhead
  // of a layer's trigger, preloading the next chapter ahead of its fade-in.
  // Guard on data-loaded (not img.src): img.src resolves to an absolute URL and
  // never compares equal to the relative data-src, which would re-assign every
  // scroll frame. Called from onScrollUpdate; one pass loads everything up to the
  // current progress, so nav jumps to a later chapter still backfill correctly.
  function lazyLoadLayers(progress) {
    var loadAhead = 0.15;
    D.muralLayers.querySelectorAll('.mural-layer').forEach(function(img) {
      if (img.dataset.loaded) return;
      var trigger = parseFloat(img.dataset.trigger || 0);
      if (progress >= (trigger - loadAhead)) {
        img.src = img.dataset.src;
        img.dataset.loaded = '1';
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
    // Right of the nav: "Chapter N · Title — subtitle" (subtitle placeholder until filled).
    var label = ch.label + ' · ' + ch.title;
    if (ch.sections && ch.sections.length) label += ' — ' + chapterSubtitle(ch);
    D.chapterLabel.textContent = label;
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
        sfx('click');
        // target lands in the pan region (past the gate zoom), on the CITY basis
        const target = S.babZoomPx + ch.scrollStart * S.cityPanPx;
        gsap.to(window, { scrollTo: target, duration: 1.2, ease: 'power2.inOut' });
      });
      D.navDots.appendChild(dot);
    });
  }

  // Nav expand/collapse: expanded = slim dots+labels bar; collapsed = "Chapters" tab.
  function setupNavToggle() {
    D.storyNav.classList.toggle('collapsed', !NAV_DEFAULT_EXPANDED);
    var collapse = document.getElementById('navCollapse');
    var expand   = document.getElementById('navExpand');
    if (collapse) collapse.addEventListener('click', function () { sfx('click'); D.storyNav.classList.add('collapsed'); });
    if (expand)   expand.addEventListener('click', function () { sfx('click'); D.storyNav.classList.remove('collapsed'); });
  }

  function buildLayers() {
    console.log("muralW:", S.muralW, "muralH:", S.muralH);
    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className           = 'mural-layer';
      // JS-driven lazy load (see lazyLoadLayers). Native loading="lazy" NEVER
      // fires for layers brought on-screen by the mural's horizontal TRANSFORM
      // (the page scroll is vertical), so off-canvas layers like DoC_145 stayed
      // blank forever. We own loading: stash the URL in data-src and assign src
      // as the pan nears each layer's trigger. Always-visible base layers
      // (triggerAt 0) load eagerly right here.
      img.dataset.src         = layer.src;
      if (!layer.triggerAt) { img.src = layer.src; img.dataset.loaded = '1'; }
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

  // ══════════════════════════════════════════
  // MURAL IDLE MOTION — transform-only catalog, governed
  // Only layers with a `motion` field animate; each gated by IntersectionObserver
  // (on-screen only), capped by MOTION_MAX_CONCURRENT, and disabled under
  // prefers-reduced-motion / on mobile. Phase randomized so nothing syncs.
  // ══════════════════════════════════════════
  var motionActive = 0;                     // concurrency counter
  function mrand(a, b) { return a + Math.random() * (b - a); }

  function buildMotion(el, motion) {
    var ph = Math.random();                 // randomized phase (delay)
    switch (motion) {
      case 'sway':                          // trees / cypress / bushes — pivot at base
        gsap.set(el, { transformOrigin: '50% 100%' });
        return gsap.to(el, { rotation: mrand(1.1, 2.0), duration: mrand(3, 5), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2.5 });
      case 'sway-hang':                     // hanging planters — pendulum from the top
        gsap.set(el, { transformOrigin: '50% 0%' });
        return gsap.to(el, { rotation: mrand(2.4, 3.8), duration: mrand(2.4, 3.6), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2.5 });
      case 'float':                         // hedges — gentle vertical bob
        return gsap.to(el, { y: -mrand(6, 12), duration: mrand(2.6, 4), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2 });
      case 'grow':                          // grass — scaleY pulse from the base
        gsap.set(el, { transformOrigin: '50% 100%' });
        return gsap.to(el, { scaleY: mrand(1.04, 1.09), duration: mrand(2.6, 4), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2 });
      case 'drift':                         // debris/bags/clouds — translate + slow scale/skew
        gsap.set(el, { transformOrigin: '50% 100%' });
        return gsap.to(el, { x: mrand(6, 14), y: -mrand(3, 7), scale: mrand(1.03, 1.07), skewX: mrand(1, 3), duration: mrand(4, 7), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 3 });
      case 'flow':                          // water — horizontal shear/scroll (catalog; no water layer yet)
        return gsap.to(el, { skewX: mrand(2, 4), x: mrand(3, 7), duration: mrand(3, 5), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2 });
      case 'ripple':                        // splash/ripple — scale pulse (catalog; no water layer yet)
        return gsap.to(el, { scale: mrand(1.03, 1.06), duration: mrand(1.6, 2.6), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2 });
      case 'fly': {                         // bird — path drift + bob + tilt
        var tf = gsap.timeline({ delay: ph * 2 });
        tf.to(el, { x: mrand(18, 34), duration: mrand(3.5, 5), repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
        tf.to(el, { y: -mrand(8, 16), duration: mrand(0.9, 1.5), repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
        tf.to(el, { rotation: mrand(-4, 4), duration: mrand(1.2, 2), repeat: -1, yoyo: true, ease: 'sine.inOut' }, 0);
        return tf;
      }
      case 'peck': {                        // ground bird — dip to the seeds on an interval
        gsap.set(el, { transformOrigin: '50% 100%' });
        var tp = gsap.timeline({ repeat: -1, repeatDelay: mrand(1.2, 2.6), delay: ph * 2 });
        tp.to(el, { y: mrand(4, 8), rotation: mrand(8, 14), duration: 0.32, ease: 'power2.in' })
          .to(el, { y: 0, rotation: 0, duration: 0.5, ease: 'power2.out' });
        return tp;
      }
      default:                             // unclear object → gentle default sway
        gsap.set(el, { transformOrigin: '50% 100%' });
        return gsap.to(el, { rotation: 1.3, duration: mrand(3, 5), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: ph * 2.5 });
    }
  }

  function startMotion(el, motion) {
    if (el._motionTween || motionActive >= MOTION_MAX_CONCURRENT) return;
    el._motionTween = buildMotion(el, motion);
    if (el._motionTween) {
      motionActive++;
      el.style.willChange = 'transform';   // promote only while actively animating
    }
  }
  function stopMotion(el) {
    if (!el._motionTween) return;
    el._motionTween.kill();
    el._motionTween = null;
    motionActive--;
    el.style.willChange = 'auto';          // release the promotion (don't reserve memory)
    gsap.set(el, { clearProps: 'transform' });   // reset pose; opacity/lazy-load untouched
  }

  function setupMuralMotion() {
    if (typeof IntersectionObserver === 'undefined' || typeof gsap === 'undefined') return;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile  = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(max-width: 900px)').matches;
    if (reduced || mobile) return;         // governance: off for reduced-motion & mobile

    var byId = {};
    STORY_DATA.layers.forEach(function (l) { if (l.motion) byId[l.id] = l.motion; });
    var els = [].slice.call(D.muralLayers.querySelectorAll('.mural-layer'))
                .filter(function (el) { return byId[el.dataset.layerId]; });
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) startMotion(e.target, byId[e.target.dataset.layerId]);
        else stopMotion(e.target);
      });
    }, { root: null, rootMargin: '0px', threshold: 0 });
    els.forEach(function (el) { io.observe(el); });   // only on-screen layers animate
  }

  // ══════════════════════════════════════════
  // LANDING SKYLINE PARALLAX — pointer-driven depth (eased, GPU transforms)
  // ══════════════════════════════════════════
  function setupLandingParallax() {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var mobile  = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(max-width: 900px)').matches;
    if (reduced || mobile) return;
    var bg  = document.querySelector('.landing__bg');
    var sky = document.querySelector('.landing__quds');
    if (!bg || !sky) return;

    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    function tick() {
      cx += (tx - cx) * 0.08;              // ease toward pointer target
      cy += (ty - cy) * 0.08;
      bg.style.transform  = 'translate3d(' + (cx * -8)  + 'px,' + (cy * -5)  + 'px,0) scale(1.06)'; // far plane
      sky.style.transform = 'translate3d(' + (cx * -22) + 'px,' + (cy * -10) + 'px,0)';             // skyline, nearer
      raf = (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) ? requestAnimationFrame(tick) : null;
    }
    window.addEventListener('pointermove', function (e) {
      if (S.phase !== 'landing') return;   // only on the title screen
      tx = (e.clientX / window.innerWidth  - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
  }

  // #333 at 90% for header/subtitle; per-chapter fill at 90% for the body.
  function hexToRgba(hex, a) {
    const h = (hex || '#333333').replace('#', '');
    const r = parseInt(h.substr(0, 2), 16);
    const g = parseInt(h.substr(2, 2), 16);
    const b = parseInt(h.substr(4, 2), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  // Missing subtitle / section titles fall back to bracketed placeholders (source
  // content has none — TODO in story-data.js). We don't invent copy here.
  function chapterSubtitle(ch) {
    return (ch.subtitle && ch.subtitle.trim()) ? ch.subtitle : '[subtitle]';
  }
  function sectionTitle(sec, i) {
    return (sec.title && sec.title.trim()) ? sec.title : '[section title ' + (i + 1) + ']';
  }
  // Render a paragraph list (string or array) as <p> blocks for intro / row bodies.
  function paras(body) {
    var arr = Array.isArray(body) ? body : [body];
    return arr.map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  function buildChapterBoxes() {
    STORY_DATA.chapters.forEach((ch, i) => {
      // Only the 5 content chapters (those with `sections`) get boxes — the
      // prologue has none and is intentionally not drawn as a box.
      if (!ch.sections || !ch.sections.length) return;

      const box = document.createElement('div');
      box.className  = 'chapter-box';
      box.id         = 'cbox-' + i;              // index matches the scroll triggers
      box.dataset.chapterIndex = i;
      box.style.opacity   = '0';
      box.style.transform = 'translateY(24px)';

      // Accordion rows from story-data sections. One open at a time; the panel
      // scrolls internally (max-height + overflow-y). Rows default to first open.
      const rows = ch.sections.map(function (sec, si) {
        const open = false;                     // all rows collapsed on load
        var full = sectionTitle(sec, si);       // "N.N Title"
        var mm  = full.match(/^(\d+\.\d+)\s+([\s\S]*)$/);
        var num = mm ? mm[1] : '';
        var ttl = mm ? mm[2] : full;
        return (
          '<div class="cbox-row' + (open ? ' open' : '') + '">' +
            '<button class="cbox-row__header" aria-expanded="' + open + '">' +
              '<span class="cbox-row__toggle" aria-hidden="true">' + (open ? '−' : '+') + '</span>' +
              (num ? '<span class="cbox-row__num">' + num + '</span>' : '') +
              '<span class="cbox-row__title">' + ttl + '</span>' +
            '</button>' +
            '<div class="cbox-row__panel">' +
              '<div class="cbox-row__panel-inner">' + paras(sec.body) + '</div>' +
            '</div>' +
          '</div>'
        );
      }).join('');

      box.innerHTML =
        '<div class="chapter-box__header">' +
          '<div class="chapter-box__heading">' +
            '<h2 class="chapter-box__title">' + ch.id + '. ' + ch.title + '</h2>' +
          '</div>' +
          '<button class="chapter-box__close" aria-label="Close">' +
            '<img src="assets/images/X.svg" alt="Close"/>' +
          '</button>' +
        '</div>' +
        '<p class="chapter-box__subtitle">' + chapterSubtitle(ch) + '</p>' +
        '<div class="chapter-box__body">' +
          (ch.intro && ch.intro.length ? '<div class="chapter-box__intro">' + paras(ch.intro) + '</div>' : '') +
          rows +
        '</div>';

      // per-chapter body fill at 90%
      box.querySelector('.chapter-box__body').style.background = hexToRgba(ch.color, 0.9);

      box.querySelector('.chapter-box__close').addEventListener('click', function (e) {
        e.stopPropagation();
        sfx('click');
        gsap.to(box, { opacity: 0, y: -20, duration: 0.4 });
      });

      // Accordion toggling — one row open at a time.
      box.querySelectorAll('.cbox-row').forEach(function (row) {
        row.querySelector('.cbox-row__header').addEventListener('click', function () {
          sfx('click');
          const isOpen = row.classList.contains('open');
          box.querySelectorAll('.cbox-row').forEach(function (r) {
            r.classList.remove('open');
            r.querySelector('.cbox-row__header').setAttribute('aria-expanded', 'false');
            r.querySelector('.cbox-row__toggle').textContent = '+';
          });
          if (!isOpen) {
            row.classList.add('open');
            row.querySelector('.cbox-row__header').setAttribute('aria-expanded', 'true');
            row.querySelector('.cbox-row__toggle').textContent = '−';
          }
        });
      });

      D.chaptersEl.appendChild(box);
    });
    positionChapterBoxes();
  }

  function positionChapterBoxes() {
    if (!S.muralW) return;
    document.querySelectorAll('.chapter-box').forEach(function(box) {
      const ch = STORY_DATA.chapters[+box.dataset.chapterIndex];
      if (!ch) return;
      // Distribute along the city by pan x-center (fraction of the mural), centering
      // the box on that point. Rides #muralWrap; the +babZoomPx fade offset is set
      // separately in initScrollEngine (unchanged).
      const cx = (ch.xCenterPct / 100) * S.muralW;
      box.style.left = Math.round(cx - (box.offsetWidth || 340) / 2) + 'px';
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
    sfx('pop');
    D.hotspotPanel.classList.add('open');
    D.hotspotPanel.setAttribute('aria-hidden', 'false');
    S.panelOpen = true;
  }

  function closePanel() {
    D.hotspotPanel.classList.remove('open');
    D.hotspotPanel.setAttribute('aria-hidden', 'true');
    S.panelOpen = false;
  }

  // Fire a procedural SFX by name — no-op if audio.js is absent (guarded internally by mute).
  function sfx(name, arg) { if (typeof SFX !== 'undefined' && SFX[name]) SFX[name](arg); }

  // Single opt-in toggle for ALL sound — ambient music (<audio>) + procedural SFX.
  // Default muted; the click is a user gesture, so the AudioContext can start here.
  function toggleAudio() {
    S.audioEnabled = !S.audioEnabled;
    D.audioToggle.querySelector('.ico-on').style.display  = S.audioEnabled ? 'block' : 'none';
    D.audioToggle.querySelector('.ico-off').style.display = S.audioEnabled ? 'none'  : 'block';
    if (typeof SFX !== 'undefined') SFX.init();   // create/resume ctx on this gesture

    if (S.audioEnabled) {
      if (!D.ambientAudio.src) D.ambientAudio.src = STORY_DATA.audio.ambient.src;
      D.ambientAudio.loop   = true;
      D.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
      D.ambientAudio.play().catch(function() { S.audioEnabled = false; });
    } else {
      D.ambientAudio.pause();
    }
    if (typeof SFX !== 'undefined') SFX.setEnabled(S.audioEnabled);
  }

  function setupEvents() {
    D.driveBtn.addEventListener('click', startJourney);
    D.closePanel.addEventListener('click', closePanel);
    D.audioToggle.addEventListener('click', toggleAudio);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && S.panelOpen) { closePanel(); return; }
      if (S.phase !== 'mural' || S.rotateBlocked) return;
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
      if (S.phase !== 'mural' || S.rotateBlocked) return;
      var dx = tx0 - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) window.scrollBy({ top: dx * 3, behavior: 'smooth' });
    }, { passive: true });

    window.addEventListener('resize', debounce(function() {
      var wasBlocked = S.rotateBlocked;
      updateRotateGate();          // may flip the gate + relayout on unblock
      if (S.rotateBlocked) return; // portrait: engine frozen, skip layout math
      if (wasBlocked) return;      // unblock transition already relayout()ed
      relayout();
    }, 200));
  }

  // Recompute all vw/vh-dependent layout and re-pose the active phase. Shared by
  // resize and the portrait-gate unblock (entering landscape).
  function relayout() {
    scaleMural();   // recomputes muralW, babZoomPx, panPx, #storyStage height
    drawTrack();
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();   // recomputes function-form starts/ends + offsets
      // re-pose the gear/city for the currently-active phase so resize won't desync
      if (S.st1 && S.st1.isActive)      driveBab(S.st1.progress);
      else if (S.st2 && S.st2.isActive) panUpdate(S.st2.progress);
    }
  }

  // ══════════════════════════════════════════
  // MOBILE PORTRAIT GATE — rotate to landscape
  // Blocks the experience on a small/touch screen held in portrait, where the
  // landscape-first vw/vh math + ScrollTrigger scrub would be broken. No CSS
  // rotate on the container (that desyncs pin/scrub) — we prompt for a real
  // physical rotation and recompute layout when the viewport becomes landscape.
  // ══════════════════════════════════════════
  var mqSmall  = window.matchMedia('(orientation: portrait) and (max-width: 900px)');
  var mqCoarse = window.matchMedia('(orientation: portrait) and (pointer: coarse)');
  function shouldBlockRotate() { return mqSmall.matches || mqCoarse.matches; }

  function updateRotateGate() {
    var block = shouldBlockRotate();
    if (block === S.rotateBlocked) return;   // no change
    var wasBlocked = S.rotateBlocked;
    S.rotateBlocked = block;

    if (block) {
      D.rotateGate.classList.add('visible');
      D.rotateGate.setAttribute('aria-hidden', 'false');
      document.body.classList.add('rotate-locked');   // freeze the scrub
    } else {
      D.rotateGate.classList.remove('visible');
      D.rotateGate.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('rotate-locked');
      // Only a real blocked→landscape transition needs a relayout (a first
      // load already in landscape starts from null, not true).
      if (wasBlocked === true) relayout();
    }
  }

  function setupRotateGate() {
    updateRotateGate();  // set initial state

    var onChange = function() { updateRotateGate(); };
    // Modern browsers: MediaQueryList.addEventListener; old Safari: addListener.
    [mqSmall, mqCoarse].forEach(function(mq) {
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    });
    window.addEventListener('orientationchange', onChange);

    // Android-only best effort: on a tap while gated, request fullscreen and
    // lock to landscape. iOS lacks these APIs and silently falls back to the
    // visual prompt. Kept inside try/catch — a rejected promise is harmless.
    D.rotateGate.addEventListener('click', function() {
      if (!S.rotateBlocked) return;
      try {
        var el = document.documentElement;
        if (el.requestFullscreen) el.requestFullscreen();
        if (screen.orientation && screen.orientation.lock) {
          var p = screen.orientation.lock('landscape');
          if (p && p.catch) p.catch(function() {});
        }
      } catch (e) { /* iOS / unsupported — prompt handles it */ }
    });
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
