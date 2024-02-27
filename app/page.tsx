import { Hero } from '@/app/components/Hero';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center p-24'>
      <main className=''>
        <Hero />
      </main>
      {/*<footer className='flex justify-end p-5 text-white'>By Edmundas</footer>*/}
    </div>
  );
}
