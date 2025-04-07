'use client';

import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { CompanyHistory } from "@/components/about/CompanyHistory";
import { CompanyValues } from "@/components/about/CompanyValues";
import { MissionVision } from "@/components/about/MissionVision";
import { RegistrationInfo } from "@/components/about/RegistrationInfo";
import { TeamSection } from "@/components/about/TeamSection";

export default function AboutPage() {

    return (
      <>
        <AboutHero />
        <AboutIntro />
        <MissionVision />
        <CompanyValues />
        <CompanyHistory />
        <TeamSection />
        <RegistrationInfo />
      </>
    );
  }