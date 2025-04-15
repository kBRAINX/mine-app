import Hero from "../ui/Hero";

export function LocationsHero() {

    return (
      <Hero
        title="Nos implantations"
        subtitle="Présence géographique"
        backgroundImage="/images/locations/locations-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#locations" className="btn btn-primary">
                voir les implantations
            </a>
        </div>
      </Hero>
    );
  }