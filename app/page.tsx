import { BackgroundBeams } from '@/app/components/BackgroundBeam';
import { FloatingCardPreview } from '@/app/components/FloatingCard/FloatingCardPreview';
import type { Metadata } from 'next';
import { seoData } from '@/app/data/SEO';

export default function Home() {
  const metadata: Metadata = {
    title: seoData.title,
    description: seoData.description,
  };

  return (
    <>
      <FloatingCardPreview />
      <BackgroundBeams className='-z-10' />
    </>
  );
}
