/**
 * DRIVERS OF CHANGE — Main Engine v6
 * StoryMe · Pengon · 2025
 *
 * Screens:
 *   1. Loading   — bg image, small gear at Illustrator coords, % counter
 *   2. Landing   — assembled components, slow gear, Ubuntu title, track
 *   3. Bab       — fullscreen, masked top, slow zoom into gate window
 *   4. Mural     — gear rolls on tiled track, chapter boxes animate in/out
 */

(function () {
  'use strict';

  // ── CONSTANTS ──────────────────────────────
  const MURAL_W       = 15000;
  const MURAL_H       = 1900;
  const GEAR_FULL_PX  = 490;          // natural gear diameter px
  const GEAR_MURAL_SCALE = 0.60;      // gear shrinks to 60% on track
  const TRACK_H_PX    = 72;           // track height in CSS

  // Illustrator canvas dimensions (estimate from typical A3 landscape doc)
  // x=1040, y=550 out of approximately 1587×1123 (A3 at 72dpi)
  const IL_CANVAS_W   = 1587;
  const IL_CANVAS_H   = 1123;
  const IL_GEAR_X     = 1040;
  const IL_GEAR_Y     = 550;

  // ── STATE ──────────────────────────────────
  const S = {
    phase:          'loading',
    muralW:         0,
    muralH:         0,
    muralScale:     1,
    babScrolling:   false,
    babProgress:    0,
    babDone:        false,
    scrollProgress: 0,
    currentChapter: -1,
    panelOpen:      false,
    audioEnabled:   false,
    trackImgEl:     null,   // loaded track tile image
  };

  // ── DOM ────────────────────────────────────
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
    // Kill all layers visibility until scroll engine is ready
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

  // ══════════════════════════════════════════
  // SCREEN 1 — LOADER
  // ══════════════════════════════════════════
  function runLoader() {
    const start  = Date.now();
    const MIN_MS = 2800;

    // Position gear at Illustrator convergence point
    // Convert IL coords to % of loading bg image
    const leftPct = (IL_GEAR_X / IL_CANVAS_W) * 100;
    const topPct  = (IL_GEAR_Y / IL_CANVAS_H) * 100;
    D.loaderGearWrap.style.left = leftPct + '%';
    D.loaderGearWrap.style.top  = topPct  + '%';

    // Animate % counter
    let pct = 0;
    const ticker = setInterval(() => {
      pct = Math.min(pct + (Math.random() * 9 + 2), 94);
      D.loaderPct.textContent = Math.round(pct) + '%';
    }, 100);

    function done() {
      clearInterval(ticker);
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => {
        D.loaderPct.textContent = '100%';
        setTimeout(() => {
          D.loader.classList.add('out');
          S.phase = 'landing';
        }, 350);
      }, wait);
    }

    // Preload mural + track
    // Preload mural in background (do not block loader)
    const muralImg = new Image();
    
    
    muralImg.src = D.muralImg.src;
    // Loader runs on timer only
    setTimeout(done, 2800);

    // Also preload track tile
    const trackImg = new Image();
    trackImg.onload = () => { S.trackImgEl = trackImg; };
    trackImg.src    = 'assets/images/gear track long-01.png';
  }

  // ══════════════════════════════════════════
  // SCREEN 2 — LANDING
  // ══════════════════════════════════════════
  function startJourney() {
    if (S.phase !== 'landing') return;
    S.phase = 'bab';
    D.landing.classList.add('out');
    setTimeout(() => {
      D.babSection.classList.add('visible');
      initBabScroll();
    }, 700);
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

      // Very slow, heavy easing — 100% ease feeling
      const delta = e.deltaY > 0 ? 0.008 : -0.008;
      prog = Math.max(0, Math.min(1, prog + delta));

      applyBabZoom(prog);

      if (prog >= 1) enterMural();
    }

    // Touch support
    let touchY0 = 0;
    function onTouchStart(e) { touchY0 = e.touches[0].clientY; }
    function onTouchMove(e) {
      if (S.phase !== 'bab' || S.babDone) return;
      e.preventDefault();
      const dy  = touchY0 - e.touches[0].clientY;
      touchY0   = e.touches[0].clientY;
      prog = Math.max(0, Math.min(1, prog + dy * 0.004));
      applyBabZoom(prog);
      if (prog >= 1) enterMural();
    }

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: false });

    // Click to skip
    D.babSection.addEventListener('click', () => {
      if (S.babDone) return;
      gsap.to({ p: prog }, {
        p: 1,
        duration: 1.4,
        ease: 'power2.inOut',
        onUpdate: function() { applyBabZoom(this.targets()[0].p); },
        onComplete: enterMural,
      });
    }, { once: true });
  }

  function applyBabZoom(progress) {
    // Ease: cubic ease-in-out applied to progress
    // gives the 100% easing feel — slow start, slow end
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    // Scale from 1× → 10× zoom
    const scale = 1 + eased * 9;
    D.babImg.style.transform = `scale(${scale})`;
  }

  function enterMural() {
    if (S.babDone) return;
    S.babDone = true;
    S.phase   = 'mural';

    gsap.to(D.babSection, {
      opacity:  0,
      duration: 0.8,
      onComplete: () => {
        D.babSection.classList.remove('visible');
        D.babSection.classList.add('out');
      }
    });

    setTimeout(() => {
      D.storyNav.classList.add('visible');
      document.body.style.overflow = '';
      window.scrollTo({ top: 0 });
      initScrollEngine();
    }, 600);
  }

  // ══════════════════════════════════════════
  // MURAL SIZING
  // ══════════════════════════════════════════
  function scaleMural() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    S.muralScale = vh / MURAL_H;
    S.muralW     = MURAL_W * S.muralScale;
    S.muralH     = vh;

    // Base mural image
    D.muralImg.style.width    = S.muralW + 'px';
    D.muralImg.style.height   = vh + 'px';
    D.muralImg.style.maxWidth = 'none';

    // Scroll stage height = total horizontal travel + 1 viewport
    D.storyStage.style.height = (S.muralW - vw + vh) + 'px';

    // Layer container
    D.muralLayers.style.width  = S.muralW + 'px';
    D.muralLayers.style.height = vh + 'px';

    // Gear system
    D.gearSystem.style.width  = S.muralW + 'px';
    D.gearSystem.style.height = TRACK_H_PX + 'px';

    // Gear on mural
    const gearPx      = GEAR_FULL_PX * S.muralScale * 2;
    const gearSmallPx = gearPx * GEAR_MURAL_SCALE;
    D.muralGear.style.width    = gearPx + 'px';
    D.muralGear.style.height   = gearPx + 'px';
    D.muralGear.style.bottom   = (TRACK_H_PX * 0.2) + 'px';
    D.muralGear.style.left     = '0px';
    D.muralGear.dataset.fullPx  = gearPx;
    D.muralGear.dataset.smallPx = gearSmallPx;

    // Track canvas
    drawTrack();

    // Layer images
    D.muralLayers.querySelectorAll('.mural-layer').forEach(img => {
      img.style.width    = S.muralW + 'px';
      img.style.height   = vh + 'px';
      img.style.maxWidth = 'none';
    });

    positionChapterBoxes();
    positionHotspots();
  }

  // ══════════════════════════════════════════
  // TRACK — tiled via Canvas (never stretched)
  // ══════════════════════════════════════════
  function drawTrack() {
    if (!S.trackImgEl || !S.trackImgEl.complete) {
      // Retry once image loads
      if (S.trackImgEl) {
        S.trackImgEl.onload = drawTrack;
      } else {
        const img = new Image();
        img.src    = 'assets/images/gear track long-01.png';
        img.onload = () => { S.trackImgEl = img; drawTrack(); };
      }
      return;
    }

    const tileW = S.trackImgEl.naturalWidth;
    const tileH = S.trackImgEl.naturalHeight;
    const trackH = TRACK_H_PX;

    // Scale tile to match track height
    const tileScale  = trackH / tileH;
    const scaledTileW = tileW * tileScale;

    const canvas  = D.trackCanvas;
    canvas.width  = S.muralW;
    canvas.height = trackH;
    canvas.style.width  = S.muralW + 'px';
    canvas.style.height = trackH + 'px';

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, S.muralW, trackH);

    // Tile the track image horizontally
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

    // ── 1. MURAL PAN ──────────────────────
    gsap.to(D.muralWrap, {
      x:    travelX,
      ease: 'none',
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   true,
        onUpdate: self => {
          S.scrollProgress = self.progress;
          onScrollUpdate(self.progress);
        },
      }
    });

    // ── 2. GEAR SCALE: 100% → 60% (first 10% of scroll) ──
    gsap.to(D.muralGear, {
      width:  gearSmPx,
      height: gearSmPx,
      bottom: (TRACK_H_PX * 0.15) + 'px',
      ease:   'power3.inOut',
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     () => `+=${(S.muralW - vw) * 0.10}`,
        scrub:   true,
      }
    });

    // ── 3. GEAR POSITION: roll left along track ──
    const totalTravel = S.muralW - vw;

    ScrollTrigger.create({
      trigger: D.storyStage,
      start:   'top top',
      end:     'bottom bottom',
      scrub:   true,
      onUpdate: self => {
        // Gear x = scroll progress × total travel distance
        // Offset by half gear width so it starts at left edge
        const gearCurrentPx = self.progress < 0.12
          ? gearPx   // still full size during shrink phase
          : gearSmPx;
        const gearLeft = self.progress * totalTravel;
        D.muralGear.style.left = gearLeft + 'px';
      }
    });

    // ── 4. GEAR ROTATION: circumference-accurate ──
    // At 60% size, circumference = π × gearSmPx
    // Rotations over full travel = totalTravel / circumference
    const circumference  = Math.PI * gearSmPx;
    const totalRotations = totalTravel / circumference;
    const totalDegrees   = totalRotations * 360;

    gsap.to(D.muralGear, {
      rotation: totalDegrees,
      ease:     'none',
      scrollTrigger: {
        trigger: D.storyStage,
        start:   'top top',
        end:     'bottom bottom',
        scrub:   true,
      }
    });

    // ── 5. PARALLAX LAYERS ────────────────
    // Reveal container — positions already correct at x=0 for progress=0
    D.muralLayers.style.visibility = 'visible';

    //STORY_DATA.layers.forEach(layer => {
      const el = D.muralLayers.querySelector(`[data-layer-id="${layer.id}"]`);
      if (!el) return;

      // Parallax offset relative to base mural
      // depth 1.0 = moves with mural (no effect)
      // depth 0.5 = moves at half speed = appears further
      const extraX = (travelX * layer.depth) - travelX;

      gsap.set(el, { x: 0, opacity: layer.triggerAt === 0 ? 0 : 0 });

      gsap.to(el, {
        x:    extraX,
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
          y:        -(7 + Math.random() * 6),
          repeat:   -1, yoyo: true,
          duration: 2.5 + Math.random() * 2,
          ease:     'sine.inOut',
          delay:    Math.random() * 1.5,
        });
      }

      if (layer.triggerAt === 0) {
        // Fade in immediately after scroll engine starts
        gsap.to(el, { opacity: 1, visibility: 'visible', duration: 0.9, delay: 0.2 });
      } else {
        ScrollTrigger.create({
          trigger: D.storyStage,
          start:   () => `top+=${layer.triggerAt * totalTravel}px top`,
          onEnter:     () => gsap.to(el, { opacity: 1, duration: 0.9 }),
          onLeaveBack: () => gsap.to(el, { opacity: 0, duration: 0.5 }),
        });
      }
    });

    // Also fade in muralLayers container
    gsap.to(D.muralLayers, { opacity: 1, duration: 0.5, delay: 0.1 });

    // ── 6. CHAPTER BOXES: animate in/out ──
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.getElementById(`cbox-${i}`);
      if (!box) return;

      const enterScroll = ch.scrollStart * totalTravel;
      const exitScroll  = ch.scrollEnd   * totalTravel;
      const buffer      = totalTravel * 0.015; // small buffer before/after

      // Animate IN
      ScrollTrigger.create({
        trigger: D.storyStage,
        start:   () => `top+=${enterScroll + buffer}px top`,
        onEnter: () => {
          gsap.to(box, {
            opacity: 1, y: 0,
            duration: 0.65, ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            opacity: 0, y: 24,
            duration: 0.4, ease: 'power2.in',
          });
        },
      });

      // Animate OUT
      ScrollTrigger.create({
        trigger: D.storyStage,
        start:   () => `top+=${exitScroll - buffer}px top`,
        onEnter: () => {
          gsap.to(box, {
            opacity: 0, y: -24,
            duration: 0.5, ease: 'power2.in',
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            opacity: 1, y: 0,
            duration: 0.4, ease: 'power2.out',
          });
        },
      });
    });
  }

  // ── SCROLL UPDATE ──────────────────────────
  function onScrollUpdate(progress) {
    D.progressFill.style.width = (progress * 100) + '%';

    const idx = getChapterAt(progress);
    if (idx !== S.currentChapter) setChapter(idx);
    updateHotspots(progress);
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

  // ── BUILD: NAV ─────────────────────────────
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
        gsap.to(window, {
          scrollTo: ch.scrollStart * max,
          duration: 1.2,
          ease: 'power2.inOut',
        });
      });
      D.navDots.appendChild(dot);
    });
  }

  // ── BUILD: LAYERS ──────────────────────────
  function buildLayers() {
    //STORY_DATA.layers.forEach(layer => {
      const img = document.createElement('img');
      img.className           = 'mural-layer';
      img.src                 = layer.src;
      img.alt                 = '';
      img.setAttribute('aria-hidden', 'true');
      img.dataset.layerId     = layer.id;
      img.style.zIndex        = layer.zIndex || 1;
      img.style.width         = S.muralW + 'px';
      img.style.height        = S.muralH + 'px';
      img.style.maxWidth      = 'none';
      img.style.opacity = "0";
      img.style.visibility = "hidden";
      D.muralLayers.appendChild(img);
    });
  }

  // ── BUILD: CHAPTER BOXES ───────────────────
  function buildChapterBoxes() {
    STORY_DATA.chapters.forEach((ch, i) => {
      const box = document.createElement('div');
      box.className = 'chapter-box';
      box.id        = `cbox-${i}`;

      const closeBtn = document.createElement('button');
      closeBtn.className = 'chapter-box__close';
      closeBtn.setAttribute('aria-label', 'Close chapter');
      closeBtn.innerHTML = `<img src="assets/images/X.svg" alt="Close"/>`;
      closeBtn.addEventListener('click', e => {
        e.stopPropagation();
        gsap.to(box, { opacity: 0, y: -20, duration: 0.4 });
      });

      const bodyText = (ch.body || []).map(p => `<p>${p}</p>`).join('');

      box.innerHTML = `
        <div class="chapter-box__header">
          <p class="chapter-box__label">${ch.label}</p>
          <h2 class="chapter-box__title">${ch.title}</h2>
        </div>
        <div class="chapter-box__body">${bodyText}</div>
      `;
      box.appendChild(closeBtn);
      D.chaptersEl.appendChild(box);
    });
    positionChapterBoxes();
  }

  function positionChapterBoxes() {
    if (!S.muralW) return;
    document.querySelectorAll('.chapter-box').forEach((box, i) => {
      const ch = STORY_DATA.chapters[i];
      if (!ch) return;
      // Place box at the start of each chapter zone
      // Upper portion of the mural (top 15% down from top)
      const chapterCenterX = (ch.scrollStart + 0.04) * S.muralW;
      box.style.left = chapterCenterX + 'px';
      box.style.top  = (S.muralH * 0.10) + 'px';
    });
  }

  // ── BUILD: HOTSPOTS ────────────────────────
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

  // ── PANEL ──────────────────────────────────
  function openPanel(hs) {
    const c  = hs.content;
    let html = `<p class="panel-chapter">${c.chapter}</p>`;
    html    += `<h2 class="panel-title">${c.title}</h2>`;
    html    += `<div class="panel-body">${c.body.map(p=>`<p>${p}</p>`).join('')}</div>`;
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

  // ── AUDIO ──────────────────────────────────
  function toggleAudio() {
    S.audioEnabled = !S.audioEnabled;
    D.audioToggle.querySelector('.ico-on').style.display  = S.audioEnabled ? 'block' : 'none';
    D.audioToggle.querySelector('.ico-off').style.display = S.audioEnabled ? 'none'  : 'block';
    if (S.audioEnabled) {
      D.ambientAudio.src    = STORY_DATA.audio.ambient.src;
      D.ambientAudio.volume = STORY_DATA.audio.ambient.volume;
      D.ambientAudio.play().catch(() => { S.audioEnabled = false; });
    } else {
      D.ambientAudio.pause();
    }
  }

  // ── EVENTS ─────────────────────────────────
  function setupEvents() {
    D.driveBtn.addEventListener('click', startJourney);
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

    // Touch swipe on mural
    let tx0 = 0;
    document.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', e => {
      if (S.phase !== 'mural') return;
      const dx = tx0 - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) window.scrollBy({ top: dx * 3, behavior: 'smooth' });
    }, { passive: true });

    window.addEventListener('resize', debounce(() => {
      scaleMural();
      drawTrack();
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 200));
  }

  function debounce(fn, ms) {
    let t;
    return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }

  // ── GO ─────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
