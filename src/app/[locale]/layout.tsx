// src/app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { ThemeProvider } from '@/lib/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type SupportedLocale = typeof locales[number];

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Validation de la locale
  if (!locales.includes(params.locale as SupportedLocale)) {
    notFound();
  }

  const t = await getTranslations({
    locale: params.locale,
    namespace: 'common'
  });

  return {
    title: {
      template: '%s | ' + t('companyName', { fallback: 'Group Toumbe Manning SARL' }),
      default: t('defaultTitle', { fallback: 'Exploitation minière responsable en Guinée' }),
    },
    description: t('description', { fallback: 'Entreprise minière responsable en Guinée' }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  // Validation de la locale
  if (!locales.includes(params.locale as SupportedLocale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../dictionaries/${params.locale}.json`)).default;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Génération des paramètres statiques
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}