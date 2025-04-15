import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import HomeHero from '@/components/home/HomeHero';
import ActivitiesHighlight from '@/components/home/ActivitiesHighlight';
import StatsSection from '@/components/home/StatsSection';
import ProjectsHighlight from '@/components/home/ProjectsHighlight';
import ImpactHighlight from '@/components/home/ImpactHighlight';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/home/CallToAction';


export default function HomePage() {

  return (
    <>
      <HomeHero />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Exploitation minière responsable</h2>
            <p className="section-subheading">Group Toumbe Manning SARL est engagé dans l&apos;exploration, l&apos;exploitation et la commercialisation de ressources minières stratégiques en Guinée, avec un focus sur la bauxite, l&apos;or et le fer.</p>
          </div>
        </Container>
      </Section>

      <ActivitiesHighlight />
      <StatsSection />
      <ProjectsHighlight />
      <ImpactHighlight />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}