'use client';

import { FiUsers, FiActivity, FiMap, FiDollarSign } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { useEffect, useState } from 'react';
import impactData from '@/data/impact.json';
import projectsData from '@/data/projects.json';
import locationsData from '@/data/locations.json';

export default function StatsSection() {
  const [stats, setStats] = useState([
    {
      id: 1,
      label: 'employees',
      value: 0,
      icon: <FiUsers className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 2,
      label: 'projects',
      value: 0,
      icon: <FiActivity className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 3,
      label: 'regions',
      value: 0,
      icon: <FiMap className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 4,
      label: 'investment',
      value: 0,
      prefix: '$',
      icon: <FiDollarSign className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
      formatter: (value: number) =>
        new Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'USD',
          notation: 'compact',
          maximumFractionDigits: 1,
        })
          .format(value)
          .replace('$', '')
    },
  ]);

  useEffect(() => {
    // Calculer les statistiques à partir des données JSON
    const directEmployees = impactData.employment.directJobs;
    const projectsCount = projectsData.length;

    // Extraire les régions uniques de tous les sites
    const uniqueRegions = new Set(locationsData.map(location => location.region));
    const regionsCount = uniqueRegions.size;

    const totalInvestment = impactData.investment.totalInvestment;

    setStats([
      { ...stats[0], value: directEmployees },
      { ...stats[1], value: projectsCount },
      { ...stats[2], value: regionsCount },
      { ...stats[3], value: totalInvestment },
    ]);
  }, []);

  return (
    <Section className="bg-white dark:bg-mining-dark">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Notre impact en chiffres</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-mining-dark dark:text-mining-light">
                {stat.prefix}
                {stat.formatter ? stat.formatter(stat.value) : stat.value}
              </div>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}