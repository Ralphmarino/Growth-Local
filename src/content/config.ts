import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Insights'),
    author: z.string().default('Growth Local'),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
