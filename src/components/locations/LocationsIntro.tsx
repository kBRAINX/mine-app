import { useTranslations } from "next-intl";
import Container from "../ui/Container";
import Section from "../ui/Section";

export function LocationsIntro() {
    const t = useTranslations('locations.intro');

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{t('title')}</h2>
            <p className="section-subheading">
              {t('description')}
            </p>
          </div>
        </Container>
      </Section>
    );
  }