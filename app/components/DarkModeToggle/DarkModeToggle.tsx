'use client';

import { JSX, ClassAttributes, InputHTMLAttributes } from 'react';
import './styles.css';
import { useDarkMode } from '@/app/hooks/useDarkMode';

export function DarkModeToggle({
  className,
  ...rest
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>) {
  const { toggleTheme, isDark } = useDarkMode();

  return (
    <label htmlFor='dark-mode' className={className}>
      <div className='switch'>
        <input
          id='dark-mode'
          type='checkbox'
          onChange={toggleTheme}
          checked={isDark}
          {...rest}
        />
        <div className='insetcover'>
          <div className='sun-moon sun' />
          <div className='sun-moon moon' />
          <div className='stars' />
        </div>
        <div className='sun-moon-shadow' />
        <div className='shadow-overlay' />
      </div>
    </label>
  );
}
