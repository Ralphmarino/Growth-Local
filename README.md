# Growth Local

Premium marketing site for **Growth Local** — a Colorado Springs digital studio
offering Web Development, AI Consulting, SEO, and Digital Marketing, built with a
national-caliber standard of craft.

Dark, editorial, kinetic design direction (electric lime on near-black),
inspired by studio sites like kota.co.uk. Built as a fast static site with
smooth scroll and tasteful scroll-triggered motion that degrades gracefully on
any device and respects `prefers-reduced-motion`.

## Tech stack

- **[Astro](https://astro.build)** — static-first, zero-JS-by-default
- **[Tailwind CSS](https://tailwindcss.com)** — utility styling + design tokens
- **[GSAP](https://gsap.com) + [ScrollTrigger](https://gsap.com/scrolltrigger/)** — parallax & count-up
- **[Lenis](https://lenis.darkroom.engineering/)** — smooth scrolling
- Fonts: Bricolage Grotesque (display), Inter (body), JetBrains Mono (labels)

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Pages

| Route | Source | Purpose |
|-------|--------|---------|
| `/` | `src/pages/index.astro` | Single-page home scroller |
| `/services/seo` | `src/pages/services/seo.astro` | Dedicated SEO services page (7 disciplines) |
| `/blog` | `src/pages/blog/index.astro` | Blog index |
| `/blog/<slug>` | `src/pages/blog/[...slug].astro` | Blog post (from content collection) |
| `/sitemap-index.xml` | `@astrojs/sitemap` | Auto-generated sitemap |
| `/robots.txt` | `public/robots.txt` | Crawl directives + sitemap reference |

### SEO services

`/services/seo` covers the full modern program as a card grid: **SEO Audit,
Technical, On-Page, Off-Page, CRO, Analytics & Reporting, and GEO/AEO**
(Generative / Answer Engine Optimization for AI search), plus engagement process,
representative results, and CTAs.

### Blog

Posts are an Astro **content collection** (`src/content/blog/*.md`), typed by the
schema in `src/content/config.ts`. Add a new `.md` file with the required
frontmatter (`title`, `description`, `pubDate`, optional `category`,
`readingTime`, `draft`) and it appears automatically on `/blog`.

## Project structure

```
src/
  layouts/Base.astro        # <head>, fonts, SEO, motion runtime (Lenis + reveals)
  components/               # Nav, Hero, Marquee, Intro, Services, Work,
                            # Stats, Process, Testimonial, Contact, Footer
  pages/
    index.astro             # single-page home
    services/seo.astro      # SEO services page
    blog/index.astro        # blog listing
    blog/[...slug].astro    # blog post template
  content/
    config.ts               # blog collection schema
    blog/*.md               # blog posts
  styles/global.css         # base layer, design tokens, prose, reduced-motion
public/
  example.png               # placeholder used for all work/project thumbnails
  robots.txt
tailwind.config.mjs         # color, type, and animation tokens
netlify.toml                # deploy config (Netlify / Cloudflare / Vercel)
```

## Deployment

The site is fully static. Any host that serves a folder works.

- **Netlify / Cloudflare Pages / Vercel** — point at the repo; build command
  `npm run build`, publish directory `dist`. `netlify.toml` is already provided
  and is read by Netlify and Cloudflare Pages; Vercel auto-detects Astro.
- **Manual** — `npm run build`, then deploy the `dist/` folder anywhere
  (S3 + CloudFront, GitHub Pages, nginx, etc.).

Set the production domain in `astro.config.mjs` (`site`) so the sitemap and
canonical URLs resolve correctly (currently `https://growthlocal.com`).

## Design tokens

Defined in `tailwind.config.mjs`:

| Token | Value | Use |
|-------|-------|-----|
| `base` | `#0A0A0B` → `#1E1E21` | near-black canvas + elevated surfaces |
| `ink` | `#F4F4EF` / muted `#9B9B93` | foreground text |
| `lime` | `#C7F94E` | single accent (CTAs, highlights) |
| display | Bricolage Grotesque | oversized headlines |
| mono | JetBrains Mono | eyebrows, labels, tabular numbers |

## Content notes

- The live `growthlocal.com` copy was not reachable from the build environment
  (egress policy), so copy here is polished placeholder text grounded in the four
  services. All strings live in the component frontmatter and are easy to edit.
- Work thumbnails all reference `public/example.png` by request — replace per
  project when real case-study imagery is available.
- Contact email/phone are placeholders (`hello@growthlocal.com`, `(719) 555-0139`).

## Roadmap

- Individual `/work/<slug>` case-study pages (mirror the blog collection
  pattern) when real project content and imagery are ready.
- Wire the contact CTAs to a real form backend or scheduling link.
