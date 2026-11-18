# Stackwire Media

This folder contains the Next.js App Router site for Stackwire Media. It is configured for static export and Vercel hosting.

## Local development

```bash
cd nextjs-preview
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`. The Vercel project should use `nextjs-preview` as its Root Directory and `npm run build` as its Build Command.

## Content and routes

- `data/articles-content.json` stores article HTML, metadata, canonical URLs and Article structured data.
- `data/articles.js` supplies homepage, category and search listing data.
- `data/pages-content.json` contains the About, Contact, Privacy, Editorial Policy, Write for Us and category page content.
- Existing clean article, category and information URLs are generated as static pages.
- Article diagrams and site assets are stored in `public/`.
- `public/sitemap.xml` and `public/robots.txt` preserve the site's crawl discovery settings.
- `vercel.json` handles the legacy `/search.html` redirect.

## Pre-launch checks

1. Review the preview on desktop and mobile.
2. Check every sitemap URL, image, navigation link, metadata, canonical URL and structured-data block.
3. Test the search experience and legacy redirects.
4. Merge and promote to production only after review and approval.
