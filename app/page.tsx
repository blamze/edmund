'use client';

import { Hero } from '@/app/components/Hero';
import { BackgroundBeams } from '@/app/components/BackgroundBeam';
import { MagicButton } from '@/app/components/MagicButton';
import { useDarkMode } from '@/app/hooks/useDarkMode';
import { DarkModeToggle } from '@/app/components/DarkModeToggle/DarkModeToggle';

export default function Home() {
  const { toggleTheme, isDark } = useDarkMode();
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <DarkModeToggle onClick={toggleTheme} checked={isDark} />

      <main className='z-10'>
        <Hero />
      </main>
      <BackgroundBeams className='z-0' />

      {/*<footer className='flex justify-end p-5 text-white'>By Edmundas</footer>*/}
    </div>
  );
}
