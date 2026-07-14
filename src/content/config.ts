import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Insights'),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Growth Local'),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
    // Optional Q&A pairs → FAQPage structured data (see BlogFaqSchema.astro).
    // The visible FAQ still lives in the post body; this powers the schema.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog };
