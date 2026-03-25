import { Card } from '../ui/Card'
import { cn } from '../../lib/cn'
import type { AgentCardProps } from '../../types/types'
import { MoreVertical } from 'lucide-react'

export function AgentCard({ name, editedAt, className }: AgentCardProps) {
  return (
    <Card className={cn('h-[244px] w-full   overflow-hidden rounded-[20px] border border-(--border) bg-(--white)', className)}>
      <div className="relative h-[144px] m-1 rounded-[14px] bg-linear-to-b from-(--primaryColor) to-(--brand)">
        <div className="absolute  inset-x-3 w-[82%] top-7 bottom-0 rounded-t-[12px]  bg-(--white) mx-auto">
        <div className="mb-1 rounded-t-[12px] bg-(--background)">
  <div className="flex items-center gap-1 p-2">
    <span className="h-6 w-6 rounded-full bg-(--black)" />
    <p className='text-[10px] text-(--black)'>Dribble</p>
  </div>
</div>
          <div className="flex p-2 flex-col gap-2">
            <span className="h-6 w-[88px] rounded-full bg-(--background)" />
            <div className="flex justify-end">
              <span className="h-6 w-[88px] rounded-full bg-(--black)" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-6">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="mb-1 text-base font-semibold leading-[1.05] text-(--black)">{name}</div>
            <div className="md:text-xs text-[10px] text-(--muted)">Edit By: {editedAt}</div>
          </div>
          <div className="flex justify-center items-center">

          <button type="button" className="px-1 text-[20px]  leading-none text-(--black)">
            <MoreVertical className='w-3 h-3'/>
          </button>
          </div>
        </div>
      </div>
    </Card>
  )
}

