'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HomeHero() {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-center pt-16"
      style={{ backgroundImage: "url('/images/hero-mining.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      <Container className="relative z-10 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Bienvenue chez Group Toumbe Manning SARL
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Acteur dynamique du secteur minier en Guinée
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Nous contribuons à l&apos;exploitation responsable des ressources naturelles tout en soutenant le développement économique local.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button href="/activities" size="lg">
              Découvrez nos activités
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              En savoir plus
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-mining-dark/80 to-transparent dark:from-mining-dark/90" />
    </div>
  );
}
