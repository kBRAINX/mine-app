import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n/config';

// Définir le type pour la locale
type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Vérifiez si la locale est supportée
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  try {
    // Utiliser un import dynamique avec type safety
    const messages = await import(`../dictionaries/${locale}.json`)
      .then((module) => module.default)
      .catch((error) => {
        console.error(`Failed to load messages for locale ${locale}:`, error);
        notFound();
        return {}; // Pour satisfaire TypeScript, bien que cette ligne ne soit jamais atteinte après notFound()
      });

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
    return {}; // Pour satisfaire TypeScript, bien que cette ligne ne soit jamais atteinte après notFound()
  }
});