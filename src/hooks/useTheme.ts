import { useSyncExternalStore } from 'react';

export type Theme = 'dark' | 'light';

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function subscribe(callback: () => void) {
  window.addEventListener('portfolio-theme', callback);
  return () => window.removeEventListener('portfolio-theme', callback);
}

export function useTheme() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => 'dark');

  function toggleTheme() {
    const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Theme changes still work if storage is unavailable.
    }
    window.dispatchEvent(new Event('portfolio-theme'));
  }

  return { theme, toggleTheme };
}
