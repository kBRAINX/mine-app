import { ReactNode } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// Utility function pour combiner les classes Tailwind
export function cn(...inputs: (string | undefined)[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 dark:bg-secondary-700 dark:hover:bg-secondary-800',
    outline: 'border border-mining-dark text-mining-dark hover:bg-mining-dark/10 dark:border-mining-light dark:text-mining-light dark:hover:bg-mining-light/10',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-mining-dark dark:text-mining-light',
    link: 'bg-transparent underline-offset-4 hover:underline text-primary-600 dark:text-primary-400',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}