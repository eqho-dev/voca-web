# VOCA Website — Design Draft

> **Strategic clarity. Confidence in every move.**

This is a design draft for the [VOCA](https://voca.co.th) website — a creative globalization agency built for a borderless world. VOCA helps brands go global without losing identity, backed by 25 years of communication expertise and 1,000+ global partners.

## Live Preview

[View the draft on GitHub Pages](https://eqho-dev.github.io/voca-web/)

## Pages

| Page | English | Thai |
|------|---------|------|
| Home | `index.html` | `th/index.html` |
| About Us | `about.html` | `th/about.html` |
| Services | `services.html` | `th/services.html` |
| Blog | `blog.html` | `th/blog.html` |
| The Stage | `stage.html` | `th/stage.html` |
| Contact | `contact.html` | `th/contact.html` |

## Tech Stack

- **Vite 5** — build tool (vanilla JS, no framework)
- **HTML / CSS / JS** — static multi-page site
- **Font Awesome** — icons via CDN
- **GitHub Actions** — CI/CD to GitHub Pages

## Design System

The site follows VOCA's **"Swiss Gold"** design system — Swiss grid, bold minimalism, black and yellow palette. See `VOCA_Brand_Guidelines.md` for full brand details including tone, typography, and visual identity.

## Getting Started

```sh
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── index.html          # Home (EN)
├── about.html          # About Us (EN)
├── services.html       # Services (EN)
├── blog.html           # Blog (EN)
├── stage.html          # The Stage (EN)
├── contact.html        # Contact (EN)
├── th/                 # Thai localization
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── blog.html
│   ├── stage.html
│   └── contact.html
├── style.css           # All styles
└── main.js             # All interactive JS
```

## Deployment

The site uses two branches with GitHub Pages:

| Branch | URL | Purpose |
|--------|-----|---------|
| `main` | [Production site](https://eqho-dev.github.io/voca-web/) | Live website — only the tech lead merges here |
| `develop` | [Staging site](https://eqho-dev.github.io/voca-web/staging/) | Preview of pending changes — safe to merge freely |

Pushes to either branch trigger an automatic deploy via GitHub Actions. Both versions are served from a single GitHub Pages deployment at the `/voca-web/` base path.

## Editing the Website (Non-Technical)

If you're a non-technical team member using OpenAI Codex to make changes, see the **[CODEX_GUIDE.md](CODEX_GUIDE.md)** for a complete step-by-step walkthrough covering GitHub setup, Codex setup, how to prompt changes, and how to preview them on the staging site.

## Status

This is an **active design draft** — layout, content, and interactions are subject to change as we iterate toward the final production site.
