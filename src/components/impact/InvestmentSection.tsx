'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { FiTarget, FiCheckCircle, FiDollarSign, FiHome } from 'react-icons/fi';
import impactData from '@/data/impact.json';
import { Impact } from '@/types/Impact';
import { StatCard } from '../ui/StatCard';
import { formatCurrency } from '@/lib/utils';

export function InvestmentSection() {
    const t = useTranslations('impact.investment');
    const [impact, setImpact] = useState<Impact | null>(null);

    useEffect(() => {
      setImpact(impactData as Impact);
    }, []);

    if (!impact) return null;

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('title')}</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <StatCard
              icon={<FiDollarSign className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
              title={t('total')}
              value={formatCurrency(impact.investment.totalInvestment, 'USD')}
            />

            <StatCard
              icon={<FiHome className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />}
              title={t('local')}
              value={formatCurrency(impact.investment.localInvestment, 'USD')}
            />

            <StatCard
              icon={<FiTarget className="h-8 w-8 text-mining-copper dark:text-mining-gold" />}
              title={t('infrastructure')}
              value={formatCurrency(impact.investment.infrastructureInvestment, 'USD')}
            />
          </div>

          <div className="mt-16">
            <div className="rounded-lg bg-primary-50 p-8 dark:bg-primary-900/20">
              <h3 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                Impact économique
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Nos investissements en Guinée vont au-delà de nos opérations directes. Nous nous engageons à maximiser les retombées économiques locales à travers:
                  </p>

                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <FiCheckCircle className="mr-2 mt-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <span>Approvisionnement auprès de fournisseurs locaux</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="mr-2 mt-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <span>Développement d&apos;infrastructures profitant aux communautés</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="mr-2 mt-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <span>Transfert de compétences et technologies</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="mr-2 mt-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <span>Soutien aux PME locales</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="h-full rounded-lg bg-white p-6 shadow-md dark:bg-mining-dark/50">
                    <h4 className="mb-4 text-lg font-semibold text-mining-dark dark:text-mining-light">
                      Répartition des investissements
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Opérations</span>
                          <span className="text-sm font-medium text-mining-dark dark:text-mining-light">45%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="h-2 rounded-full bg-primary-600" style={{ width: '45%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Infrastructure</span>
                          <span className="text-sm font-medium text-mining-dark dark:text-mining-light">25%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="h-2 rounded-full bg-secondary-600" style={{ width: '25%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Communauté</span>
                          <span className="text-sm font-medium text-mining-dark dark:text-mining-light">20%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="h-2 rounded-full bg-mining-gold" style={{ width: '20%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Environnement</span>
                          <span className="text-sm font-medium text-mining-dark dark:text-mining-light">10%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }