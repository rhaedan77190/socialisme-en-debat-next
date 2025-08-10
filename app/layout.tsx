import '@/app/globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata = {
  title: {
    default: 'Socialisme en débat',
    template: '%s - Socialisme en débat',
  },
  description:
    'Blog de réflexion socialiste contemporaine : analyses matérialistes, théorie et perspectives.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}