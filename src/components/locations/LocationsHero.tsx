import { useTranslations } from "next-intl";
import Hero from "../ui/Hero";

export function LocationsHero() {
    const t = useTranslations('locations.hero');

    return (
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/locations/locations-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#locations" className="btn btn-primary">
                {t('button')}
            </a>
        </div>
      </Hero>
    );
  }