# VOCA Website — Codex Agent Instructions

You are editing the VOCA website, a creative globalization agency. Follow these instructions carefully.

## What to Edit

| Type of change | File(s) to edit |
|---|---|
| Text/content on an English page | `src/<page>.html` (e.g., `src/index.html`) |
| Text/content on a Thai page | `src/th/<page>.html` |
| Colors, fonts, spacing, layout | `src/style.css` |
| Animations, scroll effects, interactivity | `src/main.js` |

## Pages

| Page | English | Thai |
|---|---|---|
| Home | `src/index.html` | `src/th/index.html` |
| About Us | `src/about.html` | `src/th/about.html` |
| Services | `src/services.html` | `src/th/services.html` |
| Blog | `src/blog.html` | `src/th/blog.html` |
| The Stage | `src/stage.html` | `src/th/stage.html` |
| Contact | `src/contact.html` | `src/th/contact.html` |

## Brand Guidelines

Follow the "Swiss Gold" design system:

- **Colors:** Primary Black `#000000`, VOCA Yellow `#ffe139` / `#fdc512`, White `#FFFFFF`, Teal accent `#217171`
- **Headline font:** League Spartan
- **Body font:** Sarabun
- **Visual style:** Swiss Grid, bold minimalism, geometric shapes
- **Tone:** Modern, Strategic, Collaborative
- **VOCA is NOT** a "translation service" — we are a creative globalization agency

Full brand details are in `VOCA_Brand_Guidelines.md`.

## Safety Rules

1. **Never remove** the `<nav class="nav-pill">` navigation block from any page
2. **Never remove** the `<footer>` block from any page
3. **Never remove** the `<script type="module" src="main.js"></script>` tag
4. **Never remove** the `<link rel="stylesheet" href="style.css">` tag
5. **Never remove** the `<div class="grain"></div>` element (visual texture overlay)
6. **Never modify** `vite.config.js` unless explicitly asked
7. **Never modify** `.github/workflows/deploy.yml`
8. **Preserve** all `reveal` CSS classes on elements (they power scroll animations)
9. Navigation is duplicated in every HTML page (not a shared component). If adding a nav link, add it to **all 12 pages**.
10. When editing content on an English page, **also update the corresponding Thai page** in `src/th/`, or note in the PR that it needs translation.
11. When adding a **new page**, also add it to the `rollupOptions.input` object in `vite.config.js` so Vite builds it.

## Branching

- **Always create pull requests targeting the `develop` branch**, not `main`.
- The `develop` branch is the staging branch. Changes merged here deploy to the staging site for review.
- The `main` branch is production. Only the tech lead merges `develop` into `main`.

## After Making Changes

Run `npm run build` to verify the production build succeeds.

## Commit Messages

Prefix commit messages with the type of change:
- `content:` for text/copy changes
- `style:` for visual/CSS changes
- `feature:` for new sections or pages
- `fix:` for bug fixes

## Example Prompts

Here are examples of the kinds of changes you may be asked to make:

- "Change the hero headline on the homepage to 'Borderless Brands Start Here'"
- "Add a new blog post card to blog.html with the title 'Why Cultural Intelligence Matters' and a short description"
- "Change the background color of the stats section on the homepage from yellow to black, with white text"
- "Add a testimonial quote to the about page: 'VOCA transformed our APAC launch' -- Sarah Chen, VP Marketing"
- "Update the contact email address to contact@voca.co.th"
- "Add a new page called case-studies.html with the same navigation and footer as the other pages"
