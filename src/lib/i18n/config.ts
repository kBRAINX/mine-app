export const defaultLocale = 'fr' as const;
export const locales = ['fr'] as const;
export type Locale = (typeof locales)[number];
export type SupportedLocale = typeof locales[number];

export const dictionaries = {
  fr: () => import('../../dictionaries/fr.json').then((module) => module.default),
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
} as const;