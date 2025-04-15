'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Location } from '@/types/Location';
import { FiMapPin, FiPhone, FiMail, FiHome, FiTool, FiSearch } from 'react-icons/fi';


interface LocationCardProps {
    location: Location;
  }

  export function LocationCard({ location }: LocationCardProps) {

    const getLocationIcon = (type: string) => {
      switch (type) {
        case 'headquarters':
          return <FiHome className="h-6 w-6 text-primary-600 dark:text-primary-400" />;
        case 'operation':
          return <FiTool className="h-6 w-6 text-mining-gold dark:text-mining-gold" />;
        case 'exploration':
          return <FiSearch className="h-6 w-6 text-mining-copper dark:text-mining-copper" />;
        default:
          return <FiMapPin className="h-6 w-6" />;
      }
    };

    const getLocationTitle = (type: string) => {
      switch (type) {
        case 'headquarters':
          return "Siège social";
        case 'operation':
          return "Sites d'exploitation";
        case 'exploration':
          return "Sites d'exploration";
        default:
          return 'Location';
      }
    };

    return (
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center space-x-2">
            <div className="rounded-full bg-primary-100 p-2 dark:bg-primary-900">
              {getLocationIcon(location.type)}
            </div>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {getLocationTitle(location.type)}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-semibold text-mining-dark dark:text-mining-light">
            {location.name}
          </h3>

          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {location.description}
          </p>

          <div className="mb-4 flex items-start">
            <FiMapPin className="mr-2 mt-1 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <div>
              <p className="text-gray-600 dark:text-gray-300">
                {location.address}, {location.city}, {location.region}, {location.country}
              </p>
            </div>
          </div>

          {location.contact && (
            <div className="space-y-2">
              {location.contact.phone && (
                <div className="flex items-center">
                  <FiPhone className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Téléphone: {location.contact.phone}
                  </span>
                </div>
              )}

              {location.contact.email && (
                <div className="flex items-center">
                  <FiMail className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Email: {location.contact.email}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Lat: {location.coordinates.latitude.toFixed(6)}</span>
            <span>Long: {location.coordinates.longitude.toFixed(6)}</span>
          </div>
        </CardContent>
      </Card>
    );
  }
