import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ScrollProgress } from '../ui/ScrollProgress';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
