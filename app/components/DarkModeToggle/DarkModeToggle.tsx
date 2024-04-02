'use client';

import { JSX, ClassAttributes, InputHTMLAttributes, useEffect } from 'react';
import './styles.css';
import { useDarkMode } from '@/app/hooks/useDarkMode';

export function DarkModeToggle({
  className,
  ...rest
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>) {
  useEffect(() => {
    const styles = [
      'color: deepskyblue',
      'background: gray',
      'font-size: 20px',
      'border: 1px solid orange',
      'text-shadow: 2px 2px black',
      'padding: 10px',
    ].join(';');
    console.log(
      "%cLet's inspect this together 😎🤝 - 👉 contact me 👈",
      styles
    );
  }, []);

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
