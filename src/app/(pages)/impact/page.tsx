'use client';

import { CommunitySection } from "@/components/impact/CommunitySection";
import { EmploymentSection } from "@/components/impact/EmploymentSection";
import { EnvironmentSection } from "@/components/impact/EnvironmentSection";
import { ImpactHero } from "@/components/impact/ImpactHero";
import { ImpactIntro } from "@/components/impact/ImpactIntro";
import { InvestmentSection } from "@/components/impact/InvestmentSection";

export default function ImpactPage() {

    return (
      <>
        <ImpactHero />
        <ImpactIntro />
        <EmploymentSection />
        <InvestmentSection />
        <CommunitySection />
        <EnvironmentSection />
      </>
    );
  }