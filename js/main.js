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
      initBabScroll();
    }, 900);
  }

  // ══════════════════════════════════════════
  // SCREEN 3 — BAB AL-AMOUD
  // Scroll → zoom into top-center gate window
  // ══════════════════════════════════════════
  function initBabScroll() {
    let prog = 0;

    function onWheel(e) {
      if (S.phase !== 'bab' || S.babDone) return;
      e.preventDefault();
      prog = Math.max(0, Math.min(1, prog + (e.deltaY > 0 ? 0.008 : -0.008)));
      applyBabZoom(prog);
      if (prog >= 1) enterMural();
    }

    let touchY0 = 0;
    function onTouchStart(e) { touchY0 = e.touches[0].clientY; }
    function onTouchMove(e) {
      if (S.phase !== 'bab' || S.babDone) return;
      e.preventDefault();
      const dy = touchY0 - e.touches[0].clientY;
      touchY0  = e.touches[0].clientY;
      prog = Math.max(0, Math.min(1, prog + dy * 0.004));
      applyBabZoom(prog);
      if (prog >= 1) enterMural();
    }

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });

    D.babSection.addEventListener('click', () => {
      if (S.babDone) return;
      gsap.to({ p: prog }, {
        p: 1, duration: 1.6, ease: 'power2.inOut',
        onUpdate: function() { applyBabZoom(this.targets()[0].p); },
        onComplete: enterMural,
      });
    }, { once: true });
  }

  function applyBabZoom(progress) {
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    D.babImg.style.transform = 'scale(' + (1 + eased * 9) + ')';
  }

  function enterMural() {
    if (S.babDone) return;
    S.babDone = true;
    S.phase   = 'mural';
    gsap.to(D.babSection, {
      opacity: 0, duration: 0.8,
      onComplete: () => {
        D.babSection.classList.remove('visible');
        D.babSection.classList.add('out');
      }
    });
    setTimeout(() => {
      D.storyNav.classList.add('visible');
      document.body.style.overflow = '';
      window.scrollTo({ top: 0 });
      scaleMural();
      buildLayers();
      initScrollEngine();
      ScrollTrigger.refresh();
    }, 600);
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

    const gearBasePx  = GEAR_FULL_PX * S.muralScale * 2;
    const gearPx      = gearBasePx * GEAR_INTRO_SCALE;   // initial state, +15% larger
    const gearSmallPx = gearBasePx * GEAR_MURAL_SCALE;   // rolling state (unchanged → track stays aligned)
    D.muralGear.style.width    = gearPx + 'px';
    D.muralGear.style.height   = gearPx + 'px';
    D.muralGear.style.bottom   = (TRACK_H_PX * 0.2) + 'px';
    D.muralGear.style.left     = '0px';
    D.muralGear.dataset.fullPx  = gearPx;
    D.muralGear.dataset.smallPx = gearSmallPx;

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

    const vw       = window.innerWidth;
    const travelX  = -(S.muralW - vw);
    const gearPx   = parseFloat(D.muralGear.dataset.fullPx);
    const gearSmPx = parseFloat(D.muralGear.dataset.smallPx);
    const totalTravel = S.muralW - vw;

    // 1. BASE MURAL PAN
    gsap.to(D.muralWrap, {
      x: travelX, ease: 'none',
      scrollTrigger: {
        trigger: D.storyStage, start: 'top top', end: 'bottom bottom', scrub: true,
        onUpdate: self => { S.scrollProgress = self.progress; onScrollUpdate(self.progress); },
      }
    });

    // 2. GEAR SCALE: intro size → rolling size, eased gently over the first ~16% of travel
    gsap.to(D.muralGear, {
      width: gearSmPx, height: gearSmPx,
      bottom: (TRACK_H_PX * 0.15) + 'px',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: D.storyStage, start: 'top top',
        end: () => '+=' + (totalTravel * 0.16),
        scrub: true,
      }
    });

    // 3. GEAR POSITION: rolls left along track
    ScrollTrigger.create({
      trigger: D.storyStage, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: self => {
        D.muralGear.style.left = (self.progress * totalTravel) + 'px';
      }
    });

    // 4. GEAR ROTATION: circumference-accurate clockwise
    const circumference  = Math.PI * gearSmPx;
    const totalDegrees   = (totalTravel / circumference) * 360;
    gsap.to(D.muralGear, {
      rotation: totalDegrees, ease: 'none',
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
