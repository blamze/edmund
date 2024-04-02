'use client';

import { BackgroundBeams } from '@/app/components/BackgroundBeam';
import { FloatingCardPreview } from '@/app/components/FloatingCard/FloatingCardPreview';

export default function Contact() {
  return (
    <>
      <FloatingCardPreview />
      <BackgroundBeams className='-z-10' />
    </>
  );
}
