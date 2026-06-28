/**
 * DRIVERS OF CHANGE — Main Engine
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
    activeHotspot: null,
    audioEnabled: false,
    muralScale: 1,
    muralDisplayWidth: 0,
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
    setupHotspots();
    setupLayers();
    setupEventListeners();
    runLoader();
  }

  // ─── LOADER ──────────────────────────────────────
  function runLoader() {
    // Try loading the real mural; fall back to placeholder
    const img = new Image();

    img.onload = () => {
      dom.muralImg.src = STORY_DATA.mural.src;
      finishLoader();
    };
    img.onerror = () => {
      // Use placeholder
      dom.muralImg.src = STORY_DATA.mural.srcFallback;
      finishLoader();
    };
    img.src = STORY_DATA.mural.src;
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
    state.muralScale = vh / STORY_DATA.mural.naturalHeight;
    state.muralDisplayWidth = STORY_DATA.mural.naturalWidth * state.muralScale;

    dom.muralImg.style.height = vh + 'px';
    dom.muralImg.style.width = 'auto';
    dom.muralImg.style.maxWidth = 'none';

    // Stage height determines total scroll distance
    const scrollDistance = state.muralDisplayWidth - window.innerWidth;
    dom.storyStage.style.height = (scrollDistance + vh) + 'px';

    positionHotspots();
  }

  // ─── GSAP SCROLL ENGINE ───────────────────────────
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Horizontal pan
    gsap.to(dom.muralWrap, {
      x: () => -(state.muralDisplayWidth - window.innerWidth),
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

    // Parallax layers
    initParallax();
  }

  function onScrollUpdate(progress) {
    // Progress bar
    dom.progressFill.style.width = (progress * 100) + '%';

    // Hide scroll hint after first scroll
    if (progress > 0.02) {
      dom.scrollHint.style.opacity = '0';
    }

    // Chapter detection
    const chapterIndex = getChapterAtProgress(progress);
    if (chapterIndex !== state.currentChapter) {
      enterChapter(chapterIndex);
    }

    // Hotspot visibility
    updateHotspotVisibility(progress);
  }

  // ─── CHAPTER SYSTEM ──────────────────────────────
  function getChapterAtProgress(progress) {
    for (let i = STORY_DATA.chapters.length - 1; i >= 0; i--) {
      if (progress >= STORY_DATA.chapters[i].scrollStart) return i;
    }
    return 0;
  }

  function enterChapter(index) {
    state.currentChapter = index;
    const chapter = STORY_DATA.chapters[index];

    // Update nav dots
    dom.chapterDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.classList.toggle('visited', i < index);
    });

    dom.chapterLabel.textContent = chapter.title;

    // Show chapter title overlay
    showChapterOverlay(chapter);
  }

  function showChapterOverlay(chapter) {
    dom.overlayNumber.textContent = chapter.label;
    dom.overlayTitle.textContent = chapter.title;
    dom.chapterOverlay.classList.remove('show');
    void dom.chapterOverlay.offsetWidth; // reflow
    dom.chapterOverlay.classList.add('show');
  }

  // ─── HOTSPOT SYSTEM ──────────────────────────────
  function setupHotspots() {
    STORY_DATA.hotspots.forEach(hs => {
      const el = document.createElement('button');
      el.className = 'hotspot';
      el.dataset.id = hs.id;
      el.setAttribute('aria-label', `Open: ${hs.content.title}`);
      el.innerHTML = `<span class="hotspot__ring"></span><span class="hotspot__dot"></span>`;
      el.addEventListener('click', () => openPanel(hs));
      dom.hotspotsEl.appendChild(el);
    });
    positionHotspots();
  }

  function positionHotspots() {
    const els = dom.hotspotsEl.querySelectorAll('.hotspot');
    els.forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.style.left = ((hs.position.left / 100) * state.muralDisplayWidth) + 'px';
      el.style.top  = ((hs.position.top  / 100) * window.innerHeight) + 'px';
    });
  }

  function updateHotspotVisibility(progress) {
    const els = dom.hotspotsEl.querySelectorAll('.hotspot');
    els.forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.classList.toggle('visible', progress >= hs.triggerAt);
    });
  }

  // ─── PANEL ───────────────────────────────────────
  function openPanel(hotspot) {
    const c = hotspot.content;
    let html = `<p class="panel-chapter">${c.chapter}</p>`;
    html += `<h2 class="panel-title">${c.title}</h2>`;
    html += `<div class="panel-body">`;
    c.body.forEach(p => { html += `<p>${p}</p>`; });
    html += `</div>`;
    if (c.image) {
      html += `<div class="panel-image"><img src="${c.image}" alt="${c.title}" loading="lazy"/></div>`;
    }
    if (c.audio) {
      html += `<div class="panel-audio"><p class="panel-audio-label">Listen</p><audio controls src="${c.audio}" preload="none"></audio></div>`;
    }
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

  // ─── LAYERS ──────────────────────────────────────
  function setupLayers() {
    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className = 'mural-layer';
      img.src = layer.src;
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.layerId = layer.id;
      img.style.zIndex = layer.zIndex || 1;
      // Initially hide layers that trigger later
      if (layer.triggerAt > 0) img.style.opacity = '0';
      dom.muralLayers.appendChild(img);
    });
  }

  function initParallax() {
    STORY_DATA.layers.forEach(layer => {
      const el = dom.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      const maxX = -(state.muralDisplayWidth - window.innerWidth);

      if (layer.type === 'parallax') {
        // Parallax: moves slower or faster than base mural
        gsap.to(el, {
          x: maxX * layer.depth,
          ease: 'none',
          scrollTrigger: {
            trigger: dom.storyStage,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          }
        });
      }

      if (layer.type === 'float') {
        // Float: parallax + gentle vertical oscillation
        gsap.to(el, {
          x: maxX * layer.depth,
          ease: 'none',
          scrollTrigger: {
            trigger: dom.storyStage,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          }
        });
        // Gentle float animation
        gsap.to(el, {
          y: -12,
          repeat: -1,
          yoyo: true,
          duration: 3 + Math.random() * 2,
          ease: 'sine.inOut',
        });
      }

      if (layer.type === 'fade-in') {
        // Fade in at triggerAt scroll position
        gsap.to(el, {
          x: maxX * layer.depth,
          ease: 'none',
          scrollTrigger: {
            trigger: dom.storyStage,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
          }
        });
      }

      // Trigger-based fade in for layers that appear mid-journey
      if (layer.triggerAt > 0) {
        ScrollTrigger.create({
          trigger: dom.storyStage,
          start: () => `top+=${layer.triggerAt * (document.body.scrollHeight - window.innerHeight)}px top`,
          onEnter: () => gsap.to(el, { opacity: 1, duration: 0.8 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.4 }),
        });
      }
    });
  }

  // ─── AUDIO ───────────────────────────────────────
  function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;
    dom.audioOn.style.display  = state.audioEnabled ? 'block' : 'none';
    dom.audioOff.style.display = state.audioEnabled ? 'none'  : 'block';

    if (state.audioEnabled && STORY_DATA.audio.ambient.src) {
      dom.ambientAudio.src = STORY_DATA.audio.ambient.src;
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
    setTimeout(() => {
      dom.storyNav.classList.add('visible');
    }, 800);
    setTimeout(() => {
      initScrollEngine();
    }, 900);
    window.scrollTo({ top: 0 });
  }

  // ─── CHAPTER NAV ─────────────────────────────────
  function navigateToChapter(index) {
    const chapter = STORY_DATA.chapters[index];
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    gsap.to(window, {
      scrollTo: chapter.scrollStart * maxScroll,
      duration: 1.2,
      ease: 'power2.inOut',
    });
  }

  // ─── EVENTS ──────────────────────────────────────
  function setupEventListeners() {
    dom.enterBtn.addEventListener('click', startStory);
    dom.audioToggle.addEventListener('click', toggleAudio);
    dom.closePanel.addEventListener('click', closePanel);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.panelOpen) closePanel();
      if (!state.storyStarted) return;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (e.key === 'ArrowRight') window.scrollBy({ top:  maxScroll * 0.05, behavior: 'smooth' });
      if (e.key === 'ArrowLeft')  window.scrollBy({ top: -maxScroll * 0.05, behavior: 'smooth' });
    });

    document.addEventListener('click', (e) => {
      if (state.panelOpen && !dom.hotspotPanel.contains(e.target) && !e.target.closest('.hotspot')) {
        closePanel();
      }
    });

    dom.chapterDots.forEach((dot, i) => {
      dot.addEventListener('click', () => { if (state.storyStarted) navigateToChapter(i); });
      dot.addEventListener('mouseenter', () => {
        dom.chapterLabel.textContent = STORY_DATA.chapters[i]?.title || '';
      });
      dot.addEventListener('mouseleave', () => {
        dom.chapterLabel.textContent = STORY_DATA.chapters[state.currentChapter >= 0 ? state.currentChapter : 0]?.title || '';
      });
    });

    // Touch swipe
    let tx = 0;
    document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', e => {
      if (!state.storyStarted) return;
      const dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) window.scrollBy({ top: dx * 3, behavior: 'smooth' });
    }, { passive: true });

    window.addEventListener('resize', debounce(() => {
      scaleMural();
      ScrollTrigger.refresh();
    }, 200));
  }

  // ─── UTILS ───────────────────────────────────────
  function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }

  // ─── START ───────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
