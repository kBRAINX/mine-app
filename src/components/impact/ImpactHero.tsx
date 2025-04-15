
import Hero from "../ui/Hero";

export function ImpactHero() {

    return (
      <Hero
        title="Notre impact"
        subtitle="Contribution économique et sociale"
        backgroundImage="/images/impact/impact-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#impact" className="btn btn-primary">
                visualiser l&apos;impact
            </a>
        </div>
      </Hero>
    );
  }