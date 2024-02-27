import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { seoData } from '@/app/data/SEO';
import { cn } from '@/utils/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-gray-100 dark:bg-gray-950')}>
        {children}
      </body>
    </html>
  );
}
