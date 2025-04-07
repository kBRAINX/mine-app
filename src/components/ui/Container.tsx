import React from 'react';
import { cn } from '@/components/ui/Button';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}