'use client';

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
      setTimeout(() => {
        setWords(heroDialogs.dialog3);
        setTimeout(() => setHelpButtonClass('visible animate-fadeIn'), 4000);
      }, 4000);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setHelpButtonClass('invisible');

    setLaggy(false);
    setWords(heroDialogs.dialog4);
    setTimeout(() => {
      setWords(heroDialogs.dialog5);
      setTimeout(() => {
        setWords(heroDialogs.dialog6);
        setTimeout(() => {
          setWords(heroDialogs.dialog7);
          setTimeout(() => {
            setExploreButtonClass('visible animate-fadeIn');
          }, 4000);
        }, 4000);
      }, 4000);
    }, 4000);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='animate-fadeOut mb-10 text-base text-neutral-600 dark:text-neutral-200'>
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
          Help me
        </button>
        <Link href='/beginning' className={exploreButtonClass}>
          <MagicButton className='w-full'>Explore</MagicButton>
        </Link>
      </div>
    </div>
  );
}
