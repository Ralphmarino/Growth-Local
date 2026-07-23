// The SEO program, one entry per discipline. Powers both the SEO services page
// cards and each dedicated landing page (/services/search-engine-optimization/<slug>).
// Order follows the funnel: audit → foundation → content → authority → reach →
// conversion → measurement → AI search.

export interface Discipline {
  slug: string;
  no: string;
  title: string; // card title / nav label
  pageTitle?: string; // optional longer H1
  icon: string; // key into `disciplineIcons`
  chips: string[];
  desc: string; // short description on the SEO services page card
  meta: { title: string; description: string };
  lede: string; // hero subtitle on the landing page
  intro: string[]; // body paragraphs
  includes: string[]; // "what's included" checklist
}

export const disciplines: Discipline[] = [
  {
    slug: 'seo-audit',
    no: '01',
    title: 'SEO Audit',
    icon: 'audit',
    chips: ['Tech crawl', 'Competitor gap', 'Priority roadmap'],
    desc: 'A forensic baseline. We crawl, benchmark, and pressure-test your site against competitors to find exactly what is holding rankings back, and what to fix first.',
    meta: {
      title: 'SEO Audit Services · Growth Local',
      description:
        'A forensic SEO audit from Growth Local: full technical crawl, competitor gap analysis, and a prioritized, revenue-focused roadmap. Colorado Springs, serving brands nationwide.',
    },
    lede: 'A forensic baseline of where your search visibility stands today, and the fastest path to more of it.',
    intro: [
      'Every strong SEO program starts with an honest look at reality. Our SEO audit crawls your entire site, benchmarks it against your top competitors, and pressure-tests the technical, content, and authority signals that decide where you rank.',
      "You walk away with a prioritized roadmap: exactly what is holding your rankings back, what to fix first for the fastest wins, and what the long game looks like. No 200-point checklist you'll never use, just the issues that actually move revenue.",
    ],
    includes: [
      'Full technical crawl and indexation review',
      'Competitor and keyword gap analysis',
      'Content and on-page opportunity mapping',
      'Backlink profile and authority review',
      'Core Web Vitals and site-speed assessment',
      'A prioritized, revenue-focused roadmap',
    ],
  },
  {
    slug: 'technical-seo',
    no: '02',
    title: 'Technical SEO',
    icon: 'technical',
    chips: ['Core Web Vitals', 'Schema', 'Indexation'],
    desc: 'The foundation everything else stands on. Crawlability, indexation, site speed, Core Web Vitals, structured data, and a clean, logical architecture.',
    meta: {
      title: 'Technical SEO Services · Growth Local',
      description:
        'Technical SEO from Growth Local: crawlability, indexation, Core Web Vitals, structured data, and a clean site architecture that scales, and that AI crawlers can read.',
    },
    lede: 'The foundation everything else stands on, tuned so search engines and AI crawlers can find, read, and trust every page.',
    intro: [
      "If search engines can't crawl, render, and index your site cleanly, nothing else you do in SEO can compound. Technical SEO is the plumbing: crawlability, indexation, site architecture, speed, structured data, and the Core Web Vitals that increasingly influence both rankings and experience.",
      'We fix the issues that silently cap your growth, from render-blocking scripts and orphaned pages to bloated code and missing schema, and build a clean, logical structure that scales as you publish more.',
    ],
    includes: [
      'Crawlability and indexation fixes',
      'Site architecture and internal linking',
      'Core Web Vitals and performance tuning',
      'Structured data and schema markup',
      'XML sitemaps and robots.txt',
      'AI-crawler accessibility (GPTBot, PerplexityBot, and more)',
    ],
  },
  {
    slug: 'on-page-seo',
    no: '03',
    title: 'On-Page SEO',
    icon: 'onpage',
    chips: ['Intent mapping', 'Content', 'Internal links'],
    desc: 'Content and structure engineered to rank and convert. Keyword targeting, intent mapping, metadata, internal linking, and pages built around what searchers actually want.',
    meta: {
      title: 'On-Page SEO Services · Growth Local',
      description:
        'On-page SEO from Growth Local: keyword and intent research, content optimization, metadata, and internal linking that rank, and convert. Colorado Springs, nationwide.',
    },
    lede: "Content and page structure engineered to rank for what your customers actually search, and convert them once they arrive.",
    intro: [
      'On-page SEO is where search intent meets your business. We research the terms your customers actually use, map them to the right pages, and build content that answers the query completely, so Google and AI answer engines see your page as the best result.',
      'That means smart keyword targeting, intent-matched content, clean metadata, thoughtful internal linking, and pages structured to be both crawlable and genuinely useful.',
    ],
    includes: [
      'Keyword and search-intent research',
      'On-page content optimization',
      'Title tags and meta descriptions',
      'Header and content structure',
      'Internal linking strategy',
      'Image and media optimization',
    ],
  },
  {
    slug: 'off-page-seo',
    no: '04',
    title: 'Off-Page SEO',
    icon: 'offpage',
    chips: ['Digital PR', 'Link earning', 'Authority'],
    desc: 'Authority you earn. Digital PR, strategic link acquisition, and brand signals that tell search engines you are the credible answer in your space.',
    meta: {
      title: 'Off-Page SEO & Link Building · Growth Local',
      description:
        'Off-page SEO from Growth Local: digital PR, strategic link acquisition, and brand-authority signals that earn trust, no spammy link schemes. Colorado Springs, nationwide.',
    },
    lede: "The authority you earn beyond your own site, the signal that tells search engines you're the credible answer.",
    intro: [
      'Great content still needs authority behind it. Off-page SEO builds the external signals, links, mentions, and brand presence, that make search engines trust your site enough to rank it.',
      'We focus on quality over quantity: digital PR, strategic link acquisition from relevant and reputable sources, and brand-building that earns citations naturally. No spammy link schemes that put your domain at risk.',
    ],
    includes: [
      'Digital PR and outreach',
      'Strategic link acquisition',
      'Brand mention and citation building',
      'Competitor backlink analysis',
      'Toxic-link cleanup and disavow',
      'Authority and E-E-A-T signals',
    ],
  },
  {
    slug: 'national-seo',
    no: '05',
    title: 'National SEO',
    icon: 'national',
    chips: ['Broad keywords', 'Topical authority', 'Scalable content'],
    desc: 'Rank beyond your zip code. Broad, high-volume keyword strategy, topical authority, and scalable content that put your brand in front of customers across the country.',
    meta: {
      title: 'National SEO Services · Growth Local',
      description:
        'National SEO from Growth Local: rank for broad, high-volume keywords across the country with custom keyword strategy, content, and authority building. Get a free quote.',
    },
    lede: 'Rank for the broad, high-volume terms that put your brand in front of customers across the country, not just down the street.',
    intro: [
      'National SEO is a long-term investment that sets your business apart by ranking for broad, high-volume keywords rather than narrow geographic terms. As more and more people turn to search, and to AI, to find products and services, a strong national presence is how you capture your ideal audience at scale and drive positive ROI.',
      'Our team of experts at Growth Local specializes in developing custom national SEO strategies tailored to your brand and industry. We combine advanced keyword research and focus strategies, on-site content and SEO optimization, Google Maps optimization, citations, and review strategies to ensure your website is highly visible in search engine rankings.',
      "Don't let your competitors outrank you on a national level. The result is durable visibility for the terms that matter most to your growth, backed by the customer service and SEO knowledge that give you the confidence and peace of mind to invest in the right places. Get a free quote by giving us a call or filling out our contact form.",
    ],
    includes: [
      'National keyword strategy and prioritization',
      'Scalable content and topical authority',
      'On-site content and technical optimization',
      'Authority and strategic link building',
      'Google Maps and citation strategy (where it applies)',
      'Review and reputation signals',
    ],
  },
  {
    slug: 'conversion-rate-optimization',
    no: '06',
    title: 'CRO',
    pageTitle: 'Conversion Rate Optimization (CRO)',
    icon: 'cro',
    chips: ['A/B testing', 'UX', 'Landing pages'],
    desc: 'Traffic only matters if it converts. We test, refine, and rebuild the journey from landing to lead, turning the visitors SEO earns into pipeline.',
    meta: {
      title: 'Conversion Rate Optimization (CRO) · Growth Local',
      description:
        'CRO from Growth Local: turn the traffic your SEO earns into leads and revenue with funnel analysis, A/B testing, and landing-page optimization. Colorado Springs, nationwide.',
    },
    lede: "Traffic only matters if it converts. We turn the visitors your SEO earns into leads and revenue.",
    intro: [
      "You can win every ranking and still lose the sale if your pages don't convert. Conversion Rate Optimization is the discipline of systematically improving how many of your visitors take action, book, buy, call, or fill out the form.",
      'We study real user behavior, test the journey from landing to lead, and rebuild the friction points, so the same traffic produces more pipeline. Every change is measured, so wins stick and guesswork goes away.',
    ],
    includes: [
      'Conversion and funnel analysis',
      'A/B and multivariate testing',
      'Landing-page optimization',
      'UX and friction audits',
      'Form and call-to-action optimization',
      'Heatmaps and session insights',
    ],
  },
  {
    slug: 'analytics-and-reporting',
    no: '07',
    title: 'Analytics & Reporting',
    icon: 'analytics',
    chips: ['GA4', 'Attribution', 'Live dashboards'],
    desc: 'Total clarity on what is working. GA4, Search Console, and rank tracking distilled into transparent dashboards tied to revenue. No vanity metrics.',
    meta: {
      title: 'SEO Analytics & Reporting · Growth Local',
      description:
        'SEO analytics and reporting from Growth Local: GA4, Search Console, and rank tracking distilled into clear Looker Studio dashboards tied to revenue, not vanity metrics.',
    },
    lede: "Total clarity on what's working, tied to revenue, not vanity metrics.",
    intro: [
      "If you can't measure it, you can't scale it, and most SEO reporting drowns you in numbers that don't matter. We set up clean, trustworthy measurement and distill it into dashboards you'll actually use.",
      'GA4, Search Console, and rank tracking, connected to the outcomes that matter: qualified traffic, conversions, and revenue. You will always know exactly what your investment is producing.',
    ],
    includes: [
      'GA4 setup and configuration',
      'Search Console integration',
      'Rank and visibility tracking',
      'Custom Looker Studio dashboards',
      'Conversion and attribution tracking',
      'Monthly reporting and insights',
    ],
  },
  {
    slug: 'geo-aeo',
    no: '08',
    title: 'GEO / AEO',
    pageTitle: 'GEO / AEO (AI Search Optimization)',
    icon: 'geo',
    chips: ['AI Overviews', 'LLM citations', 'Entity SEO'],
    desc: 'Search is moving to AI. Generative & Answer Engine Optimization positions you to be cited by ChatGPT, Perplexity, and Google AI Overviews, the next front of discovery.',
    meta: {
      title: 'GEO / AEO: AI Search Optimization · Growth Local',
      description:
        'GEO/AEO from Growth Local: get cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews with AI-crawler access, answer-ready content, and entity optimization.',
    },
    lede: "Search is moving to AI. We make sure your brand is the one ChatGPT, Gemini, Perplexity, and Google AI Overviews cite.",
    intro: [
      'A growing share of searches now end inside an AI answer, no blue links, no click. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) position your brand to be the source those models quote and recommend.',
      'We make your site crawlable to AI bots, structure content for extraction, strengthen the entity and authority signals models trust, and track exactly where you appear across the major AI engines. It builds directly on your traditional SEO foundation.',
    ],
    includes: [
      'AI-crawler accessibility',
      'Answer-ready content and FAQs',
      'Entity and knowledge-graph optimization',
      'Layered schema markup',
      'AI citation and share-of-voice tracking',
      'Third-party and community signal strategy',
    ],
  },
];

// Minimal, consistent 1.5px stroke icons (16x16 viewBox), keyed by discipline.
export const disciplineIcons: Record<string, string> = {
  audit: '<circle cx="6" cy="6" r="3.2"/><path d="M8.4 8.4 13 13"/><path d="M5 6h2M6 5v2"/>',
  technical: '<path d="M6 3.5 2.5 7 6 10.5M10 3.5 13.5 7 10 10.5"/>',
  onpage: '<rect x="3" y="2.5" width="9" height="11" rx="1.2"/><path d="M5.2 5.5h4.6M5.2 7.6h4.6M5.2 9.7h2.8"/>',
  offpage:
    '<path d="M6.2 8.8a2.4 2.4 0 0 1 0-3.4l1.6-1.6a2.4 2.4 0 0 1 3.4 3.4l-.8.8"/><path d="M8.8 6.2a2.4 2.4 0 0 1 0 3.4l-1.6 1.6a2.4 2.4 0 0 1-3.4-3.4l.8-.8"/>',
  national: '<circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11"/><path d="M8 2.5c1.7 1.7 2.6 3.6 2.6 5.5S9.7 11.8 8 13.5C6.3 11.8 5.4 9.9 5.4 8S6.3 4.2 8 2.5Z"/>',
  cro: '<path d="M2.5 12h11"/><path d="M4 12V8.5M7 12V5.5M10 12V7.5M13 12V3.5"/>',
  analytics: '<path d="M2.5 2.5v11h11"/><path d="m4.5 10 2.5-3 2.5 2 3-4.5"/>',
  geo: '<path d="M8 2.2 9.2 6l3.8 1.2L9.2 8.4 8 12.2 6.8 8.4 3 7.2 6.8 6 8 2.2Z"/>',
};
