import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { cn } from '../../lib/cn'

export type DropdownItem = {
  key: string
  label: string
  description?: string
  icon?: React.ReactNode
  onSelect?: () => void
}

type DropdownProps = {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: 'start' | 'center' | 'end'
}

export function Dropdown({ trigger, items, align = 'end' }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={8}
          className={cn(
            'z-50 min-w-[177px] rounded-xl border border-(--border) bg-(--white) p-2 shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
          )}
        >
          {items.map((item) => (
            <DropdownMenu.Item
              key={item.key}
              onSelect={() => item.onSelect?.()}
              className={cn(
                'flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-3 text-sm text-(--black)',
                'outline-none hover:bg-(--background) data-highlighted:bg-(--background)',
              )}
            >
              {item.icon ? (
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-(--bg-primary)">
                  {item.icon}
                </span>
              ) : null}
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-(--black)">{item.label}</div>
                {item.description ? (
                  <div className="mt-0.5 truncate text-xs font-medium text-(--muted)">
                    {item.description}
                  </div>
                ) : null}
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

