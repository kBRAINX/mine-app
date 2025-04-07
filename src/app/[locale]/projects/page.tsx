'use client';

import { ProjectsFilter } from "@/components/projects/ProjectsFilter";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsIntro } from "@/components/projects/ProjectsIntro";

export default function ProjectsPage() {

    return (
      <>
        <ProjectsHero />
        <ProjectsIntro />
        <ProjectsFilter />
      </>
    );
  }