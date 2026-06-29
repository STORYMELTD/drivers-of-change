/**
 * DRIVERS OF CHANGE — Story Data v2
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * Layer assembly: 183 layers from PSD, numbered 0000-0182
 * Photoshop exports top→bottom, so 0000 = topmost PS layer
 * In CSS/HTML we reverse: 0182 (Background) = z-index 1, 0000 = z-index 183
 */

const STORY_DATA = {

  mural: {
    naturalWidth:  15000,
    naturalHeight: 1900,
    src: 'assets/images/DoC-Layers/%D8%A7%D9%84%D9%84%D9%88%D8%AD%D8%A9%20%D9%83%D8%A7%D9%85%D9%84%D8%A9.jpg',
    srcFallback: 'assets/images/mural-placeholder.svg',
  },

  chapters: [
    {
      id: 0, label: 'Prologue', title: 'A City in Need',
      scrollStart: 0, scrollEnd: 0.14, color: '#C4A35A',
      body: [
        'Environmental problems in East Jerusalem are not only technical failures.',
        'A missed waste-collection route, an overflowing sewage line, a street without proper infrastructure — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
      ]
    },
    {
      id: 1, label: 'Chapter 1', title: 'Context',
      scrollStart: 0.14, scrollEnd: 0.30, color: '#C4A35A',
      body: [
        'In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, and 6% of waste collection routes.',
        'Only 13% of annexed East Jerusalem land was left for Palestinian building. In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians.',
      ]
    },
    {
      id: 2, label: 'Chapter 2', title: 'Community Action',
      scrollStart: 0.30, scrollEnd: 0.50, color: '#C4A35A',
      body: [
        '59 women joined zero-waste workshops. 55 women learned plastic-bag upcycling — turning pollution into practical craft.',
        '900 cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram. "Start with your environment; be the first to drive the change."',
      ]
    },
    {
      id: 3, label: 'Chapter 3', title: 'School Action',
      scrollStart: 0.50, scrollEnd: 0.67, color: '#C4A35A',
      body: [
        'More than 300 students from grades 7–10 across ten secondary schools joined environmental clubs, awareness campaigns, and gardening projects.',
        'The Terra Santa pilot introduced a raised herbal garden, compost tumbler, and aquaponic NFT green wall. Students prepared soil, planted, and learned.',
      ]
    },
    {
      id: 4, label: 'Chapter 4', title: 'Advocacy',
      scrollStart: 0.67, scrollEnd: 0.84, color: '#C4A35A',
      body: [
        'Ten dialogue meetings brought together community leaders, women\'s organizations, local businesses, and municipal representatives.',
        'The legal study framed environmental discrimination through international human rights law — addressing the right to water, land rights, and the prohibition on altering occupied territory.',
      ]
    },
    {
      id: 5, label: 'Chapter 5', title: 'Outcomes',
      scrollStart: 0.84, scrollEnd: 1.0, color: '#C4A35A',
      body: [
        'Nine community workshops reached 147 participants. Six awareness workshops reached 97 more.',
        'The project\'s most important outcome is the repeated request from communities, students, and teachers for more. That demand is itself a driver of change.',
      ]
    },
  ],

  hotspots: [
    {
      id: 'hs-prologue-1', position: { left: 4, top: 42 }, triggerAt: 0.02, chapter: 0,
      content: { chapter: 'Prologue', title: 'Drivers of Change',
        body: ['Environmental problems in East Jerusalem are not only technical failures. A missed waste-collection route, an overflowing sewage line, a neighborhood without green space all point to a deeper structure of unequal planning and unequal access to environmental rights.',
               'Implemented by PENGON / Friends of the Earth Palestine, in partnership with Overseas and co-funded by the European Union, this project worked from 2022 to 2025 with five communities.'],
        image: null, audio: null }
    },
    {
      id: 'hs-1-injustice', position: { left: 17, top: 38 }, triggerAt: 0.16, chapter: 1,
      content: { chapter: 'Chapter 1 · Context', title: 'Environmental Injustice',
        body: ['In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, 6% of waste collection routes, and 4% of total container capacity.',
               'Palestinian areas face irregular collection, insufficient containers, weak street cleaning, bad smells, insects, rats, and waste burning. This is not neglect — it is a documented pattern of discrimination.'],
        image: null, audio: null }
    },
    {
      id: 'hs-1-legal', position: { left: 24, top: 55 }, triggerAt: 0.22, chapter: 1,
      content: { chapter: 'Chapter 1 · Context', title: 'Legal Evidence',
        body: ['Only 13% of annexed East Jerusalem land was left for Palestinian building. Palestinian housing density averages 1.8 people per room — almost twice that of Jewish neighborhoods.',
               'In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians, although they formed 36.9% of the city\'s population.'],
        image: null, audio: null }
    },
    {
      id: 'hs-2-women', position: { left: 34, top: 40 }, triggerAt: 0.32, chapter: 2,
      content: { chapter: 'Chapter 2 · Community Action', title: 'Women as Change Actors',
        body: ['Four zero-waste workshops were held in Teachers Village, Burj Al-LuqLuq, Al-Hamawi Center, and Madaa Center — reaching 59 women.',
               'Sessions addressed household waste, food scraps, water conservation, plastic reduction, and natural alternatives such as sanitizers and deodorants.'],
        image: null, audio: null }
    },
    {
      id: 'hs-2-plastic', position: { left: 42, top: 58 }, triggerAt: 0.40, chapter: 2,
      content: { chapter: 'Chapter 2 · Community Action', title: 'Turning Plastic into Thread',
        body: ['55 women joined three plastic-bag upcycling workshops in Shu\'fat Camp, Al-Ram, and Bethany.',
               'They learned to collect, clean, cut, twist, and weave single-use plastic bags into useful products. A source of pollution became practical craft.'],
        image: null, audio: null }
    },
    {
      id: 'hs-3-students', position: { left: 55, top: 38 }, triggerAt: 0.52, chapter: 3,
      content: { chapter: 'Chapter 3 · School Action', title: 'Students as Environmental Leaders',
        body: ['More than 300 students from grades 7–10 across ten secondary schools joined environmental clubs, awareness campaigns, cleaning drives, and gardening projects.',
               'Students painted murals on playground walls, designed recycling projects, built compost bins, and shared environmental messages with their peers.'],
        image: null, audio: null }
    },
    {
      id: 'hs-3-terra', position: { left: 62, top: 55 }, triggerAt: 0.60, chapter: 3,
      content: { chapter: 'Chapter 3 · School Action', title: 'Terra Santa: A Living School',
        body: ['The pilot at Terra Santa School in the Old City introduced a raised herbal garden bed, compost tumbler, and aquaponic NFT green wall system.',
               'Ninth-grade students took part in soil preparation, planting, compost training, and aquaponics learning. This model was standardized for all participating schools.'],
        image: null, audio: null }
    },
    {
      id: 'hs-4-evidence', position: { left: 71, top: 40 }, triggerAt: 0.69, chapter: 4,
      content: { chapter: 'Chapter 4 · Advocacy', title: 'Evidence for Accountability',
        body: ['The advocacy work was built on three layers: legal research, technical assessment, and community documentation.',
               'Ten dialogue meetings brought together community leaders, women\'s organizations, local businesses, and municipal representatives. An advisory committee of fifteen members met eight times.'],
        image: null, audio: null }
    },
    {
      id: 'hs-4-noplastic', position: { left: 79, top: 55 }, triggerAt: 0.76, chapter: 4,
      content: { chapter: 'Chapter 4 · Advocacy', title: 'No Plastic Campaign',
        body: ['The No Plastic Campaign made advocacy visible in daily life — bringing together policy discussion, awareness, private-sector engagement, and direct outreach.',
               '900 reusable cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram. "Start with your environment; be the first to drive the change."'],
        image: null, audio: null }
    },
    {
      id: 'hs-5-systems', position: { left: 88, top: 42 }, triggerAt: 0.86, chapter: 5,
      content: { chapter: 'Chapter 5 · Outcomes', title: 'Systems That Continue',
        body: ['The Terra Santa pilot model was standardized: one raised herbal garden, one compost tumbler, one aquaponic NFT green wall — rolled out across all participating schools.',
               'Five families in Al-Ram received household composting units. 55 women gained plastic-upcycling skills. Communities built tools that work beyond the project cycle.'],
        image: null, audio: null }
    },
    {
      id: 'hs-5-future', position: { left: 94, top: 55 }, triggerAt: 0.92, chapter: 5,
      content: { chapter: 'Chapter 5 · Outcomes', title: 'Built to Last',
        body: ['Two tools strengthen continuity: an interactive online platform for lesson plans, videos, and games; and a mobile application for complaints, documentation, and case tracking.',
               'The project\'s most important outcome is the repeated request from communities, students, and teachers for more. That demand is itself a driver of change.'],
        image: null, audio: null }
    },
  ],

  // ── LAYER ASSEMBLY ──────────────────────────────────────────────────
  // All layers are full canvas (15000×1900px) with transparency.
  // They stack exactly as in Photoshop — 0182=bottom, 0000=top.
  // zIndex: 0182→1, 0000→183 (reversed from export number)
  //
  // Animation types:
  //   'static'   — no movement beyond base mural pan
  //   'parallax' — moves at depth × base speed (depth<1=far, depth>1=close)
  //   'float'    — parallax + gentle vertical oscillation
  //   'sway'     — gentle left-right oscillation (trees, plants)
  //
  // triggerAt: scroll progress (0-1) when layer fades in (0 = always visible)

  layers: [],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};

// Patch: add body text that gets appended after freeze
// (kept here for simplicity in v1)
