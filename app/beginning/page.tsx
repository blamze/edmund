import { Hero } from '@/app/components/Hero';
import { BackgroundBeams } from '@/app/components/BackgroundBeam';
import { BackgroundGradientAnimation } from '@/app/components/BackgroundGradientAnimation';

export default function Beginning() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <main className='z-10'>
        <BackgroundGradientAnimation />
      </main>

      {/*<footer className='flex justify-end p-5 text-white'>By Edmundas</footer>*/}
    </div>
  );
}
