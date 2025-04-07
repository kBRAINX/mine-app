'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { FiUsers, FiTarget, FiCheckCircle } from 'react-icons/fi';
import impactData from '@/data/impact.json';
import { Impact } from '@/types/Impact';
import { StatCard } from '../ui/StatCard';

export function EmploymentSection() {
    const t = useTranslations('impact.employment');
    const [impact, setImpact] = useState<Impact | null>(null);

    useEffect(() => {
      setImpact(impactData as Impact);
    }, []);

    if (!impact) return null;

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('title')}</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <StatCard
              icon={<FiUsers className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title={t('directJobs')}
              value={impact.employment.directJobs}
              suffix="+"
            />

            <StatCard
              icon={<FiUsers className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />}
              title={t('indirectJobs')}
              value={impact.employment.indirectJobs}
              suffix="+"
            />

            <StatCard
              icon={<FiTarget className="h-8 w-8 text-mining-copper dark:text-mining-gold" />}
              title={t('localEmployment')}
              value={impact.employment.localEmployment}
              suffix="%"
            />
          </div>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                Développement des talents locaux
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Notre engagement pour l&apos;emploi ne se limite pas à l&apos;embauche. Nous investissons également dans le développement des compétences des populations locales à travers des programmes de formation personnalisés.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Notre objectif : créer un vivier de talents guinéens hautement qualifiés dans le secteur minier, contribuant ainsi à l&apos;économie nationale à long terme.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-200">
                    Formation technique et professionnelle
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-200">
                    Bourses d&apos;études pour les jeunes des communautés locales
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-200">
                    Partenariats avec des institutions éducatives
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-200">
                    Opportunités de stage et d&apos;apprentissage
                  </span>
                </div>
              </div>
            </div>

            <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
              <Image
                src="/images/impact/local-talent.jpg"
                alt="Développement des talents locaux"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
    );
  }