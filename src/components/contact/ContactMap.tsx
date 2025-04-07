import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import locationsData from '@/data/locations.json';
import { Location } from '@/types/Location';


export function ContactMap() {
    const t = useTranslations('contact.map');
    const headquarters = (locationsData as Location[]).find(location => location.type === 'headquarters');

    if (!headquarters) return null;

    return (
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-2xl font-bold text-mining-dark dark:text-mining-light">
              {t('title')}
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[400px] w-full">
              {/*
                Note: Dans une implémentation réelle, vous utiliseriez ici un composant
                comme react-leaflet pour afficher une carte interactive. Cette partie est simulée.
              */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/contact/map-headquarters.jpg"
                  alt="Carte du siège social"
                  fill
                  className="object-cover"
                />

                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="h-6 w-6 animate-pulse rounded-full bg-primary-600"></div>
                  <div className="absolute -inset-2 rounded-full bg-primary-400/30"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              href={`https://www.google.com/maps?q=${headquarters.coordinates.latitude},${headquarters.coordinates.longitude}`}
              rel="noopener noreferrer"
              variant="outline"
            >
              Ouvrir dans Google Maps
            </Button>
          </div>
        </Container>
      </Section>
    );
  }