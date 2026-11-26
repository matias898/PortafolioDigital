import { useEffect, useState } from 'react';
import { sections } from '../utils/constants';

export function useActiveSection() {
  const [active, setActive] = useState<string>('inicio');

  useEffect(() => {
    const observed = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const first = visible[0];
          if (first) setActive(first.target.id);
        }
      },
      { rootMargin: '-18% 0px -60% 0px', threshold: 0 },
    );
    observed.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return active;
}
