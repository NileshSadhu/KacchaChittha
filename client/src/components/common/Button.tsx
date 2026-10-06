import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantStyles = {
    primary:
      'bg-zinc-900 text-white hover:bg-black shadow-sm hover:shadow-md active:scale-[0.98]',
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.98]',
    outline:
      'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.98]',
    ghost:
      'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70',
    icon:
      'bg-zinc-900 text-white hover:bg-zinc-800 active:scale-95 shadow-sm',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full',
    md: 'text-sm px-5 py-2 rounded-full',
    lg: 'text-sm sm:text-base px-6 sm:px-7 py-2.5 sm:py-3 rounded-full',
    icon: 'w-9 h-9 rounded-full p-0 flex items-center justify-center',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
