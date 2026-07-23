# Accredian Enterprise — Landing Page

A responsive Next.js (App Router) rebuild of the Accredian enterprise training
landing page: hero, track record, clients, the CAT Framework, the Accredian
Edge, domain expertise, course segmentation, how-it-works, FAQs, testimonials,
and an enquiry form wired to a mock API route.

## Stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS with a custom design-token theme (`tailwind.config.ts`)
- Functional components + hooks only, no client-state libraries
- `app/api/enquire/route.ts` — mock API endpoint for the enquiry form (swap in
  a real CRM/email integration for production)

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the mock API route.
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  api/enquire/route.ts   # mock enquiry endpoint
  components/            # all page sections, functional + typed
  data.ts                 # centralized copy/content, easy to swap for a CMS
  globals.css
  layout.tsx
  page.tsx
```

## Notes

- All sections are reusable, typed components reading from `app/data.ts` —
  update copy there without touching markup.
- Respects `prefers-reduced-motion`; all interactive elements have visible
  keyboard focus states.
- Replace the mock handler in `app/api/enquire/route.ts` with a real
  integration (HubSpot, SendGrid, a database, etc.) before going live.
