import { z } from 'astro/zod';

export const indexProps = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  dateModified: z.coerce.date(),
  datePublished: z.coerce.date()
});

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  difficulty: z.object({
    level: z.enum(['easy', 'medium', 'hard'])
  }),
  feed: z.boolean(),
  transportation: z.object({
    duration: z.number(),
    from: z.object({
      place: z.string(),
      kanji: z.string()
    }),
    by: z.string().array()
  }),
  category: z.enum(['islands', 'temples', 'towns']),
  dateVisited: z.coerce.date(),
  dateModified: z.coerce.date(),
  datePublished: z.coerce.date()
});
