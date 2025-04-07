'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import locationsData from '@/data/locations.json';
import { Location } from '@/types/Location';

export function LocationsMap() {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
      setLocations(locationsData as Location[]);
    }, []);

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="overflow-hidden rounded-lg">
            <div className="relative h-[500px] w-full">
              {/*
                Note: Dans une implémentation réelle, vous utiliseriez ici un composant
                comme react-leaflet pour afficher une carte interactive. Cette partie est simulée.
                Voici un composant client qui utiliserait Leaflet dans une application réelle :
              */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/locations/guinea-map-detailed.jpg"
                  alt="Carte des implantations en Guinée"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />

                {/* Marqueurs simulés pour les emplacements */}
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="absolute flex h-6 w-6 items-center justify-center"
                    style={{
                      top: `${50 - (location.coordinates.latitude - 9.5) * 25}%`,
                      left: `${50 + (location.coordinates.longitude + 11) * 8}%`,
                    }}
                  >
                    <div
                      className={`h-4 w-4 animate-pulse rounded-full ${
                        location.type === 'headquarters'
                          ? 'bg-primary-600'
                          : location.type === 'operation'
                          ? 'bg-mining-gold'
                          : 'bg-mining-copper'
                      }`}
                    ></div>
                    <div
                      className={`absolute -inset-1 rounded-full ${
                        location.type === 'headquarters'
                          ? 'bg-primary-400/30'
                          : location.type === 'operation'
                          ? 'bg-mining-gold/30'
                          : 'bg-mining-copper/30'
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-primary-600"></div>
              <span className="text-sm font-medium">Siège social</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-mining-gold"></div>
              <span className="text-sm font-medium">Sites d&apos;exploitation</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-mining-copper"></div>
              <span className="text-sm font-medium">Sites d&apos;exploration</span>
            </div>
          </div>
        </Container>
      </Section>
    );
  }