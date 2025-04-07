import { useTranslations } from "next-intl";
import Hero from "../ui/Hero";

export function AboutHero() {
    const t = useTranslations('about.hero');

    return (
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/about/about-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#about" className="btn btn-primary">
                {t('button')}
            </a>
        </div>
      </Hero>
    );
  }