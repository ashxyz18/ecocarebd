# Eco Care BD — website

Marketing site for Eco Care BD, a pest control, water tank cleaning and cleaning services company in Chattogram, Bangladesh.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.

- **32 routes**, all statically generated except `/contact` (needs the `?service=` query param)
- Mobile-first, designed for one-handed phone use
- Blue brand theme — change it in one place (see *Brand colour* below)
- Interactive: filterable service tabs, sortable price table, draggable before/after sliders, count-up stats, scroll progress bar, pointer-tracking hero aurora, scrolling credential ticker
- Local SEO: JSON-LD structured data, sitemap, robots, per-page metadata
- No CMS yet — all content lives in typed data files (see *Editing content* below)

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `node scripts/make-placeholders.cjs` | Regenerate placeholder images |

---

## Project layout

```
src/
├── app/
│   ├── layout.tsx            # Root layout: fonts, header, footer, sticky mobile CTA
│   ├── page.tsx              # Home page
│   ├── services/
│   │   ├── page.tsx          # All services index, grouped by category
│   │   └── [slug]/page.tsx   # One page per service (12 total, pre-rendered)
│   ├── blog/
│   │   ├── page.tsx          # Blog index
│   │   └── [slug]/page.tsx   # One page per article (6 total, pre-rendered)
│   ├── about/  contact/  faq/  gallery/
│   ├── offers/  careers/  service-areas/
│   ├── privacy-policy/  terms-and-conditions/  refund-policy/  service-policy/
│   ├── sitemap.ts  robots.ts  manifest.ts  not-found.tsx
│   └── og-image/route.ts     # Generated OG image
├── components/
│   ├── layout/    Header, Footer, MobileCtaBar
│   ├── home/      Home page sections + ServiceTabs, ServiceTable, AuroraBackground
│   ├── ui/        PageHero, CtaBand, FaqAccordion, Reveal, Counter, BeforeAfter,
│   │              ScrollProgress, TrustMarquee, SocialIcons, SectionHeading
│   ├── contact/   ContactForm
│   └── legal/     LegalPage layout
├── lib/
│   ├── services.ts  # All 12 services — the main content file
│   ├── posts.ts     # All 6 blog articles
│   ├── content.ts   # Testimonials, FAQs, stats, process, team, values
│   ├── site.ts      # Business name, phone, address, hours, social links
│   ├── nav-data.ts  # Navigation + footer link structure
│   └── utils.ts     # Phone/WhatsApp link builders, SEO helpers
└── scripts/
    └── make-placeholders.cjs
```

---

## Editing content

You don't need to touch components to change copy. **All content is data-driven.**

### Business details (phone, address, hours)

`src/lib/site.ts` — change it once, it updates the header, footer, contact page
and all click-to-call / WhatsApp links sitewide.

### Services

`src/lib/services.ts` — add or edit an object in the `SERVICES` array. Every service
page (hero, pricing table, what's included, process steps, FAQs, related services)
is generated from this data.

### Blog articles

`src/lib/posts.ts` — each post has an `icon` (used as a placeholder image) and a `body`
array of sections. Articles are pre-rendered at build time.

### Testimonials, FAQs, process, team, values

`src/lib/content.ts`.

### Navigation and footer links

`src/lib/nav-data.ts`. The header mega-menu and footer both build from this.

---

## Before you launch: replace the placeholder images

Every image in the site is currently a **generated placeholder** with the words
"PLACEHOLDER · replace with your own photo" on it. The site renders correctly with
them, but real photos of your actual work will convert far better.

Replace any file in `public/images/` **keeping the same filename** — no code changes needed:

| Path | Used by |
| --- | --- |
| `public/images/hero-technician.jpg` | Home hero |
| `public/images/trust-eco-treatment.jpg` | Home "Our commitment" section |
| `public/images/about-team.jpg` | About page |
| `public/images/services/<slug>.jpg` | Each service page (12 files) |
| `public/images/gallery/<slug>-1..4.jpg` | Gallery, before/during/after/detail (48 files) |

Gallery captions are already wired to the phases: `1` = before, `2` = during,
`3` = after, `4` = detail.

**Recommended specs:** hero 1200×1500 (portrait), service images 1200×900 (4:3),
gallery 1000×1000 (square), JPEG or WebP, under 300 KB each.

If you add new services or posts, regenerate any missing placeholder with:

```bash
node scripts/make-placeholders.cjs
```

---

## Connect the contact form

`src/components/contact/ContactForm.tsx` currently validates input and logs the
payload to the server console — **it does not send anything yet.** Look for the
`TODO` comment inside the `submit` action.

To make it live, replace the `console.info` + `await new Promise(...)` block with a
real send. Two common options:

1. **Next.js Route Handler + email** — create `src/app/api/book/route.ts`, send with
   [Resend](https://resend.com) or Nodemailer, return `{ ok: true }`.
2. **Formspree / Google Apps Script** — no code beyond posting to their endpoint.

The form already includes a honeypot field (`website`) that silently accepts bot
submissions, so keep that intact.

### WhatsApp as a zero-backend alternative

The header, footer, every service page and the mobile sticky bar all deep-link to
WhatsApp with the service name pre-filled. If you would rather take bookings over
WhatsApp, you can delete the form entirely and route `/contact` to WhatsApp — no
backend needed.

---

## Deploying

The site is a standard Next.js app and deploys to Vercel with no configuration.

```bash
npx vercel
```

Any Node host works too. Build command `npm run build`, start command `npm start`,
Node 20 or newer.

After deploying, update the domain in `src/lib/site.ts` (`SITE.url`) so canonical
URLs, the sitemap and structured data point at the live domain.

---

## Interactive features

| Component | File | What it does |
| --- | --- | --- |
| Service tabs | `home/ServiceTabs.tsx` | Filter the 12 services by category (All / Pest Control / Cleaning / Maintenance) with animated re-entry. Tablist ARIA semantics. |
| Comparison table | `home/ServiceTable.tsx` | Sortable table of price, duration and guarantee per service. Table on desktop, cards on mobile. |
| Before/after slider | `ui/BeforeAfter.tsx` | Drag, touch or arrow-key comparison of before vs after photos. Real slider ARIA. Used on `/gallery`. |
| Count-up stats | `ui/Counter.tsx` | Numbers animate from 0 when scrolled into view, preserving thousands separators and decimals. |
| Scroll progress | `ui/ScrollProgress.tsx` | Reading-progress bar under the header, rAF-throttled so it never thrashes layout. |
| Aurora hero | `home/AuroraBackground.tsx` | Pointer-following radial gradients with eased lag, drifting orbs and a masked grid. |
| Credential ticker | `ui/TrustMarquee.tsx` | Seamless infinite scroll of credential badges, pauses on hover. |
| FAQ accordion | `ui/FaqAccordion.tsx` | Grid-rows height animation, one open at a time. |

All animation is CSS opacity/transform only, and every one of these respects
`prefers-reduced-motion` (global override in `globals.css`).

---

## Mobile behaviour

The site is built mobile-first. Specific mobile details:

- **Sticky bottom bar** (`MobileCtaBar`) with Call / WhatsApp / Book appears after
  the user scrolls past the hero, hidden on desktop, respects iOS safe-area insets.
- **Header** collapses to a hamburger below `lg` (1024px). The Services menu expands
  inline with a grouped service list.
- **Menu lock:** opening the mobile menu locks body scroll; navigating closes it.
- Tap targets are ≥ 44px. The FAQ and testimonial carousels use large hit areas.

---

## Performance and SEO

- Every page is statically pre-rendered; `/contact` is dynamic only to read the
  service query param.
- Images use `next/image` with AVIF/WebP, sized per breakpoint, `priority` only on
  above-the-fold hero images.
- JSON-LD on every page: `LocalBusiness` (sitewide), `Service`, `ItemList`,
  `BreadcrumbList`, `FAQPage`, `BlogPosting`.
- `sitemap.xml` includes all static pages, services and posts.
- Semantic heading order (one `h1` per page), `alt` text on every image, visible
  focus rings, skip-to-content link.
- Security headers set in `next.config.ts`.

### Two things to do yourself

1. **Google Search Console** — add your domain and submit `sitemap.xml`.
2. **Google Business Profile** — this drives more local calls than the website
   itself for a service business. Use the same name, address and phone as
   `src/lib/site.ts`.

---

## Accessibility

Keyboard navigable throughout, focus-visible outlines, `aria-expanded` on all
disclosures, `aria-current` on the active nav item, reduced-motion-safe animations
(they are CSS opacity/transform only), and colour contrast meets WCAG AA on the
brand palette.

---

## Things you may want to change

- **Brand colour** — `src/app/globals.css`, the `--color-*` tokens in `@theme`.
  Change `--color-primary` (currently `#1d4ed8`) and `--color-primary-hover`; the
  whole site follows, including shadows and gradients. Secondary is cyan
  (`--color-secondary`), accent is amber (`--color-accent`).
  Regenerate placeholders afterwards so their gradients match: `node scripts/make-placeholders.cjs`.
- **Phone number** — `src/lib/site.ts`, `SITE.phone`.
- **Discount codes** — `src/app/offers/page.tsx`, the `OFFERS` array.
- **Service prices** — `src/lib/services.ts`, `priceFrom` on each service.
- **Footer address** — `src/lib/site.ts`, `SITE.address`.

> The WhatsApp buttons stay green on purpose — that is the WhatsApp brand colour
> and changing it makes the buttons unrecognisable.