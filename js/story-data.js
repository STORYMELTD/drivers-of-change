/**
 * DRIVERS OF CHANGE — Story Data v4
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * Layer naming: DoC_001.png through DoC_183.png
 * Clean English filenames — no encoding issues
 * Skipped: Inserted-Image layers, Layer-71/77/42/65/76/30/2 (no transparency)
 * All depth: 1.0 — composition safe at all screen sizes
 * Animation: float (trees/plants/birds), sway (cypress), fade-in (characters)
 */

const STORY_DATA = {

  mural: {
    naturalWidth:  15000,
    naturalHeight: 1900,
    src: 'assets/images/DoC-Layers/%D8%A7%D9%84%D9%84%D9%88%D8%AD%D8%A9%20%D9%83%D8%A7%D9%85%D9%84%D8%A9.jpg',
    srcFallback: 'assets/images/mural-placeholder.svg',
  },

  chapters: [
    { id:0, label:'Prologue', title:'A City in Need', scrollStart:0, scrollEnd:0.14, color:'#C4A35A',
      body:['Environmental problems in East Jerusalem are not only technical failures.','A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.'] },
    { id:1, label:'Chapter 1', title:'Context', scrollStart:0.14, scrollEnd:0.30, color:'#C4A35A',
      body:['In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, and 6% of waste collection routes.','Only 13% of annexed East Jerusalem land was left for Palestinian building. In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians.'] },
    { id:2, label:'Chapter 2', title:'Community Action', scrollStart:0.30, scrollEnd:0.50, color:'#C4A35A',
      body:['59 women joined zero-waste workshops. 55 women learned plastic-bag upcycling — turning pollution into practical craft.','900 cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram. "Start with your environment; be the first to drive the change."'] },
    { id:3, label:'Chapter 3', title:'School Action', scrollStart:0.50, scrollEnd:0.67, color:'#C4A35A',
      body:['More than 300 students from grades 7-10 across ten secondary schools joined environmental clubs, awareness campaigns, and gardening projects.','The Terra Santa pilot introduced a raised herbal garden, compost tumbler, and aquaponic NFT green wall. Students prepared soil, planted, and learned.'] },
    { id:4, label:'Chapter 4', title:'Advocacy', scrollStart:0.67, scrollEnd:0.84, color:'#C4A35A',
      body:['Ten dialogue meetings brought together community leaders, organizations, local businesses, and municipal representatives.','The legal study framed environmental discrimination through international human rights law — addressing the right to water, land rights, and the prohibition on altering occupied territory.'] },
    { id:5, label:'Chapter 5', title:'Outcomes', scrollStart:0.84, scrollEnd:1.0, color:'#C4A35A',
      body:['Nine community workshops reached 147 participants. Six awareness workshops reached 97 more.','The repeated request from communities, students, and teachers for more is itself a driver of change.'] },
  ],

  hotspots: [
    { id:'hs-p1', position:{left:4,top:42}, triggerAt:0.02, chapter:0, content:{ chapter:'Prologue', title:'Drivers of Change', body:['Environmental problems in East Jerusalem are not only technical failures. A missed waste-collection route, an overflowing sewage line, a neighborhood without green space all point to a deeper structure of unequal planning and unequal access to environmental rights.','Implemented by PENGON / Friends of the Earth Palestine, in partnership with Overseas and co-funded by the European Union, this project worked from 2022 to 2025 with five communities.'], image:null, audio:null }},
    { id:'hs-1a', position:{left:17,top:38}, triggerAt:0.16, chapter:1, content:{ chapter:'Chapter 1 · Context', title:'Environmental Injustice', body:['In 2016, East Jerusalem received only 10% of hygiene workers, 7% of garbage containers, 6% of waste collection routes, and 4% of total container capacity.','Palestinian areas face irregular collection, insufficient containers, weak street cleaning, bad smells, insects, rats, and waste burning.'], image:null, audio:null }},
    { id:'hs-1b', position:{left:24,top:55}, triggerAt:0.22, chapter:1, content:{ chapter:'Chapter 1 · Context', title:'Legal Evidence', body:['Only 13% of annexed East Jerusalem land was left for Palestinian building. Palestinian housing density averages 1.8 people per room.','In 2013, only 10.1% of the Jerusalem Municipality budget benefited Palestinians, although they formed 36.9% of the population.'], image:null, audio:null }},
    { id:'hs-2a', position:{left:34,top:40}, triggerAt:0.32, chapter:2, content:{ chapter:'Chapter 2 · Community Action', title:'Women as Change Actors', body:['Four zero-waste workshops reached 59 women in Teachers Village, Burj Al-LuqLuq, Al-Hamawi Center, and Madaa Center.','Sessions addressed household waste, food scraps, water conservation, plastic reduction, and natural alternatives.'], image:null, audio:null }},
    { id:'hs-2b', position:{left:42,top:58}, triggerAt:0.40, chapter:2, content:{ chapter:'Chapter 2 · Community Action', title:'Turning Plastic into Thread', body:['55 women joined three plastic-bag upcycling workshops in Shu\'fat Camp, Al-Ram, and Bethany.','They learned to collect, clean, cut, twist, and weave single-use plastic bags into useful products.'], image:null, audio:null }},
    { id:'hs-3a', position:{left:55,top:38}, triggerAt:0.52, chapter:3, content:{ chapter:'Chapter 3 · School Action', title:'Students as Environmental Leaders', body:['More than 300 students across ten secondary schools joined environmental clubs and gardening projects.','Students painted murals, designed recycling projects, built compost bins, and shared environmental messages.'], image:null, audio:null }},
    { id:'hs-3b', position:{left:62,top:55}, triggerAt:0.60, chapter:3, content:{ chapter:'Chapter 3 · School Action', title:'Terra Santa: A Living School', body:['The pilot at Terra Santa School introduced a raised herbal garden bed, compost tumbler, and aquaponic NFT green wall.','Students took part in soil preparation, planting, compost training, and aquaponics learning.'], image:null, audio:null }},
    { id:'hs-4a', position:{left:71,top:40}, triggerAt:0.69, chapter:4, content:{ chapter:'Chapter 4 · Advocacy', title:'Evidence for Accountability', body:['The advocacy work was built on three layers: legal research, technical assessment, and community documentation.','Ten dialogue meetings brought together community leaders, organizations, businesses, and municipal representatives.'], image:null, audio:null }},
    { id:'hs-4b', position:{left:79,top:55}, triggerAt:0.76, chapter:4, content:{ chapter:'Chapter 4 · Advocacy', title:'No Plastic Campaign', body:['The No Plastic Campaign made advocacy visible in daily life — bringing together policy discussion, awareness, and direct outreach.','900 reusable cloth bags were distributed across the Old City, Al-Ayzareh, and Al-Ram.'], image:null, audio:null }},
    { id:'hs-5a', position:{left:88,top:42}, triggerAt:0.86, chapter:5, content:{ chapter:'Chapter 5 · Outcomes', title:'Systems That Continue', body:['The Terra Santa model was standardized: one raised herbal garden, one compost tumbler, one aquaponic green wall — for all schools.','Five families in Al-Ram received household composting units. 55 women gained plastic-upcycling skills.'], image:null, audio:null }},
    { id:'hs-5b', position:{left:94,top:55}, triggerAt:0.92, chapter:5, content:{ chapter:'Chapter 5 · Outcomes', title:'Built to Last', body:['Two tools strengthen continuity: an interactive online platform and a mobile application for complaints and documentation.','The repeated request from communities, students, and teachers for more is itself a driver of change.'], image:null, audio:null }},
  ],

  // ── LAYERS ─────────────────────────────────────────────────────────
  // Files: DoC_001.png to DoC_183.png (clean English names)
  // Skipped: 001-004 (photos), 010-011-013-015-018-020-021 (Inserted-Image)
  // Skipped: 007 055 086 093-109 122-125 128-129 147 158 170 (unknown/Layer-XX)
  // All depth: 1.0 (no horizontal parallax — composition safe at all screen sizes)
  // z-order: higher number = rendered on top
  // Photoshop stack is TOP→BOTTOM = DoC_001 is topmost PS layer
  // So z-index is REVERSED: DoC_183(bg)=z:1, DoC_001(top)=z:183

  layers: [

    // ── BACKGROUND & SKY (bottom of stack) ──
    { id:'bg',       src:'assets/images/DoC-Layers/DoC_183.png', type:'static',  depth:1.0, zIndex:1,   triggerAt:0 },
    { id:'sky',      src:'assets/images/DoC-Layers/DoC_181.png', type:'static',  depth:1.0, zIndex:2,   triggerAt:0 },
    { id:'shd-bld',  src:'assets/images/DoC-Layers/DoC_182.png', type:'static',  depth:1.0, zIndex:3,   triggerAt:0 },

    // ── DOME OF THE ROCK & MOSQUE ──
    { id:'dome',     src:'assets/images/DoC-Layers/DoC_171.png', type:'static',  depth:1.0, zIndex:10,  triggerAt:0 },
    { id:'mosque',   src:'assets/images/DoC-Layers/DoC_162.png', type:'static',  depth:1.0, zIndex:11,  triggerAt:0 },
    { id:'dome-tr',  src:'assets/images/DoC-Layers/DoC_161.png', type:'float',   depth:1.0, zIndex:12,  triggerAt:0 },

    // ── DISTANT BUILDINGS ──
    { id:'bld-180',  src:'assets/images/DoC-Layers/DoC_180.png', type:'static',  depth:1.0, zIndex:20,  triggerAt:0 },
    { id:'bld-179',  src:'assets/images/DoC-Layers/DoC_179.png', type:'static',  depth:1.0, zIndex:21,  triggerAt:0 },
    { id:'bld-178',  src:'assets/images/DoC-Layers/DoC_178.png', type:'static',  depth:1.0, zIndex:22,  triggerAt:0 },
    { id:'bld-177',  src:'assets/images/DoC-Layers/DoC_177.png', type:'static',  depth:1.0, zIndex:23,  triggerAt:0 },
    { id:'bld-176',  src:'assets/images/DoC-Layers/DoC_176.png', type:'static',  depth:1.0, zIndex:24,  triggerAt:0 },
    { id:'bld-175',  src:'assets/images/DoC-Layers/DoC_175.png', type:'static',  depth:1.0, zIndex:25,  triggerAt:0 },
    { id:'bld-174',  src:'assets/images/DoC-Layers/DoC_174.png', type:'static',  depth:1.0, zIndex:26,  triggerAt:0 },
    { id:'bld-173',  src:'assets/images/DoC-Layers/DoC_173.png', type:'static',  depth:1.0, zIndex:27,  triggerAt:0 },
    { id:'bld-172',  src:'assets/images/DoC-Layers/DoC_172.png', type:'static',  depth:1.0, zIndex:28,  triggerAt:0 },

    // ── GROUND & ROAD ──
    { id:'ground',   src:'assets/images/DoC-Layers/DoC_165.png', type:'static',  depth:1.0, zIndex:30,  triggerAt:0 },
    { id:'road',     src:'assets/images/DoC-Layers/DoC_164.png', type:'static',  depth:1.0, zIndex:31,  triggerAt:0 },
    { id:'gnd-flw',  src:'assets/images/DoC-Layers/DoC_167.png', type:'static',  depth:1.0, zIndex:32,  triggerAt:0 },
    { id:'gnd-red',  src:'assets/images/DoC-Layers/DoC_169.png', type:'static',  depth:1.0, zIndex:33,  triggerAt:0 },

    // ── MID BUILDINGS ──
    { id:'bld-168',  src:'assets/images/DoC-Layers/DoC_168.png', type:'static',  depth:1.0, zIndex:35,  triggerAt:0 },
    { id:'bld-166',  src:'assets/images/DoC-Layers/DoC_166.png', type:'static',  depth:1.0, zIndex:36,  triggerAt:0 },
    { id:'bld-163',  src:'assets/images/DoC-Layers/DoC_163.png', type:'static',  depth:1.0, zIndex:37,  triggerAt:0 },
    { id:'bld-160',  src:'assets/images/DoC-Layers/DoC_160.png', type:'static',  depth:1.0, zIndex:38,  triggerAt:0 },
    { id:'bld-159',  src:'assets/images/DoC-Layers/DoC_159.png', type:'static',  depth:1.0, zIndex:39,  triggerAt:0 },
    { id:'bld-157',  src:'assets/images/DoC-Layers/DoC_157.png', type:'static',  depth:1.0, zIndex:40,  triggerAt:0 },
    { id:'bld-134',  src:'assets/images/DoC-Layers/DoC_134.png', type:'static',  depth:1.0, zIndex:41,  triggerAt:0 },
    { id:'bld-133',  src:'assets/images/DoC-Layers/DoC_133.png', type:'static',  depth:1.0, zIndex:42,  triggerAt:0 },
    { id:'bld-130',  src:'assets/images/DoC-Layers/DoC_130.png', type:'static',  depth:1.0, zIndex:43,  triggerAt:0 },
    { id:'bld-081',  src:'assets/images/DoC-Layers/DoC_081.png', type:'static',  depth:1.0, zIndex:44,  triggerAt:0 },
    { id:'bld-080',  src:'assets/images/DoC-Layers/DoC_080.png', type:'static',  depth:1.0, zIndex:45,  triggerAt:0 },
    { id:'bld-077',  src:'assets/images/DoC-Layers/DoC_077.png', type:'static',  depth:1.0, zIndex:46,  triggerAt:0 },
    { id:'bld-076',  src:'assets/images/DoC-Layers/DoC_076.png', type:'static',  depth:1.0, zIndex:47,  triggerAt:0 },
    { id:'bld-075',  src:'assets/images/DoC-Layers/DoC_075.png', type:'static',  depth:1.0, zIndex:48,  triggerAt:0 },
    { id:'bld-074',  src:'assets/images/DoC-Layers/DoC_074.png', type:'static',  depth:1.0, zIndex:49,  triggerAt:0 },
    { id:'bld-065',  src:'assets/images/DoC-Layers/DoC_065.png', type:'static',  depth:1.0, zIndex:50,  triggerAt:0 },
    { id:'bld-023',  src:'assets/images/DoC-Layers/DoC_023.png', type:'static',  depth:1.0, zIndex:51,  triggerAt:0 },
    { id:'bld-022',  src:'assets/images/DoC-Layers/DoC_022.png', type:'static',  depth:1.0, zIndex:52,  triggerAt:0 },

    // ── WALLS & STRUCTURAL ──
    { id:'wall-62',  src:'assets/images/DoC-Layers/DoC_062.png', type:'static',  depth:1.0, zIndex:60,  triggerAt:0 },
    { id:'wall-64',  src:'assets/images/DoC-Layers/DoC_064.png', type:'static',  depth:1.0, zIndex:61,  triggerAt:0 },
    { id:'wall-63',  src:'assets/images/DoC-Layers/DoC_063.png', type:'static',  depth:1.0, zIndex:62,  triggerAt:0 },
    { id:'wall-25',  src:'assets/images/DoC-Layers/DoC_025.png', type:'static',  depth:1.0, zIndex:63,  triggerAt:0 },
    { id:'wall-155', src:'assets/images/DoC-Layers/DoC_155.png', type:'static',  depth:1.0, zIndex:64,  triggerAt:0 },
    { id:'wall-156', src:'assets/images/DoC-Layers/DoC_156.png', type:'static',  depth:1.0, zIndex:65,  triggerAt:0 },
    { id:'wall-153', src:'assets/images/DoC-Layers/DoC_153.png', type:'static',  depth:1.0, zIndex:66,  triggerAt:0 },
    { id:'wall-092', src:'assets/images/DoC-Layers/DoC_092.png', type:'static',  depth:1.0, zIndex:67,  triggerAt:0 },
    { id:'wall-079', src:'assets/images/DoC-Layers/DoC_079.png', type:'static',  depth:1.0, zIndex:68,  triggerAt:0 },
    { id:'wall-138', src:'assets/images/DoC-Layers/DoC_138.png', type:'static',  depth:1.0, zIndex:69,  triggerAt:0 },
    { id:'wall-137', src:'assets/images/DoC-Layers/DoC_137.png', type:'static',  depth:1.0, zIndex:70,  triggerAt:0 },
    { id:'wall-135', src:'assets/images/DoC-Layers/DoC_135.png', type:'static',  depth:1.0, zIndex:71,  triggerAt:0 },

    // ── CYPRESS TREES (sway) ──
    { id:'cyp-066',  src:'assets/images/DoC-Layers/DoC_066.png', type:'sway',    depth:1.0, zIndex:75,  triggerAt:0 },
    { id:'cyp-067',  src:'assets/images/DoC-Layers/DoC_067.png', type:'sway',    depth:1.0, zIndex:76,  triggerAt:0 },
    { id:'cyp-068',  src:'assets/images/DoC-Layers/DoC_068.png', type:'sway',    depth:1.0, zIndex:77,  triggerAt:0 },
    { id:'cyp-069',  src:'assets/images/DoC-Layers/DoC_069.png', type:'sway',    depth:1.0, zIndex:78,  triggerAt:0 },
    { id:'cyp-070',  src:'assets/images/DoC-Layers/DoC_070.png', type:'sway',    depth:1.0, zIndex:79,  triggerAt:0 },
    { id:'cyp-071',  src:'assets/images/DoC-Layers/DoC_071.png', type:'sway',    depth:1.0, zIndex:80,  triggerAt:0 },
    { id:'cyp-136',  src:'assets/images/DoC-Layers/DoC_136.png', type:'sway',    depth:1.0, zIndex:81,  triggerAt:0 },

    // ── OLIVE TREES (float) ──
    { id:'olv-027',  src:'assets/images/DoC-Layers/DoC_027.png', type:'float',   depth:1.0, zIndex:85,  triggerAt:0 },
    { id:'olv-047',  src:'assets/images/DoC-Layers/DoC_047.png', type:'float',   depth:1.0, zIndex:86,  triggerAt:0 },
    { id:'olv-043',  src:'assets/images/DoC-Layers/DoC_043.png', type:'float',   depth:1.0, zIndex:87,  triggerAt:0 },
    { id:'olv-049',  src:'assets/images/DoC-Layers/DoC_049.png', type:'float',   depth:1.0, zIndex:88,  triggerAt:0 },
    { id:'olv-048',  src:'assets/images/DoC-Layers/DoC_048.png', type:'float',   depth:1.0, zIndex:89,  triggerAt:0 },
    { id:'olv-050',  src:'assets/images/DoC-Layers/DoC_050.png', type:'float',   depth:1.0, zIndex:90,  triggerAt:0 },

    // ── PLANTS (float) ──
    { id:'plt-072',  src:'assets/images/DoC-Layers/DoC_072.png', type:'float',   depth:1.0, zIndex:95,  triggerAt:0 },
    { id:'plt-073',  src:'assets/images/DoC-Layers/DoC_073.png', type:'float',   depth:1.0, zIndex:96,  triggerAt:0 },
    { id:'plt-132',  src:'assets/images/DoC-Layers/DoC_132.png', type:'float',   depth:1.0, zIndex:97,  triggerAt:0 },
    { id:'plt-057',  src:'assets/images/DoC-Layers/DoC_057.png', type:'float',   depth:1.0, zIndex:98,  triggerAt:0 },
    { id:'plt-038',  src:'assets/images/DoC-Layers/DoC_038.png', type:'float',   depth:1.0, zIndex:99,  triggerAt:0.10 },
    { id:'plt-039',  src:'assets/images/DoC-Layers/DoC_039.png', type:'float',   depth:1.0, zIndex:100, triggerAt:0.10 },
    { id:'plt-044',  src:'assets/images/DoC-Layers/DoC_044.png', type:'float',   depth:1.0, zIndex:101, triggerAt:0.10 },
    { id:'plt-045',  src:'assets/images/DoC-Layers/DoC_045.png', type:'float',   depth:1.0, zIndex:102, triggerAt:0.10 },

    // ── CACTUS ──
    { id:'cact-060', src:'assets/images/DoC-Layers/DoC_060.png', type:'static',  depth:1.0, zIndex:105, triggerAt:0 },
    { id:'cact-046', src:'assets/images/DoC-Layers/DoC_046.png', type:'float',   depth:1.0, zIndex:106, triggerAt:0 },

    // ── WATER TANKS ──
    { id:'tnk-116',  src:'assets/images/DoC-Layers/DoC_116.png', type:'static',  depth:1.0, zIndex:110, triggerAt:0 },
    { id:'tnk-115',  src:'assets/images/DoC-Layers/DoC_115.png', type:'static',  depth:1.0, zIndex:111, triggerAt:0 },
    { id:'tnk-114',  src:'assets/images/DoC-Layers/DoC_114.png', type:'static',  depth:1.0, zIndex:112, triggerAt:0 },
    { id:'tnk-113',  src:'assets/images/DoC-Layers/DoC_113.png', type:'static',  depth:1.0, zIndex:113, triggerAt:0 },
    { id:'tnk-112',  src:'assets/images/DoC-Layers/DoC_112.png', type:'static',  depth:1.0, zIndex:114, triggerAt:0 },
    { id:'tnk-111',  src:'assets/images/DoC-Layers/DoC_111.png', type:'static',  depth:1.0, zIndex:115, triggerAt:0 },
    { id:'tnk-110',  src:'assets/images/DoC-Layers/DoC_110.png', type:'static',  depth:1.0, zIndex:116, triggerAt:0 },
    { id:'tnk-094',  src:'assets/images/DoC-Layers/DoC_094.png', type:'static',  depth:1.0, zIndex:117, triggerAt:0 },

    // ── SOLAR PANELS ──
    { id:'sol-008',  src:'assets/images/DoC-Layers/DoC_008.png', type:'static',  depth:1.0, zIndex:120, triggerAt:0 },
    { id:'sol-009',  src:'assets/images/DoC-Layers/DoC_009.png', type:'static',  depth:1.0, zIndex:121, triggerAt:0 },
    { id:'sol-012',  src:'assets/images/DoC-Layers/DoC_012.png', type:'static',  depth:1.0, zIndex:122, triggerAt:0 },
    { id:'sol-014',  src:'assets/images/DoC-Layers/DoC_014.png', type:'static',  depth:1.0, zIndex:123, triggerAt:0 },
    { id:'sol-016',  src:'assets/images/DoC-Layers/DoC_016.png', type:'static',  depth:1.0, zIndex:124, triggerAt:0 },
    { id:'sol-017',  src:'assets/images/DoC-Layers/DoC_017.png', type:'static',  depth:1.0, zIndex:125, triggerAt:0 },
    { id:'sol-019',  src:'assets/images/DoC-Layers/DoC_019.png', type:'static',  depth:1.0, zIndex:126, triggerAt:0 },

    // ── ELECTRIC POLES ──
    { id:'pol-126',  src:'assets/images/DoC-Layers/DoC_126.png', type:'static',  depth:1.0, zIndex:130, triggerAt:0 },
    { id:'pol-127',  src:'assets/images/DoC-Layers/DoC_127.png', type:'static',  depth:1.0, zIndex:131, triggerAt:0 },

    // ── BIRDS (float) ──
    { id:'brd-051',  src:'assets/images/DoC-Layers/DoC_051.png', type:'float',   depth:1.0, zIndex:135, triggerAt:0.05 },
    { id:'brd-052',  src:'assets/images/DoC-Layers/DoC_052.png', type:'float',   depth:1.0, zIndex:136, triggerAt:0.05 },

    // ── GROUND TEXTURES ──
    { id:'gnd-082',  src:'assets/images/DoC-Layers/DoC_082.png', type:'static',  depth:1.0, zIndex:140, triggerAt:0 },
    { id:'gnd-059',  src:'assets/images/DoC-Layers/DoC_059.png', type:'static',  depth:1.0, zIndex:141, triggerAt:0 },
    { id:'gnd-151',  src:'assets/images/DoC-Layers/DoC_151.png', type:'static',  depth:1.0, zIndex:142, triggerAt:0 },
    { id:'gnd-150',  src:'assets/images/DoC-Layers/DoC_150.png', type:'static',  depth:1.0, zIndex:143, triggerAt:0 },

    // ── FOUNTAIN & RECYCLING ──
    { id:'fnt-056',  src:'assets/images/DoC-Layers/DoC_056.png', type:'static',  depth:1.0, zIndex:145, triggerAt:0 },
    { id:'cup-053',  src:'assets/images/DoC-Layers/DoC_053.png', type:'static',  depth:1.0, zIndex:146, triggerAt:0 },
    { id:'cup-054',  src:'assets/images/DoC-Layers/DoC_054.png', type:'static',  depth:1.0, zIndex:147, triggerAt:0 },

    // ── FLOWERS IN BASKETS (float) ──
    { id:'flw-083',  src:'assets/images/DoC-Layers/DoC_083.png', type:'float',   depth:1.0, zIndex:150, triggerAt:0.18 },
    { id:'flw-084',  src:'assets/images/DoC-Layers/DoC_084.png', type:'float',   depth:1.0, zIndex:151, triggerAt:0.18 },
    { id:'flw-085',  src:'assets/images/DoC-Layers/DoC_085.png', type:'float',   depth:1.0, zIndex:152, triggerAt:0.18 },

    // ── PLASTIC BOTTLES ──
    { id:'btl-028',  src:'assets/images/DoC-Layers/DoC_028.png', type:'float',   depth:1.0, zIndex:155, triggerAt:0.10 },
    { id:'btl-029',  src:'assets/images/DoC-Layers/DoC_029.png', type:'float',   depth:1.0, zIndex:156, triggerAt:0.10 },
    { id:'btl-030',  src:'assets/images/DoC-Layers/DoC_030.png', type:'float',   depth:1.0, zIndex:157, triggerAt:0.10 },
    { id:'btl-031',  src:'assets/images/DoC-Layers/DoC_031.png', type:'float',   depth:1.0, zIndex:158, triggerAt:0.10 },
    { id:'btl-032',  src:'assets/images/DoC-Layers/DoC_032.png', type:'float',   depth:1.0, zIndex:159, triggerAt:0.10 },
    { id:'btl-033',  src:'assets/images/DoC-Layers/DoC_033.png', type:'float',   depth:1.0, zIndex:160, triggerAt:0.10 },
    { id:'btl-034',  src:'assets/images/DoC-Layers/DoC_034.png', type:'float',   depth:1.0, zIndex:161, triggerAt:0.10 },
    { id:'btl-035',  src:'assets/images/DoC-Layers/DoC_035.png', type:'float',   depth:1.0, zIndex:162, triggerAt:0.10 },
    { id:'btl-036',  src:'assets/images/DoC-Layers/DoC_036.png', type:'float',   depth:1.0, zIndex:163, triggerAt:0.10 },
    { id:'btl-037',  src:'assets/images/DoC-Layers/DoC_037.png', type:'float',   depth:1.0, zIndex:164, triggerAt:0.10 },

    // ── VENDOR SCENE ──
    { id:'vnd-026',  src:'assets/images/DoC-Layers/DoC_026.png', type:'static',  depth:1.0, zIndex:165, triggerAt:0 },
    { id:'vnd-120',  src:'assets/images/DoC-Layers/DoC_120.png', type:'static',  depth:1.0, zIndex:166, triggerAt:0 },
    { id:'vnd-119',  src:'assets/images/DoC-Layers/DoC_119.png', type:'static',  depth:1.0, zIndex:167, triggerAt:0 },
    { id:'vnd-118',  src:'assets/images/DoC-Layers/DoC_118.png', type:'static',  depth:1.0, zIndex:168, triggerAt:0 },
    { id:'vnd-117',  src:'assets/images/DoC-Layers/DoC_117.png', type:'static',  depth:1.0, zIndex:169, triggerAt:0 },
    { id:'vnd-121',  src:'assets/images/DoC-Layers/DoC_121.png', type:'static',  depth:1.0, zIndex:170, triggerAt:0 },

    // ── WEAVING WOMAN (fade-in) ──
    { id:'wom-061',  src:'assets/images/DoC-Layers/DoC_061.png', type:'fade-in', depth:1.0, zIndex:172, triggerAt:0.08 },
    { id:'wom-058',  src:'assets/images/DoC-Layers/DoC_058.png', type:'static',  depth:1.0, zIndex:173, triggerAt:0 },
    { id:'wom-078',  src:'assets/images/DoC-Layers/DoC_078.png', type:'fade-in', depth:1.0, zIndex:174, triggerAt:0.08 },
    { id:'wom-040',  src:'assets/images/DoC-Layers/DoC_040.png', type:'float',   depth:1.0, zIndex:175, triggerAt:0.10 },
    { id:'wom-041',  src:'assets/images/DoC-Layers/DoC_041.png', type:'float',   depth:1.0, zIndex:176, triggerAt:0.10 },
    { id:'wom-042',  src:'assets/images/DoC-Layers/DoC_042.png', type:'float',   depth:1.0, zIndex:177, triggerAt:0.10 },

    // ── BASKET GIRL ──
    { id:'bsk-090',  src:'assets/images/DoC-Layers/DoC_090.png', type:'static',  depth:1.0, zIndex:178, triggerAt:0 },
    { id:'bsk-089',  src:'assets/images/DoC-Layers/DoC_089.png', type:'static',  depth:1.0, zIndex:179, triggerAt:0 },
    { id:'bsk-088',  src:'assets/images/DoC-Layers/DoC_088.png', type:'static',  depth:1.0, zIndex:180, triggerAt:0 },
    { id:'bsk-087',  src:'assets/images/DoC-Layers/DoC_087.png', type:'static',  depth:1.0, zIndex:181, triggerAt:0 },
    { id:'bsk-091',  src:'assets/images/DoC-Layers/DoC_091.png', type:'fade-in', depth:1.0, zIndex:182, triggerAt:0.22 },

    // ── TRASH BIN ──
    { id:'trs-149',  src:'assets/images/DoC-Layers/DoC_149.png', type:'fade-in', depth:1.0, zIndex:185, triggerAt:0.38 },
    { id:'trs-148',  src:'assets/images/DoC-Layers/DoC_148.png', type:'fade-in', depth:1.0, zIndex:186, triggerAt:0.38 },

    // ── YOUTH GROUP (fade-in at chapter 2) ──
    { id:'yth-146',  src:'assets/images/DoC-Layers/DoC_146.png', type:'fade-in', depth:1.0, zIndex:188, triggerAt:0.42 },
    { id:'yth-145',  src:'assets/images/DoC-Layers/DoC_145.png', type:'fade-in', depth:1.0, zIndex:189, triggerAt:0.42 },
    { id:'yth-152',  src:'assets/images/DoC-Layers/DoC_152.png', type:'fade-in', depth:1.0, zIndex:190, triggerAt:0.42 },
    { id:'yth-144',  src:'assets/images/DoC-Layers/DoC_144.png', type:'fade-in', depth:1.0, zIndex:191, triggerAt:0.42 },
    { id:'yth-144b', src:'assets/images/DoC-Layers/DoC_144.png', type:'fade-in', depth:1.0, zIndex:192, triggerAt:0.42 },
    { id:'yth-154',  src:'assets/images/DoC-Layers/DoC_154.png', type:'static',  depth:1.0, zIndex:193, triggerAt:0 },

    // ── HANDS ──
    { id:'hnd-140',  src:'assets/images/DoC-Layers/DoC_140.png', type:'fade-in', depth:1.0, zIndex:195, triggerAt:0.42 },
    { id:'hnd-141',  src:'assets/images/DoC-Layers/DoC_141.png', type:'fade-in', depth:1.0, zIndex:196, triggerAt:0.42 },
    { id:'hnd-142',  src:'assets/images/DoC-Layers/DoC_142.png', type:'fade-in', depth:1.0, zIndex:197, triggerAt:0.42 },
    { id:'hnd-143',  src:'assets/images/DoC-Layers/DoC_143.png', type:'fade-in', depth:1.0, zIndex:198, triggerAt:0.42 },
    { id:'hnd-139',  src:'assets/images/DoC-Layers/DoC_139.png', type:'fade-in', depth:1.0, zIndex:199, triggerAt:0.42 },

    // ── BOY WITH KITE (float) ──
    { id:'kit-131',  src:'assets/images/DoC-Layers/DoC_131.png', type:'float',   depth:1.0, zIndex:200, triggerAt:0.52 },

    // ── PLASTIC BAGS NEAR YOUTH ──
    { id:'bag-005',  src:'assets/images/DoC-Layers/DoC_005.png', type:'float',   depth:1.0, zIndex:201, triggerAt:0.30 },
    { id:'bag-006',  src:'assets/images/DoC-Layers/DoC_006.png', type:'float',   depth:1.0, zIndex:202, triggerAt:0.30 },

  ],

  audio: {
    ambient: { src:'assets/audio/ambient.mp3', volume:0.35, loop:true },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

  ],

  audio: {
    ambient: {
      src: 'assets/audio/ambient.mp3',
      volume: 0.35,
      loop: true,
    },
    chapterAudio: [],
  },

};**
 * DRIVERS OF CHANGE — Story Data v3
 * Pengon / Friends of the Earth Palestine
 * East Jerusalem · 2022–2025
 *
 * LAYER ARCHITECTURE DECISION:
 * All full-canvas layers use depth: 1.0 (move exactly with mural).
 * No horizontal parallax offset — preserves composition at all screen sizes.
 * Depth/life expressed through: float, sway, fade-in, scale animations only.
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
        'A missed waste-collection route, an overflowing sewage line, a neighborhood without green space — all point to unequal planning, unequal budgets, and unequal access to environmental rights.',
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

  // ── LAYER ASSEMBLY ─────────────────────────────────────────────────
  //
  // ARCHITECTURE RULE: depth is always 1.0 for full-canvas layers.
  // No horizontal parallax — composition must hold at all screen sizes.
  // Life comes from: float, sway, fade-in animations ONLY.
  //
  // Animation types:
  //   'static'  — no animation, moves exactly with mural
  //   'float'   — gentle vertical oscillation (plants, flowers, birds)
  //   'sway'    — gentle rotation oscillation (cypress trees)
  //   'fade-in' — appears at triggerAt scroll position
  //   'pulse'   — subtle scale breathing (key characters)
  //
  // triggerAt: 0 = visible from start, 0.x = fades in at that scroll point
  // zIndex:    higher = closer to viewer
  // depth:     ALWAYS 1.0 — do not change

  layers: [

    // ── BACKGROUND & SKY ──────────────────────────────────────────
    { id: 'l182-bg',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0182_Background.png',
      type: 'static', depth: 1.0, zIndex: 1, triggerAt: 0 },

    { id: 'l180-sky',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0180_%D8%B3%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 2, triggerAt: 0 },

    { id: 'l181-bld-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0181_%D8%B8%D9%84-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 3, triggerAt: 0 },

    // ── DOME OF THE ROCK & MOSQUE ──────────────────────────────────
    { id: 'l170-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0170_%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 10, triggerAt: 0 },

    { id: 'l161-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0161_%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 11, triggerAt: 0 },

    { id: 'l160-trees-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0160_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 12, triggerAt: 0 },

    // ── DISTANT BUILDINGS ──────────────────────────────────────────
    { id: 'l179-bld10',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0179_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-10-.png',
      type: 'static', depth: 1.0, zIndex: 20, triggerAt: 0 },

    { id: 'l178-bld2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0178_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-2-.png',
      type: 'static', depth: 1.0, zIndex: 21, triggerAt: 0 },

    { id: 'l177-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0177_%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-%D9%81%D9%88%D9%82-1-.png',
      type: 'static', depth: 1.0, zIndex: 22, triggerAt: 0 },

    { id: 'l176-bld12',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0176_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-12-.png',
      type: 'static', depth: 1.0, zIndex: 23, triggerAt: 0 },

    { id: 'l175-bld7',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0175_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-7-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 24, triggerAt: 0 },

    { id: 'l174-bld-first',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0174_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%AA%D8%AD%D8%AA-%D8%B1%D9%82%D9%85-1.png',
      type: 'static', depth: 1.0, zIndex: 25, triggerAt: 0 },

    { id: 'l173-bld9',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0173_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-9.png',
      type: 'static', depth: 1.0, zIndex: 26, triggerAt: 0 },

    { id: 'l172-bld-shadow2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0172_%D8%B8%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-.png',
      type: 'static', depth: 1.0, zIndex: 27, triggerAt: 0 },

    { id: 'l171-bld8',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0171_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-8-.png',
      type: 'static', depth: 1.0, zIndex: 28, triggerAt: 0 },

    { id: 'l169-l2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0169_Layer-2.png',
      type: 'static', depth: 1.0, zIndex: 29, triggerAt: 0 },

    // ── GROUND & ROAD ──────────────────────────────────────────────
    { id: 'l164-ground',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0164_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 30, triggerAt: 0 },

    { id: 'l163-road',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0163_%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%A4-.png',
      type: 'static', depth: 1.0, zIndex: 31, triggerAt: 0 },

    { id: 'l168-ground-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0168_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D9%84%D8%AD%D9%85%D8%B1-%D9%88-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%A8%D8%B9-%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 32, triggerAt: 0 },

    { id: 'l166-ground-flowers',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0166_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%88%D8%B1%D8%AF-.png',
      type: 'static', depth: 1.0, zIndex: 33, triggerAt: 0 },

    // ── MID BUILDINGS ──────────────────────────────────────────────
    { id: 'l167-bld5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0167_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-5.png',
      type: 'static', depth: 1.0, zIndex: 35, triggerAt: 0 },

    { id: 'l165-bld6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0165_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-6.png',
      type: 'static', depth: 1.0, zIndex: 36, triggerAt: 0 },

    { id: 'l162-bld-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0162_%D9%85%D8%A8%D9%86%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 37, triggerAt: 0 },

    { id: 'l159-bld-row4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0159_%D8%B5%D9%81-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%B1%D9%82%D9%85-4-.png',
      type: 'static', depth: 1.0, zIndex: 38, triggerAt: 0 },

    { id: 'l158-bld-gear2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0158_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 39, triggerAt: 0 },

    { id: 'l156-bld13',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0156_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-13.png',
      type: 'static', depth: 1.0, zIndex: 40, triggerAt: 0 },

    { id: 'l133-bld17',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0133_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-17.png',
      type: 'static', depth: 1.0, zIndex: 41, triggerAt: 0 },

    { id: 'l132-bld-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0132_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 42, triggerAt: 0 },

    { id: 'l129-bld21',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0129_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 43, triggerAt: 0 },

    { id: 'l080-bld15',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0080_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-15.png',
      type: 'static', depth: 1.0, zIndex: 44, triggerAt: 0 },

    { id: 'l079-bld16',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0079_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-16.png',
      type: 'static', depth: 1.0, zIndex: 45, triggerAt: 0 },

    { id: 'l076-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0076_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'static', depth: 1.0, zIndex: 46, triggerAt: 0 },

    { id: 'l075-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0075_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'static', depth: 1.0, zIndex: 47, triggerAt: 0 },

    { id: 'l074-bld20',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0074_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-20-.png',
      type: 'static', depth: 1.0, zIndex: 48, triggerAt: 0 },

    { id: 'l073-bld18',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0073_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-18.png',
      type: 'static', depth: 1.0, zIndex: 49, triggerAt: 0 },

    { id: 'l064-bld-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0064_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-11.png',
      type: 'static', depth: 1.0, zIndex: 50, triggerAt: 0 },

    { id: 'l022-bld-gear3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0022_%D9%85%D8%A8%D8%A7%D9%86%D9%8A-%D8%AA%D8%AD%D8%AA-3--%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-%D9%81%D9%8A-%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 51, triggerAt: 0 },

    { id: 'l021-bld-vendor',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0021_%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 52, triggerAt: 0 },

    // ── WALLS & STRUCTURAL ─────────────────────────────────────────
    { id: 'l061-wall-long',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 60, triggerAt: 0 },

    { id: 'l063-wall-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0063_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D9%88-%D8%A8%D8%AC%D8%A7%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 61, triggerAt: 0 },

    { id: 'l062-door-yellow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0062_%D8%A7%D9%84%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-%D9%81%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 62, triggerAt: 0 },

    { id: 'l024-wall-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0024_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3.png',
      type: 'static', depth: 1.0, zIndex: 63, triggerAt: 0 },

    { id: 'l154-wall-mosque',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0154_%D8%AC%D8%AF%D8%A7%D8%B1-%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9--%D9%88%D8%B9%D9%84%D9%8A-%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1--.png',
      type: 'static', depth: 1.0, zIndex: 64, triggerAt: 0 },

    { id: 'l155-three-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0155_%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%A8%D9%88%D8%A8-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'static', depth: 1.0, zIndex: 65, triggerAt: 0 },

    { id: 'l152-arches',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0152_%D8%A7%D9%82%D9%88%D8%A7%D8%B3-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D9%85%D8%B3%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%A8%D9%84%D9%8A--4-.png',
      type: 'static', depth: 1.0, zIndex: 66, triggerAt: 0 },

    { id: 'l091-wall-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0091_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 67, triggerAt: 0 },

    { id: 'l078-wall-brown',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0078_%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A8%D9%86%D9%8A-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%88-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D8%A7%D8%B5%D9%81%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 68, triggerAt: 0 },

    { id: 'l137-wall-red',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0137_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D8%AD%D9%85%D8%B1-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AD%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%8A%D9%87-%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83-%D9%88-%D9%81%D9%88%D9%82%D9%87-%D8%B3%D8%B1%D9%88%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 69, triggerAt: 0 },

    // ── CYPRESS TREES (sway gently) ────────────────────────────────
    { id: 'l065-cypress1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0065_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 75, triggerAt: 0 },

    { id: 'l066-cypress2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0066_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 76, triggerAt: 0 },

    { id: 'l067-cypress3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0067_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 77, triggerAt: 0 },

    { id: 'l068-cypress4',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0068_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 78, triggerAt: 0 },

    { id: 'l069-cypress5',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0069_%D8%B3%D8%B1%D9%88.png',
      type: 'sway', depth: 1.0, zIndex: 79, triggerAt: 0 },

    { id: 'l070-cypress6',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0070_%D8%B3%D8%B1%D9%88-.png',
      type: 'sway', depth: 1.0, zIndex: 80, triggerAt: 0 },

    { id: 'l135-cypress-dome',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0135_%D8%B3%D8%B1%D9%88-%D8%B9%D9%86%D8%AF-%D9%82%D8%A8%D8%A9-%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9-.png',
      type: 'sway', depth: 1.0, zIndex: 81, triggerAt: 0 },

    // ── OLIVE TREES (float gently) ─────────────────────────────────
    { id: 'l026-olive-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0026_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 85, triggerAt: 0 },

    { id: 'l046-olive-mid',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0046_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D8%B3%D8%B7-.png',
      type: 'float', depth: 1.0, zIndex: 86, triggerAt: 0 },

    { id: 'l042-olive-rope',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0042_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AD%D8%A8%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 87, triggerAt: 0 },

    { id: 'l048-olive-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0048_%D8%B4%D8%AC%D8%B1%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86--%D8%A7%D8%AE%D8%B1-%D9%88%D8%AD%D8%AF%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 88, triggerAt: 0 },

    { id: 'l047-tree-wall',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0047_%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D8%A8-.png',
      type: 'float', depth: 1.0, zIndex: 89, triggerAt: 0 },

    { id: 'l049-trees-wall2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0049_%D8%B4%D8%AC%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-.png',
      type: 'float', depth: 1.0, zIndex: 90, triggerAt: 0 },

    // ── PLANTS ─────────────────────────────────────────────────────
    { id: 'l071-plants-bld14',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0071_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-14.png',
      type: 'float', depth: 1.0, zIndex: 95, triggerAt: 0 },

    { id: 'l072-plants-bld19',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0072_%D9%86%D8%A8%D8%A7%D8%AA-%D8%B9%D9%86%D8%AF-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-19.png',
      type: 'float', depth: 1.0, zIndex: 96, triggerAt: 0 },

    { id: 'l131-plants-doors',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0131_%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 97, triggerAt: 0 },

    { id: 'l056-herbs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0056_%D8%A7%D8%B9%D8%B4%D8%A7%D8%A8-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'float', depth: 1.0, zIndex: 98, triggerAt: 0 },

    { id: 'l037-plant-chain1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0037_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 99, triggerAt: 0.10 },

    { id: 'l038-plant-behind-girl',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0038_%D9%86%D8%A8%D8%AA%D8%A9-%D8%AE%D9%84%D9%81-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'float', depth: 1.0, zIndex: 100, triggerAt: 0.10 },

    { id: 'l044-plant-chain2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0044_%D9%86%D8%A8%D8%AA%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%86%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 101, triggerAt: 0.10 },

    // ── CACTUS ─────────────────────────────────────────────────────
    { id: 'l059-cactus',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0059_%D8%B5%D8%A8%D8%A7%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 105, triggerAt: 0 },

    { id: 'l045-cactus-plant',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0045_%D8%B4%D8%AA%D9%84%D8%A9-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%B5%D8%A8%D8%B1%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 106, triggerAt: 0 },

    // ── WATER TANKS ────────────────────────────────────────────────
    { id: 'l115-tank-gear',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0115_%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D8%AA%D8%B1%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 110, triggerAt: 0 },

    { id: 'l114-tank-corner',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0114_%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86-%D9%81%D9%88%D9%82-%D8%A7%D9%88%D9%84-%D9%88%D8%A7%D8%AD%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B2%D8%A7%D9%88%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 111, triggerAt: 0 },

    { id: 'l093-tank-last',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0093_%D8%A7%D8%AE%D8%B1-%D8%AE%D8%B2%D8%A7%D9%86-%D9%85%D9%8A-%D8%B5%D8%BA%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 112, triggerAt: 0 },

    // ── SOLAR PANELS ───────────────────────────────────────────────
    { id: 'l007-solar1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0007_%D9%84%D9%88%D8%AD-%D8%B7%D8%A7%D9%82%D8%A9-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A8%D9%86%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 115, triggerAt: 0 },

    { id: 'l008-solar2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0008_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D9%81%D9%88%D9%82-6.png',
      type: 'static', depth: 1.0, zIndex: 116, triggerAt: 0 },

    { id: 'l013-solar3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0013_%D8%A7%D9%84%D9%88%D8%A7%D8%AD-%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D9%86%D9%8A-21-.png',
      type: 'static', depth: 1.0, zIndex: 117, triggerAt: 0 },

    // ── ELECTRIC POLES ─────────────────────────────────────────────
    { id: 'l125-pole1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0125_%D8%B9%D9%85%D9%88%D8%AF-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%A8%D8%A7%D9%86%D9%8A-4.png',
      type: 'static', depth: 1.0, zIndex: 120, triggerAt: 0 },

    { id: 'l126-pole2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0126_%D8%B9%D9%85%D9%88%D8%AF-%D8%A7%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A7%D9%82%D9%88%D8%A7%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 121, triggerAt: 0 },

    // ── BIRDS (float — appear mid-journey) ─────────────────────────
    { id: 'l050-bird-fly',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0050_%D8%B9%D8%B5%D9%88%D8%B1-%D8%B7%D8%A7%D9%8A%D8%B1-.png',
      type: 'float', depth: 1.0, zIndex: 130, triggerAt: 0.05 },

    { id: 'l051-bird-drink',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0051_%D8%B9%D8%B5%D9%81%D9%88%D8%B1-%D8%A8%D8%B4%D8%B1%D8%A8-%D9%85%D9%8A-.png',
      type: 'float', depth: 1.0, zIndex: 131, triggerAt: 0.05 },

    // ── GROUND TEXTURES ────────────────────────────────────────────
    { id: 'l081-ground-olive',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0081_%D8%A7%D9%84%D8%A7%D8%B1%D8%B6%D9%8A%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-.png',
      type: 'static', depth: 1.0, zIndex: 135, triggerAt: 0 },

    { id: 'l058-red-soil',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0058_%D8%AA%D8%B1%D8%A7%D8%A8-%D8%A7%D8%AD%D9%85%D8%B1-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D9%86%D8%A7%D8%B3%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 136, triggerAt: 0 },

    { id: 'l150-ground-start',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0150_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%AC%D8%B1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 137, triggerAt: 0 },

    { id: 'l149-ground-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0149_%D8%A7%D8%B1%D8%B6%D9%8A%D8%A9-%D8%AB%D8%AD%D8%AA-%D8%AB%D9%84%D8%A7%D8%AB-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%AE%D9%84%D9%81-%D8%B3%D9%84%D8%A9-%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 138, triggerAt: 0 },

    // ── FOUNTAIN ───────────────────────────────────────────────────
    { id: 'l055-fountain',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0055_%D9%85%D8%B4%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-.png',
      type: 'static', depth: 1.0, zIndex: 140, triggerAt: 0 },

    { id: 'l052-cup-holder',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0052_%D9%85%D8%AB%D8%A8%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D8%B3%D8%A7%D8%AA-.png',
      type: 'static', depth: 1.0, zIndex: 141, triggerAt: 0 },

    { id: 'l053-cups',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0053_%D9%83%D8%A7%D8%B3%D8%A7%D8%AA--%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-.png',
      type: 'static', depth: 1.0, zIndex: 142, triggerAt: 0 },

    // ── FLOWERS IN BASKETS (float) ─────────────────────────────────
    { id: 'l082-flowers1',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0082_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 145, triggerAt: 0.18 },

    { id: 'l083-flowers2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0083_%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%B3%D9%84%D8%A9-.png',
      type: 'float', depth: 1.0, zIndex: 146, triggerAt: 0.18 },

    { id: 'l084-flowers3',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0084_%D8%A7%D9%84%D9%88%D8%B1%D8%AF-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D9%84%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D9%84%D9%81-.png',
      type: 'float', depth: 1.0, zIndex: 147, triggerAt: 0.18 },

    // ── PLASTIC BOTTLES WALL ───────────────────────────────────────
    { id: 'l134-wall-bottles',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0134_%D8%AC%D8%AF%D8%A7%D8%B1-%D8%B9%D9%84%D9%8A%D9%87-%D8%A7%D9%84%D9%82%D9%86%D8%A7%D9%86%D9%8A-%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%83-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'static', depth: 1.0, zIndex: 150, triggerAt: 0.28 },

    { id: 'l027-bottle2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0027_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-2.png',
      type: 'float', depth: 1.0, zIndex: 151, triggerAt: 0.10 },

    { id: 'l031-bottle-recycle',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0031_%D9%82%D9%86%D9%8A%D9%86%D9%8A%D8%A9-%D8%A7%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AA%D8%AF%D9%88%D9%8A%D8%B1-1.png',
      type: 'float', depth: 1.0, zIndex: 152, triggerAt: 0.10 },

    // ── VENDOR SCENE ───────────────────────────────────────────────
    { id: 'l025-clay-pot',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0025_%D9%81%D8%AE%D8%A7%D8%B1%D8%A9-%D8%AA%D8%AD%D8%AA-%D8%B4%D8%AC%D8%B1%D8%A9-%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D8%A9-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%8A%D8%A7%D8%B9-.png',
      type: 'static', depth: 1.0, zIndex: 155, triggerAt: 0 },

    { id: 'l119-cart',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0119_%D8%A8%D8%B3%D8%B7%D8%A9.png',
      type: 'static', depth: 1.0, zIndex: 156, triggerAt: 0 },

    { id: 'l118-wheel',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0118_%D8%B9%D8%AC%D9%84-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 157, triggerAt: 0 },

    { id: 'l117-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0117_%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 158, triggerAt: 0 },

    { id: 'l116-eggs',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0116_%D9%83%D8%B1%D8%AA%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-.png',
      type: 'static', depth: 1.0, zIndex: 159, triggerAt: 0 },

    { id: 'l120-old-man',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0120_%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D9%8A-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A8%D8%B3%D8%B7%D8%A9-.png',
      type: 'static', depth: 1.0, zIndex: 160, triggerAt: 0 },

    // ── WEAVING WOMAN ──────────────────────────────────────────────
    { id: 'l061b-wall-long2',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0061_%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-%D9%84%D8%B7%D9%88%D9%8A%D9%84-.png',
      type: 'static', depth: 1.0, zIndex: 161, triggerAt: 0 },

    { id: 'l060-woman-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0060_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%A9-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D8%B1-.png',
      type: 'fade-in', depth: 1.0, zIndex: 162, triggerAt: 0.08 },

    { id: 'l057-chains',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0057_%D8%B3%D9%86%D8%A7%D8%B3%D9%84-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-.png',
      type: 'static', depth: 1.0, zIndex: 163, triggerAt: 0 },

    { id: 'l077-hand-weave',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0077_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D8%A8%D8%AA%D8%AE%D9%8A%D8%B7-%D8%A7%D9%84%D9%8A%D8%AF.png',
      type: 'fade-in', depth: 1.0, zIndex: 164, triggerAt: 0.08 },

    // ── BASKET GIRL ────────────────────────────────────────────────
    { id: 'l089-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0089_%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'static', depth: 1.0, zIndex: 165, triggerAt: 0 },

    { id: 'l090-girl-basket',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0090_%D8%A7%D9%84%D8%B5%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87%D8%A7-%D8%B5%D9%86%D9%8A%D8%A9-%D9%82%D8%B4-.png',
      type: 'fade-in', depth: 1.0, zIndex: 166, triggerAt: 0.22 },

    // ── TRASH BIN ──────────────────────────────────────────────────
    { id: 'l148-trash',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0148_%D8%AD%D8%A7%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D8%B2%D8%A8%D8%A7%D9%84%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 168, triggerAt: 0.38 },

    { id: 'l147-trash-shadow',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0147_%D8%B8%D9%84-%D8%A7%D9%84%D8%AD%D9%88%D9%8A%D8%A7%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 169, triggerAt: 0.38 },

    // ── YOUTH GROUP ────────────────────────────────────────────────
    { id: 'l145-bench',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0145_%D8%A7%D9%84%D9%85%D9%82%D8%B9%D8%AF-%D8%AA%D8%AD%D8%AA-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 170, triggerAt: 0.42 },

    { id: 'l144-youth',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0144_%D8%B4%D8%A8%D8%A7%D8%A8-%D8%A7%D9%84%D9%8A%D8%A7%D9%81%D8%B9%D9%8A%D9%86-.png',
      type: 'fade-in', depth: 1.0, zIndex: 171, triggerAt: 0.42 },

    { id: 'l151-trainer',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0151_%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%A8-%D8%A7%D9%84%D9%8A-%D8%B9%D9%86%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 172, triggerAt: 0.42 },

    { id: 'l143-hijab',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0143_%D8%AD%D8%AC%D8%A7%D8%A8-.png',
      type: 'fade-in', depth: 1.0, zIndex: 173, triggerAt: 0.42 },

    { id: 'l153-sign',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0153_%D9%84%D9%81%D8%AA%D8%A9-%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB.png',
      type: 'static', depth: 1.0, zIndex: 174, triggerAt: 0 },

    // ── HANDS ──────────────────────────────────────────────────────
    { id: 'l139-hand-bag',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0139_%D9%8A%D8%AF-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D9%8A%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 175, triggerAt: 0.42 },

    { id: 'l140-hand-bread',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0140_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%83%D8%B9%D9%83-%D8%A7%D9%84%D9%82%D8%AF%D8%B3-.png',
      type: 'fade-in', depth: 1.0, zIndex: 176, triggerAt: 0.42 },

    { id: 'l142-hand-coffee',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0142_%D9%8A%D8%AF-%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%81%D9%8A%D9%87%D8%A7-%D9%82%D9%87%D9%88%D8%A9-.png',
      type: 'fade-in', depth: 1.0, zIndex: 177, triggerAt: 0.42 },

    { id: 'l138-phone',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0138_%D8%AA%D9%84%D9%81%D9%88%D9%86-%D8%AC%D9%86%D8%A8-%D8%A7%D9%84%D8%A8%D9%86%D8%AA-.png',
      type: 'fade-in', depth: 1.0, zIndex: 178, triggerAt: 0.42 },

    // ── BOY WITH KITE (float) ──────────────────────────────────────
    { id: 'l130-boy-kite',
      src: 'assets/images/DoC-Layers/DoC_LayersMap_0130_%D8%A7%D9%84%D8%B4%D8%A8-%D8%A7%D9%84%D9%8A-%D9%85%D8%B9%D9%87-%D8%B7%D9%8A%D8%A7%D8%B1%D8%A9-%D9%88%D8%B1%D9%82%D9%8A%D8%A9--.png',
      type: 'float', depth: 1.0, zIndex: 180, triggerAt: 0.52 },

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
