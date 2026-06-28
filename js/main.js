/**
 * DRIVERS OF CHANGE — Main Engine v4
 * StoryMe · Pengon · 2025
 *
 * Fix: layers only become visible AFTER GSAP has set
 * their initial X position — eliminating the pink flash.
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
    // Keep entire layer container invisible until scroll engine is ready
    dom.muralLayers.style.opacity    = '0';
    dom.muralLayers.style.visibility = 'hidden';

    scaleMural();
    buildLayers();
    buildHotspots();
    setupEventListeners();
    runLoader();
  }

  // ─── LOADER ──────────────────────────────────────
  function runLoader() {
    const start      = Date.now();
    const MIN_MS     = 2600;

    function done() {
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => {
        dom.loader.classList.add('hidden');
        state.loaded = true;
      }, wait);
    }

    if (dom.muralImg.complete && dom.muralImg.naturalWidth > 0) {
      done();
    } else {
      dom.muralImg.addEventListener('load',  done, { once: true });
      dom.muralImg.addEventListener('error', done, { once: true });
    }
  }

  // ─── MURAL SCALING ───────────────────────────────
  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const scale = vh / STORY_DATA.mural.naturalHeight;

    state.muralDisplayWidth  = STORY_DATA.mural.naturalWidth * scale;
    state.muralDisplayHeight = vh;

    // Base mural image
    dom.muralImg.style.width    = state.muralDisplayWidth + 'px';
    dom.muralImg.style.height   = vh + 'px';
    dom.muralImg.style.maxWidth = 'none';
    dom.muralImg.style.display  = 'block';

    // Scroll stage height
    dom.storyStage.style.height =
      (state.muralDisplayWidth - vw + vh) + 'px';

    // Layer container
    Object.assign(dom.muralLayers.style, {
      position: 'absolute',
      top:      '0',
      left:     '0',
      width:    state.muralDisplayWidth + 'px',
      height:   vh + 'px',
    });

    // Individual layer images
    dom.muralLayers.querySelectorAll('.mural-layer').forEach(img => {
      img.style.width    = state.muralDisplayWidth + 'px';
      img.style.height   = vh + 'px';
      img.style.maxWidth = 'none';
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
      img.dataset.layerId = layer.id;

      Object.assign(img.style, {
        position:      'absolute',
        top:           '0',
        left:          '0',
        width:         state.muralDisplayWidth + 'px',
        height:        state.muralDisplayHeight + 'px',
        maxWidth:      'none',
        zIndex:        layer.zIndex || 1,
        pointerEvents: 'none',
        // Each layer starts invisible — shown only after GSAP positions it
        opacity:       '0',
      });

      dom.muralLayers.appendChild(img);
    });
  }

  // ─── SCROLL ENGINE ───────────────────────────────
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const vw      = window.innerWidth;
    const travelX = -(state.muralDisplayWidth - vw);

    // ── 1. BASE MURAL PAN ──
    gsap.to(dom.muralWrap, {
      x: travelX,
      ease: 'none',
      scrollTrigger: {
        trigger: dom.storyStage,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   true,
        onUpdate: self => {
          state.scrollProgress = self.progress;
          onScrollUpdate(self.progress);
        },
      }
    });

    // ── 2. SET ALL LAYER POSITIONS INSTANTLY (no animation yet) ──
    // This runs synchronously before we make layers visible,
    // so they appear already in the correct position — no flash.
    STORY_DATA.layers.forEach(layer => {
      const el = dom.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      const extraOffset = (travelX * layer.depth) - travelX;

      // Set initial position at scroll=0 immediately
      gsap.set(el, { x: 0 }); // at scroll 0, offset is 0

      // Then animate with scroll
      gsap.to(el, {
        x: extraOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: dom.storyStage,
          start:   'top top',
          end:     'bottom bottom',
          scrub:   true,
        }
      });

      // Float
      if (layer.type === 'float') {
        gsap.to(el, {
          y: -(8 + Math.random() * 6),
          repeat:   -1,
          yoyo:     true,
          duration: 2.5 + Math.random() * 2,
          ease:     'sine.inOut',
          delay:    Math.random() * 1.5,
        });
      }
    });

    // ── 3. NOW REVEAL LAYERS — positions are already correct ──
    // Show container
    dom.muralLayers.style.visibility = 'visible';

    // Fade in always-on layers together
    const alwaysOn = STORY_DATA.layers
      .filter(l => l.triggerAt === 0)
      .map(l => dom.muralLayers.querySelector(`[data-layer-id="${l.id}"]`))
      .filter(Boolean);

    gsap.to(alwaysOn, {
      opacity:  1,
      duration: 0.8,
      stagger:  0.05,
      ease:     'power1.out',
    });

    // ── 4. SCROLL-TRIGGERED LAYERS ──
    STORY_DATA.layers
      .filter(l => l.triggerAt > 0)
      .forEach(layer => {
        const el = dom.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
        if (!el) return;

        ScrollTrigger.create({
          trigger: dom.storyStage,
          start: () => {
            const max = document.body.scrollHeight - window.innerHeight;
            return `top+=${layer.triggerAt * max}px top`;
          },
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 1.0 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      });
  }

  // ─── SCROLL UPDATE ───────────────────────────────
  function onScrollUpdate(progress) {
    dom.progressFill.style.width = (progress * 100) + '%';
    if (progress > 0.015) dom.scrollHint.style.opacity = '0';

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
    dom.chapterDots.forEach((d, i) => {
      d.classList.toggle('active',  i === idx);
      d.classList.toggle('visited', i <  idx);
    });
    dom.chapterLabel.textContent  = ch.title;
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
      el.style.left = (hs.position.left / 100 * state.muralDisplayWidth)  + 'px';
      el.style.top  = (hs.position.top  / 100 * state.muralDisplayHeight) + 'px';
    });
  }

  function updateHotspots(p) {
    dom.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (hs) el.classList.toggle('visible', p >= hs.triggerAt);
    });
  }

  // ─── PANEL ───────────────────────────────────────
  function openPanel(hs) {
    const c   = hs.content;
    let html  = `<p class="panel-chapter">${c.chapter}</p>`;
    html     += `<h2 class="panel-title">${c.title}</h2>`;
    html     += `<div class="panel-body">${c.body.map(p=>`<p>${p}</p>`).join('')}</div>`;
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
    // Small delay to ensure landing fade is done before scroll engine starts
    setTimeout(() => initScrollEngine(), 1000);
    window.scrollTo({ top: 0 });
  }

  // ─── CHAPTER NAV ─────────────────────────────────
  function goToChapter(idx) {
    const max    = document.body.scrollHeight - window.innerHeight;
    gsap.to(window, {
      scrollTo: STORY_DATA.chapters[idx].scrollStart * max,
      duration: 1.2,
      ease:     'power2.inOut',
    });
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
