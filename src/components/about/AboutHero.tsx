import Hero from "../ui/Hero";

export function AboutHero() {

    return (
      <Hero
        title="À propos de nous"
        subtitle="Découvrez Group Toumbe Manning"
        backgroundImage="/images/about/about-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#about" className="btn btn-primary">
                En savoir plus
            </a>
        </div>
      </Hero>
    );
  }