import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import HomeHero from '@/components/home/HomeHero';
import ActivitiesHighlight from '@/components/home/ActivitiesHighlight';
import StatsSection from '@/components/home/StatsSection';
import ProjectsHighlight from '@/components/home/ProjectsHighlight';
import ImpactHighlight from '@/components/home/ImpactHighlight';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/home/CallToAction';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Validation de la locale
  if (!locales.includes(params.locale as typeof locales[number])) {
    return {
      title: 'Exploitation minière responsable en Guinée',
      description: 'Entreprise minière responsable en Guinée',
    };
  }

  const t = await getTranslations({
    locale: params.locale,
    namespace: 'home'
  });

  return {
    title: t('hero.title', { fallback: 'Exploitation minière responsable en Guinée' }),
    description: t('hero.description', { fallback: 'Entreprise minière responsable en Guinée' }),
  };
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <HomeHero />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('intro.title')}</h2>
            <p className="section-subheading">{t('intro.description')}</p>
          </div>
        </Container>
      </Section>

      <ActivitiesHighlight />
      <StatsSection />
      <ProjectsHighlight />
      <ImpactHighlight />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}