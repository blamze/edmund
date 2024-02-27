import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const [dark, setDark] = useLocalStorage(
    'dark',
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (
      dark ||
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setTimeout(() => {
      document.body.classList.add('js-dark-mode-animation');
    }, 0);
  }, [dark]);

  const setLightTheme = () => {
    setDark(false);
    localStorage.theme = 'light';
  };

  const setDarkTheme = () => {
    setDark(true);
    localStorage.theme = 'dark';
  };

  const toggleTheme = () => {
    localStorage.removeItem('theme');

    if (dark) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const setOSTheme = () => {
    localStorage.removeItem('theme');
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  };

  return { setLightTheme, setDarkTheme, setOSTheme, toggleTheme, isDark: dark };
};
