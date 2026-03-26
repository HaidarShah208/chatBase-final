import { ChevronDown } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useMemo } from 'react'
import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

export type StatusOption = {
  value: string
  label: string
}

type StatusFilterDropdownProps = {
  value: string
  options: StatusOption[]
  onChange: (next: string) => void
  leftIcon?: ReactNode
  className?: string
  triggerClassName?: string
}

export function StatusFilterDropdown({
  value,
  options,
  onChange,
  leftIcon,
  className,
  triggerClassName,
}: StatusFilterDropdownProps) {
  const activeLabel = useMemo(() => {
    return options.find((o) => o.value === value)?.label ?? 'All Statuses'
  }, [options, value])

  return (
    <div className={cn(className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-3 py-2.5 text-xs font-medium text-(--black)',
              triggerClassName,
            )}
          >
            {leftIcon ? <span className="text-(--darkGray)">{leftIcon}</span> : null}
            <span className="text-[12px]">{activeLabel}</span>
            <ChevronDown className="h-3 w-3 text-(--darkGray)" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="start"
            sideOffset={8}
            className="z-50 w-[220px] rounded-xl border border-(--border) bg-(--white) p-2 shadow-md"
          >
            {options.map((opt) => (
              <DropdownMenu.Item
                key={opt.value}
                onSelect={() => onChange(opt.value)}
                className={cn(
                  'flex cursor-pointer select-none items-center justify-between rounded-lg px-3 py-2 text-xs text-(--black)',
                  'outline-none hover:bg-(--background) data-highlighted:bg-(--background)',
                  opt.value === value ? 'font-semibold text-(--brand)' : 'font-medium',
                )}
              >
                <span>{opt.label}</span>
                {opt.value === value ? <span aria-hidden="true">•</span> : null}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

