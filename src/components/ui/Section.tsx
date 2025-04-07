import React from 'react';
import { cn } from '@/components/ui/Button';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ className, children, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      {children}
    </section>
  );
}