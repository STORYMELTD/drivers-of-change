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

## WORKING PRINCIPLE — Contextual & aesthetic awareness (not just the mechanical edit)
Before finalizing any scene/asset/feature change, evaluate the WHOLE scene, not the isolated edit:

Carry continuous elements through. Anything that spans the mural — the dented track, the gear/rail, ground line, horizon, sky, palette (#F4A228), lighting, motion language — must extend across any new or resized scene. No breaks, no orphaned edges.
Match the aesthetic. New content inherits the scene's visual language (hand-painted style, dusk palette, pacing). Flag tonal clashes rather than shipping them.
Always ask: "If I add or extend X, what spanning element or aesthetic does it break, stop short, or leave behind?" Name it and fix it in the SAME change.

### HARD RULE — Never stretch. Tile or scale uniformly only. (CRITICAL)
Images and components are NEVER stretched or squeezed to fit a space — no non-uniform scaling, no distorting an aspect ratio, ever.

Repeating elements (dented track, patterns, backgrounds) → TILE at native aspect (uniform scale to the target height/width, then repeat). Let the last tile overrun and clip; never squeeze a tile to "fit."
Single elements → scale UNIFORMLY (lock aspect) and position/crop; never distort.
If something doesn't fill a space: tile it, letterbox it, or crop it — never stretch it.

### Recorded misses (why these rules exist)

Appended the closure landscape but left the dented track ending at the city edge — the gear would roll on nothing across the closure. Fix: track tiles to S.totalW (full panorama = city + closure), stepping x += scaledTileW with a uniform tile size — tiled, not stretched.

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

### The bab→mural bridge — horizontal entry (one continuous scroll)
The seam between gate and mural is gone: there is **no pin and no discrete handoff**. The gate (`#babSection`) is a **fixed overlay** (z 20), the city (`.mural-viewport`, sticky, z 10) sits behind it from scroll 0, and `#driverLayer` (the gear, z 95) stays on top. **`#storyStage` owns one continuous scroll**: `height = babZoomPx + panPx + vh`, where `babZoomPx = vh·3` (gate zoom) and `panPx = S.muralW − vw` (city pan). Two scrubbed `ScrollTrigger`s, both set up in `initScrollEngine` from `buildJourney` (built up-front when the landing dismisses, not on a handoff):

- **Phase 1 — gate (`driveBab(p)`,** `start:'top top'`, `end:'+=babZoomPx'`**):** gear starts big (`1.15×` base) at the left edge, shrinks to `0.60×` while rolling to the **gate window's on-screen x** (`babWindowOrigin().x`), rotating via `rollAngle`. p 0.40→1.0: gear idle-spins ~18°, gate `#babImg` deep-zooms `1→10` about the computed window origin (`BAB_WIN_OX/OY` of the *rendered* contain rect — JS owns the origin), hi-res swap at p≈0.38, gear **fades out at the window** (opacity 0.80→0.92), gate fades out 0.40→1.0.
- **Phase 2 — pan (`panUpdate(p2)`,** `start:'top+=babZoomPx top'`, `end:'bottom bottom'`**):** `muralWrap.x = −p2·panPx`. The gear **re-enters from the very left edge** and rolls to its settle x (`GEAR_SETTLE_X_FRAC` of vw — single knob) over the first `GEAR_ENTER_FRAC` (12%) of the pan, then holds and spins.

**Reveal — direct move (no fade, no slide):** the city sits at x=0 (left edge) behind the gate the whole time; the gate stays fully opaque through the zoom, then **cuts away** (`opacity 1→0` at `p ≥ BAB_CUT_AT = 0.97`), dropping straight into the mural at its left edge. (Earlier slide/crossfade reveals were tried and rejected as ugly.)

**CRITICAL:** every chapter-box, layer-fade, and nav-dot offset is shifted by `babZoomPx` (`'top+=' + (S.babZoomPx + X·S.panPx) + 'px top'`) — they live in the pan region, not at `#storyStage` top. Miss this and chapters fire during the gate zoom. Resize recomputes `babZoomPx`/`panPx`/height and re-poses the active phase (`S.st1`/`S.st2`). Tunables are named constants at the top of `main.js`.

### Coordinate system
Everything scales off the mural. `scaleMural()` sets `S.muralScale = viewportHeight / MURAL_H`, then `S.muralW = MURAL_W × scale`. Layers, hotspots, and chapter boxes are positioned in **percentages** of the mural (`xPct`/`yPct`/`wPct` in `story-data.js`, `position.left/top` for hotspots) and converted to pixels on every layout/resize. So adding a hotspot or layer = adding a percentage-positioned entry to `STORY_DATA`, nothing else.

Note `MURAL_W`/`MURAL_H` constants in `main.js` (15615 × 1901) are the source of truth for sizing; the `mural.naturalWidth/Height` in `story-data.js` (15000 × 1900) are descriptive only and not used by the engine.

### Layers (`STORY_DATA.layers`)
~150 entries, files `assets/images/DoC-Layers/DoC_NNN.webp`. Each has a `type` (`static`, `float`, `sway`, `fade-in`), `zIndex` (reversed from the Photoshop stack — higher number renders on top, `DoC_001` is topmost), and `triggerAt` (scroll progress 0–1 at which a non-zero-trigger layer fades in). The header comment in `story-data.js` documents which source layers were intentionally skipped (photos, inserted images, non-transparent `Layer-XX`).

## Conventions

- Plain ES5-style JS (`var`/`function`, IIFE) — match the existing style; no modules, no transpilation.
- The CDN GSAP globals (`gsap`, `ScrollTrigger`, `ScrollToPlugin`) are assumed present; engine code guards a few spots with `typeof ScrollTrigger !== 'undefined'`.
- Commit messages follow `Landing: <what>` / `<Area>: <what>` and routinely end with the cache-bust version.
