import Hero from "../ui/Hero";

export function ContactHero() {

    return (
      <Hero
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute"
        backgroundImage="/images/contact/contact-hero.jpg"
        centered
      >
        <div className="flex justify-center space-x-4">
            <a href="#contact" className="btn btn-primary">
                Contactez-nous
            </a>
        </div>
      </Hero>
    );
  }
