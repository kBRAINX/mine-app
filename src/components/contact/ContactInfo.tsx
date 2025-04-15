import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import locationsData from '@/data/locations.json';
import { Location } from '@/types/Location';


export function ContactInfo() {
    const headquarters = (locationsData as Location[]).find(location => location.type === 'headquarters');

    if (!headquarters) return null;

    return (
      <Section className="bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-mining-dark dark:text-mining-light">
                Informations de contact
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <FiMapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mining-dark dark:text-mining-light">Adresse</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {headquarters.address}, {headquarters.city}, {headquarters.region}, {headquarters.country}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <FiPhone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mining-dark dark:text-mining-light">Téléphone</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {headquarters.contact.phone || 'Non disponible'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <FiMail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mining-dark dark:text-mining-light">Email</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {headquarters.contact.email || 'Non disponible'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <FiClock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mining-dark dark:text-mining-light">Heures d&apos;ouverture</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lundi - Vendredi: 8h00 - 17h00<br />
                    Samedi: 9h00 - 12h00<br />
                    Dimanche: Fermé
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
