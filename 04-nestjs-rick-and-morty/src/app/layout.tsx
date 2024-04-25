import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rick & Morty App',
  description: 'App for Rick & Morty characters',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />  // Incluye el componente de navegación
        <main>{children}</main>
      </body>
    </html>
  );
}
