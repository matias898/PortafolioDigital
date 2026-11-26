import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Common = { children: ReactNode; variant?: 'primary' | 'outline' | 'quiet'; icon?: ReactNode };
type ButtonProps = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type LinkProps = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = 'outline', icon, className = '', ...rest } = props;
  const classes = `button button--${variant} ${className}`.trim();
  if ('href' in rest && rest.href) {
    return (
      <a className={classes} {...(rest as LinkProps)}>
        {children}
        {icon && <span aria-hidden="true">{icon}</span>}
      </a>
    );
  }
  return (
    <button className={classes} type="button" {...(rest as ButtonProps)}>
      {children}
      {icon && <span aria-hidden="true">{icon}</span>}
    </button>
  );
}
