import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

export type KnowledgeDropdownItem = {
  key: string
  label: string
  description: string
  icon: ReactNode
  onSelect?: () => void
}

type KnowledgeDropdownProps = {
  trigger: ReactNode
  items: KnowledgeDropdownItem[]
  align?: 'start' | 'center' | 'end'
}

export function KnowledgeDropdown({
  trigger,
  items,
  align = 'start',
}: KnowledgeDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          sideOffset={8}
          className={cn(
            'z-50 min-w-[330px] rounded-xl border border-(--border) bg-(--white) p-2 shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
          )}
        >
          {items.map((item) => (
            <DropdownMenu.Item
              key={item.key}
              onSelect={() => item.onSelect?.()}
              className={cn(
                'flex cursor-pointer w-[398px] select-none items-start gap-3 rounded-lg px-3 py-3',
                'outline-none hover:bg-(--background) data-highlighted:bg-(--background)',
              )}
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-(--bg-primary)">
                {item.icon}
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-(--black)">
                  {item.label}
                </div>
                <div className="mt-0.5 truncate text-xs font-medium text-(--tertiary)">
                  {item.description}
                </div>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

