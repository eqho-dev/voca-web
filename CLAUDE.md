# VOCA Website — Demo Two

## Project Overview

VOCA is a creative globalization agency website. This repo contains a static multi-page site built with **Vite** and deployed to **GitHub Pages**.

## Architecture

- **Build tool:** Vite 5 (vanilla JS, no framework)
- **Source directory:** `src/`
- **Output directory:** `dist/`
- **Base path:** `/voca-web/` (configured in `vite.config.js`)
- **Styling:** Single CSS file (`src/style.css`) — no preprocessor
- **JavaScript:** Single entry (`src/main.js`) — vanilla JS, no framework
- **Assets:** Images loaded from external URLs (Unsplash), icons via Font Awesome CDN

## Pages

All pages are static HTML in `src/`. The site has English (root) and Thai (`th/`) versions:

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `blog.html` — Blog
- `stage.html` — The Stage
- `contact.html` — Contact

Each page has a corresponding `th/` variant for Thai localization.

## Deployment

- **Hosted on:** GitHub Pages
- **Deploy method:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Trigger:** Push to `main` branch (or manual `workflow_dispatch`)
- **Pipeline:** Checkout → Node 20 + npm ci → `npm run build` → Upload `dist/` → Deploy Pages

## Development

```sh
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Production build to dist/
npm run preview # Preview production build
```

## Design Work

All UI/design tasks should use the **frontend-design skill** at `.agents/skills/frontend-design/SKILL.md`. This skill ensures distinctive, production-grade interfaces that follow the VOCA brand aesthetic and avoid generic AI-generated design patterns.

## Key Files

- `vite.config.js` — Vite config with multi-page rollup inputs and `/voca-web/` base path
- `src/style.css` — All styles ("Swiss Gold" design system)
- `src/main.js` — All interactive JS (scroll reveals, nav, counters, artifact animations, FAQ accordion)
- `VOCA_Brand_Guidelines.md` — Brand guidelines, colors, typography, tone of voice
- `.github/workflows/deploy.yml` — CI/CD pipeline for GitHub Pages
