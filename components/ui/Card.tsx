import { type FC, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'bordered' | 'elevated'
  className?: string
}

export const Card: FC<CardProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-6',
        variant === 'default' && 'shadow-md',
        variant === 'bordered' && 'border-2 border-slate-200',
        variant === 'elevated' && 'shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export const CardHeader: FC<CardHeaderProps> = ({ children, className }) => {
  return <div className={cn('mb-4', className)}>{children}</div>
}

interface CardTitleProps {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

export const CardTitle: FC<CardTitleProps> = ({
  children,
  as: Component = 'h3',
  className,
}) => {
  return (
    <Component
      className={cn(
        'font-outfit font-bold text-slate-900',
        Component === 'h2' && 'text-2xl',
        Component === 'h3' && 'text-xl',
        Component === 'h4' && 'text-lg',
        className
      )}
    >
      {children}
    </Component>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export const CardContent: FC<CardContentProps> = ({ children, className }) => {
  return <div className={cn('text-slate-600', className)}>{children}</div>
}
