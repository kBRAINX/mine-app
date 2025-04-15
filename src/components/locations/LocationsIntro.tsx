import Container from "../ui/Container";
import Section from "../ui/Section";

export function LocationsIntro() {

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">Nos implantations</h2>
            <p className="section-subheading">
                Présence géographique
            </p>
          </div>
        </Container>
      </Section>
    );
  }