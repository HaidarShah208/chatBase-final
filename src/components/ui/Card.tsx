import * as React from 'react'

import { cn } from '../../lib/cn'
import type { CardProps } from '../../types/types'


export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-(--radius) border border-(--border) bg-(--background)',
        className,
      )}
      {...props}
    />
  )
}

