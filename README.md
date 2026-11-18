# Stackwire Media

This repository contains the Stackwire Media website.

## Production hosting

The production website is hosted on **Vercel**.

- Production domain: https://stackwiremedia.com/
- Alternate domain: https://www.stackwiremedia.com/
- Vercel project: `stackwire-media.github.io`
- Production branch: `main`
- Active website directory: `nextjs-preview/`

## Active website

The Next.js application in `nextjs-preview/` is the source for the current production website.

Vercel project settings should use:

- **Root Directory:** `nextjs-preview`
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output:** Next.js static export, generated in `out/` by `next.config.mjs`

See [nextjs-preview/README.md](nextjs-preview/README.md) for development and content details.

## Legacy files

Older static HTML files remain in the repository root for historical reference. They are not the active Vercel production website. Do not upload the repository root to GitHub Pages or configure GitHub Pages to serve the production custom domain.

The production domain is managed through Vercel and its DNS configuration. Do not add a root-level `CNAME` file for GitHub Pages.

## Deployment notes

- Changes merged into `main` can trigger a Vercel production deployment.
- Review the Vercel deployment status before treating a change as live.
- Preserve existing canonical URLs, sitemap entries, redirects, and article paths when changing site content or routing.
