import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import companyData from '@/data/company.json';
import { Company } from '@/types/Company';

export function CompanyHistory() {
    const t = useTranslations('about.history');
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
      setCompany(companyData as Company);
    }, []);

    if (!company) return null;

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('title')}</h2>
            <p className="section-subheading">
              {t('description')}
            </p>
          </div>

          <div className="relative mt-12">
            {/* Ligne de temps verticale */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-900" />

            <div className="relative space-y-12">
              {company.history.sort((a, b) => b.year - a.year).map((event, index) => (
                <div key={event.year} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2" />
                  <div className="relative flex items-center justify-center">
                    <div className="absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white">
                      <span className="text-xs font-bold">{event.year}</span>
                    </div>
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-10' : 'pr-10 text-right'}`}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-6">
                        <p className="text-gray-600 dark:text-gray-300">
                          {event.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    );
  }