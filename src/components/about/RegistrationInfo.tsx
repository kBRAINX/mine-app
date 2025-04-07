import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import companyData from '@/data/company.json';
import { Company } from '@/types/Company';
import { FiShield } from 'react-icons/fi';

export function RegistrationInfo() {
    const t = useTranslations('about.registration');
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
      setCompany(companyData as Company);
    }, []);

    if (!company) return null;

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-white p-8 shadow-md dark:bg-mining-dark/50">
              <h2 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                {t('title')}
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col justify-between border-b border-gray-200 pb-4 dark:border-gray-700 md:flex-row">
                  <div className="font-semibold">{t('rccm')}</div>
                  <div className="text-gray-600 dark:text-gray-300">{company.registration.rccm}</div>
                </div>

                <div className="flex flex-col justify-between border-b border-gray-200 pb-4 dark:border-gray-700 md:flex-row">
                  <div className="font-semibold">{t('nif')}</div>
                  <div className="text-gray-600 dark:text-gray-300">{company.registration.nif}</div>
                </div>

                <div className="flex flex-col justify-between md:flex-row">
                  <div className="font-semibold">Date de création</div>
                  <div className="text-gray-600 dark:text-gray-300">{company.foundedYear}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center rounded-md bg-gray-100 py-4 dark:bg-gray-800">
                <div className="flex items-center">
                  <FiShield className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm font-medium">
                    Entreprise légalement enregistrée en Guinée
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }