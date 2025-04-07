import { FiBarChart, FiGlobe } from "react-icons/fi";
import { Card, CardContent } from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Company } from "@/types/Company";
import companyData from '@/data/company.json';

export function MissionVision() {
    const t = useTranslations('about');
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
      setCompany(companyData as Company);
    }, []);

    if (!company) return null;

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="h-4 bg-primary-600" />
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                  <FiBarChart className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {t('mission.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {company.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-4 bg-secondary-600" />
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 dark:bg-secondary-900 dark:text-secondary-300">
                  <FiGlobe className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {t('vision.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {company.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    );
  }