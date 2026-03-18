import { Card } from '../ui/Card'
import { cn } from '../../lib/cn'

export type AgentCardProps = {
  name: string
  editedAt: string
  className?: string
}

export function AgentCard({ name, editedAt, className }: AgentCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <div className="h-16 border-b border-(--border) bg-(--background)" />
      <div className="p-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-(--black)" />
          <span className="h-2 w-20 rounded-full border border-(--border) bg-(--background)" />
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="h-3 w-24 rounded-full border border-(--border) bg-(--background)" />
          <span className="h-3 w-14 rounded-full border border-(--border) bg-(--background)" />
        </div>

        <div className="mb-1 text-sm font-semibold text-(--black)">{name}</div>
        <div className="text-[11px] text-(--muted)">Edit by: {editedAt}</div>
      </div>
    </Card>
  )
}

