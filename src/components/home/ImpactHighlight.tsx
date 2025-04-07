'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { FiUser, FiDollarSign, FiHome, FiFolder } from 'react-icons/fi';
import impactData from '@/data/impact.json';
import { formatCurrency } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Impact } from '@/types/Impact';

export default function ImpactHighlight() {
  const [impact, setImpact] = useState<Impact | null>(null);

  useEffect(() => {
    // Charger les données d'impact depuis le JSON
    setImpact(impactData as Impact);
  }, []);

  if (!impact) return null;

  return (
    <Section className="bg-white dark:bg-mining-dark">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="section-heading">Notre Impact</h2>
            <p className="section-subheading mb-6">
              Nous sommes fiers de contribuer activement au développement économique et social de la Guinée à travers nos diverses initiatives.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <div className="mb-2 flex items-center">
                  <FiUser className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-semibold">Emplois directs</span>
                </div>
                <span className="text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {impact.employment.directJobs}+
                </span>
              </div>

              <div className="flex flex-col">
                <div className="mb-2 flex items-center">
                  <FiDollarSign className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-semibold">Investissement</span>
                </div>
                <span className="text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {formatCurrency(impact.investment.totalInvestment, 'USD', 'fr-FR')}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="mb-2 flex items-center">
                  <FiHome className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-semibold">Projets communautaires</span>
                </div>
                <span className="text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {impact.community.projects.length}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="mb-2 flex items-center">
                  <FiFolder className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-semibold">Initiatives environnementales</span>
                </div>
                <span className="text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {impact.environment.initiatives.length}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/impact">
                Découvrir notre impact
              </Button>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/impact/community-project.jpg"
                alt="Impact communautaire"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/impact/reforestation.jpg"
                alt="Reforestation"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}