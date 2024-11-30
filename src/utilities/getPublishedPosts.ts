import { type CollectionEntry, getCollection } from 'astro:content';
import { getLocaleFromUrl } from '@i18n/utilities';

export default async function getPublishedPosts(
  locale: string,
  collection: 'posts' = 'posts',
  sort: string = 'reverseChronological'
) {
  let posts = (await getCollection(collection)).filter(
    ({ data }) => !data.secret
  );
  if (locale !== '')
    posts = posts.filter(function (entry: CollectionEntry<'posts'>) {
      return getLocaleFromUrl(entry.slug) === locale;
    });
  if (sort === 'reverseChronological')
    posts = posts.sort(
      (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
        b.data.datePublished.valueOf() - a.data.datePublished.valueOf()
    );
  return posts;
}
