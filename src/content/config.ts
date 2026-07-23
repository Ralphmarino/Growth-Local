import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Optional override for the <title> tag / OG title. When set, it is used
    // verbatim (no "· Growth Local" suffix) — handy for keeping SEO titles
    // under ~60 chars. Falls back to `${title} · Growth Local`.
    titleTag: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Insights'),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Growth Local'),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional OG overrides + featured image for social cards
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    heroImage: z.string().optional(),
    // Optional Q&A pairs → FAQPage structured data (see BlogFaqSchema.astro).
    // The visible FAQ still lives in the post body; this powers the schema.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
