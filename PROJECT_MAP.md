# PROJECT_MAP.md — soletahomes

Marketing site for Soleta Homes (premium modular homes). Static-ish Next.js app with two
server-side form routes that email the team and forward a signed lead payload to Tikka.

## Stack
- Next 14.2 App Router, TypeScript (`strict: false`), React 18.
- nodemailer 8 for SMTP; Node 24 runs everything (also `.mts` scripts via type stripping).
- No test runner package: `scripts/check-tikka-webhook.mts` uses `node:test`, run directly with `node`.
- No new dependencies may be added (owner rule for the O48 lot).

## Commands
- `npm run lint` — `next lint`
- `npm run type-check` — `tsc --noEmit`
- `npm run build` — production build
- `node scripts/check-tikka-webhook.mts` — unit tests for `lib/tikka-webhook.ts` (local mocks on 127.0.0.1)
- `node scripts/e2e-forms.mts` — e2e for /api/contact and /api/offer (needs a dev server via E2E_BASE_URL,
  a local SMTP sink on 127.0.0.1:2525 and a Tikka mock on 127.0.0.1:4010)
- `node scripts/run-e2e-forms.mjs` — starts the dev server with the test env and runs e2e-forms end to end

## Folder map
- `app/` — App Router pages and API routes (`app/api/contact/route.ts`, `app/api/offer/route.ts`)
- `components/` — React components (site UI)
- `lib/` — shared server/client helpers (`lib/tikka-webhook.ts`, schemas, attribution, consent)
- `scripts/` — operator scripts and gates (`o73-gate.mjs`, e2e scripts, checks)
- `styles/` — global CSS
- `docs/dsh/` — DSH gate specs (e.g. `o48-2-gate.json`)

## Where not to look
- `screenshots/`, `temporary screenshots/`, `*.docx`, `.claude/` — owner artifacts, never touch.
- No `.env.local` access; test secrets are only the published golden O5 secret used by the scripts.
- Ports 3000, 3100, 3101 are occupied on the host; test ports are 3201 (dev), 2525 (SMTP), 4010 (Tikka mock).
