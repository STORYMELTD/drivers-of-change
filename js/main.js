/**
 * DRIVERS OF CHANGE — Main Engine v3
 * StoryMe · Pengon · 2025
 */

(function() {
  'use strict';

  const state = {
    loaded: false,
    storyStarted: false,
    scrollProgress: 0,
    currentChapter: -1,
    panelOpen: false,
    audioEnabled: false,
    muralDisplayWidth: 0,
    muralDisplayHeight: 0,
    muralScale: 1,
  };

  const dom = {
    loader:         document.getElementById('loader'),
    landing:        document.getElementById('landing'),
    enterBtn:       document.getElementById('enterBtn'),
    audioToggle:    document.getElementById('audioToggle'),
    storyNav:       document.getElementById('storyNav'),
    storyStage:     document.getElementById('storyStage'),
    muralWrap:      document.querySelector('.mural-wrap'),
    muralImg:       document.getElementById('muralImg'),
    muralLayers:    document.getElementById('muralLayers'),
    hotspotsEl:     document.getElementById('hotspots'),
    scrollHint:     document.getElementById('scrollHint'),
    hotspotPanel:   document.getElementById('hotspotPanel'),
    panelContent:   document.getElementById('panelContent'),
    closePanel:     document.getElementById('closePanel'),
    chapterOverlay: document.getElementById('chapterOverlay'),
    overlayNumber:  document.getElementById('overlayNumber'),
    overlayTitle:   document.getElementById('overlayTitle'),
    progressFill:   document.getElementById('progressFill'),
    chapterLabel:   document.getElementById('chapterLabel'),
    chapterDots:    document.querySelectorAll('.chapter-dot'),
    ambientAudio:   document.getElementById('ambientAudio'),
    audioOn:        document.querySelector('.audio-on'),
    audioOff:       document.querySelector('.audio-off'),
  };

  // ─── INIT ────────────────────────────────────────
  function init() {
    // Hide all layers immediately — shown only after scroll engine starts
    dom.muralLayers.style.opacity = '0';

    scaleMural();
    buildLayers();
    buildHotspots();
    setupEventListeners();
    runLoader();
  }

  // ─── LOADER ──────────────────────────────────────
  function runLoader() {
    const startTime = Date.now();
    const MIN_LOADER_MS = 2600; // always show loader for at least this long

    function showLoader() {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
      setTimeout(() => {
        dom.loader.classList.add('hidden');
        state.loaded = true;
      }, remaining);
    }

    if (dom.muralImg.complete && dom.muralImg.naturalWidth > 0) {
      showLoader();
    } else {
      dom.muralImg.onload  = showLoader;
      dom.muralImg.onerror = showLoader;
    }
  }

  // ─── MURAL SCALING ───────────────────────────────
  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    state.muralScale         = vh / STORY_DATA.mural.naturalHeight;
    state.muralDisplayWidth  = STORY_DATA.mural.naturalWidth  * state.muralScale;
    state.muralDisplayHeight = vh; // always exactly viewport height

    // Base mural
    dom.muralImg.style.height   = vh + 'px';
    dom.muralImg.style.width    = state.muralDisplayWidth + 'px';
    dom.muralImg.style.maxWidth = 'none';
    dom.muralImg.style.display  = 'block';

    // Stage scroll distance
    const travel = state.muralDisplayWidth - vw;
    document.getElementById('storyStage').style.height = (travel + vh) + 'px';

    // Size layer container
    dom.muralLayers.style.position = 'absolute';
    dom.muralLayers.style.top      = '0';
    dom.muralLayers.style.left     = '0';
    dom.muralLayers.style.width    = state.muralDisplayWidth + 'px';
    dom.muralLayers.style.height   = vh + 'px';
    dom.muralLayers.style.overflow = 'visible';

    // Size individual layers
    dom.muralLayers.querySelectorAll('.mural-layer').forEach(img => {
      img.style.width    = state.muralDisplayWidth + 'px';
      img.style.height   = vh + 'px';
      img.style.maxWidth = 'none';
      img.style.position = 'absolute';
      img.style.top      = '0';
      img.style.left     = '0';
    });

    positionHotspots();
  }

  // ─── BUILD LAYERS ────────────────────────────────
  function buildLayers() {
    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className = 'mural-layer';
      img.src       = layer.src;
      img.alt       = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.layerId    = layer.id;
      img.style.position     = 'absolute';
      img.style.top          = '0';
      img.style.left         = '0';
      img.style.width        = state.muralDisplayWidth + 'px';
      img.style.height       = state.muralDisplayHeight + 'px';
      img.style.maxWidth     = 'none';
      img.style.zIndex       = layer.zIndex || 1;
      img.style.pointerEvents = 'none';
      // All layers start transparent — revealed by scroll engine
      img.style.opacity      = '0';
      dom.muralLayers.appendChild(img);
    });
  }

  // ─── SCROLL ENGINE ───────────────────────────────
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const vw     = window.innerWidth;
    const travelX = -(state.muralDisplayWidth - vw);

    // ── BASE MURAL PAN ──
    gsap.to(dom.muralWrap, {
      x: travelX,
      ease: 'none',
      scrollTrigger: {
        trigger: document.getElementById('storyStage'),
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: self => {
          state.scrollProgress = self.progress;
          onScrollUpdate(self.progress);
        },
      }
    });

    // ── REVEAL LAYERS ──
    // Now that GSAP is in control, show the layer container
    gsap.to(dom.muralLayers, {
      opacity: 1,
      duration: 0.6,
      delay: 0.2,
    });

    // Fade in all always-on layers
    STORY_DATA.layers
      .filter(l => l.triggerAt === 0)
      .forEach(l => {
        const el = dom.muralLayers.querySelector(`[data-layer-id="${l.id}"]`);
        if (el) gsap.to(el, { opacity: 1, duration: 0.8, delay: 0.3 });
      });

    // ── PARALLAX ──
    STORY_DATA.layers.forEach(layer => {
      const el = dom.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      // Parallax offset = difference between this layer's travel and base mural travel
      // depth 1.0 = moves exactly with mural (no parallax)
      // depth 0.5 = moves half as fast = appears further away
      // depth 1.2 = moves faster = appears closer
      const layerTravel  = travelX * layer.depth;
      const extraOffset  = layerTravel - travelX; // relative offset vs base

      gsap.to(el, {
        x: extraOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: document.getElementById('storyStage'),
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });

      // Float animation
      if (layer.type === 'float') {
        gsap.to(el, {
          y: -(8 + Math.random() * 6),
          repeat: -1,
          yoyo: true,
          duration: 2.5 + Math.random() * 2,
          ease: 'sine.inOut',
          delay: Math.random() * 1.5,
        });
      }

      // Scroll-triggered fade-in
      if (layer.triggerAt > 0) {
        ScrollTrigger.create({
          trigger: document.getElementById('storyStage'),
          start: () => {
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            return `top+=${layer.triggerAt * maxScroll}px top`;
          },
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 1.0 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      }
    });
  }

  // ─── SCROLL UPDATE ───────────────────────────────
  function onScrollUpdate(progress) {
    dom.progressFill.style.width = (progress * 100) + '%';

    if (progress > 0.015) {
      dom.scrollHint.style.opacity = '0';
    }

    const idx = getChapterAt(progress);
    if (idx !== state.currentChapter) enterChapter(idx);

    updateHotspots(progress);
  }

  // ─── CHAPTERS ────────────────────────────────────
  function getChapterAt(p) {
    for (let i = STORY_DATA.chapters.length - 1; i >= 0; i--) {
      if (p >= STORY_DATA.chapters[i].scrollStart) return i;
    }
    return 0;
  }

  function enterChapter(idx) {
    state.currentChapter = idx;
    const ch = STORY_DATA.chapters[idx];

    dom.chapterDots.forEach((dot, i) => {
      dot.classList.toggle('active',  i === idx);
      dot.classList.toggle('visited', i <  idx);
    });
    dom.chapterLabel.textContent = ch.title;

    dom.overlayNumber.textContent = ch.label;
    dom.overlayTitle.textContent  = ch.title;
    dom.chapterOverlay.classList.remove('show');
    void dom.chapterOverlay.offsetWidth;
    dom.chapterOverlay.classList.add('show');
  }

  // ─── HOTSPOTS ────────────────────────────────────
  function buildHotspots() {
    STORY_DATA.hotspots.forEach(hs => {
      const btn = document.createElement('button');
      btn.className = 'hotspot';
      btn.dataset.id = hs.id;
      btn.setAttribute('aria-label', hs.content.title);
      btn.innerHTML = `<span class="hotspot__ring"></span><span class="hotspot__dot"></span>`;
      btn.addEventListener('click', () => openPanel(hs));
      dom.hotspotsEl.appendChild(btn);
    });
    positionHotspots();
  }

  function positionHotspots() {
    dom.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.style.left = (hs.position.left / 100 * state.muralDisplayWidth)   + 'px';
      el.style.top  = (hs.position.top  / 100 * state.muralDisplayHeight)  + 'px';
    });
  }

  function updateHotspots(progress) {
    dom.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (hs) el.classList.toggle('visible', progress >= hs.triggerAt);
    });
  }

  // ─── PANEL ───────────────────────────────────────
  function openPanel(hs) {
    const c = hs.content;
    let html = `<p class="panel-chapter">${c.chapter}</p>`;
    html    += `<h2 class="panel-title">${c.title}</h2>`;
    html    += `<div class="panel-body">${c.body.map(p=>`<p>${p}</p>`).join('')}</div>`;
    if (c.image) html += `<div class="panel-image"><img src="${c.image}" alt="${c.title}" loading="lazy"/></div>`;
    if (c.audio) html += `<div class="panel-audio"><p class="panel-audio-label">Listen</p><audio controls src="${c.audio}" preload="none"></audio></div>`;
    dom.panelContent.innerHTML = html;
    dom.hotspotPanel.classList.add('open');
    dom.hotspotPanel.setAttribute('aria-hidden', 'false');
    state.panelOpen = true;
  }

  function closePanel() {
    dom.hotspotPanel.classList.remove('open');
    dom.hotspotPanel.setAttribute('aria-hidden', 'true');
    state.panelOpen = false;
  }

  // ─── AUDIO ───────────────────────────────────────
  function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;
    dom.audioOn.style.display  = state.audioEnabled ? 'block' : 'none';
    dom.audioOff.style.display = state.audioEnabled ? 'none'  : 'block';
    if (state.audioEnabled) {
      dom.ambientAudio.src    = STORY_DATA.audio.ambient.src;
      dom.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
      dom.ambientAudio.play().catch(() => { state.audioEnabled = false; });
    } else {
      dom.ambientAudio.pause();
    }
  }

  // ─── START STORY ─────────────────────────────────
  function startStory() {
    if (state.storyStarted) return;
    state.storyStarted = true;
    dom.landing.classList.add('hidden');
    setTimeout(() => dom.storyNav.classList.add('visible'), 800);
    setTimeout(() => initScrollEngine(), 900);
    window.scrollTo({ top: 0 });
  }

  // ─── CHAPTER NAV ─────────────────────────────────
  function goToChapter(idx) {
    const max    = document.body.scrollHeight - window.innerHeight;
    const target = STORY_DATA.chapters[idx].scrollStart * max;
    gsap.to(window, { scrollTo: target, duration: 1.2, ease: 'power2.inOut' });
  }

  // ─── EVENTS ──────────────────────────────────────
  function setupEventListeners() {
    dom.enterBtn.addEventListener('click', startStory);
    dom.audioToggle.addEventListener('click', toggleAudio);
    dom.closePanel.addEventListener('click', closePanel);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && state.panelOpen) { closePanel(); return; }
      if (!state.storyStarted) return;
      const step = (document.body.scrollHeight - window.innerHeight) * 0.05;
      if (e.key === 'ArrowRight') window.scrollBy({ top:  step, behavior: 'smooth' });
      if (e.key === 'ArrowLeft')  window.scrollBy({ top: -step, behavior: 'smooth' });
    });

    document.addEventListener('click', e => {
      if (state.panelOpen &&
          !dom.hotspotPanel.contains(e.target) &&
          !e.target.closest('.hotspot')) closePanel();
    });

    dom.chapterDots.forEach((dot, i) => {
      dot.addEventListener('click',      () => { if (state.storyStarted) goToChapter(i); });
      dot.addEventListener('mouseenter', () => { dom.chapterLabel.textContent = STORY_DATA.chapters[i]?.title || ''; });
      dot.addEventListener('mouseleave', () => { dom.chapterLabel.textContent = STORY_DATA.chapters[Math.max(0, state.currentChapter)]?.title || ''; });
    });

    let t0 = 0;
    document.addEventListener('touchstart', e => { t0 = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend',   e => {
      if (!state.storyStarted) return;
      const dx = t0 - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) window.scrollBy({ top: dx * 3, behavior: 'smooth' });
    }, { passive: true });

    window.addEventListener('resize', debounce(() => {
      scaleMural();
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 200));
  }

  function debounce(fn, ms) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
