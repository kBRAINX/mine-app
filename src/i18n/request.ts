import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  // Vérifiez si la locale est supportée
  if (!locales.includes(locale as typeof locales[number])) notFound();

  try {
    const messages = await import(`../dictionaries/${locale}.json`).then(
      (module) => module.default
    );

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
  }
});