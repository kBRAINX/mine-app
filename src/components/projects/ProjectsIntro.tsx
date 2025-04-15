import Container from "../ui/Container";
import Section from "../ui/Section";

export function ProjectsIntro() {

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Projets en cours</h2>
            <p className="section-subheading">
                Découvrez nos projets actuels et futurs pour le développement minier
            </p>
          </div>
        </Container>
      </Section>
    );
  }
