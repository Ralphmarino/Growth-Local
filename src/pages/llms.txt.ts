import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ralph } from '../data/author';

// Generates /llms.txt — a curated, LLM-friendly map of the site
// (https://llmstxt.org). Built from the blog content collection so it stays
// in sync as posts are added.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? 'https://growthlocal.com/').replace(/\/$/, '');

  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  // Strip any stray HTML/whitespace so the plain-text file stays clean
  const clean = (s: string) =>
    s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const blogLines = posts
    .map(
      (p) =>
        `- [${clean(p.data.title)}](${base}/blog/${p.slug}): ${clean(p.data.description)}`
    )
    .join('\n');

  const body = `# Growth Local

> Growth Local is a veteran-owned digital studio founded in 2020 in Colorado Springs, Colorado. We help businesses grow online with web development, AI consulting, SEO, and digital marketing — including modern AI-search optimization (GEO/AEO). Local roots, national reach.

Founder & operator: ${ralph.name}, ${ralph.role} (8+ years in digital marketing).
Contact: contact@growthlocal.com · 678-631-6518 · Colorado Springs, CO (serving clients nationwide).

## Services
- [Web Development](${base}/#services): Fast, accessible websites and web apps built on Next.js/Astro, with strong Core Web Vitals.
- [AI Consulting](${base}/#services): Practical automations, assistants, and data workflows teams actually use.
- [SEO](${base}/services/seo): Full-funnel program — SEO audit, technical, on-page, off-page, CRO, analytics & reporting, and GEO/AEO (Generative/Answer Engine Optimization).
- [Digital Marketing](${base}/#services): Paid media, social, email, and analytics working as one growth system.

## Key pages
- [Home](${base}/): Overview of services, work, process, and the studio.
- [SEO Services](${base}/services/seo): The seven SEO disciplines, process, and results.
- [About Ralph Marino](${base}/blog/author/${ralph.slug}): Founder bio and articles.
- [Blog](${base}/blog): Articles on SEO, AI search, performance, and growth.
- [Contact](${base}/#contact): Start a project or request a free SEO audit.

## Blog posts
${blogLines}

## Notes
- Primary topics: SEO, GEO, AEO, technical SEO, CRO, web development, AI consulting, digital marketing.
- Service area: Colorado Springs, Colorado and the United States.
- Sitemap: ${base}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
