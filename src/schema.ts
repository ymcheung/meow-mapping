import { z } from 'astro:content';

export const indexProps = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  dateModified: z.coerce.date(),
  datePublished: z.coerce.date()
});

// export const imageSchema = ({ image }: SchemaContext) =>
//   z.object({
//     image: image(),
//     alt: z.string().optional()
//   });

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  hasCover: z.boolean(),
  // cover: imageSchema({ image }),
  cover: z
    .object({
      // image: image().optional(),
      alt: z.string()
    })
    .optional(),
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
    by: z
      .enum(['bicycle', 'ferry', 'train', 'taxi', 'walk', 'motorcycle'])
      .array()
  }),
  category: z.enum(['islands', 'temples', 'neighborhoods']),
  dateVisited: z.coerce.date(),
  dateModified: z.coerce.date(),
  datePublished: z.coerce.date()
});
