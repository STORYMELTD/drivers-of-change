/**
 * DRIVERS OF CHANGE — Story Data
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 */

const STORY_DATA = {

  mural: {
    naturalWidth:  15000,
    naturalHeight: 1900,
    // Full mural — URL encoded Arabic filename
    src: 'assets/images/DoC-Layers/%D8%A7%D9%84%D9%84%D9%88%D8%AD%D8%A9%20%D9%83%D8%A7%D9%85%D9%84%D8%A9.jpg',
    srcFallback: 'assets/images/mural-placeholder.svg',
  },

  chapters: [
    {
      id: 0,
      label: 'Prologue',
      title: 'A City in Need',
      scrollStart: 0,
      scrollEnd: 0.14,
      color: '#4CAF82',
    },
    {
      id: 1,
      label: 'Chapter 1',
      title: 'Context',
      scrollStart: 0.14,
      scrollEnd: 0.30,
      color: '#4CAF82',
    },
    {
      id: 2,
      label: 'Chapter 2',
      title: 'Community Action',
      scrollStart: 0.30,
      scrollEnd: 0.50,
      color: '#4CAF82',
    },
    {
      id: 3,
      label: 'Chapter 3',
      title: 'School Action',
      scrollStart: 0.50,
      scrollEnd: 0.67,
      color: '#4CAF82',
    },
    {
      id: 4,
      label: 'Chapter 4',
      title: 'Advocacy',
      scrollStart: 0.67,
      scrollEnd: 0.84,
      color: '#4CAF82',
    },
    {
      id: 5,
      label: 'Chapter 5',
      title: 'Outcomes',
      scrollStart: 0.84,
      scrollEnd: 1.0,
      color: '#4CAF82',
    },
  ],

  hotspots: [
    {
      id: 'hs-prologue-1',
      position: { left: 4, top: 42 },
      triggerAt: 0.02,
      chapter: 0,
      content: {
        chapter: 'Prologue',
        title: 'Drivers of Change',
        body: [
          'Environmental problems in East Jerusalem are not only technical failures. A missed waste-collection route, an overflowing sewage line, a street without proper infrastructure, or a neighborhood without green space all point to a deeper structure of unequal planning, unequal budgets, and unequal access to environmental rights.',
          'Implemented by PENGON / Friends of the Earth Palestine, in partnership with Overseas and co-funded by the European Union, this project worked from 2022 to 2025 with five communities: Al-Ram, Shu\'fat Refugee Camp, Al-Isarieh, Silwan, and the Old City of Jerusalem.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-prologue-2',
      position: { left: 10, top: 58 },
      triggerAt: 0.07,
      chapter: 0,
      content: {
        chapter: 'Prologue',
        title: 'Five Communities',
        body: [
          'The project worked across five distinct communities in East Jerusalem, each facing its own pattern of environmental injustice: Al-Ram, Shu\'fat Refugee Camp, Al-Isarieh, Silwan, and the Old City of Jerusalem.',
          'Around 580,000 people inhabit East Jerusalem. 61% are Palestinian. Palestinian neighborhoods continue to receive weaker infrastructure and poorer services — not by accident, but by design.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-1-injustice',
      position: { left: 17, top: 38 },
      triggerAt: 0.16,
      chapter: 1,
      content: {
        chapter: 'Chapter 1 · Context',
        title: 'Environmental Injustice',
        body: [
          'In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, 6% of waste collection routes, and 4% of total container capacity.',
          'Palestinian areas face irregular collection, insufficient containers, weak street cleaning, bad smells, insects, rats, and waste burning. This is not neglect — it is a documented pattern of discrimination.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-1-legal',
      position: { left: 22, top: 55 },
      triggerAt: 0.20,
      chapter: 1,
      content: {
        chapter: 'Chapter 1 · Context',
        title: 'Legal Evidence',
        body: [
          'Only 13% of annexed East Jerusalem land was left for Palestinian building. Palestinian housing density averages 1.8 people per room — almost twice that of Jewish neighborhoods in western Jerusalem.',
          'In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians, although they formed 36.9% of the city\'s population.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-1-technical',
      position: { left: 28, top: 44 },
      triggerAt: 0.26,
      chapter: 1,
      content: {
        chapter: 'Chapter 1 · Context',
        title: 'Technical Evidence',
        body: [
          'Outdated sewage systems in the Old City, Silwan, Ras Al-Amoud, Al-Thouri, Al-Tur, Sur Baher, and Al-Isawiya cause overflow, winter flooding, and public-health risks.',
          'There is a shortage of about 23,950 meters of sewage lines. Only 44% of residents had proper legal water-grid connections as recently as 2018.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-2-women',
      position: { left: 34, top: 40 },
      triggerAt: 0.32,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Community Action',
        title: 'Women as Change Actors',
        body: [
          'Four zero-waste workshops were held in Teachers Village, Burj Al-LuqLuq, Al-Hamawi Center, and Madaa Center — reaching 59 women.',
          'Sessions addressed household waste, food scraps, old clothing, water conservation, plastic reduction, and natural alternatives such as sanitizers and deodorants.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-2-plastic',
      position: { left: 40, top: 58 },
      triggerAt: 0.38,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Community Action',
        title: 'Turning Plastic into Thread',
        body: [
          '55 women joined three plastic-bag upcycling workshops in Shu\'fat Camp, Al-Ram, and Bethany. They learned to collect, clean, cut, twist, and weave single-use plastic bags into useful products.',
          'A source of pollution became a practical material. Waste became craft.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-2-youth',
      position: { left: 46, top: 44 },
      triggerAt: 0.44,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Community Action',
        title: 'Youth Environmental Leadership',
        body: [
          'Six workshops with women and youth in Bethany, the Old City, Al-Suwaneh, and Shu\'fat Camp reached 97 participants.',
          '900 cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram — encouraging merchants to reduce single-use plastic. Its message: "Start with your environment; be the first to drive the change."',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-3-teachers',
      position: { left: 54, top: 38 },
      triggerAt: 0.52,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · School Action',
        title: 'Teachers as Multipliers',
        body: [
          'An eight-day Training of Trainers programme covered biodiversity, climate change, sustainable consumption, waste management, soil testing, and composting.',
          '83.3% of teachers rated the climate-change lecture as extremely useful. 75% found the practical soil and compost activities extremely useful.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-3-students',
      position: { left: 60, top: 55 },
      triggerAt: 0.58,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · School Action',
        title: 'Students as Environmental Leaders',
        body: [
          'More than 300 students from grades 7–10 across ten secondary schools joined environmental clubs, awareness campaigns, cleaning drives, gardening projects, and competitions.',
          'Students painted murals on playground walls, designed recycling projects, built compost bins, and shared environmental messages with their peers.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-3-terra-santa',
      position: { left: 64, top: 42 },
      triggerAt: 0.63,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · School Action',
        title: 'Terra Santa: A Living School',
        body: [
          'The pilot at Terra Santa School in the Old City introduced a raised herbal garden bed, compost tumbler, and aquaponic NFT green wall system.',
          'Ninth-grade students took part in soil preparation, planting, compost training, and aquaponics learning. This model was then standardized for all participating schools.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-4-evidence',
      position: { left: 71, top: 40 },
      triggerAt: 0.69,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Advocacy',
        title: 'Evidence for Accountability',
        body: [
          'The advocacy work was built on three layers: legal research, technical assessment, and community documentation — turning lived experience into a documented advocacy base.',
          'Ten dialogue meetings brought together community leaders, women\'s organizations, local businesses, and municipal representatives. An advisory committee of fifteen members met eight times.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-4-rights',
      position: { left: 77, top: 56 },
      triggerAt: 0.75,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Advocacy',
        title: 'Rights-Based Environmental Justice',
        body: [
          'The legal study framed environmental discrimination through international humanitarian law, human rights law, and the sustainable development agenda.',
          'Seminars introduced leaders, activists, and legal experts to environmental justice, documentation of violations, legal channels, and public campaigns.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-4-noplastic',
      position: { left: 82, top: 43 },
      triggerAt: 0.80,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Advocacy',
        title: 'No Plastic Campaign',
        body: [
          'The No Plastic Campaign made advocacy visible in daily life — bringing together policy discussion, awareness, private-sector engagement, and direct outreach.',
          '900 reusable cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram. "Start with your environment; be the first to drive the change."',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-5-knowledge',
      position: { left: 87, top: 40 },
      triggerAt: 0.86,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Outcomes',
        title: 'Knowledge Spreads',
        body: [
          'Nine community workshops reached 147 participants. Six awareness workshops reached 97 more — covering plastic pollution, composting, natural alternatives, ecological agriculture, and climate change.',
          'Legal and technical knowledge documented service discrimination, infrastructure gaps, budget disparities, and environmental-rights violations.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-5-systems',
      position: { left: 91, top: 55 },
      triggerAt: 0.90,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Outcomes',
        title: 'Systems That Continue',
        body: [
          'The Terra Santa pilot model was standardized: one raised herbal garden, one compost tumbler, one aquaponic NFT green wall — rolled out across all participating schools.',
          'Five families in Al-Ram received household composting units. 55 women gained plastic-upcycling skills. Communities built tools that work beyond the project cycle.',
        ],
        image: null,
        audio: null,
      }
    },
    {
      id: 'hs-5-future',
      position: { left: 95, top: 42 },
      triggerAt: 0.94,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Outcomes',
        title: 'Built to Last',
        body: [
          'Two tools strengthen continuity: an interactive online platform for lesson plans, videos, and games; and a mobile application for complaints, documentation, and case tracking.',
          'The project\'s most important outcome is the repeated request from communities, students, and teachers for more. That demand is itself a driver of change.',
        ],
        image: null,
        audio: null,
      }
    },
  ],

  // ── ANIMATED LAYERS ──────────────────────────────
  // All files are in assets/images/DoC-Layers/
  // Arabic filenames are URL-encoded below
  layers: [
    {
      id: 'sky',
      src: 'assets/images/DoC-Layers/%D8%B3%D9%85%D8%A7%D8%A1_.png',
      label: 'السماء — Sky',
      type: 'parallax',
      depth: 0.15,   // very slow — sky barely moves
      zIndex: 1,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
    {
      id: 'building-shadows',
      src: 'assets/images/DoC-Layers/%D8%B8%D9%84%20%D9%85%D8%A8%D8%A7%D9%86%D9%8A_.png',
      label: 'ظل مباني — Building Shadows',
      type: 'parallax',
      depth: 0.4,
      zIndex: 2,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
    {
      id: 'cactus',
      src: 'assets/images/DoC-Layers/%D8%B5%D8%A8%D8%A7%D8%B1_.png',
      label: 'صبار — Cactus',
      type: 'parallax',
      depth: 0.6,
      zIndex: 3,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
    {
      id: 'cactus-face',
      src: 'assets/images/DoC-Layers/%D8%AC%D9%87%D8%A9%20%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9_.png',
      label: 'جهة الصبرة — Cactus Face',
      type: 'parallax',
      depth: 0.6,
      zIndex: 4,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
    {
      id: 'cypress-tree',
      src: 'assets/images/DoC-Layers/%D8%B4%D8%AC%D8%B1%D8%A9%20%D8%B3%D8%B1%D9%88_.png',
      label: 'شجرة سرو — Cypress Tree',
      type: 'float',
      depth: 0.7,
      zIndex: 5,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
    {
      id: 'plant-near-buildings',
      src: 'assets/images/DoC-Layers/%D9%86%D8%A8%D8%A7%D8%AA%20%D8%B9%D9%86%D8%AF%20%D9%85%D8%A8%D8%A7%D9%86%D9%8A%2019.png',
      label: 'نبات عند مباني — Plant near Buildings',
      type: 'parallax',
      depth: 0.65,
      zIndex: 5,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.1,
    },
    {
      id: 'plant-behind-girl',
      src: 'assets/images/DoC-Layers/%D9%86%D8%A8%D8%AA%D8%A9%20%D8%AE%D9%84%D9%81%20%D8%A7%D9%84%D8%A8%D9%86%D8%AA_.png',
      label: 'نبتة خلف البنت — Plant behind Girl',
      type: 'float',
      depth: 0.7,
      zIndex: 6,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.3,
    },
    {
      id: 'chain-plant-1',
      src: 'assets/images/DoC-Layers/%D9%86%D8%A8%D8%AA%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9_.png',
      label: 'نبتة في السنسلة الاولة — Plant in First Chain',
      type: 'float',
      depth: 0.8,
      zIndex: 7,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.4,
    },
    {
      id: 'chain-plant-2',
      src: 'assets/images/DoC-Layers/%D9%86%D8%A8%D8%AA%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9_.png',
      label: 'نبتة في السنسلة الثانية — Plant in Second Chain',
      type: 'float',
      depth: 0.8,
      zIndex: 7,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.5,
    },
    {
      id: 'girl-hand',
      src: 'assets/images/DoC-Layers/%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A8%D9%86%D8%AA%20%D8%A7%D9%84%D9%8A%20%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7%20%D8%A7%D9%84%D9%8A%D8%AF_.png',
      label: 'يد البنت — Girl\'s Sewing Hand',
      type: 'fade-in',
      depth: 0.9,
      zIndex: 8,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.45,
    },
    {
      id: 'rope-1',
      src: 'assets/images/DoC-Layers/%D8%AD%D8%A8%D9%84%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9_.png',
      label: 'حبلة الاولة — First Rope',
      type: 'parallax',
      depth: 0.85,
      zIndex: 8,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.35,
    },
    {
      id: 'basket-2',
      src: 'assets/images/DoC-Layers/%D8%B3%D9%84%D8%A9%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9_.png',
      label: 'سلة الثانية — Second Basket',
      type: 'float',
      depth: 0.85,
      zIndex: 8,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.55,
    },
    {
      id: 'to-chain',
      src: 'assets/images/DoC-Layers/%D8%A7%D9%84%D9%89%20%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9.png',
      label: 'الى السنسلة — To the Chain',
      type: 'parallax',
      depth: 0.9,
      zIndex: 9,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0.6,
    },
    {
      id: 'layer-71',
      src: 'assets/images/DoC-Layers/Layer%2071.png',
      label: 'Layer 71',
      type: 'parallax',
      depth: 0.75,
      zIndex: 6,
      position: { left: 0, top: 0, width: '100%', height: '100%' },
      triggerAt: 0,
    },
  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};

Object.freeze(STORY_DATA);

// ── PATCH: Add body text to chapters for chapter boxes ──
// (Injected after freeze — add before Object.freeze in production)
STORY_DATA.chapters[0].body = [
  'Environmental problems in East Jerusalem are not only technical failures.',
  'A missed waste-collection route, an overflowing sewage line, a street without proper infrastructure — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
];
STORY_DATA.chapters[1].body = [
  'In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, and 6% of waste collection routes.',
  'Only 13% of annexed East Jerusalem land was left for Palestinian building. In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians.',
];
STORY_DATA.chapters[2].body = [
  '59 women joined zero-waste workshops. 55 women learned plastic-bag upcycling — turning pollution into practical craft.',
  '900 cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram. "Start with your environment; be the first to drive the change."',
];
STORY_DATA.chapters[3].body = [
  'More than 300 students from grades 7–10 across ten schools joined environmental clubs, awareness campaigns, and gardening projects.',
  'The Terra Santa pilot introduced a raised herbal garden, compost tumbler, and aquaponic green wall. Students prepared soil, planted, and learned.',
];
STORY_DATA.chapters[4].body = [
  'Ten dialogue meetings brought together community leaders, women\'s organizations, local businesses, and municipal representatives.',
  'The legal study framed environmental discrimination through international human rights law — addressing the right to water, land rights, and the prohibition on altering occupied territory.',
];
STORY_DATA.chapters[5].body = [
  'Nine community workshops reached 147 participants. Six awareness workshops reached 97 more.',
  'The project\'s most important outcome is the repeated request from communities, students, and teachers for more. That demand is itself a driver of change.',
];
