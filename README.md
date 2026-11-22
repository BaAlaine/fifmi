# fifmi

The new website for ZAOGA Forward In Faith Ministries International (fifmi.org), built to the approved redesign: blue as the main colour, generous white space, and purple as an accent.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, with the design tokens in `src/app/globals.css`
- Hosting on Netlify (`netlify.toml`)
- Payload CMS 3 on PostgreSQL is the planned content source. Until it is connected, content lives in typed files under `src/content/`, shaped like the planned collections.

## Content rules

Nothing about the ministry is invented. A value that is not yet verified is stored as `null`:

- On previews (`NEXT_PUBLIC_SHOW_CMS_PLACEHOLDERS=true`) a labelled `[CMS: ...]` placeholder shows what is missing.
- In production (`false`) the placeholder and anything that depends on it are hidden.

Netlify sets this per context: previews show placeholders, production never does.

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- -p 3100 &
node scripts/a11y-check.mjs http://localhost:3100 /   # axe-core, WCAG 2.2 AA, at 390px and 1440px
```

The accessibility check needs Playwright with Chromium installed.

## Structure

```
src/app/            routes, layout, global styles and tokens, robots, sitemap, 404
src/components/ui/  buttons, headings, icons, CMS placeholders
src/components/layout/  utility bar, header, mobile menu, footer, skip link
src/components/home/    the 13 homepage sections
src/content/        site settings, navigation, offices and homepage content
src/lib/            CMS flag, structured data
```
