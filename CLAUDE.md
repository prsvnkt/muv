# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MUV — a small "coming soon" marketing site for a premium Brazilian Jiu-Jitsu gear / performance apparel brand (Pour Global Ltd.). Next.js 15 App Router + React 18 + Tailwind CSS 3, TypeScript. Deployed on Vercel; pushes to `main` trigger production deploys.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint (eslint-config-next)

There are no tests.

## Structure

Two pages only, both self-contained in the App Router:

- `app/page.tsx` — homepage ("Coming Soon")
- `app/about/page.tsx` — About page (brand copy, e.g. the "High-End by Design" section)
- `app/layout.tsx` — root layout; owns all metadata (SEO, OpenGraph, favicons/manifest)

Styling is Tailwind utility classes inline in the pages plus `app/globals.css`. Brand colors (`background` white / `foreground` black) are defined in `tailwind.config.ts`. Favicon/manifest assets live in `public/`.

## Conventions

- Copy changes are the most common task; wording is deliberate brand voice — edit only what's asked.
- Commit messages follow `<type>: <description>` (feat, fix, chore, …).
