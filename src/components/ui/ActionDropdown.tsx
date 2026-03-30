import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type ActionDropdownItem = {
  key: string
  label: string
  icon?: ReactNode
  onSelect?: () => void
  itemClassName?: string
  labelClassName?: string
  iconClassName?: string
}

type ActionDropdownRootProps = {
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

type ActionDropdownContentProps = {
  children?: ReactNode
  items?: ActionDropdownItem[]
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  contentClassName?: string
}

function ActionDropdownRoot({ children, open, onOpenChange }: ActionDropdownRootProps) {
  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DropdownMenu.Root>
  )
}

function ActionDropdownTrigger({ children }: { children: ReactNode }) {
  return <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
}

function ActionDropdownContent({
  children,
  items,
  side = 'bottom',
  align = 'start',
  contentClassName,
}: ActionDropdownContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        side={side}
        align={align}
        sideOffset={8}
        collisionPadding={12}
        avoidCollisions
        className={cn(
          'z-50 min-w-[220px] rounded-xl border border-(--border) bg-(--white) p-1.5 shadow-md',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          contentClassName,
        )}
      >
        {children
          ? children
          : items?.map((item) => (
              <DropdownMenu.Item
                key={item.key}
                onSelect={() => item.onSelect?.()}
                className={cn(
                  'flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-(--black)',
                  'outline-none hover:bg-(--background) data-highlighted:bg-(--background)',
                  item.itemClassName,
                )}
              >
                {item.icon ? <span className={cn('text-(--black)', item.iconClassName)}>{item.icon}</span> : null}
                <span className={item.labelClassName}>{item.label}</span>
              </DropdownMenu.Item>
            ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}

export const ActionDropdown = {
  Root: ActionDropdownRoot,
  Trigger: ActionDropdownTrigger,
  Content: ActionDropdownContent,
}
