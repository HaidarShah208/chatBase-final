import { CalendarDays } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useEffect, useMemo, useState } from 'react'

import { cn } from '../../lib/cn'

type DateRange = {
  from: string // YYYY-MM-DD
  to: string // YYYY-MM-DD
}

type DateRangePickerProps = {
  value: DateRange
  onChange: (next: DateRange) => void
  className?: string
  triggerClassName?: string
}

function formatHumanDate(iso: string) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00')
  if (Number.isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
}

export function DateRangePicker({
  value,
  onChange,
  className,
  triggerClassName,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<DateRange>(value)

  useEffect(() => {
    if (!open) setDraft(value)
  }, [open, value])

  const label = useMemo(() => {
    const fromLabel = formatHumanDate(draft.from)
    const toLabel = formatHumanDate(draft.to)
    if (!fromLabel && !toLabel) return 'Select date range'
    if (fromLabel && toLabel) return `${fromLabel} – ${toLabel}`
    return fromLabel || toLabel || 'Select date range'
  }, [draft.from, draft.to])

  return (
    <div className={cn(className)}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-3 py-2.5 text-xs font-medium text-(--black)',
              triggerClassName,
            )}
          >
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-(--darkGray)" />
            {label}
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="start"
            sideOffset={8}
            className={cn(
              'z-50 w-[320px] rounded-xl border border-(--border) bg-(--white) p-3 shadow-md',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
            )}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-(--black)">Date Range</div>
              <button
                type="button"
                className="text-xs font-medium text-(--darkGray) hover:underline"
                onClick={() => {
                  setDraft(value)
                  onChange(value)
                  setOpen(false)
                }}
              >
                Reset
              </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <div className="mb-1 text-[11px] font-medium text-(--darkGray)">From</div>
                <input
                  type="date"
                  value={draft.from}
                  onChange={(e) => setDraft((p) => ({ ...p, from: e.target.value }))}
                  className="h-9 w-full rounded-md border border-(--border) bg-(--white) px-2 text-xs text-(--black) outline-none"
                />
              </div>
              <div>
                <div className="mb-1 text-[11px] font-medium text-(--darkGray)">To</div>
                <input
                  type="date"
                  value={draft.to}
                  onChange={(e) => setDraft((p) => ({ ...p, to: e.target.value }))}
                  className="h-9 w-full rounded-md border border-(--border) bg-(--white) px-2 text-xs text-(--black) outline-none"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                className="h-8 rounded-md border border-(--border) bg-(--white) px-3 text-xs font-medium text-(--black)"
                onClick={() => {
                  setDraft(value)
                  setOpen(false)
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="h-8 rounded-md bg-(--brand) px-3 text-xs font-semibold text-(--background) hover:brightness-[0.97]"
                onClick={() => {
                  onChange(draft)
                  setOpen(false)
                }}
              >
                Apply
              </button>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}

