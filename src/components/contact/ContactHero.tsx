import { useTranslations } from "next-intl";
import Hero from "../ui/Hero";

export function ContactHero() {
    const t = useTranslations('contact.hero');

    return (
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/contact/contact-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#contact" className="btn btn-primary">
                {t('button')}
            </a>
        </div>
      </Hero>
    );
  }