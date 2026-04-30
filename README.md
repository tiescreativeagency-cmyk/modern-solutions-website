# Modern Solutions Construction — marketing site

Next.js (App Router) + Tailwind CSS v4. Copy and structure are driven by [`data/site.js`](data/site.js) so you can rebrand or tweak messaging without hunting through components.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — run production server

## Project layout

- `app/` — routes, layout, global styles
- `components/` — sections and shared UI
- `data/site.js` — **single source of truth** for navigation labels, CTAs, service areas, contact info, legal footer
- `public/` — static assets (logos, favicon, photography)
- `lib/utils.js` — `cn()` helper for Tailwind class merging

## Source content

Public-facing copy is aligned with [modernsolutionsconstruction.com](https://www.modernsolutionsconstruction.com). Replace the vanity `tel:` digits in `data/site.js` if your real routing differs from `855-95-MODERN`.

## Fonts & theme

- **Primary:** white surfaces (`surface`, `background`).
- **Secondary:** near-black (`foreground`, `secondary`) for type and the footer / tagline band.
- **Tertiary (accent):** neon green `#39FF14` (logo-adjacent) for primary buttons, phone on dark, kicker text, dots, and link hovers — tuned in [`app/globals.css`](app/globals.css) under `@theme` (`accent`, `accent-dim`, `accent-subtle`, etc.).

Body font is DM Sans (`app/layout.js`).
