export const locales = ['en', 'tw'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'en' as Locale;

export type I18nObject<T> = Record<Locale, T>;

export function createI18nObject<T>(en: T, tw: T): I18nObject<T> {
  return { en, tw };
}

export function getLocalizedValue<T>(obj: I18nObject<T>, locale: Locale): T {
  return obj[locale];
}
