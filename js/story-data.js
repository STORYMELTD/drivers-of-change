/**
 * DRIVERS OF CHANGE — Story Data
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 * ─────────────────────────────────────────────
 */

const STORY_DATA = {

  // ─── MURAL CONFIGURATION ────────────────────
  mural: {
    naturalWidth:  15000,
    naturalHeight: 1900,
    src: 'assets/images/mural-full.jpg',
    srcFallback: 'assets/images/mural-placeholder.svg',
  },

  // ─── CHAPTERS ────────────────────────────────
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

  // ─── HOTSPOTS ─────────────────────────────────
  hotspots: [

    // ── PROLOGUE ──────────────────────────────
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

    // ── CHAPTER 1: CONTEXT ────────────────────
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
          'Only 13% of annexed East Jerusalem land was left for Palestinian building — much of it already built up. Only 15% of East Jerusalem is allocated for Palestinian residential use.',
          'Palestinian housing density averages 1.8 people per room, almost twice that of Jewish neighborhoods in western Jerusalem. In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians, although they formed 36.9% of the city\'s population.',
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
          'Outdated sewage systems were identified in the Old City, Silwan, Ras Al-Amoud, Al-Thouri, Al-Tur, Sur Baher, and Al-Isawiya — causing overflow, winter flooding, damaged pipes, and public-health risks.',
          'There is a shortage of about 23,950 meters of sewage lines. Only 44% of residents had proper legal water-grid connections as recently as 2018.',
        ],
        image: null,
        audio: null,
      }
    },

    // ── CHAPTER 2: COMMUNITY ACTION ───────────
    {
      id: 'hs-2-women',
      position: { left: 34, top: 40 },
      triggerAt: 0.32,
      chapter: 2,
      content: {
        chapter: 'Chapter 2 · Community Action',
        title: 'Women as Change Actors',
        body: [
          'Women were central to the community work because many environmental practices begin at home. Four zero-waste workshops were held in Teachers Village, Burj Al-LuqLuq, Al-Hamawi Center, and Madaa Center — reaching 59 women.',
          'Sessions addressed household waste, food scraps, old clothing, water and resource conservation, plastic reduction, toxic household tools, and natural alternatives such as sanitizers and deodorants.',
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
          '55 women joined three plastic-bag upcycling workshops in Shu\'fat Camp, Al-Ram, and Bethany. They learned to collect, clean, cut, twist, and prepare single-use plastic bags into thread for weaving.',
          'A source of pollution became a practical material. Waste became craft. Individual action became visible community change.',
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
          'Six environmental awareness workshops with women and youth in Bethany, the Old City, Al-Suwaneh, and Shu\'fat Camp reached 97 participants.',
          'Young people discussed solid waste, climate change, carbon footprint, ecological agriculture, and individual responsibility. 900 cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram — encouraging merchants to reduce single-use plastic.',
        ],
        image: null,
        audio: null,
      }
    },

    // ── CHAPTER 3: SCHOOL ACTION ──────────────
    {
      id: 'hs-3-teachers',
      position: { left: 54, top: 38 },
      triggerAt: 0.52,
      chapter: 3,
      content: {
        chapter: 'Chapter 3 · School Action',
        title: 'Teachers as Multipliers',
        body: [
          'An eight-day Training of Trainers programme covered biodiversity, climate change, sustainable consumption, waste management, environmental leadership, soil testing, and composting.',
          '83.3% of teachers rated the climate-change lecture as extremely useful. 75% found the practical soil testing and compost tea production activities extremely useful. Teachers carry this knowledge beyond the project\'s direct activities.',
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
          'More than 300 students from grades 7–10 across ten secondary schools joined environmental clubs, awareness campaigns, cleaning drives, gardening projects, games, and competitions.',
          'Students painted murals on playground walls, designed recycling projects, built compost bins, conserved water and energy, and shared environmental messages with their peers.',
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
          'The pilot at Terra Santa School in the Old City introduced a raised herbal garden bed, compost tumbler, and aquaponic NFT green wall system. Ninth-grade students took part in soil preparation, planting, compost training, and aquaponics learning.',
          'The pilot showed strong student engagement, teacher enthusiasm, and visible improvement of the school yard. This model was then standardized for rollout across all participating schools.',
        ],
        image: null,
        audio: null,
      }
    },

    // ── CHAPTER 4: ADVOCACY ───────────────────
    {
      id: 'hs-4-evidence',
      position: { left: 71, top: 40 },
      triggerAt: 0.69,
      chapter: 4,
      content: {
        chapter: 'Chapter 4 · Advocacy',
        title: 'Evidence for Accountability',
        body: [
          'The project\'s advocacy work was built on three layers: legal research, technical assessment, and community documentation. Together they turned lived experience into a documented advocacy base.',
          'Ten dialogue meetings brought together community leaders, women\'s organizations, local businesses, and municipal representatives. An advisory committee of fifteen members met eight times to review findings and propose policy recommendations.',
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
          'The legal study framed environmental discrimination through international humanitarian law, human rights law, and the sustainable development agenda — addressing non-discrimination, the right to water, urban planning, land rights, and the prohibition on altering the nature of occupied territory.',
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
          'Youth volunteers distributed 900 reusable cloth bags across the Old City, Al-Ayzareh, and Al-Ram. Its message: "Start with your environment; be the first to drive the change."',
        ],
        image: null,
        audio: null,
      }
    },

    // ── CHAPTER 5: OUTCOMES ───────────────────
    {
      id: 'hs-5-knowledge',
      position: { left: 87, top: 40 },
      triggerAt: 0.86,
      chapter: 5,
      content: {
        chapter: 'Chapter 5 · Outcomes',
        title: 'Knowledge Spreads',
        body: [
          'Nine community workshops reached 147 participants. Six awareness workshops reached 97 more. Topics covered plastic pollution, solid waste, zero-waste practices, composting, natural alternatives, ecological agriculture, carbon footprint, and climate change.',
          'Legal and technical knowledge documented service discrimination, infrastructure gaps, zoning restrictions, budget disparities, water and wastewater issues, and environmental-rights violations.',
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
          'The Terra Santa pilot model was standardized: one raised herbal garden or green wall, one compost tumbler, and one aquaponic NFT green wall system — rolled out across all participating schools.',
          'Five families in Al-Ram received household composting units. 55 women gained plastic-upcycling skills. 15 women built foldable tables from wooden pallets. Communities built tools that work beyond the project cycle.',
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
          'Two tools strengthen continuity: an interactive online platform for lesson plans, videos, quizzes, games, and modules; and a mobile application connected to PENGON\'s Evidence-Based System for complaints, documentation, case tracking, and dashboards.',
          'The project\'s most important outcome is not a number. It is the repeated request — from communities, students, and teachers — for more. More workshops. More training. More time to practice. That demand is itself a driver of change.',
        ],
        image: null,
        audio: null,
      }
    },

  ],

  // ─── ANIMATED LAYERS ──────────────────────────
  // Populate when layer PNG files are named and uploaded
  layers: [],

  // ─── AUDIO ────────────────────────────────────
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
