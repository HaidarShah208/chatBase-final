import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'icon'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

export function Button({
  asChild,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'inline-flex items-center cursor-pointer justify-center gap-2 rounded-md font-semibold transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) focus-visible:ring-offset-2 focus-visible:ring-offset-(--background)',
        'disabled:opacity-60 disabled:pointer-events-none',
        size === 'xs' && 'h-8 px-2.5 text-xs font-medium whitespace-nowrap',
        size === 'sm' && 'h-10 px-3 text-sm font-medium whitespace-nowrap',
        size === 'md' && 'h-11 px-4 text-sm font-semibold',
        size === 'lg' && 'h-13 px-5 text-base font-semibold',
        size === 'icon' && 'h-10 w-10 p-0',
        fullWidth && 'w-full',
        variant === 'primary' &&
          'bg-(--brand) text-(--background)  hover:brightness-[0.97] active:brightness-[0.94]',
        variant === 'ghost' &&
          'bg-transparent text-(--black) hover:border hover:border-(--border)',
        variant === 'outline' &&
          'bg-(--white) text-(--black) border border-(--border) hover:bg-(--background)',
        className,
      )}
      {...props}
    />
  )
}

