'use client';

import type { JSX } from 'react';
import { FiSearch, FiTruck, FiBarChart2, FiAward } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import activitiesData from '@/data/activities.json';
import { useEffect, useState } from 'react';
import { Activity } from '@/types/Activity';

// Map des icônes pour les activités
const iconMap: Record<string, JSX.Element> = {
  'Search': <FiSearch className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  'Mining': <FiBarChart2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  'Truck': <FiTruck className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  'Gold': <FiAward className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
};

export default function ActivitiesHighlight() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // On utilise les données importées du JSON
    setActivities(activitiesData as Activity[]);
  }, []);

  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Nos domaines d&apos;expertise</h2>
          <p className="section-subheading">Découvrez nos principales activités</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.slice(0, 4).map((activity) => (
            <Card key={activity.id} className="overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-gray-800">
              <CardHeader className="flex flex-col items-center space-y-2 pb-4 text-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                  {iconMap[activity.icon] || <FiBarChart2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/activities">
            Voir toutes nos activités
          </Button>
        </div>
      </Container>
    </Section>
  );
}
