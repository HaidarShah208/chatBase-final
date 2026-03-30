import {
  ChevronDown,
  Home,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'
import { SECTIONS } from '../../lib/data'
import type { AgentWorkspaceSidebarProps } from '../../types/types'

const itemShell =
  'overflow-hidden rounded-2xl border border-(--border) bg-(--white) shadow-none'



export function AgentWorkspaceSidebar({
  openSectionId,
  onToggleSection,
  collapsed,
  className,
}: AgentWorkspaceSidebarProps) {
  if (collapsed) {
    return null
  }

  return (
    <aside
      className={cn(
        'flex w-[min(100%,280px)] shrink-0 flex-col border-r  border-t rounded-r-xl border-(--border) bg-(--white) px-3 py-4 lg:w-80',
        className,
      )}
    >
      <Link
        to="/"
        className={cn(
          'mb-3 flex items-center gap-3 px-2 pt-4 text-sm font-medium text-(--black) transition',
        )}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--lightGray)">
          <Home className="h-5 w-5 text-(--black)" aria-hidden />
        </span>
        Back to home
      </Link>

      <nav className="flex flex-col gap-3" aria-label="Agent configuration">
        {SECTIONS.map((section) => {
          const Icon = section.icon
          const open = openSectionId === section.id
          return (
            <div key={section.id} className={itemShell}>
              <button
                type="button"
                onClick={() => onToggleSection(section.id)}
                className="flex w-full items-center gap-3 px-2 py-2 text-left text-sm font-medium text-(--black) transition hover:bg-(--background)"
                aria-expanded={open}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--black)">
                  <Icon className="h-5 w-5 text-(--white)" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 truncate">{section.label}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-(--muted) opacity-80 transition-transform',
                    open && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
              {open && (
                <div className="border-t border-(--border) bg-(--lightGray) px-3 py-3 text-xs leading-relaxed text-(--grayish)">
                  Configure {section.label.toLowerCase()} for this agent. Connect your tools and
                  preferences here.
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
