'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { ClientOnly } from '@/app/components/ClientOnly';
import { DarkModeToggle } from '@/app/components/DarkModeToggle/DarkModeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isHomepage = path === '/';
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-gray-50 dark:bg-gray-950')}>
        <div className='flex min-h-screen flex-col items-center justify-between'>
          <header className='relative flex w-full justify-end p-2'>
            <ClientOnly>
              <DarkModeToggle />
            </ClientOnly>
          </header>
          <main className='flex w-screen flex-1 flex-col items-center justify-center'>
            {children}
          </main>
          <footer className='z-20 flex justify-end p-2'>
            <Link href={isHomepage ? '/experience' : '/'}>
              <button
                className={cn(
                  'h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white'
                )}
              >
                {isHomepage ? 'Try Experience' : 'Contact'}
              </button>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
