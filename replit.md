# Axion Fit

A Next.js 16 / React 19 / Tailwind CSS v4 content site in Traditional Chinese for macro nutrition tracking.

## Stack

- **Framework**: Next.js 16.3 (App Router)
- **UI**: React 19 + Tailwind CSS v4
- **Language**: TypeScript
- **Content**: Hardcoded in `lib/content.ts` (no database or CMS)

## Project structure

```
app/          – Next.js App Router pages (home, blog, products)
components/   – Shared UI components (Header, Footer, PostCard, MacroBar, AdSlot)
lib/          – Content data and types (content.ts)
public/       – Static assets
```

## How to run

The workflow `Start application` runs `PORT=5000 npm run dev` and serves the site on port 5000.

## Content

All blog posts and product data live in `lib/content.ts`. Edit that file to add posts or update product details.

The product links out to Gumroad (`https://axionfit.gumroad.com/l/macro-tracker`).

## User preferences

_None recorded yet._
