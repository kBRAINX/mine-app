'use client';

import { LocationsHero } from "@/components/locations/LocationsHero";
import { LocationsIntro } from "@/components/locations/LocationsIntro";
import { LocationsList } from "@/components/locations/LocationsList";
import { LocationsMap } from "@/components/locations/LocationsMap";

export default function LocationsPage() {

    return (
      <>
        <LocationsHero />
        <LocationsIntro />
        <LocationsMap />
        <LocationsList />
      </>
    );
  }