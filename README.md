# SAVVA Cafe — website

Mobile-first, editorial landing page for SAVVA Cafe. Next.js (App Router) +
TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content & data

- `data/content.ts` — all copy, brand name/tagline, links (Instagram, Google
  Maps directions).
- `data/menu.ts` — interactive menu categories/items/prices.

Every fact that is not confirmed by an official SAVVA source (tagline,
prices, item names, address, opening hours) is marked with a `TODO:` comment
at its source. Search the repo for `TODO:` to find every placeholder that
needs a real value before launch.

## Images

All images render through `components/ui/ImageSlot.tsx`. Until real SAVVA
photography is available, each slot shows a tasteful abstract placeholder at
the correct aspect ratio. See `public/images/README.md` for the exact
filename → component mapping and how to swap them in.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     One component per section, plus components/ui/ primitives
data/           Copy and menu content, kept separate from components
public/images/  Where official photography will live
```
