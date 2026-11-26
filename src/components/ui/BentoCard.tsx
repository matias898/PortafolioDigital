import type { ReactNode } from 'react';

export function BentoCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`bento-card ${className}`.trim()}>{children}</div>;
}
