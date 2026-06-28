/**
 * DRIVERS OF CHANGE — Main Engine
 * StoryMe · Pengon · 2025
 *
 * Layer architecture:
 * All PNGs are full canvas (15000×1900) with transparency.
 * They stack exactly like Photoshop layers.
 * Parallax = horizontal offset relative to base mural pan speed.
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
    muralTrack:     document.getElementById('muralTrack'),
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
    scaleMural();
    buildLayers();
    buildHotspots();
    setupEventListeners();
    runLoader();
  }

  // ─── LOADER ──────────────────────────────────────
  function runLoader() {
    // Mural src is already set in HTML — just wait for it to load
    if (dom.muralImg.complete) {
      finishLoader();
    } else {
      dom.muralImg.onload  = finishLoader;
      dom.muralImg.onerror = finishLoader; // proceed even on error
    }
  }

  function finishLoader() {
    setTimeout(() => {
      dom.loader.classList.add('hidden');
      state.loaded = true;
    }, 2400);
  }

  // ─── MURAL SCALING ───────────────────────────────
  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    // Scale so mural height = viewport height
    state.muralScale        = vh / STORY_DATA.mural.naturalHeight;
    state.muralDisplayWidth  = STORY_DATA.mural.naturalWidth  * state.muralScale;
    state.muralDisplayHeight = STORY_DATA.mural.naturalHeight * state.muralScale;

    // Size the base mural image
    dom.muralImg.style.height   = state.muralDisplayHeight + 'px';
    dom.muralImg.style.width    = state.muralDisplayWidth  + 'px';
    dom.muralImg.style.maxWidth = 'none';

    // Stage height = total horizontal travel + 1 viewport height
    const travelDistance = state.muralDisplayWidth - vw;
    dom.storyStage.style.height = (travelDistance + vh) + 'px';

    // Size all layer images the same way
    const layerImgs = dom.muralLayers.querySelectorAll('.mural-layer');
    layerImgs.forEach(img => {
      img.style.width    = state.muralDisplayWidth  + 'px';
      img.style.height   = state.muralDisplayHeight + 'px';
      img.style.maxWidth = 'none';
    });

    positionHotspots();
  }

  // ─── LAYERS ──────────────────────────────────────
  // All layers are full-canvas PNGs stacked over the base mural.
  // They are positioned at top:0, left:0 and sized to match the mural exactly.
  // Parallax = each layer pans at a slightly different X speed → depth illusion.

  function buildLayers() {
    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className      = 'mural-layer';
      img.src            = layer.src;
      img.alt            = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.layerId = layer.id;

      // Full canvas positioning
      img.style.position = 'absolute';
      img.style.top      = '0';
      img.style.left     = '0';
      img.style.width    = state.muralDisplayWidth  + 'px';
      img.style.height   = state.muralDisplayHeight + 'px';
      img.style.maxWidth = 'none';
      img.style.zIndex   = layer.zIndex || 1;
      img.style.pointerEvents = 'none';

      // Layers with triggerAt > 0 start invisible
      img.style.opacity  = layer.triggerAt > 0 ? '0' : '1';

      dom.muralLayers.appendChild(img);
    });
  }

  // ─── GSAP SCROLL ENGINE ───────────────────────────
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const travelX = -(state.muralDisplayWidth - window.innerWidth);

    // ── BASE MURAL PAN ──
    gsap.to(dom.muralWrap, {
      x: travelX,
      ease: 'none',
      scrollTrigger: {
        trigger: dom.storyStage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
        onUpdate: (self) => {
          state.scrollProgress = self.progress;
          onScrollUpdate(self.progress);
        },
      }
    });

    // ── PARALLAX LAYERS ──
    // Each layer moves at: travelX * depth
    // depth < 1 = moves slower than mural = appears further away
    // depth > 1 = moves faster than mural = appears closer
    STORY_DATA.layers.forEach(layer => {
      const el = dom.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      const layerTravelX = travelX * layer.depth;
      const parallaxOffset = layerTravelX - travelX; // offset relative to mural

      // Horizontal parallax
      gsap.to(el, {
        x: parallaxOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: dom.storyStage,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        }
      });

      // Float animation for organic elements
      if (layer.type === 'float') {
        gsap.to(el, {
          y: -10 - Math.random() * 8,
          repeat: -1,
          yoyo: true,
          duration: 2.5 + Math.random() * 2,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        });
      }

      // Fade-in at scroll trigger point
      if (layer.triggerAt > 0) {
        const maxScroll = () => document.body.scrollHeight - window.innerHeight;
        ScrollTrigger.create({
          trigger: dom.storyStage,
          start: () => `top+=${layer.triggerAt * maxScroll()}px top`,
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 1.0, ease: 'power2.out' }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      }
    });
  }

  function onScrollUpdate(progress) {
    dom.progressFill.style.width = (progress * 100) + '%';

    if (progress > 0.015) {
      dom.scrollHint.style.opacity = '0';
    }

    const chIdx = getChapterAtProgress(progress);
    if (chIdx !== state.currentChapter) {
      enterChapter(chIdx);
    }

    updateHotspotVisibility(progress);
  }

  // ─── CHAPTERS ────────────────────────────────────
  function getChapterAtProgress(progress) {
    for (let i = STORY_DATA.chapters.length - 1; i >= 0; i--) {
      if (progress >= STORY_DATA.chapters[i].scrollStart) return i;
    }
    return 0;
  }

  function enterChapter(index) {
    state.currentChapter = index;
    const ch = STORY_DATA.chapters[index];

    dom.chapterDots.forEach((dot, i) => {
      dot.classList.toggle('active',  i === index);
      dot.classList.toggle('visited', i <  index);
    });
    dom.chapterLabel.textContent = ch.title;

    // Show chapter overlay
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
      btn.setAttribute('aria-label', `Open: ${hs.content.title}`);
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

  function updateHotspotVisibility(progress) {
    dom.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.classList.toggle('visible', progress >= hs.triggerAt);
    });
  }

  // ─── PANEL ───────────────────────────────────────
  function openPanel(hs) {
    const c = hs.content;
    let html = `<p class="panel-chapter">${c.chapter}</p>`;
    html    += `<h2 class="panel-title">${c.title}</h2>`;
    html    += `<div class="panel-body">${c.body.map(p => `<p>${p}</p>`).join('')}</div>`;
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

  // ─── LANDING → STORY ─────────────────────────────
  function startStory() {
    if (state.storyStarted) return;
    state.storyStarted = true;
    dom.landing.classList.add('hidden');
    setTimeout(() => dom.storyNav.classList.add('visible'), 800);
    setTimeout(() => initScrollEngine(), 900);
    window.scrollTo({ top: 0 });
  }

  // ─── CHAPTER NAV CLICK ───────────────────────────
  function goToChapter(index) {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const target    = STORY_DATA.chapters[index].scrollStart * maxScroll;
    gsap.to(window, { scrollTo: target, duration: 1.2, ease: 'power2.inOut' });
  }

  // ─── EVENT LISTENERS ─────────────────────────────
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

    // Touch swipe → horizontal scroll
    let t0x = 0;
    document.addEventListener('touchstart', e => { t0x = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', e => {
      if (!state.storyStarted) return;
      const dx = t0x - e.changedTouches[0].clientX;
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

  // ─── GO ──────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
