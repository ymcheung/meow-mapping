import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.object({
      level: z.string()
    }),
    transportation: z.object({
      time: z.number(),
      from: z.string(),
      by: z.string().array()
    })
  })
});

export const collections = {
  posts: postsCollection
};
