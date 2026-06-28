/**
 * DRIVERS OF CHANGE — Story Data
 * ─────────────────────────────────────────────
 * This file is the single source of truth for:
 * - Chapter definitions and scroll positions
 * - Hotspot content (text, images, audio)
 * - Animation triggers and layer configs
 *
 * Nim5: Fill in the content here from the script.
 * No code changes needed — just data.
 */

const STORY_DATA = {

  // ─── MURAL CONFIGURATION ────────────────────
  mural: {
    naturalWidth:  15000,   // px — original artwork width
    naturalHeight: 1900,    // px — original artwork height
    src: 'assets/images/mural-full.jpg',    // final asset
    srcFallback: 'assets/images/mural-full.webp',
  },

  // ─── CHAPTERS ────────────────────────────────
  // scrollStart / scrollEnd: percentage (0–1) of total mural width
  // where this chapter begins and ends
  chapters: [
    {
      id: 0,
      label: 'Prologue',
      title: 'A City, A Vision',
      scrollStart: 0,
      scrollEnd: 0.15,
      color: '#4CAF82',
    },
    {
      id: 1,
      label: 'Chapter 1',
      title: 'Roots',           // ← Replace with real chapter title
      scrollStart: 0.15,
      scrollEnd: 0.32,
      color: '#4CAF82',
    },
    {
      id: 2,
      label: 'Chapter 2',
      title: 'Seeds',           // ← Replace with real chapter title
      scrollStart: 0.32,
      scrollEnd: 0.50,
      color: '#4CAF82',
    },
    {
      id: 3,
      label: 'Chapter 3',
      title: 'Growth',          // ← Replace with real chapter title
      scrollStart: 0.50,
      scrollEnd: 0.67,
      color: '#4CAF82',
    },
    {
      id: 4,
      label: 'Chapter 4',
      title: 'Harvest',         // ← Replace with real chapter title
      scrollStart: 0.67,
      scrollEnd: 0.84,
      color: '#4CAF82',
    },
    {
      id: 5,
      label: 'Chapter 5',
      title: 'Future',          // ← Replace with real chapter title
      scrollStart: 0.84,
      scrollEnd: 1.0,
      color: '#4CAF82',
    },
  ],

  // ─── HOTSPOTS ─────────────────────────────────
  // position: percentage of mural width (left) and height (top)
  // triggerAt: scroll progress (0–1) when hotspot becomes visible
  // content: what shows in the panel
  hotspots: [

    // ─── PROLOGUE HOTSPOT ──
    {
      id: 'hs-prologue-1',
      position: { left: 5, top: 45 },
      triggerAt: 0.03,
      chapter: 0,
      content: {
        chapter: 'Prologue',
        title: 'The Mission',              // ← From script
        body: [
          'Placeholder text — replace with Chapter 1 opening paragraph from the 2000-word script.',
          'This is where the story of Pengon\'s work in East Jerusalem begins.'
        ],
        image: null,                       // 'assets/images/hs-1.jpg' when ready
        audio: null,                       // 'assets/audio/hs-1.mp3' when ready
      }
    },

    // ─── CHAPTER 1 HOTSPOTS ──
    {
      id: 'hs-1-1',
      position: { left: 18, top: 38 },
      triggerAt: 0.17,
      chapter: 1,
      content: {
        chapter: 'Chapter 1 · Roots',
        title: 'Placeholder Title',        // ← From script
        body: [
          'Placeholder text — replace with actual content from the script.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-1-2',
      position: { left: 27, top: 60 },
      triggerAt: 0.25,
      chapter: 1,
      content: {
        chapter: 'Chapter 1 · Roots',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },

    // ─── CHAPTER 2 HOTSPOTS ──
    {
      id: 'hs-2-1',
      position: { left: 38, top: 42 },
      triggerAt: 0.34,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Seeds',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-2-2',
      position: { left: 46, top: 55 },
      triggerAt: 0.43,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Seeds',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },

    // ─── CHAPTER 3 HOTSPOTS ──
    {
      id: 'hs-3-1',
      position: { left: 54, top: 40 },
      triggerAt: 0.52,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · Growth',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-3-2',
      position: { left: 62, top: 58 },
      triggerAt: 0.59,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · Growth',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },

    // ─── CHAPTER 4 HOTSPOTS ──
    {
      id: 'hs-4-1',
      position: { left: 71, top: 44 },
      triggerAt: 0.69,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Harvest',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-4-2',
      position: { left: 79, top: 52 },
      triggerAt: 0.77,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Harvest',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },

    // ─── CHAPTER 5 HOTSPOTS ──
    {
      id: 'hs-5-1',
      position: { left: 87, top: 46 },
      triggerAt: 0.86,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Future',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-5-2',
      position: { left: 94, top: 40 },
      triggerAt: 0.93,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Future',
        title: 'Placeholder Title',
        body: ['Placeholder text.'],
        image: null,
        audio: null,
      }
    },

  ],

  // ─── ANIMATED LAYERS ──────────────────────────
  // Each layer is a PNG positioned over the mural
  // type: 'parallax' | 'fade-in' | 'float' | 'morph'
  layers: [
    // Example — populate when layer files are named:
    // {
    //   id: 'layer-trees-fg',
    //   src: 'assets/layers/trees-foreground.png',
    //   type: 'parallax',
    //   depth: 0.4,          // parallax speed (0=stationary, 1=full scroll)
    //   position: { left: 0, top: 0, width: '100%', height: '100%' },
    //   triggerAt: 0,        // visible from the start
    // },
  ],

  // ─── AUDIO ────────────────────────────────────
  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    // Chapter-specific audio swaps
    chapterAudio: [
      // { chapter: 2, src: 'assets/audio/chapter-2-theme.mp3', volume: 0.4 },
    ],
  },

};

// Freeze data to prevent accidental mutation
Object.freeze(STORY_DATA);
