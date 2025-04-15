'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import locationsData from '@/data/locations.json';
import { Location } from '@/types/Location';
// import { FiMapPin, FiHome, FiTool, FiSearch } from 'react-icons/fi';
import { LocationCard } from './LocationCard';


export function LocationsList() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [activeTab, setActiveTab] = useState<string>('all');

    useEffect(() => {
      setLocations(locationsData as Location[]);
    }, []);

    const getFilteredLocations = () => {
      if (activeTab === 'all') {
        return locations;
      }
      return locations.filter(location => location.type === activeTab);
    };

    // const getLocationIcon = (type: string) => {
    //   switch (type) {
    //     case 'headquarters':
    //       return <FiHome className="h-6 w-6 text-primary-600 dark:text-primary-400" />;
    //     case 'operation':
    //       return <FiTool className="h-6 w-6 text-mining-gold dark:text-mining-gold" />;
    //     case 'exploration':
    //       return <FiSearch className="h-6 w-6 text-mining-copper dark:text-mining-copper" />;
    //     default:
    //       return <FiMapPin className="h-6 w-6" />;
    //   }
    // };

    // const getLocationTitle = (type: string) => {
    //   switch (type) {
    //     case 'headquarters':
    //       return t('headquarters');
    //     case 'operation':
    //       return t('operations');
    //     case 'exploration':
    //       return t('exploration');
    //     default:
    //       return 'Location';
    //   }
    // };

    return (
      <Section>
        <Container>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-mining-dark/50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('all')}
            >
              Tous
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'headquarters'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-mining-dark/50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('headquarters')}
            >
              Siège social
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'operation'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-mining-dark/50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('operation')}
            >
              Sites d&lsquo;`opération
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'exploration'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-mining-dark/50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('exploration')}
            >
              Sites d&lsquo;`exploitation
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getFilteredLocations().map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </Container>
      </Section>
    );
  }