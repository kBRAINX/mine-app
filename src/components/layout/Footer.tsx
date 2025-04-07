import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const t = useTranslations('common.footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.svg"
                alt="Group Toumbe Manning"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Acteur dynamique du secteur minier en Guinée, contribuant à une exploitation responsable des ressources naturelles.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  Nos activités
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 h-5 w-5 text-primary-400" />
                <span className="text-sm">
                  Quartier Kipe, Commune de Ratoma, Conakry, Guinée
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-sm">+224 628 12 34 56</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-sm">contact@gtm-guinee.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Inscrivez-vous pour recevoir nos dernières actualités
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Group Toumbe Manning SARL. {t('rights')}
            </p>
            <div className="flex space-x-6">
              <Link href="/legal#privacy" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                {t('privacy')}
              </Link>
              <Link href="/legal#terms" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                {t('terms')}
              </Link>
              <Link href="/legal" className="text-sm text-gray-400 transition-colors hover:text-primary-400">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}