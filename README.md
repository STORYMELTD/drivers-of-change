# Drivers of Change
### An Interactive Story by Pengon · Built by StoryMe

A cinematic horizontal scroll experience documenting two years of youth-led green initiatives in East Jerusalem.

**Live:** [driversofchange.storyme.io](https://driversofchange.storyme.io)

---

## Structure

```
/
├── index.html              # Entry point
├── css/
│   └── main.css            # All styles
├── js/
│   ├── story-data.js       # Content: chapters, hotspots, layers
│   └── main.js             # Scroll engine, interactions, audio
└── assets/
    ├── images/
    │   ├── mural-full.jpg  # 15,000 × 1,900px mural (main asset)
    │   └── hs-*.jpg        # Hotspot panel images
    ├── layers/             # Separated mural layer PNGs for animation
    └── audio/
        ├── ambient.mp3     # Background music
        └── hs-*.mp3        # Hotspot audio clips
```

## To add content

Edit `js/story-data.js` — no other files need to change for:
- Chapter titles and scroll positions
- Hotspot text, images, audio
- Animated layer configs

## Tech stack
- Pure HTML / CSS / JavaScript
- GSAP 3 (ScrollTrigger, ScrollToPlugin)
- Howler.js (audio)
- Deployed on Vercel via GitHub

---

*StoryMe · storyme.io*
