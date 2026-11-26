import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../../hooks/useTheme';

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
      title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
