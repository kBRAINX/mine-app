import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/Project';
import { ProjectCard } from './ProjectCard';

export function ProjectsFilter() {
    const t = useTranslations('projects');
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    useEffect(() => {
      // Charger les projets depuis le JSON
      setProjects(projectsData as Project[]);
      setFilteredProjects(projectsData as Project[]);
    }, []);

    const filters = [
      { id: 'all', label: t('filters.all') },
      { id: 'planning', label: t('filters.planning') },
      { id: 'exploration', label: t('filters.exploration') },
      { id: 'development', label: t('filters.development') },
      { id: 'production', label: t('filters.production') },
      { id: 'completed', label: t('filters.completed') },
    ];

    const handleFilterChange = (filter: string) => {
      setActiveFilter(filter);

      if (filter === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.status === filter));
      }
    };

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          {/* Filtres */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-mining-dark/50 dark:text-gray-300 dark:hover:bg-mining-dark'
                }`}
                onClick={() => handleFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Liste des projets */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Message si aucun projet ne correspond au filtre */}
          {filteredProjects.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          )}
        </Container>
      </Section>
    );
  }