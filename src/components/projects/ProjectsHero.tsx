import { useTranslations } from "next-intl";
import Hero from "../ui/Hero";

export function ProjectsHero() {
    const t = useTranslations('projects.hero');

    return (
      <Hero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/projects/projects-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#projects" className="btn btn-primary">
                {t('button')}
            </a>
        </div>
      </Hero>
    );
  }