'use client';

import { JSX } from 'react';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { FiCheckCircle, FiTarget, FiAward } from 'react-icons/fi';
import impactData from '@/data/impact.json';
import { Impact } from '@/types/Impact';
import { Card, CardContent } from '../ui/Card';
import { BsTree } from 'react-icons/bs';
import Button from '../ui/Button';

export function EnvironmentSection() {
    const [impact, setImpact] = useState<Impact | null>(null);

    useEffect(() => {
      setImpact(impactData as Impact);
    }, []);

    if (!impact) return null;

    // Map des icônes pour les initiatives environnementales
    const iconMap: Record<string, JSX.Element> = {
      'Tree': <BsTree className="h-8 w-8 text-green-600 dark:text-green-400" />,
      'Water': <FiTarget className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      'Sun': <FiAward className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />,
      'Leaf': <FiCheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />,
    };

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Initiatives environnementales</h2>
            <p className="section-subheading">
                Notre engagement pour minimiser notre impact environnemental et contribuer à la préservation de l&apos;environnement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impact.environment.initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    {iconMap[initiative.icon] || <BsTree className="h-8 w-8 text-green-600 dark:text-green-400" />}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-mining-dark dark:text-mining-light">
                    {initiative.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="rounded-lg bg-green-50 p-8 dark:bg-green-900/20">
              <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                  Nos Certifications
              </h3>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {impact.environment.certifications.map((certification, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded-lg bg-white p-4 shadow-sm dark:bg-mining-dark/50"
                  >
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                      <FiAward className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-mining-dark dark:text-mining-light">
                        {certification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-gray-600 dark:text-gray-300">
                  Ces certifications témoignent de notre engagement à respecter les normes internationales les plus strictes en matière de protection de l&apos;environnement et de développement durable.
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button href="/contact" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30">
                  Nous contacter pour plus d&apos;informations
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
