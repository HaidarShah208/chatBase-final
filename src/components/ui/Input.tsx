import * as React from 'react'

import { cn } from '../../lib/cn'
import type { InputProps } from '../../types/types'



export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, leftIcon, ...props },
  ref,
) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-[6px] border border-(--border) bg-(--background) px-3',
        'focus-within:ring-0 focus-within:ring-offset-0 focus-within:ring-offset-(--background)',
        className,
      )}
    >
      {leftIcon ? <span className="text-(--muted)">{leftIcon}</span> : null}
      <input
        ref={ref}
        className={cn(
          'h-9 w-full bg-transparent text-sm text-(--black) placeholder:text-(--muted)',
          'outline-none',
        )}
        {...props}
      />
    </div>
  )
})

