# Tiger Fiberglass & Plastic Production: website

Single-page company website built with React 19, TypeScript and Vite. The page is **prerendered to static HTML at build time** and then hydrated in the browser, so all content is present without JavaScript and `dist/` can be served by any static host.

## Requirements

- Node.js 22 LTS (see `.nvmrc`; Node 20.19+ also works). Node 21 is end-of-life and triggers engine warnings.
- npm (lockfile: `package-lock.json`)

## Commands

| Command                | What it does                                                        |
| ---------------------- | ------------------------------------------------------------------- |
| `npm install`          | Install dependencies                                                |
| `npm run dev`          | Dev server at http://localhost:5173 (client-rendered, hot reload)   |
| `npm run check`        | Lint + typecheck + formatting check. Run before every commit/deploy |
| `npm run lint`         | ESLint, zero warnings allowed                                       |
| `npm run typecheck`    | TypeScript project check                                            |
| `npm run format`       | Format the codebase with Prettier                                   |
| `npm run format:check` | Verify formatting without changing files                            |
| `npm run build`        | Typecheck, client build, SSR build, prerender into `dist/`          |
| `npm run preview`      | Serve `dist/` at http://localhost:4173                              |

## Project structure

```
Images from client/        Client's original photos (never edited)
public/                    Copied verbatim to dist/: favicons, robots.txt
scripts/prerender.mjs      Injects server-rendered markup into dist/index.html
index.html                 HTML shell: title, meta description, Open Graph, favicons
src/
  content.ts               ALL business text, contact details and image data (edit content here)
  App.tsx                  Page composition (section order)
  Root.tsx                 Provider tree shared by browser and prerender entries
  main.tsx                 Browser entry: hydrates prerendered HTML, loads font + styles
  entry-server.tsx         Build-time render entry
  sections/                Hero, About, Products, Materials, Ordering, Contact
  components/              Header, Footer, Brand, ProductCard, ContactActions, Picture, Icon, ErrorBoundary
  hooks/                   Scroll reveal and active-section tracking
  state/UIContext.tsx      Mobile-menu and active-section state
  assets/images/           Optimised photos (WebP + JPEG, two widths each)
  styles.css               Design tokens (top of file) and all component styles
_archive/                  Obsolete files from the previous version, safe to delete
```

## Design system

Tokens are defined on `:root` at the top of `src/styles.css`:

- **Colour.** The brand blue `#0f4c81` matches the "Tiger Fiber Glass" stencil on the client's tanks. Navy ink is used for text, with cool neutral surfaces. Amber `#f2b33d` is decorative only (eyebrow dashes, focus ring on dark backgrounds).
- **Type.** Archivo Variable, self-hosted via `@fontsource-variable/archivo`. Amharic text uses the system's Ethiopic font (Noto Sans Ethiopic, Nyala, Ebrima or Kefa).
- **Spacing, radius and shadow.** These are set as scales (`--space-*`, `--radius*`, `--shadow*`). Fluid section spacing uses `clamp()`.
- **Breakpoints.** 600px (small tablet), 720px (three product columns), 900px (two-column sections) and 1024px (desktop navigation).
- **Components.** `.button` with `-primary`, `-secondary`, `-light`, `-outline-light` and `-small` variants, plus `.text-link`, `.eyebrow`, `.check-list`, `.section` and `.section-tinted`.

## Content rules

All business facts come from the client's material: the company description message (English and Amharic, `Images from client/b0241187…jpg`), the product photos, and the contact details the client supplied (phone 0914 765 688, email, and the Addis Ababa and Mekelle addresses). **Do not add** capacities, prices, delivery terms, certifications, statistics or testimonials until the client supplies them.

Contact details live in one place in `src/content.ts`: `contact` (phone, email) and `locations` (addresses in English plus the client's original Ethiopic text). The phone, WhatsApp and email links, the footer, and the schema.org `Organization` data (`src/components/StructuredData.tsx`) are all generated from these.

There is no contact form. A static site has no backend, so enquiries go through tap-to-call, WhatsApp and email links. To add a form later, use a form service (e.g. Formspree, Netlify Forms) and never put secret keys in frontend code.

## Images

Originals stay untouched in `Images from client/`. To add an image:

1. Export WebP (quality ~78) and JPEG versions at two widths into `src/assets/images/`, named descriptively.
2. Import them in `src/content.ts` and add an entry to `images`, including real dimensions and alt text.
3. Render with `<Picture image={…} sizes="…" />`. Pass `priority` only for the above-the-fold hero image.

## Deployment

Run `npm run check && npm run build`, then upload the **contents** of `dist/` to any static host.

- Netlify / Cloudflare Pages: build command `npm run build`, publish directory `dist`, Node version 22.
- Vercel: framework preset "Vite", output directory `dist`.
- Apache / Nginx / cPanel: upload `dist/` contents to the web root.
- The site expects to be served from the domain root. For a sub-path, set `base` in `vite.config.ts`.

### Once the production domain is known

1. In `index.html`, add `<link rel="canonical" href="https://DOMAIN/">` and `<meta property="og:url" content="https://DOMAIN/">`.
2. Add a 1200×630 social image to `public/` and reference it with an absolute `og:image` URL. Change `twitter:card` to `summary_large_image`.
3. Add `public/sitemap.xml` and a `Sitemap: https://DOMAIN/sitemap.xml` line to `public/robots.txt`.
