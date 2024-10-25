'use client';

import { BackgroundBeams } from '@/app/components/BackgroundBeam';
import { Hero } from '@/app/components/Hero';

export default function Contact() {
  return (
    <>
      <Hero />
      <BackgroundBeams className='-z-10' />
    </>
  );
}
