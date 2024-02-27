'use client';

import { JSX, ClassAttributes, InputHTMLAttributes } from 'react';
import './styles.css';

export function DarkModeToggle({
  className,
  ...rest
}: JSX.IntrinsicAttributes &
  ClassAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor='dark-mode' className={className}>
      <div className='switch'>
        <input id='dark-mode' type='checkbox' {...rest} />
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
