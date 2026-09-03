# Rabbit Hole Apps

Marketing site for **Rabbit Hole Apps** — simple tools with fantastic UIs.

Built with [Astro](https://astro.build). This folder is the whole site: its own GitHub repo, not part of [justinxhale.github.io](https://justinxhale.github.io).

## Local development

Requires Node 20+.

```bash
npm install
npm run dev
```

```bash
npm run build    # astro check + static build
npm run preview  # preview the production build
```

## GitHub repo + Pages

Create a **new** repository (GitHub org for Rabbit Hole Apps is the cleanest fit). Do not add these files to `justinxhale.github.io`.

Then in this folder:

```bash
git init
git add .
git commit -m "Initial Rabbit Hole Apps site"
git remote add origin git@github.com:<org-or-user>/<repo>.git
git branch -M main
git push -u origin main
```

Enable Pages: **Settings → Pages → Source: GitHub Actions**.

`astro.config.mjs` is set for a **root** site (`base: '/'`), which matches:

- An org site, e.g. `https://rabbitholeapps.github.io` (repo named `<org>.github.io`)
- A custom domain (add `public/CNAME`, then set `site` to that domain)

If GitHub still publishes a project URL like `https://<user>.github.io/<repo>/`, either use a custom domain / org `.github.io` repo, or set `base` to `'/<repo>/'` in `astro.config.mjs`.

Update `site` in `astro.config.mjs` once you know the live URL.

## Add an app

Apps are a content collection. Adding a product is a markdown file plus images — not a new page template.

1. Add `src/content/apps/your-slug.md` with the same frontmatter as the existing files (`name`, `tagline`, `status`, `labels`, `order`, `problem`, `solution`, `highlights`, `cta`, `logo`, `screenshots`).
2. Put the logo and screenshots under `public/images/apps/your-slug/`.
3. If screenshots are not ready, point `src` at an SVG placeholder and set `placeholder: true`.

The route `/apps/your-slug/` is generated from the filename.

## What is here

| Page | Path |
|------|------|
| Home | `/` |
| App index | `/apps/` |
| MatchReadyTX | `/apps/match-ready-tx/` |
| TO3 | `/apps/to3/` |
| ReflectED | `/apps/reflected/` |
| Sevens Manager | `/apps/sevens-manager/` |
| RefLog | `/apps/reflog/` |
| RefLog privacy / support / delete | `/apps/reflog/privacy/` · `/support/` · `/delete-account/` |
| Referee IQ | `/apps/referee-iq/` |
| Referee IQ privacy / support / delete | `/apps/referee-iq/privacy/` · `/support/` · `/delete-account/` |
| About | `/about/` |
