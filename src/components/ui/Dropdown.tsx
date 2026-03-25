import * as React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { cn } from '../../lib/cn'

export type DropdownItem = {
  key: string
  label: string
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
            'z-50 min-w-[180px] rounded-xl border border-(--border) bg-(--white) p-2 shadow-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
          )}
        >
          {items.map((item) => (
            <DropdownMenu.Item
              key={item.key}
              onSelect={() => item.onSelect?.()}
              className={cn(
                'flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-(--black)',
                'outline-none hover:bg-(--background) data-highlighted:bg-(--background)',
              )}
            >
              {item.icon ? <span className="text-(--muted)">{item.icon}</span> : null}
              <span>{item.label}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

