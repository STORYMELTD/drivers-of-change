/**
 * DRIVERS OF CHANGE — Main Engine
 * ─────────────────────────────────────────────
 * Handles:
 * - Loading sequence
 * - Landing → Story transition
 * - Horizontal scroll (vertical scroll → horizontal pan)
 * - Chapter detection & nav updates
 * - Hotspot visibility & panel
 * - Parallax layers
 * - Audio management
 * - Responsive scaling
 */

(function() {
  'use strict';

  // ─── STATE ──────────────────────────────────────
  const state = {
    loaded: false,
    storyStarted: false,
    scrollProgress: 0,       // 0–1 across the full mural
    currentChapter: 0,
    panelOpen: false,
    activeHotspot: null,
    audioEnabled: false,
    muralScale: 1,           // scale factor: viewport height / natural height
    muralDisplayWidth: 0,    // scaled width of mural
  };

  // ─── DOM REFS ────────────────────────────────────
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
    hotspots:       document.getElementById('hotspots'),
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

  // ─── INIT SEQUENCE ───────────────────────────────

  function init() {
    setupMural();
    setupHotspots();
    setupLayers();
    setupEventListeners();
    runLoader();
  }

  // ─── LOADER ──────────────────────────────────────

  function runLoader() {
    // Preload mural image
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        dom.loader.classList.add('hidden');
        state.loaded = true;
      }, 2400); // let loader animation complete
    };
    img.onerror = () => {
      // Even on error, hide loader and continue
      setTimeout(() => {
        dom.loader.classList.add('hidden');
        state.loaded = true;
      }, 2400);
    };
    img.src = STORY_DATA.mural.src;
    // Start loading the real mural
    dom.muralImg.src = STORY_DATA.mural.src;
  }

  // ─── MURAL SETUP ─────────────────────────────────

  function setupMural() {
    scaleMural();
    window.addEventListener('resize', debounce(scaleMural, 150));
  }

  function scaleMural() {
    const vh = window.innerHeight;
    const naturalH = STORY_DATA.mural.naturalHeight;
    const naturalW = STORY_DATA.mural.naturalWidth;

    // Scale mural to fill viewport height
    state.muralScale = vh / naturalH;
    state.muralDisplayWidth = naturalW * state.muralScale;

    // Set mural image size
    dom.muralImg.style.height = vh + 'px';
    dom.muralImg.style.width = 'auto';

    // Set stage height: how much vertical scroll equals full horizontal travel
    // Extra padding = 1 viewport width of breathing room
    const scrollDistance = state.muralDisplayWidth - window.innerWidth;
    const stageHeight = scrollDistance + window.innerHeight;
    dom.storyStage.style.height = stageHeight + 'px';

    // Re-position hotspots
    positionHotspots();
  }

  // ─── GSAP SCROLL ENGINE ───────────────────────────

  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Main horizontal scroll trigger
    ScrollTrigger.create({
      trigger: dom.storyStage,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        state.scrollProgress = self.progress;
        onScrollUpdate(self.progress);
      },
    });

    // Horizontal pan animation
    gsap.to(dom.muralWrap, {
      x: () => -(state.muralDisplayWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: dom.storyStage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    // Parallax layers
    setupParallax();
  }

  function onScrollUpdate(progress) {
    // Update progress bar
    dom.progressFill.style.width = (progress * 100) + '%';

    // Show/hide scroll hint
    if (progress > 0.02) {
      dom.scrollHint.classList.add('hidden');
    }

    // Chapter detection
    const chapter = getChapterAtProgress(progress);
    if (chapter !== null && chapter !== state.currentChapter) {
      enterChapter(chapter);
    }

    // Hotspot visibility
    updateHotspotVisibility(progress);
  }

  // ─── CHAPTER SYSTEM ──────────────────────────────

  function getChapterAtProgress(progress) {
    for (let i = 0; i < STORY_DATA.chapters.length; i++) {
      const ch = STORY_DATA.chapters[i];
      if (progress >= ch.scrollStart && progress < ch.scrollEnd) {
        return i;
      }
    }
    return STORY_DATA.chapters.length - 1;
  }

  function enterChapter(chapterIndex) {
    const prev = state.currentChapter;
    state.currentChapter = chapterIndex;
    const chapter = STORY_DATA.chapters[chapterIndex];

    // Update nav dots
    dom.chapterDots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i < chapterIndex) dot.classList.add('visited');
      if (i === chapterIndex) dot.classList.add('active');
    });

    // Update chapter label
    dom.chapterLabel.textContent = chapter.title;

    // Show chapter overlay (not on prologue re-entry)
    if (chapterIndex > 0 || prev === 0) {
      showChapterOverlay(chapter);
    }

    // Audio crossfade if chapter has specific audio
    const chAudio = STORY_DATA.audio.chapterAudio.find(a => a.chapter === chapterIndex);
    if (chAudio && state.audioEnabled) {
      // crossfade logic here
    }
  }

  function showChapterOverlay(chapter) {
    dom.overlayNumber.textContent = chapter.label;
    dom.overlayTitle.textContent = chapter.title;
    dom.chapterOverlay.classList.remove('show');
    // Force reflow
    void dom.chapterOverlay.offsetWidth;
    dom.chapterOverlay.classList.add('show');
  }

  // ─── HOTSPOT SYSTEM ──────────────────────────────

  function setupHotspots() {
    // Create DOM elements for each hotspot
    STORY_DATA.hotspots.forEach(hs => {
      const el = document.createElement('button');
      el.className = 'hotspot';
      el.dataset.id = hs.id;
      el.setAttribute('aria-label', `Open: ${hs.content.title}`);

      el.innerHTML = `
        <span class="hotspot__ring"></span>
        <span class="hotspot__dot"></span>
      `;

      el.addEventListener('click', () => openPanel(hs));
      dom.hotspots.appendChild(el);
    });

    positionHotspots();
  }

  function positionHotspots() {
    const hotspotEls = dom.hotspots.querySelectorAll('.hotspot');
    hotspotEls.forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;

      // Position as percentage of mural display dimensions
      const leftPx = (hs.position.left / 100) * state.muralDisplayWidth;
      const topPx  = (hs.position.top / 100) * window.innerHeight;

      el.style.left = leftPx + 'px';
      el.style.top  = topPx + 'px';
    });
  }

  function updateHotspotVisibility(progress) {
    const hotspotEls = dom.hotspots.querySelectorAll('.hotspot');
    hotspotEls.forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;

      if (progress >= hs.triggerAt) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  // ─── PANEL SYSTEM ────────────────────────────────

  function openPanel(hotspot) {
    const c = hotspot.content;

    // Build panel HTML
    let html = `<p class="panel-chapter">${c.chapter}</p>`;
    html += `<h2 class="panel-title">${c.title}</h2>`;
    html += `<div class="panel-body">`;
    c.body.forEach(p => { html += `<p>${p}</p>`; });
    html += `</div>`;

    if (c.image) {
      html += `
        <div class="panel-image">
          <img src="${c.image}" alt="${c.title}" loading="lazy" />
        </div>`;
    }

    if (c.audio) {
      html += `
        <div class="panel-audio">
          <p class="panel-audio-label">Listen</p>
          <audio controls src="${c.audio}" preload="none"></audio>
        </div>`;
    }

    dom.panelContent.innerHTML = html;
    dom.hotspotPanel.classList.add('open');
    dom.hotspotPanel.setAttribute('aria-hidden', 'false');
    state.panelOpen = true;
    state.activeHotspot = hotspot.id;
  }

  function closePanel() {
    dom.hotspotPanel.classList.remove('open');
    dom.hotspotPanel.setAttribute('aria-hidden', 'true');
    state.panelOpen = false;
    state.activeHotspot = null;
  }

  // ─── PARALLAX LAYERS ─────────────────────────────

  function setupLayers() {
    if (!STORY_DATA.layers.length) return;

    STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className = 'mural-layer';
      img.src = layer.src;
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.depth = layer.depth;
      img.dataset.id = layer.id;
      dom.muralLayers.appendChild(img);
    });
  }

  function setupParallax() {
    if (!STORY_DATA.layers.length) return;

    const layerEls = dom.muralLayers.querySelectorAll('.mural-layer');
    layerEls.forEach(el => {
      const depth = parseFloat(el.dataset.depth) || 0.5;
      const layer = STORY_DATA.layers.find(l => l.id === el.dataset.id);
      if (!layer || layer.type !== 'parallax') return;

      gsap.to(el, {
        x: () => -(state.muralDisplayWidth - window.innerWidth) * depth,
        ease: 'none',
        scrollTrigger: {
          trigger: dom.storyStage,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });
    });
  }

  // ─── AUDIO SYSTEM ────────────────────────────────

  function toggleAudio() {
    state.audioEnabled = !state.audioEnabled;

    dom.audioOn.style.display  = state.audioEnabled ? 'block' : 'none';
    dom.audioOff.style.display = state.audioEnabled ? 'none'  : 'block';

    if (state.audioEnabled) {
      if (STORY_DATA.audio.ambient.src) {
        dom.ambientAudio.src = STORY_DATA.audio.ambient.src;
        dom.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
        dom.ambientAudio.play().catch(() => {
          // Autoplay blocked — that's fine
          state.audioEnabled = false;
        });
      }
    } else {
      dom.ambientAudio.pause();
    }
  }

  // ─── LANDING → STORY TRANSITION ──────────────────

  function startStory() {
    if (state.storyStarted) return;
    state.storyStarted = true;

    // Hide landing
    dom.landing.classList.add('hidden');

    // Show nav
    setTimeout(() => {
      dom.storyNav.classList.add('visible');
      dom.scrollHint.style.opacity = '1';
    }, 800);

    // Init scroll engine after landing fades
    setTimeout(() => {
      initScrollEngine();
    }, 900);

    // Scroll to story top (just past landing)
    window.scrollTo({ top: 0 });
  }

  // ─── CHAPTER NAV CLICK ───────────────────────────

  function navigateToChapter(chapterIndex) {
    const chapter = STORY_DATA.chapters[chapterIndex];
    const scrollTarget = chapter.scrollStart;

    // Convert progress to scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const targetScroll = scrollTarget * maxScroll;

    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 1.2,
      ease: 'power2.inOut',
    });
  }

  // ─── EVENT LISTENERS ─────────────────────────────

  function setupEventListeners() {
    // Enter story
    dom.enterBtn.addEventListener('click', startStory);

    // Audio toggle
    dom.audioToggle.addEventListener('click', toggleAudio);

    // Close panel
    dom.closePanel.addEventListener('click', closePanel);

    // Click outside panel to close
    document.addEventListener('click', (e) => {
      if (state.panelOpen &&
          !dom.hotspotPanel.contains(e.target) &&
          !e.target.closest('.hotspot')) {
        closePanel();
      }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.panelOpen) closePanel();
    });

    // Chapter dot navigation
    dom.chapterDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        if (state.storyStarted) navigateToChapter(i);
      });
      dot.addEventListener('mouseenter', () => {
        dom.chapterLabel.textContent = STORY_DATA.chapters[i]?.title || '';
      });
      dot.addEventListener('mouseleave', () => {
        dom.chapterLabel.textContent = STORY_DATA.chapters[state.currentChapter]?.title || '';
      });
    });

    // Keyboard: scroll horizontally with arrow keys
    document.addEventListener('keydown', (e) => {
      if (!state.storyStarted) return;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const step = maxScroll * 0.05;
      if (e.key === 'ArrowRight') {
        window.scrollBy({ top: step, behavior: 'smooth' });
      }
      if (e.key === 'ArrowLeft') {
        window.scrollBy({ top: -step, behavior: 'smooth' });
      }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      if (!state.storyStarted) return;
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;
      // Only horizontal swipes
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        window.scrollBy({ top: dx * 3, behavior: 'smooth' });
      }
    }, { passive: true });
  }

  // ─── UTILITIES ───────────────────────────────────

  function debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // ─── START ───────────────────────────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
