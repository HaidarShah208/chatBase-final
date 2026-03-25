import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  asChild,
  variant = 'primary',
  size = 'md',
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
        size === 'sm' ? 'h-10 px-3 text-sm font-medium whitespace-nowrap' : 'h-13 w-[181px] font-medium px-4 text-sm',
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

