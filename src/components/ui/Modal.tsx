import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '../../lib/cn'
import type { ModalProps } from '../../types/types'



export function Modal({ open, onOpenChange, title, children, footer, className }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2',
            'rounded-2xl border border-(--border) bg-(--white) shadow-md',
            'focus:outline-none',
            'max-h-[85vh] overflow-y-auto',
            className,
          )}
        >
          <div className="flex items-center justify-between px-6 py-8">
            <Dialog.Title className="md:text-2xl text-base font-semibold text-(--black)">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-md p-2 text-(--muted) hover:bg-(--background) hover:text-(--black)"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="px-6 py-5">{children}</div>

          {footer ? (
            <div className="flex items-center justify-end gap-3 px-6 py-4">
              {footer}
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
