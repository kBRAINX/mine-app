import { headers } from 'next/headers';
import { locales, defaultLocale } from '@/lib/i18n/config';

export default function Home() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') ?? defaultLocale;

  // Détecter la langue préférée
  const detectedLocale = locales.find(locale =>
    acceptLanguage.toLowerCase().includes(locale)
  ) || defaultLocale;

  // Logique de la page d'accueil
  return <div>Accueil - Langue détectée : {detectedLocale}</div>;
}