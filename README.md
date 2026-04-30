# Trophic Labs — Marketing Site

Phase 2 build per `docs/BUILD-BRIEF-MARKETING-SITE.md`. Translates Claude Design's
locked HTML/CSS exports into a production Next.js 14 site.

## Stack

- **Next.js 14** (App Router) + **TypeScript strict**
- **Tailwind v4** for utility helpers; **plain CSS** in `app/globals.css` carries the
  bulk of the design canon (translated verbatim from `web/marketing/*.html`).
- **CSS custom properties** in `styles/tokens.css` define the entire design system
  (colors, type scale, spacing, motion). One source of truth for the visual canon.
- **IBM Plex Sans + IBM Plex Mono** via `next/font/google`.
- **Stripe Checkout** via `app/api/checkout/route.ts`.

## Pages (7 + 2 trust pages)

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` |
| `/pricing` | `app/pricing/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/manifesto` | `app/manifesto/page.tsx` |
| `/engine` | `app/engine/page.tsx` |
| `/methodology` | `app/methodology/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` (DraftBanner) |
| `/terms` | `app/terms/page.tsx` (DraftBanner) |

## Run locally

```bash
cd marketing/
cp .env.example .env.local        # set STRIPE_* keys for /api/checkout
npm install
npm run dev                       # http://localhost:3000
```

`/api/checkout` requires `STRIPE_SECRET_KEY` and `STRIPE_PRICE_ARCHITECT_ANNUAL`.
Without those env vars the endpoint returns a 500; the rest of the site renders
fine for visual review.

## Build / typecheck

```bash
npm run typecheck
npm run build
```

## Deploy (Netlify)

The site is provisioned at:
- **Project:** `trophic-labs-marketing`
- **Site ID:** `7e4bc231-cb25-4560-abae-b9f43c8f80c5`
- **Team:** Aloo (`hello-yg-frlq`)
- **Default URL:** https://trophic-labs-marketing.netlify.app
- **Dashboard:** https://app.netlify.com/projects/trophic-labs-marketing

`netlify.toml` at the root pins the build command + `@netlify/plugin-nextjs`,
which auto-converts Next.js API routes (e.g. `/api/checkout`) into Netlify
Functions transparently. No manual `/netlify/functions` code needed.

```bash
cd marketing
# one-time setup (skip if already done)
npx --yes netlify-cli login                                        # browser auth
npx netlify-cli link --id 7e4bc231-cb25-4560-abae-b9f43c8f80c5     # link local repo to project

# every deploy
npx netlify-cli deploy                                             # draft → unique preview URL
npx netlify-cli deploy --prod                                      # production → trophic-labs-marketing.netlify.app
```

Required env vars on Netlify (set via `netlify env:set KEY VALUE` or in the
dashboard at Project → Site configuration → Environment variables):

```
STRIPE_SECRET_KEY
STRIPE_PRICE_ARCHITECT_ANNUAL
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_SITE_URL=https://trophiclabs.ai
NEXT_PUBLIC_WEB_APP_URL=https://app.trophiclabs.ai
```

Without these the site renders fine for visual review; only `/api/checkout` 500s.

## Architecture notes

- **Single global CSS bundle.** Page-specific styles live alongside shared chrome
  in `app/globals.css`, organized by section header. Marketing site of this size
  doesn't benefit from CSS-Modules splitting; one file makes the design canon
  scannable in one place.
- **Components are presentational.** `components/Header.tsx`, `Footer.tsx`,
  `LogoLockup.tsx` are pure server components; `FAQItem.tsx`, `ProgramLibrary.tsx`,
  `CheckoutButton.tsx` are client components (interactive).
- **`lib/program-library.ts`** holds the 6 program data objects rendered by
  `ProgramLibrary`. To revise content, edit that file — the component is purely
  rendering.
- **Bilateral weight display** (`lib/utils.ts → displayWeight`) applies the
  per-cable × 2 doubling rule for two-sided bilateral movements per the build
  brief's per-cable display fix. The example sessions in `program-library.ts`
  use it — Bench Press at 75 lb/cable renders as "150 lb total · 75 per cable."

## Deviations from build brief — flagged for SJ review

1. **Tailwind usage minimal.** The brief specifies Tailwind v4. We installed
   Tailwind v4 + `@tailwindcss/postcss` and surfaced design tokens via `@theme`,
   but the bulk of styling is plain CSS translated from the Claude Design HTML
   to preserve visual fidelity. Tailwind utilities are available as an escape
   hatch; they aren't the primary mechanism. **Rationale:** "translate, don't
   reinvent" beat "rewrite the design canon as Tailwind utilities."
2. **Email-collection modal is a `window.prompt`.** Architect "Begin 14-day trial"
   buttons collect email via `window.prompt`. Brief lists this as acceptable v1.
   Replace with an inline form/modal if richer UX is wanted before launch.
3. **Logo lockup uses CSS 3-bar glyph, not the SVG file.** The Claude Design HTML
   uses inline 3-bar glyph divs in every page; we kept that approach for
   consistency. SVG brand assets (`A-hero-wordmark.svg`, `B-full-lockup.svg`,
   etc.) are copied to `public/assets/` and available if needed for OG images
   or marketing surfaces.
4. **OG images (`public/og/*.png`) not generated.** Out of scope for this build —
   would need a design pass per page. The metadata `openGraph` block falls back
   to text-only meta tags. Generate per-page OG images post-launch.
5. **Sign-in CTA dropped from header.** The pricing.html source had a "Sign in"
   button; we removed it because there's no web app to sign into yet, and the
   build brief specifies the header right-CTA is just "Begin →". Edit #2 in
   `MARKETING-SITE-EDITS-2026-04-30.md` confirms this.
6. **ProgramLibrary content drafted, not sourced from `outputs/template-tests`
   verbatim.** The component spec asks to pull example sessions from real test
   outputs. The hypertrophy example matches Wk 1 Upper A from
   `outputs/template-tests/hypertrophy-mesocycle.txt`; the others are inspired
   by their templates but condensed to 4–5 movements per panel for visual
   density. Flag if SJ wants verbatim alignment against test-output text.
7. **All AI Action surfaces and template names are taken from `pricing.html`.**
   No new claims introduced.
8. **Mobile nav is a no-op.** Below 768px the primary nav hides — there's no
   hamburger menu yet. Acceptable for a v1 desktop-first launch; flag if mobile
   discovery matters before lawyer-review unblocks production deploy.
9. **`/privacy` + `/terms` are placeholder pages** per build brief §"Lawyer-pending
   placeholder treatment." DraftBanner at top + plain-language intent paragraph.
   Render the full `docs/PRIVACY-POLICY-DRAFT.md` content only if SJ approves.

## What's tested vs. not

- ✅ All 7 routes render statically.
- ✅ TypeScript strict; `npm run typecheck` passes.
- ✅ `npm run build` produces a successful production build.
- ⏳ Lighthouse / a11y audits — not run in this build pass; queue for Vercel
  preview QA.
- ⏳ Stripe end-to-end test — requires real test-mode keys to be set; the route
  is wired and returns a Checkout URL when env vars are present.
