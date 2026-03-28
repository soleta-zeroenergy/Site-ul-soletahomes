# Soleta Homes — Marketing Site

Next.js 14 (App Router) marketing site for Soleta Homes.

## Stack

- **Framework:** Next.js 14 (App Router, Server Components by default)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.4 + custom CSS (`styles/globals.css`)
- **Fonts:** Le Grand Capital / Legrand Regular (local, in `public/fonts/`) + system fallbacks
- **Utilities:** `clsx` + `tailwind-merge` via `lib/cn.ts`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command              | Description                          |
|----------------------|--------------------------------------|
| `npm run dev`        | Start development server             |
| `npm run build`      | Production build                     |
| `npm run start`      | Serve production build               |
| `npm run lint`       | ESLint via Next.js config            |
| `npm run type-check` | TypeScript check without emitting    |

## Routes

| Path                   | Page                        |
|------------------------|-----------------------------|
| `/`                    | Homepage                    |
| `/discover-soleta`     | Brand story & philosophy    |
| `/house-models`        | House collections catalogue |
| `/build-with-us`       | Process & build journey     |
| `/services`            | Service offering            |
| `/professionals`       | Architects & developers     |
| `/inspiration`         | Editorial & lifestyle       |
| `/sustainability-tech` | Materials & technology      |
| `/support-resources`   | FAQ & client support        |
| `/diy-e-shop`          | Self-build & components     |
| `/contact`             | Inquiry form                |

## API Routes

| Route           | Method | Description                                                                                                                                                                     |
|-----------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/api/contact`  | POST   | Contact form submission. Validates and logs to server console (no DB). Accepts `{ name, email, phone?, projectType, message }`. Returns `{ success: true }` (200) or `{ errors }` (422). |

Validation lives in `lib/contact-schema.ts` (shared between server and client). To add email delivery, replace the `console.log` block in `app/api/contact/route.ts` with your mail transport (Resend, Nodemailer, etc.).

## Key conventions

- **Content:** All page-level content lives in `lib/content/*.ts` — typed objects imported by `page.tsx` files. No content in components.
- **Nav:** Header and footer links are configured in `lib/nav.ts`.
- **SEO:** Base metadata in `lib/metadata.ts`. Per-page canonical via `withCanonical()` from `lib/seo.ts`. Structured data helpers in `lib/structured-data.ts`.
- **Components:** `components/layout/` (Header, Footer), `components/sections/` (page-level sections), `components/ui/` (atomic primitives).
- **Containers:** `.container-site` (88rem max) · `.container-narrow` (72rem) · `.container-text` (44rem).
- **Section rhythm:** `.section` · `.section-sm` · `.section-lg` (defined in `globals.css`).

## Assets

Logos live in `public/logo/`. Place local font files in `public/fonts/` and uncomment the `@font-face` blocks in `styles/globals.css`.
