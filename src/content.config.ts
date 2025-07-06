import { postSchema } from '@/schema';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/data/posts' }),
  schema: postSchema
});

const postsTwCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/data/tw/posts' }),
  schema: postSchema
});

export const collections = {
  posts: postsCollection,
  postsTw: postsTwCollection
};
