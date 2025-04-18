import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, dictionaries } from '@/lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  // Vérifier que la locale est supportée
  const typedLocale = locales.includes(locale) ? locale : defaultLocale;

  // Utiliser la fonction de chargement de dictionnaire définie dans config.ts
  const messages = await dictionaries[typedLocale]();

  return {
    messages
  };
});