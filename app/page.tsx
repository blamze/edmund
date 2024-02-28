'use client';

import { Hero } from '@/app/components/Hero';
import { BackgroundBeams } from '@/app/components/BackgroundBeam';

export default function Home() {
  return (
    <div>
      <Hero />
      <BackgroundBeams className='-z-10' />
    </div>
  );
}
