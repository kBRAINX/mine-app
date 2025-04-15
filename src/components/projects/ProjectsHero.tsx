import Hero from "../ui/Hero";

export function ProjectsHero() {

    return (
      <Hero
        title= "Nos projets"
        subtitle= " Découvrez nos projets actuels et futurs pour le développement minier"
        backgroundImage="/images/projects/projects-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#projects" className="btn btn-primary">
                Explorer les projets
            </a>
        </div>
      </Hero>
    );
  }
