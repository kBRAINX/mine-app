'use client';

import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CallToAction() {
  const t = useTranslations('home.cta');

  return (
    <Section className="bg-primary-700 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            {t('description')}
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-700"
            >
              {t('button')}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}