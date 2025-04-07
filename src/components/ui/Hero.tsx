import React from 'react';
import { cn } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

interface HeroProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  centered?: boolean;
}

export default function Hero({
  className,
  children,
  title,
  subtitle,
  backgroundImage,
  centered = false,
  ...props
}: HeroProps) {
  return (
    <div
      className={cn(
        'relative py-20 md:py-28 lg:py-36',
        backgroundImage && 'bg-cover bg-center',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      {...props}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      )}

      <Container className="relative z-10">
        <div className={cn(
          'max-w-3xl',
          centered ? 'mx-auto text-center' : ''
        )}>
          <h1 className="text-3xl font-bold tracking-tight text-mining-dark dark:text-mining-light sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}

          <div className="mt-8">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}