'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CallToAction() {
  return (
    <Section className="bg-primary-700 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Intéressé par une collaboration ?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Découvrez comment nous pouvons travailler ensemble pour créer de la valeur partagée.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-700"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}