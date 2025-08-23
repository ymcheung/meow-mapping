import type { Locale } from '@/types';

interface Fallback {
  [key: string]: string;
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string;
  };
};

export const defaultLocale: string = 'en';
export const locales = ['en', 'tw'];
export const fallback: Fallback = {
  tw: 'en'
};
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
  posts: {
    en: '',
    tw: ''
  }
};
