import { locales } from '@/lib/i18n/config'
import createMiddleware from 'next-intl/middleware'

// Le middleware qui va gérer les redirections de langue
export default createMiddleware({
  // Une liste des locales disponibles
  locales,
  // La locale par défaut
  defaultLocale: 'fr',
  // Si l'URL est à la racine, rediriger vers la locale par défaut
  localePrefix: 'always'
})

// Définissez sur quels chemins le middleware doit s'exécuter
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}