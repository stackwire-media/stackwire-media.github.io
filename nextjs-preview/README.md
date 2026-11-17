# Stackwire Next.js site

This is the Next.js version of Stackwire Media. It uses the App Router and static export, so Cloudflare Pages serves prebuilt static files.

## Local development

```bash
cd nextjs-preview
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The exported website is written to `out/`. For Cloudflare Pages, configure the project root as `nextjs-preview`, the build command as `npm run build`, and the build output directory as `out`.

## Content and routes

- All 10 existing articles are stored with their original article HTML, metadata and Article structured data in `data/articles-content.json`.
- `data/articles.js` supplies the listing data used by the homepage and search.
- `data/pages-content.json` contains the About, Contact, Privacy, Editorial Policy, Write for Us and category page content.
- The existing clean article URLs and category/information URLs are generated as static pages.
- Original article diagrams and image assets are in `public/images/`.
- Existing `.html` redirects, sitemap and robots rules are copied into `public/`.
- The search page is available at `/search/`; the old `/search.html` address redirects there.

## Before production launch

1. Review the Cloudflare Pages preview on desktop and mobile.
2. Check all 19 existing sitemap URLs, images, navigation, metadata, canonical tags, structured data and redirects.
3. Confirm Cloudflare Pages production settings use this folder as the project root and `out` as the output directory.
4. Switch the production deployment only after review and approval.
