'use client';

import { BackgroundGradientAnimation } from '@/app/components/BackgroundGradientAnimation';
import Link from 'next/link';
import { MagicButton } from '@/app/components/MagicButton';
import { useState } from 'react';
import { DontTouchButton } from '@/app/components/DontTouchButton/DontTouchButton';

export default function Beginning() {
  const [gradientState, setGradientState] = useState({
    gradientBackgroundStart: 'rgb(108, 0, 162)',
    gradientBackgroundEnd: 'rgb(0, 17, 82)',
    firstColor: '18, 113, 255',
    secondColor: '221, 74, 255',
    thirdColor: '100, 220, 255',
    fourthColor: '200, 50, 50',
    fifthColor: '180, 180, 50',
    pointerColor: '140, 100, 255',
    size: '80%',
    blendingValue: 'hard-light',
  });
  const getRandColor = () =>
    `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
  const handleClick = () => {
    setGradientState((val) => ({
      ...val,
      gradientBackgroundStart: `rgb(${getRandColor()})`,
      gradientBackgroundEnd: `rgb(${getRandColor()})`,
      firstColor: `${getRandColor()}`,
      secondColor: `${getRandColor()}`,
      thirdColor: `${getRandColor()}`,
      fourthColor: `${getRandColor()}`,
      fifthColor: `${getRandColor()}`,
      pointerColor: `${getRandColor()}`,
    }));
  };
  return (
    <div>
      <BackgroundGradientAnimation
        {...gradientState}
        key={gradientState.gradientBackgroundStart}
        containerClassName='absolute'
      />
      <div className='flex flex-col gap-4'>
        <DontTouchButton />

        <MagicButton
          className='w-full'
          childrenClassName='bg-transparent'
          onClick={handleClick}
        >
          Randomize some colors!
        </MagicButton>
        <Link href='/around-the-world'>
          <MagicButton className='w-full' childrenClassName='bg-transparent'>
            Travel around the world!
          </MagicButton>
        </Link>
      </div>
    </div>
  );
}
