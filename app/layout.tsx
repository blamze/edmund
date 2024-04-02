import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { seoData } from '@/app/data/SEO';
import { cn } from '@/utils/cn';
import { ClientOnly } from '@/app/components/ClientOnly';
import { DarkModeToggle } from '@/app/components/DarkModeToggle/DarkModeToggle';
import Link from 'next/link';

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
      <body className={cn(inter.className, 'bg-gray-50 dark:bg-gray-950')}>
        <div className='flex min-h-screen flex-col items-center justify-between'>
          <header className='relative flex w-full justify-end p-2'>
            <ClientOnly>
              <DarkModeToggle />
            </ClientOnly>
          </header>
          <main className='flex flex-1 flex-col items-center justify-center'>
            {children}
          </main>
          <footer className='text z-20 flex justify-end p-2 text-black dark:text-white'>
            <Link href='/contact'>By Edmundas</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
