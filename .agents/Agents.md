# VOCA Website — Agent Guide

## Project Overview

VOCA is a creative globalization agency website — a static multi-page site built with **Vite 5** (vanilla HTML/CSS/JS, no framework) and deployed to **GitHub Pages**.

## Architecture

| Layer        | Detail                                                    |
|--------------|-----------------------------------------------------------|
| Build        | Vite 5 — `npm run dev` / `npm run build`                 |
| Source       | `src/` (HTML pages, `style.css`, `main.js`)               |
| Output       | `dist/`                                                   |
| Base path    | `/voca-web/`                                              |
| Hosting      | GitHub Pages                                              |
| CI/CD        | GitHub Actions (`.github/workflows/deploy.yml`)           |
| Deploy trigger | Push to `main` or manual `workflow_dispatch`            |

## Site Structure

Static HTML pages with English (root) and Thai (`th/`) localization:

```
src/
  index.html          # Home
  about.html          # About Us
  services.html       # Services
  blog.html           # Blog
  stage.html          # The Stage
  contact.html        # Contact
  th/                 # Thai language variants of all pages
  style.css           # All styles — "Swiss Gold" design system
  main.js             # All interactive JS
```

## Deployment

- Deployed to **GitHub Pages** via GitHub Actions
- Pipeline: `npm ci` → `npm run build` → upload `dist/` → deploy
- Base path is `/voca-web/` — all asset/link paths must account for this
- Pushes to `main` auto-deploy; no staging environment

## Key Conventions

- **No framework** — vanilla HTML, CSS, JS only
- **Single CSS file** (`src/style.css`) — all styles in one place
- **Single JS file** (`src/main.js`) — all interactivity in one place
- **Brand guidelines** in `VOCA_Brand_Guidelines.md` — follow the "Swiss Gold" design system (black, yellow `#ffe139`, teal `#217171`, white)
- **Font Awesome** loaded via CDN for icons
- **Images** loaded from external URLs (Unsplash)
- Multi-page rollup inputs configured in `vite.config.js`

## Design Work

All UI/design tasks should use the **frontend-design skill** at `.agents/skills/frontend-design/SKILL.md`. This skill ensures distinctive, production-grade interfaces that follow the VOCA brand aesthetic and avoid generic AI-generated design patterns.

## When Making Changes

- Edit HTML pages directly in `src/`
- All styles go in `src/style.css`
- All JS goes in `src/main.js`
- After changes, run `npm run build` to verify the production build
- Commits to `main` trigger automatic deployment to GitHub Pages
