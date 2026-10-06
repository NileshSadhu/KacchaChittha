import type { FC, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'neutral' | 'outline' | 'pill-dot';
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60 font-medium',
    warning: 'bg-amber-50 text-amber-700 border-amber-200/80 font-medium',
    neutral: 'bg-transparent text-zinc-400 font-medium',
    outline: 'border border-zinc-200 text-zinc-600 bg-white shadow-sm',
    'pill-dot':
      'bg-zinc-100/80 text-zinc-600 border border-zinc-200/80 tracking-wider font-semibold text-[11px] uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
