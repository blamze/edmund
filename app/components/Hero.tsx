import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from '@/app/components/TypewriterEffect';
import { useEffect, useState } from 'react';
import { heroDialogs } from '@/app/data/heroData';
import { MagicButton } from '@/app/components/MagicButton';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export function Hero() {
  const [helpButtonClass, setHelpButtonClass] = useState('invisible');
  const [exploreButtonClass, setExploreButtonClass] = useState('invisible');
  const [words, setWords] = useState(heroDialogs.dialog1);
  const [laggy, setLaggy] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWords(heroDialogs.dialog2);
      setTimeout(() => setHelpButtonClass('visible animate-fadeIn'), 3000);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setHelpButtonClass('invisible');

    setLaggy(false);
    setWords(heroDialogs.dialog3);
    setTimeout(() => {
      setExploreButtonClass('visible animate-fadeIn');
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='mb-10 animate-fadeOut text-base text-neutral-600 dark:text-neutral-200'>
        The road to explore starts from here
      </p>

      {laggy ? (
        <TypewriterEffect words={words} key={words[0].text} />
      ) : (
        <TypewriterEffectSmooth words={words} key={words[0].text} />
      )}

      <div className={'mt-10 flex flex-col'}>
        <button
          className={cn(
            'h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white opacity-0 dark:border-white',
            helpButtonClass
          )}
          onClick={handleClick}
        >
          Help
        </button>
        <Link href='/beginning' className={exploreButtonClass}>
          <MagicButton className='w-full'>Bring destruction</MagicButton>
        </Link>
      </div>
    </div>
  );
}
