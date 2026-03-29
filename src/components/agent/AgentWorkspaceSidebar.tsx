import type { LucideIcon } from 'lucide-react'
import {
  ChevronDown,
  Database,
  Home,
  MessageSquare,
  Puzzle,
  Settings,
  Webhook,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '../../lib/cn'

type Section = {
  id: string
  label: string
  icon: LucideIcon
}

const SECTIONS: Section[] = [
  { id: 'actions', label: 'Actions/ Functions', icon: Puzzle },
  { id: 'chat', label: 'Chat Settings', icon: MessageSquare },
  { id: 'knowledge', label: 'Knowledge Base', icon: Database },
  { id: 'webhook', label: 'Webhook Settings', icon: Webhook },
  { id: 'mcps', label: 'MCPs', icon: Puzzle },
  { id: 'settings', label: 'Settings', icon: Settings },
]

type AgentWorkspaceSidebarProps = {
  openSectionId: string | null
  onToggleSection: (id: string) => void
  collapsed?: boolean
  className?: string
}

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
        'flex w-[min(100%,280px)] shrink-0 flex-col border-r border-(--border) bg-(--white) px-3 py-4 lg:w-72',
        className,
      )}
    >
      <Link
        to="/"
        className="mb-3 flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-(--black) transition hover:bg-(--background)"
      >
        <Home className="h-4 w-4 shrink-0 text-(--grayish)" />
        Back to home
      </Link>

      <nav className="flex flex-col gap-2" aria-label="Agent configuration">
        {SECTIONS.map((section) => {
          const Icon = section.icon
          const open = openSectionId === section.id
          return (
            <div
              key={section.id}
              className="overflow-hidden rounded-xl border border-(--border) bg-(--white)"
            >
              <button
                type="button"
                onClick={() => onToggleSection(section.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm font-medium text-(--black) transition hover:bg-(--background)"
                aria-expanded={open}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-(--grayish)" aria-hidden />
                  <span className="truncate">{section.label}</span>
                </span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-(--grayish) transition-transform',
                    open && 'rotate-180',
                  )}
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
