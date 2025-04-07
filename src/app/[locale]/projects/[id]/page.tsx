'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/Project';
import { formatDate } from '@/lib/utils';

export function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const t = useTranslations('projects');
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
      // Trouver le projet par ID dans les données
      const projectId = parseInt(params.id, 10);
      const foundProject = (projectsData as Project[]).find(p => p.id === projectId) || null;
      setProject(foundProject);
    }, [params.id]);

    if (!project) {
      return (
        <Container className="py-16 text-center">
          <h1 className="text-2xl font-bold">Projet non trouvé</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Le projet que vous recherchez n&apos;existe pas ou a été supprimé.
          </p>
          <Button href="/projects" className="mt-8">
            Voir tous les projets
          </Button>
        </Container>
      );
    }

    return (
      <>
        <div className="relative h-64 md:h-96">
          <Image
            src={project.image || '/images/projects/default.jpg'}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <Container className="relative z-10 flex h-full flex-col items-center justify-center">
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
              className="mb-4"
            >
              {t(`status.${project.status}`)}
            </Badge>
            <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-center text-lg text-white">
              {project.region}
            </p>
          </Container>
        </div>

        <Section>
          <Container>
            <div className="grid gap-12 md:grid-cols-3">
              {/* Détails du projet */}
              <div className="md:col-span-2">
                <h2 className="mb-6 text-2xl font-bold text-mining-dark dark:text-mining-light">
                  {t('details.objective')}
                </h2>
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                  {project.objective}
                </p>

                <h3 className="mb-4 text-xl font-semibold text-mining-dark dark:text-mining-light">
                  Description du projet
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {project.achievements && project.achievements.length > 0 && (
                  <>
                    <h3 className="mb-4 mt-8 text-xl font-semibold text-mining-dark dark:text-mining-light">
                      {t('details.achievements')}
                    </h3>
                    <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                      {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}

                {project.partners && project.partners.length > 0 && (
                  <>
                    <h3 className="mb-4 mt-8 text-xl font-semibold text-mining-dark dark:text-mining-light">
                      {t('details.partners')}
                    </h3>
                    <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                      {project.partners.map((partner, index) => (
                        <li key={index}>{partner}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Informations supplémentaires et méta-données */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-mining-dark dark:text-mining-light">
                      Informations
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {t('details.status')}
                        </p>
                        <p className="mt-1 text-mining-dark dark:text-mining-light">
                          {t(`status.${project.status}`)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {t('details.region')}
                        </p>
                        <p className="mt-1 text-mining-dark dark:text-mining-light">
                          {project.region}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {t('details.startDate')}
                        </p>
                        <p className="mt-1 text-mining-dark dark:text-mining-light">
                          {formatDate(project.startDate)}
                        </p>
                      </div>

                      {project.completionDate && (
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {t('details.completionDate')}
                          </p>
                          <p className="mt-1 text-mining-dark dark:text-mining-light">
                            {formatDate(project.completionDate)}
                          </p>
                        </div>
                      )}

                      {project.resources && project.resources.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {t('details.resources')}
                          </p>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {project.resources.map((resource, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-100"
                              >
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <Button href="/projects" variant="outline" className="w-full">
                    Retour aux projets
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </>
    );
  }