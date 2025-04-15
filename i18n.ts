// i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale, dictionaries } from '@/lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  const typedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  // Utiliser la fonction de chargement de dictionnaire définie dans config.ts
  const messages = await dictionaries[typedLocale]();

  return {
    messages
  };
});