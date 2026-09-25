import { useState, useEffect } from 'react';

const STORAGE_KEY = 'theme';

const getSystemTheme = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const getStoredTheme = () => {
  try {
    return typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  } catch (e) {
    return null;
  }
};

/* Single source of truth — the header toggle and the hero's `theme`
   command both drive this, so they can't drift out of sync. */
let current = getStoredTheme() || getSystemTheme();
const listeners = new Set();

const apply = (next) => {
  current = next;
  document.documentElement.setAttribute('data-theme', next);
  listeners.forEach((notify) => notify(next));
};

export const getTheme = () => current;

export const setTheme = (next) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch (e) {
    /* private browsing or storage disabled — theme still applies for this visit */
  }
  apply(next);
};

export const toggleTheme = () => setTheme(current === 'dark' ? 'light' : 'dark');

export const useTheme = () => {
  const [theme, setLocal] = useState(current);

  useEffect(() => {
    listeners.add(setLocal);
    setLocal(current);
    return () => listeners.delete(setLocal);
  }, []);

  /* Follow the system setting live, but only until the visitor picks explicitly */
  useEffect(() => {
    if (getStoredTheme() || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => apply(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [theme, toggleTheme];
};
