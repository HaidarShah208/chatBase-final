import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

import { cn } from '../../lib/cn'
import type { SelectProps } from '../../types/types'



export function Select({ value, onValueChange, options, placeholder, className }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-lg border border-(--border) bg-(--white) px-3 text-left text-sm text-(--black) outline-none',
          'focus-visible:ring-2 focus-visible:ring-(--brand) focus-visible:ring-offset-2 focus-visible:ring-offset-(--white)',
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder ?? 'Select'} />
        <SelectPrimitive.Icon className="ml-2 text-(--grayish)">
          <ChevronDown className="h-4 w-4" aria-hidden />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            'z-50 min-w-[160px] overflow-hidden rounded-lg border border-(--border) bg-(--white) shadow-md',
          )}
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className={cn(
                  'flex cursor-pointer select-none items-center rounded-md px-3 py-1.5 text-sm text-(--black)',
                  'outline-none data-highlighted:bg-(--background)',
                )}
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

