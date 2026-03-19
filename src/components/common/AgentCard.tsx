import { Card } from '../ui/Card'
import { cn } from '../../lib/cn'
import type { AgentCardProps } from '../../types/types'

export function AgentCard({ name, editedAt, className }: AgentCardProps) {
  return (
    <Card className={cn('overflow-hidden rounded-[20px] border border-(--border) bg-(--white)', className)}>
      <div className="relative h-[142px] bg-linear-to-b from-(--primaryColor) to-(--brand)">
        <div className="absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-(--white) p-3">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-(--black)" />
            <span className="h-[9px] w-10 rounded-full bg-(--black) opacity-80" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="h-6 w-[96px] rounded-full bg-(--background)" />
            <span className="h-6 w-[96px] rounded-full bg-(--black)" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="mb-1 text-base font-semibold leading-[1.05] text-(--black)">{name}</div>
            <div className="text-xs text-(--muted)">Edit By: {editedAt}</div>
          </div>
          <button type="button" className="px-1 text-[20px] leading-none text-(--black)">
            &#8942;
          </button>
        </div>
      </div>
    </Card>
  )
}

