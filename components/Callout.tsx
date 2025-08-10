import type { ReactNode } from 'react';

interface CalloutProps {
  type: 'thesis' | 'antithesis' | 'synthesis';
  children: ReactNode;
}

const variantStyles: Record<CalloutProps['type'], string> = {
  thesis:
    'border-l-4 border-primary bg-primary/10 text-primary py-4 px-4 my-6 rounded-r-md',
  antithesis:
    'border-l-4 border-accent bg-accent/10 text-accent py-4 px-4 my-6 rounded-r-md',
  synthesis:
    'border-l-4 border-muted bg-muted/10 text-foreground py-4 px-4 my-6 rounded-r-md',
};

export default function Callout({ type, children }: CalloutProps) {
  return <div className={variantStyles[type]}>{children}</div>;
}