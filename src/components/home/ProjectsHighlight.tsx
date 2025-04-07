'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import projectsData from '@/data/projects.json';
import Badge from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Project } from '@/types/Project';

export default function ProjectsHighlight() {
  const t = useTranslations('projects');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Charger les projets depuis le JSON
    setProjects(projectsData as Project[]);
  }, []);

  // Only show the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Nos Projets</h2>
          <p className="section-subheading">Découvrez nos projets actuels et futurs pour le développement minier en Guinée.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-mining-dark/50 dark:hover:shadow-gray-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || '/images/projects/default.jpg'}
                  alt={project.title}
                  width={400}
                  height={240}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <Badge
                    variant={
                      project.status === 'planning'
                        ? 'default'
                        : project.status === 'exploration'
                        ? 'secondary'
                        : project.status === 'development'
                        ? 'success'
                        : 'warning'
                    }
                  >
                    {t(`status.${project.status}`)}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <strong>Région:</strong> {project.region} | <strong>Début:</strong> {formatDate(project.startDate)}
                </p>
                <p className="line-clamp-3 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4">
                  <Button href={`/projects/${project.id}`} variant="outline" className="w-full">
                    Voir le projet
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="primary">
            Voir tous nos projets
          </Button>
        </div>
      </Container>
    </Section>
  );
}