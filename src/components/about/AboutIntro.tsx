import Image from "next/image";
import Section from "../ui/Section";
import Container from "../ui/Container";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Company } from "@/types/Company";
import companyData from '@/data/company.json';

export function AboutIntro() {
    const t = useTranslations('about.intro');
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
      setCompany(companyData as Company);
    }, []);

    if (!company) return null;

    return (
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="section-heading">{t('title')}</h2>
              <p className="section-subheading mb-6">{company.description}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('description')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/about/company-overview.jpg"
                  alt="Présentation de l'entreprise"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-600 text-white">
                <div className="text-center">
                  <div className="text-lg font-bold">
                    {new Date().getFullYear() - company.foundedYear}
                  </div>
                  <div className="text-xs">ans</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }