# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Drivers of Change" — a single-page, cinematic horizontal-scroll experience documenting youth-led green initiatives in East Jerusalem (Pengon / Friends of the Earth Palestine, 2022–2025). Pure static HTML/CSS/JS, no framework, no build step. Deployed on Vercel via GitHub push.

## Running & deploying

There is **no build, no test, no lint, no package manager**. To develop, serve the folder over HTTP (the app fetches local image/audio assets, so `file://` won't work reliably):

```
python3 -m http.server 8000   # then open http://localhost:8000
```

Deploy = push to `main`; Vercel serves the static files as-is.

### Cache-busting (important)
CSS/JS are versioned with `?v=N` query strings in `index.html` (lines ~12, 156–157). **Whenever you edit `css/main.css`, `js/main.js`, or `js/story-data.js`, bump every `?v=N` in `index.html` together** (they are kept in lockstep — currently `v=13`). Forgetting this means the live site serves stale cached assets; nearly every recent commit is a bump for exactly this reason.

## Architecture

Three files do all the work:

- **`index.html`** — static skeleton of four full-screen "screens" plus the hotspot panel, nav, and audio toggle. Most DOM (layers, chapter boxes, hotspots, nav dots, track) is built at runtime by `main.js`; the HTML only holds the containers.
- **`js/story-data.js`** — all content as one `STORY_DATA` global: `chapters`, `hotspots`, `layers`, `audio`. **This is the only file to edit for content changes** (text, positions, triggers, animation type). It is plain data, not logic.
- **`js/main.js`** — the entire engine, one IIFE. `S` = mutable state, `D` = cached DOM refs. Drives a 4-phase flow tracked by `S.phase`: `loading → landing → bab → mural`.

### The four phases (`S.phase`)
1. **loader** (`runLoader`) — timer-based fake progress (3s min), independent of actual asset loading. Positions the gear at an Illustrator-derived convergence point.
2. **landing** (`startJourney`) — title screen; "Drive Through" button advances.
3. **bab** (`initBabScroll`/`applyBabZoom`) — Damascus Gate; wheel/touch/click scrubs a CSS `scale()` zoom into the gate, then `enterMural()`.
4. **mural** (`initScrollEngine`) — the main horizontal journey, driven by **GSAP ScrollTrigger** (loaded from CDN, not bundled).

### The mural scroll engine (`initScrollEngine`, the core)
The page has tall vertical scroll height (`#storyStage` height = mural width − viewport width + viewport height); vertical scroll is translated into horizontal pan of `#muralWrap`. ScrollTrigger orchestrates, all `scrub: true`:
1. Base mural pans left (`x`).
2. Gear re-enters from the **left edge** and rolls to center over the first ~12% of mural scroll, then holds center (see bridge below).
3. Gear rotates with circumference-accurate degrees (fresh from 0) so it appears to roll, not slide.
4. Layers fade/float/sway in.
5. Chapter boxes animate in/out by scroll zone.

**Locked design decision (do not reintroduce):** all layers have depth 1.0 — *no per-layer horizontal parallax*. Layers are children of `#muralWrap` and ride the base pan automatically. A removed tween read a non-existent `layer.depth`, producing `x:NaN` and corrupting the float/sway transforms (see comment at `main.js` ~333 and commit `6249543`). Adding per-layer x-tweens breaks the composition.

### The bab→mural gear bridge (`driveBab`, the persistent gear)
The gate (`#babSection`) is pinned ~300vh and scrubbed by progress `p` (`initBabScroll`). The single `#muralGear` node lives in a fixed overlay `#driverLayer`. `driveBab(p)`:
- **p 0→0.40:** gear starts big (`1.15×` base) at the left edge (~50% cropped), shrinks to `0.60×` while rolling right to the **gate window's on-screen x** (`babWindowOrigin().x`, *not* 50%vw), rotating circumference-accurately through the shrink (`rollAngle`).
- **p 0.40→1.0:** gear holds, idle-spins ~18°; the gate `#babImg` deep-zooms `1→10` about the computed window origin (`BAB_WIN_OX/OY` fractions of the *rendered* contain rect — JS owns the origin, not CSS). Hi-res swap at `p≈0.38`; bab crossfades out `0.90→1.0`.
- **Handoff (the current model — NOT a center-rest carry):** the gear **fades out at the window** (opacity `0.80→0.92`); **nothing is carried into the mural**. The mural's gear then **re-enters fresh from the left edge** and rolls to center (first ~12%), rotating from 0. Tunables are named constants at the top of `main.js` (`BAB_ROLL_END`, `BAB_IDLE_SPIN`, `BAB_HIRES_AT`, `BAB_FADE_START`, `BAB_WIN_OX/OY`). `gearBasePx() = GEAR_FULL_PX·(vh/MURAL_H)·2 ≈ 0.5155·vh`; rolling size = `0.60×` that.

### Coordinate system
Everything scales off the mural. `scaleMural()` sets `S.muralScale = viewportHeight / MURAL_H`, then `S.muralW = MURAL_W × scale`. Layers, hotspots, and chapter boxes are positioned in **percentages** of the mural (`xPct`/`yPct`/`wPct` in `story-data.js`, `position.left/top` for hotspots) and converted to pixels on every layout/resize. So adding a hotspot or layer = adding a percentage-positioned entry to `STORY_DATA`, nothing else.

Note `MURAL_W`/`MURAL_H` constants in `main.js` (15615 × 1901) are the source of truth for sizing; the `mural.naturalWidth/Height` in `story-data.js` (15000 × 1900) are descriptive only and not used by the engine.

### Layers (`STORY_DATA.layers`)
~150 entries, files `assets/images/DoC-Layers/DoC_NNN.webp`. Each has a `type` (`static`, `float`, `sway`, `fade-in`), `zIndex` (reversed from the Photoshop stack — higher number renders on top, `DoC_001` is topmost), and `triggerAt` (scroll progress 0–1 at which a non-zero-trigger layer fades in). The header comment in `story-data.js` documents which source layers were intentionally skipped (photos, inserted images, non-transparent `Layer-XX`).

## Conventions

- Plain ES5-style JS (`var`/`function`, IIFE) — match the existing style; no modules, no transpilation.
- The CDN GSAP globals (`gsap`, `ScrollTrigger`, `ScrollToPlugin`) are assumed present; engine code guards a few spots with `typeof ScrollTrigger !== 'undefined'`.
- Commit messages follow `Landing: <what>` / `<Area>: <what>` and routinely end with the cache-bust version.
