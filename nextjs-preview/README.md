# Stackwire Next.js design preview

This folder is an isolated Next.js prototype. It does **not** replace the current live HTML site and is not connected to the production Cloudflare Pages build.

## Run locally

```bash
cd nextjs-preview
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The project uses Next.js App Router and static export (`output: "export"`) so it can be hosted as static files on Cloudflare Pages.

## Before production migration

- Move the project to the repository root or configure Cloudflare Pages with `nextjs-preview` as its root directory and `out` as the build output.
- Migrate the complete body of all existing articles into content files and render the existing clean URLs. The current prototype links article cards to the live site's existing URLs.
- Preserve the current canonical domain, sitemap, robots rules, schema, metadata, image paths, redirects, and every indexed URL.
- Copy the existing public image library and favicon assets into `public/`.
- Run a URL-by-URL comparison and mobile/accessibility/performance checks before switching production.

## Design direction

A more confident editorial identity: clearer STACKWIRE wordmark, stronger heading hierarchy, calmer spacing, consistent category colors, restrained graphic treatments, and responsive article discovery. This is a design foundation, not a completed content migration.
