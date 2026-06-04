# crilofer.github.io

Personal site of **Cristian López Fernández** — Head of AI Engineering at Tymit.
Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Brand

A small editorial / monograph feel for an engineering leader.

- **Display type:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — a contemporary serif with old-style proportions
- **Body type:** [Inter Tight](https://fonts.google.com/specimen/Inter+Tight) — calm rhythm on long reads
- **Mono / meta:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Palette:** warm paper (`oklch 96% 0.012 85`) · deep sepia ink · a single rust accent (`oklch 58% 0.16 38`)
- **No frameworks, no trackers, no client JS** — just static HTML + CSS

See [crilofer.github.io/colophon](https://crilofer.github.io/colophon) for the design rationale.

## Project structure

```
src/
  components/     # Header, Footer, ExperienceItem, ProjectCard
  data/site.ts    # single source of truth for content
  layouts/        # Base layout
  pages/          # index, work, projects, colophon
  styles/global.css
public/           # favicon, robots.txt
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## Deploy

Push to `master` and GitHub Pages serves the `dist/` folder (or root —
Astro is configured to build a flat static bundle).

## Editing content

All copy lives in [`src/data/site.ts`](./src/data/site.ts). Update it,
rebuild, ship.

## Legacy

The previous Jekyll-based version (modern-resume-theme) is preserved at
[`_legacy-jekyll/`](./_legacy-jekyll/) but ignored by git and not served.
