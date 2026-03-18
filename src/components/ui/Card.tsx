import * as React from 'react'

import { cn } from '../../lib/cn'

type CardProps = React.HTMLAttributes<HTMLDivElement>

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

