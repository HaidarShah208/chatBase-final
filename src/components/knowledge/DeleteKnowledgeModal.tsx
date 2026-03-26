import * as Dialog from '@radix-ui/react-dialog'
import { CircleAlert } from 'lucide-react'

import { Button } from '../ui/Button'

type DeleteKnowledgeModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function DeleteKnowledgeModal({
  open,
  onOpenChange,
  onConfirm,
}: DeleteKnowledgeModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/35" />
        <Dialog.Content
          className={
            'fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[14px] border border-(--border) bg-(--white) px-9 py-14 shadow-md focus:outline-none'
          }
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-(--primaryRed)">
              <CircleAlert className="h-5 w-5" />
            </div>
            <Dialog.Title className="md:text-2xl text-lg font-semibold leading-tight text-(--black) ">
              Delete Knowledge
            </Dialog.Title>
          </div>

          <Dialog.Description className="pt-7 text-base leading-tight text-(--grayish) md:text-lg">
            Are you sure you want to delete this knowledge?
          </Dialog.Description>

          <div className="mt-24 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 min-w-[105px] rounded-lg border-(--border) bg-(--white) px-5 text-sm font-medium text-(--black)"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              className="h-9 min-w-[105px] rounded-lg bg-(--primaryRed) px-5 text-sm font-medium text-(--white) hover:brightness-95"
              onClick={onConfirm}
            >
              Delete
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
