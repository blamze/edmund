import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { seoData } from '@/app/data/SEO';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
