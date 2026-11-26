import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import type { Theme } from '../../hooks/useTheme';
import { sections } from '../../utils/constants';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();

  function closeMenu() {
    if (!open) return;
    setOpen(false);
    requestAnimationFrame(() => menuButton.current?.focus());
  }

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        requestAnimationFrame(() => menuButton.current?.focus());
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a
          className="navbar__brand"
          href="#inicio"
          aria-label={`${profile.name}, volver al inicio`}
          onClick={closeMenu}
        >
          <span className="navbar__brand-mark">{profile.initials}</span>
          <span className="navbar__brand-type">
            {profile.name}
            <small>{profile.role.toUpperCase()}</small>
          </span>
        </a>
        <nav
          className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={menuButton}
            className="navbar__menu icon-button"
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
