import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/lib/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Group Toumbe Manning SARL',
    default: 'Group Toumbe Manning SARL | Exploitation minière responsable en Guinée',
  },
  description: 'Group Toumbe Manning SARL est une société minière engagée dans l\'exploration, l\'exploitation et la commercialisation de ressources minières stratégiques en Guinée.',
  keywords: ['exploitation minière', 'Guinée', 'bauxite', 'or', 'mining', 'responsable', 'Group Toumbe Manning'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-mining-light dark:bg-mining-dark text-mining-dark dark:text-mining-light min-h-screen`}>
        <ThemeProvider>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}