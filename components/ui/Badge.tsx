import { type FC, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md'
  className?: string
}

export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold rounded-full',
        variant === 'default' && 'bg-slate-100 text-slate-700',
        variant === 'success' && 'bg-green-100 text-green-700',
        variant === 'warning' && 'bg-amber-100 text-amber-700',
        variant === 'error' && 'bg-red-100 text-red-700',
        variant === 'info' && 'bg-blue-100 text-blue-700',
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        className
      )}
    >
      {children}
    </span>
  )
}
