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

## Project structure

```
src/
  layouts/Base.astro        # <head>, fonts, SEO, motion runtime (Lenis + reveals)
  components/               # Nav, Hero, Marquee, Intro, Services, Work,
                            # Stats, Process, Testimonial, Contact, Footer
  pages/index.astro         # single-page home that composes the sections
  styles/global.css         # base layer, design tokens, reveal + reduced-motion
public/
  example.png               # placeholder used for all work/project thumbnails
tailwind.config.mjs         # color, type, and animation tokens
```

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

- Single-page home today; structured so a multi-page **blog** (and `/work`
  case-study pages) can be added under `src/pages/` with the shared layout.
