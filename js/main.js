/**
 * DRIVERS OF CHANGE — Main Engine v5
 * StoryMe · Pengon · 2025
 *
 * Flow:
 *  Loading → Landing → Bab al-Amoud (zoom-in) → Mural Journey
 *
 * Gear mechanic:
 *  Landing:  100% size, spinning on track, "Drive Through" CTA
 *  Mural:    starts 100%, scales to 60%, drops onto track,
 *            rolls clockwise as mural pans left
 *  Chapters: text boxes animate in/out as gear enters/exits zones
 */

(function () {
  'use strict';

  // ─── STATE ──────────────────────────────────
  const S = {
    phase:         'loading',   // loading | landing | bab | mural
    muralW:        0,
    muralH:        0,
    scrollProgress: 0,
    currentChapter: -1,
    panelOpen:      false,
    audioEnabled:   false,
    gearRotation:   0,          // cumulative degrees
    lastScrollY:    0,
  };

  // ─── GEAR CONSTANTS ─────────────────────────
  const GEAR_FULL_PX  = 490;          // natural diameter
  const GEAR_SCALE_MURAL = 0.60;      // size on track
  const TRACK_H_RATIO = 0.09;         // track height as fraction of viewport height

  // ─── DOM ────────────────────────────────────
  const D = {
    loader:        document.getElementById('loader'),
    loaderPct:     document.getElementById('loaderPct'),
    loaderGear:    document.querySelector('.loader__gear'),
    landing:       document.getElementById('landing'),
    landingGear:   document.getElementById('landingGear'),
    driveBtn:      document.getElementById('driveBtn'),
    babSection:    document.getElementById('babSection'),
    babImg:        document.getElementById('babImg'),
    storyStage:    document.getElementById('storyStage'),
    muralTrack:    document.getElementById('muralTrack'),
    muralWrap:     document.getElementById('muralWrap'),
    muralImg:      document.getElementById('muralImg'),
    muralLayers:   document.getElementById('muralLayers'),
    gearSystem:    document.getElementById('gearSystem'),
    muralTrackImg: document.getElementById('muralTrackImg'),
    muralGear:     document.getElementById('muralGear'),
    chaptersEl:    document.getElementById('chapters'),
    hotspotsEl:    document.getElementById('hotspots'),
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

  // ─── INIT ────────────────────────────────────
  function init() {
    // Hide mural layers until scroll engine starts
    D.muralLayers.style.opacity    = '0';
    D.muralLayers.style.visibility = 'hidden';

    scaleMural();
    buildNav();
    buildLayers();
    buildChapterBoxes();
    buildHotspots();
    setupEvents();
    runLoader();
  }

  // ═══════════════════════════════════════════
  // SCREEN 1 — LOADER
  // ═══════════════════════════════════════════
  function runLoader() {
    const start  = Date.now();
    const MIN_MS = 2800;
    let pct = 0;

    // Animate percentage counter
    const ticker = setInterval(() => {
      pct = Math.min(pct + Math.random() * 8, 95);
      D.loaderPct.textContent = Math.round(pct) + '%';
    }, 120);

    function finish() {
      clearInterval(ticker);
      const elapsed  = Date.now() - start;
      const remaining = Math.max(0, MIN_MS - elapsed);
      setTimeout(() => {
        D.loaderPct.textContent = '100%';
        setTimeout(() => {
          D.loader.classList.add('out');
          S.phase = 'landing';
        }, 300);
      }, remaining);
    }

    if (D.muralImg.complete && D.muralImg.naturalWidth > 0) {
      finish();
    } else {
      D.muralImg.addEventListener('load',  finish, { once: true });
      D.muralImg.addEventListener('error', finish, { once: true });
    }
  }

  // ═══════════════════════════════════════════
  // SCREEN 2 — LANDING
  // ═══════════════════════════════════════════
  function startJourney() {
    if (S.phase !== 'landing') return;
    S.phase = 'bab';

    // Fade out landing
    D.landing.classList.add('out');

    // Show Bab al-Amoud
    setTimeout(() => {
      D.babSection.classList.add('visible');
    }, 600);
  }

  // ═══════════════════════════════════════════
  // SCREEN 3 — BAB AL-AMOUD
  // User scrolls → zoom into the gate window → enter mural
  // ═══════════════════════════════════════════
  function initBabScroll() {
    // Bab section takes 1 full scroll page
    // We use a simple scroll listener on the bab section
    let babProgress = 0;
    let entered     = false;

    function onBabScroll(e) {
      if (S.phase !== 'bab' || entered) return;

      babProgress = Math.min(1, babProgress + 0.018);

      // Zoom in to the gate window (top-center of image)
      const scale = 1 + babProgress * 8;  // 1x → 9x zoom
      D.babImg.style.transform = `scale(${scale})`;
      D.babImg.style.transformOrigin = '50% 28%'; // top-center window

      if (babProgress >= 1 && !entered) {
        entered = true;
        enterMural();
      }
    }

    // Listen to wheel + touch
    window.addEventListener('wheel',     onBabScroll, { passive: true });
    window.addEventListener('touchmove', onBabScroll, { passive: true });

    // Also allow click to skip
    D.babSection.addEventListener('click', () => {
      if (entered) return;
      entered = true;
      D.babImg.style.transform = 'scale(9)';
      setTimeout(enterMural, 300);
    });
  }

  function enterMural() {
    S.phase = 'mural';

    // Fade out Bab
    D.babSection.classList.add('out');

    // Show nav
    setTimeout(() => {
      D.storyNav.classList.add('visible');
      document.body.style.overflow = ''; // re-enable scroll
      initScrollEngine();
    }, 700);
  }

  // ═══════════════════════════════════════════
  // MURAL SIZING
  // ═══════════════════════════════════════════
  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const scale = vh / STORY_DATA.mural.naturalHeight;

    S.muralW = STORY_DATA.mural.naturalWidth  * scale;
    S.muralH = vh;

    const trackH = Math.round(vh * TRACK_H_RATIO);

    // Base mural image
    D.muralImg.style.width    = S.muralW + 'px';
    D.muralImg.style.height   = vh + 'px';
    D.muralImg.style.maxWidth = 'none';

    // Scroll stage height
    D.storyStage.style.height = (S.muralW - vw + vh) + 'px';

    // Layer container
    Object.assign(D.muralLayers.style, {
      width:  S.muralW + 'px',
      height: vh + 'px',
    });

    // Gear system container
    Object.assign(D.gearSystem.style, {
      width:  S.muralW + 'px',
      height: trackH + 'px',
    });

    // Track — tile horizontally
    Object.assign(D.muralTrackImg.style, {
      width:  S.muralW + 'px',
      height: trackH + 'px',
      objectFit: 'repeat',  // tile
    });

    // Gear on mural — starts full size
    const gearFullPx  = GEAR_FULL_PX * scale * 2; // scale to match mural
    const gearSmallPx = gearFullPx * GEAR_SCALE_MURAL;
    Object.assign(D.muralGear.style, {
      width:  gearFullPx + 'px',
      height: gearFullPx + 'px',
      bottom: (trackH * 0.25) + 'px',
      left:   '0px',
    });
    D.muralGear.dataset.fullPx  = gearFullPx;
    D.muralGear.dataset.smallPx = gearSmallPx;
    D.muralGear.dataset.trackH  = trackH;

    // Resize layer images
    D.muralLayers.querySelectorAll('.mural-layer').forEach(img => {
      img.style.width    = S.muralW + 'px';
      img.style.height   = vh + 'px';
      img.style.maxWidth = 'none';
    });

    positionChapterBoxes();
    positionHotspots();
  }

  // ═══════════════════════════════════════════
  // GSAP SCROLL ENGINE
  // ═══════════════════════════════════════════
  function initScrollEngine() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const vw      = window.innerWidth;
    const travelX = -(S.muralW - vw);

    const gearFullPx  = parseFloat(D.muralGear.dataset.fullPx);
    const gearSmallPx = parseFloat(D.muralGear.dataset.smallPx);
    const trackH      = parseFloat(D.muralGear.dataset.trackH);

    // ── BASE MURAL PAN ──
    gsap.to(D.muralWrap, {
      x: travelX,
      ease: 'none',
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   true,
        onUpdate: self => {
          S.scrollProgress = self.progress;
          onScrollUpdate(self.progress, self);
        },
      }
    });

    // ── GEAR: scale + drop onto track ──
    // First 8% of scroll: gear shrinks from 100% to 60% and drops to track
    const gearDropTL = gsap.timeline({
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     `top+=${(S.muralW - vw) * 0.08}px top`,
        scrub:   true,
      }
    });

    gearDropTL
      .to(D.muralGear, {
        width:  gearSmallPx,
        height: gearSmallPx,
        bottom: (trackH * 0.15) + 'px',
        ease:   'power2.inOut',
      });

    // ── GEAR: roll along track (rotation) ──
    // Circumference of small gear → rotations per pixel of travel
    const circumference = Math.PI * gearSmallPx;
    const totalTravel   = S.muralW - vw;
    const totalRotation = (totalTravel / circumference) * 360;

    gsap.to(D.muralGear, {
      rotation:  totalRotation,
      ease:      'none',
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   true,
      }
    });

    // ── GEAR: move left with scroll (stays on track) ──
    // Gear's left position = progress × totalTravel clamped to track width
    ScrollTrigger.create({
      trigger: D.storyStage,
      start:   'top top',
      end:     'bottom bottom',
      scrub:   true,
      onUpdate: self => {
        const gearX = self.progress * totalTravel;
        D.muralGear.style.left = gearX + 'px';
      }
    });

    // ── PARALLAX LAYERS ──
    D.muralLayers.style.opacity    = '1';
    D.muralLayers.style.visibility = 'visible';

    STORY_DATA.layers.forEach(layer => {
      const el = D.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      const extraOffset = (travelX * layer.depth) - travelX;
      gsap.set(el, { x: 0 });
      gsap.to(el, {
        x:    extraOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: D.storyStage,
          start:   'top top',
          end:     'bottom bottom',
          scrub:   true,
        }
      });

      if (layer.type === 'float') {
        gsap.to(el, {
          y:        -(8 + Math.random() * 6),
          repeat:   -1,
          yoyo:     true,
          duration: 2.5 + Math.random() * 2,
          ease:     'sine.inOut',
          delay:    Math.random(),
        });
      }

      // Fade-in layers
      if (layer.triggerAt === 0) {
        gsap.to(el, { opacity: 1, duration: 0.8 });
      } else {
        ScrollTrigger.create({
          trigger: D.storyStage,
          start: () => `top+=${layer.triggerAt * totalTravel}px top`,
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 0.8 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.4 }),
        });
      }
    });

    // ── CHAPTER BOXES: animate in/out ──
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.getElementById(`chapter-box-${i}`);
      if (!box) return;

      const enterAt  = ch.scrollStart + 0.01;
      const exitAt   = ch.scrollEnd   - 0.01;

      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => `top+=${enterAt * totalTravel}px top`,
        onEnter: () => {
          gsap.to(box, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        },
        onLeaveBack: () => {
          gsap.to(box, { opacity: 0, y: 20, duration: 0.4 });
        },
      });

      ScrollTrigger.create({
        trigger: D.storyStage,
        start: () => `top+=${exitAt * totalTravel}px top`,
        onEnter: () => {
          gsap.to(box, { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' });
        },
        onLeaveBack: () => {
          gsap.to(box, { opacity: 1, y: 0, duration: 0.4 });
        },
      });
    });
  }

  // ─── SCROLL UPDATE ───────────────────────────
  function onScrollUpdate(progress) {
    D.progressFill.style.width = (progress * 100) + '%';

    const idx = getChapterAt(progress);
    if (idx !== S.currentChapter) setActiveChapter(idx);

    updateHotspots(progress);
  }

  // ─── CHAPTERS ────────────────────────────────
  function getChapterAt(p) {
    for (let i = STORY_DATA.chapters.length - 1; i >= 0; i--) {
      if (p >= STORY_DATA.chapters[i].scrollStart) return i;
    }
    return 0;
  }

  function setActiveChapter(idx) {
    S.currentChapter = idx;
    const ch = STORY_DATA.chapters[idx];
    document.querySelectorAll('.nav-dot').forEach((d, i) => {
      d.classList.toggle('active',  i === idx);
      d.classList.toggle('visited', i <  idx);
    });
    D.chapterLabel.textContent = ch.title;
  }

  // ─── BUILD CHAPTER BOXES ─────────────────────
  function buildChapterBoxes() {
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.createElement('div');
      box.className  = 'chapter-box';
      box.id         = `chapter-box-${i}`;
      box.style.opacity   = '0';
      box.style.transform = 'translateY(20px)';

      // Position: upper-right area of each chapter zone
      // Exact positions will be refined once we see the mural
      box.dataset.chapterIndex = i;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'chapter-box__close';
      closeBtn.innerHTML = `<img src="assets/images/X.svg" alt="Close"/>`;
      closeBtn.addEventListener('click', () => {
        gsap.to(box, { opacity: 0, y: -20, duration: 0.4 });
      });

      box.innerHTML = `
        <p class="chapter-box__label">${ch.label}</p>
        <h2 class="chapter-box__title">${ch.title}</h2>
        <div class="chapter-box__body">
          ${ch.body ? ch.body.map(p => `<p>${p}</p>`).join('') : ''}
        </div>
      `;
      box.appendChild(closeBtn);
      D.chaptersEl.appendChild(box);
    });
    positionChapterBoxes();
  }

  function positionChapterBoxes() {
    if (!S.muralW) return;
    const boxes = D.chaptersEl.querySelectorAll('.chapter-box');
    boxes.forEach((box, i) => {
      const ch    = STORY_DATA.chapters[i];
      if (!ch) return;
      // Center of each chapter's scroll zone
      const centerPct = (ch.scrollStart + ch.scrollEnd) / 2;
      const leftPx    = centerPct * S.muralW;
      // Position box: centered on chapter zone, vertically in upper third
      box.style.left = (leftPx - 170) + 'px';  // 170 = half of 340px width
      box.style.top  = (S.muralH * 0.12) + 'px';
    });
  }

  // ─── BUILD NAV ───────────────────────────────
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
        const max    = document.body.scrollHeight - window.innerHeight;
        gsap.to(window, { scrollTo: ch.scrollStart * max, duration: 1.2, ease: 'power2.inOut' });
      });
      D.navDots.appendChild(dot);
    });
  }

  // ─── BUILD LAYERS ────────────────────────────
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
      img.style.width        = S.muralW + 'px';
      img.style.height       = S.muralH + 'px';
      img.style.maxWidth     = 'none';
      img.style.zIndex       = layer.zIndex || 1;
      img.style.pointerEvents = 'none';
      img.style.opacity      = '0';
      D.muralLayers.appendChild(img);
    });
  }

  // ─── BUILD HOTSPOTS ──────────────────────────
  function buildHotspots() {
    STORY_DATA.hotspots.forEach(hs => {
      const btn = document.createElement('button');
      btn.className = 'hotspot';
      btn.dataset.id = hs.id;
      btn.setAttribute('aria-label', hs.content.title);
      btn.innerHTML = `<span class="hotspot__ring"></span><span class="hotspot__dot"></span>`;
      btn.addEventListener('click', () => openPanel(hs));
      D.hotspotsEl.appendChild(btn);
    });
    positionHotspots();
  }

  function positionHotspots() {
    if (!S.muralW) return;
    D.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (!hs) return;
      el.style.left = (hs.position.left / 100 * S.muralW) + 'px';
      el.style.top  = (hs.position.top  / 100 * S.muralH) + 'px';
    });
  }

  function updateHotspots(p) {
    D.hotspotsEl.querySelectorAll('.hotspot').forEach((el, i) => {
      const hs = STORY_DATA.hotspots[i];
      if (hs) el.classList.toggle('visible', p >= hs.triggerAt);
    });
  }

  // ─── PANEL ───────────────────────────────────
  function openPanel(hs) {
    const c   = hs.content;
    let html  = `<p class="panel-chapter">${c.chapter}</p>`;
    html     += `<h2 class="panel-title">${c.title}</h2>`;
    html     += `<div class="panel-body">${c.body.map(p => `<p>${p}</p>`).join('')}</div>`;
    if (c.image) html += `<div class="panel-image"><img src="${c.image}" alt="${c.title}" loading="lazy"/></div>`;
    if (c.audio) html += `<div class="panel-audio"><p class="panel-audio-label">Listen</p><audio controls src="${c.audio}" preload="none"></audio></div>`;
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

  // ─── AUDIO ───────────────────────────────────
  function toggleAudio() {
    S.audioEnabled = !S.audioEnabled;
    D.audioToggle.querySelector('.ico-sound-on').style.display  = S.audioEnabled ? 'block' : 'none';
    D.audioToggle.querySelector('.ico-sound-off').style.display = S.audioEnabled ? 'none'  : 'block';
    if (S.audioEnabled) {
      D.ambientAudio.src    = STORY_DATA.audio.ambient.src;
      D.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
      D.ambientAudio.play().catch(() => { S.audioEnabled = false; });
    } else {
      D.ambientAudio.pause();
    }
  }

  // ─── EVENTS ──────────────────────────────────
  function setupEvents() {
    D.driveBtn.addEventListener('click', () => {
      startJourney();
      // Init bab scroll after transition
      setTimeout(initBabScroll, 700);
    });

    D.closePanel.addEventListener('click', closePanel);
    D.audioToggle.addEventListener('click', toggleAudio);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && S.panelOpen) { closePanel(); return; }
      if (S.phase !== 'mural') return;
      const step = (document.body.scrollHeight - window.innerHeight) * 0.04;
      if (e.key === 'ArrowRight') window.scrollBy({ top:  step, behavior: 'smooth' });
      if (e.key === 'ArrowLeft')  window.scrollBy({ top: -step, behavior: 'smooth' });
    });

    document.addEventListener('click', e => {
      if (S.panelOpen &&
          !D.hotspotPanel.contains(e.target) &&
          !e.target.closest('.hotspot')) closePanel();
    });

    // Touch swipe in mural
    let t0 = 0;
    document.addEventListener('touchstart', e => { t0 = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', e => {
      if (S.phase !== 'mural') return;
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

  // ─── START ───────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
