'use client'

import { type FC } from 'react'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getTrackingNumber, formatPhoneForTel } from '@/lib/tracking'

interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  className?: string
}

export const PhoneButton: FC<PhoneButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className,
}) => {
  const number = getTrackingNumber()

  return (
    <a
      href={formatPhoneForTel(number)}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all',
        variant === 'primary' && 'bg-amber-500 text-slate-900 hover:bg-amber-400',
        variant === 'secondary' && 'bg-slate-800 text-white hover:bg-slate-700',
        variant === 'outline' && 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900',
        variant === 'link' && 'text-amber-600 hover:text-amber-700 underline p-0',
        variant !== 'link' && size === 'sm' && 'px-4 py-2 text-sm',
        variant !== 'link' && size === 'md' && 'px-6 py-3 text-base',
        variant !== 'link' && size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
    >
      {showIcon && variant !== 'link' && (
        <Phone
          className={cn(
            size === 'sm' && 'w-4 h-4',
            size === 'md' && 'w-5 h-5',
            size === 'lg' && 'w-6 h-6'
          )}
        />
      )}
      {number}
    </a>
  )
}
