import { useTranslations } from 'next-intl';
import {JSX} from 'react';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import companyData from '@/data/company.json';
import { FiUsers, FiCheckCircle, FiGlobe, FiAward, FiHeart } from 'react-icons/fi';
import { Company } from '@/types/Company';

export function CompanyValues() {
    const t = useTranslations('about.values');
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
      setCompany(companyData as Company);
    }, []);

    if (!company) return null;

    // Map pour les icônes correspondant aux valeurs
    const iconMap: Record<string, JSX.Element> = {
      'Transparency': <FiCheckCircle className="h-6 w-6" />,
      'Excellence': <FiAward className="h-6 w-6" />,
      'Environment': <FiGlobe className="h-6 w-6" />,
      'Partnership': <FiUsers className="h-6 w-6" />,
    };

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('title')}</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((value, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                    {iconMap[value.icon] || <FiHeart className="h-6 w-6" />}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    );
  }