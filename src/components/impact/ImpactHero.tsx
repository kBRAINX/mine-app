import { useTranslations } from "next-intl";
import Hero from "../ui/Hero";

export function ImpactHero() {
    const t = useTranslations('impact.hero');

    return (
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/impact/impact-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#impact" className="btn btn-primary">
                {t('button')}
            </a>
        </div>
      </Hero>
    );
  }