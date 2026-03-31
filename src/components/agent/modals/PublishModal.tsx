import { Modal } from '../../ui/Modal'
import { Button } from '../../ui/Button'
import { Info, SquareArrowOutUpRight } from 'lucide-react'

type PublishModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PublishModal({ open, onOpenChange }: PublishModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Publish"
      className="max-w-[700px]"
      footer={
        <>
          <Button
            type="button"
            variant="outline"
            className="h-9 px-4 text-sm font-medium"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="primary"
            className="h-9 px-5 text-sm font-medium"
          >
            Publish
          </Button>
        </>
      }
    >
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-(--black)">
            Version name (optional)
          </label>
          <input
            type="text"
            className="mt-1.5 w-full border border-(--border) rounded-lg bg-(--background) px-3 py-2.5 text-xs text-(--black) outline-none placeholder:text-(--grayish)"
            placeholder="V2 - add a descriptive name (optional)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-(--black)">
            Description (optional)
          </label>
          <textarea
            rows={5}
            className="mt-1.5 w-full resize-none rounded-lg border border-(--border) bg-(--white) px-3 py-2.5 text-xs text-(--black) outline-none placeholder:text-(--grayish)"
            placeholder="Version description (optional)"
          />
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between rounded-lg border border-(--border) bg-(--primarySoft) px-3 py-4">
            <div className="flex items-center gap-2 text-(--grayish)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full text-sm  text-(--brand)">
                <Info className='w-4 h-4' />
              </span>
              <span>Pro tip: You can compare changes using Version Difference.</span>
            </div>
            <button
              type="button"
              className="text-xs md:text-sm  cursor-pointer font-medium text-(--brand) underline-offset-2 hover:underline"
            >
              Compare
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-(--border) bg-(--primarySoft) px-3 py-4">
            <div className="flex items-center gap-2 text-(--grayish)">
              <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-(--brand)">
              <Info className='w-4 h-4' />
              </span>
              <span>You can now deploy to CallChat Widgets</span>
            </div>
            <button
              type="button"
              className="text-xs md:text-sm cursor-pointer inline-flex gap-0 md:gap-1 font-medium text-(--brand) underline-offset-2 hover:underline"
            >
              See Docs
              <SquareArrowOutUpRight className='w-3 mt-1 h-3' />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

