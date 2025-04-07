import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex h-screen flex-col items-center justify-center py-16 text-center">
      <h1 className="text-6xl font-bold text-primary-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page non trouvée</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Button
      href="/"
      variant="outline"
      color="primary"
      className="mt-8">
        Retour à l&apos;accueil
      </Button>
    </Container>
  );
}