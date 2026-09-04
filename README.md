# Alder Dental Studio

A full one-page site (React + Vite), structured the same way as the Swaarg reference —
nav, hero, highlight, featured cards, standards grid, stats, CTA banner, gallery, blog, FAQ, footer —
but themed and written for a dental clinic instead of real estate.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  main.jsx              entry point
  App.jsx                assembles all sections in order
  index.css               design tokens (colors, type) + shared section/button styles
  data/content.js         all site copy — edit this to change text without touching components
  components/
    Navbar.jsx
    Hero.jsx
    AboutHighlight.jsx
    FeaturedTreatments.jsx
    WhyAlder.jsx
    Stats.jsx
    CTABanner.jsx
    Gallery.jsx
    Blog.jsx
    FAQ.jsx               (has its own open/close state)
    Footer.jsx
```

All imagery is abstract CSS-gradient panels (`.art-panel` in index.css) rather than stock
photos, so the project runs with zero external image dependencies. Swap those divs for
`<img>` tags whenever you have real photography.
