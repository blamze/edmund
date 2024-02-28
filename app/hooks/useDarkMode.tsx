import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect } from 'react';

const THEME_KEY = 'theme';
const LIGHT = 'light';
const DARK = 'dark';

const isPreferredDark = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return true;
};
const getPreferredTheme = () => (isPreferredDark() ? DARK : LIGHT);

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage<string>(
    THEME_KEY,
    getPreferredTheme()
  );

  useEffect(() => {
    if (
      theme === DARK ||
      localStorage.theme === DARK ||
      (!('theme' in localStorage) && isPreferredDark())
    ) {
      document.documentElement.classList.add(DARK);
    } else {
      document.documentElement.classList.remove(DARK);
    }

    //add animation class
    setTimeout(() => {
      document.body.classList.add('js-dark-mode-animation');
    }, 1000);
  }, [theme]);

  const setLightTheme = () => {
    setTheme(LIGHT);
  };

  const setDarkTheme = () => {
    setTheme(DARK);
  };

  const toggleTheme = () => {
    localStorage.removeItem(THEME_KEY);

    if (theme === DARK) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  const setOSTheme = () => {
    localStorage.removeItem(THEME_KEY);
    setTheme(getPreferredTheme());
  };

  return {
    setLightTheme,
    setDarkTheme,
    setOSTheme,
    toggleTheme,
    isDark: theme === DARK,
    theme,
  };
};
