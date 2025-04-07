'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { FiUsers, FiTarget, FiAward } from 'react-icons/fi';
import impactData from '@/data/impact.json';
import { Impact } from '@/types/Impact';
import { StatCard } from '../ui/StatCard';
import { Card, CardContent } from '../ui/Card';

export function CommunitySection() {
    const t = useTranslations('impact.community');
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
            <p className="section-subheading">
              {t('description')}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {impact.community.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="rounded-lg bg-white p-8 shadow-md dark:bg-mining-dark/50">
              <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                {t('training.title')}
              </h3>

              <div className="grid gap-8 md:grid-cols-3">
                <StatCard
                  icon={<FiAward className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
                  title={t('training.programs')}
                  value={impact.community.training.programs}
                />

                <StatCard
                  icon={<FiUsers className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />}
                  title={t('training.participants')}
                  value={impact.community.training.participants}
                  suffix="+"
                />

                <StatCard
                  icon={<FiTarget className="h-8 w-8 text-mining-gold" />}
                  title={t('training.success')}
                  value={impact.community.training.success}
                  suffix="%"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
