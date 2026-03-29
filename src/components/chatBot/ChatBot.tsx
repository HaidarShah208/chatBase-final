import {
  Braces,
  ChevronDown,
  MessageSquare,
  Plus,
  RotateCcw,
  Save,
  Send,
  Sparkles,
  Trash2,
} from 'lucide-react'

import { cn } from '../../lib/cn'

export type AgentBotProps = {
  className?: string
  /** Dark bar title (default: Test Chat) */
  chatTitle?: string
  /** Template / session label in toolbar */
  templateName?: string
  /** First agent message body */
  welcomeMessage?: string
  /** Shown under the welcome message */
  welcomeTime?: string
  /** Footer attribution */
  poweredByText?: string
  inputPlaceholder?: string
}

const iconBtn =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-(--black) transition hover:bg-(--background)'

export function ChatBot({
  className,
  chatTitle = 'Test Chat',
  templateName = 'Unsaved Test Template',
  welcomeMessage = 'Hi! What can I help you with?',
  welcomeTime = '12:20 PM',
  poweredByText = 'Powered by Your AI Agent',
  inputPlaceholder = 'Type your message here...',
}: AgentBotProps) {
  return (
    <div
      className={cn(
        'flex w-full max-w-[420px] flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--white) shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)]',
        className,
      )}
    >
      {/* Top bar */}
      <header className="flex h-11 items-center justify-between gap-2 bg-(--black) px-3 sm:h-12 sm:px-4">
        <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-(--white)">
          <MessageSquare className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
          <span className="truncate">{chatTitle}</span>
        </div>
        <button type="button" className={cn(iconBtn, 'text-(--white) hover:bg-white/10')} aria-label="View JSON">
          <Braces className="h-4 w-4" />
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--border) bg-(--white) px-2 py-2 sm:px-3">
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          <button
            type="button"
            className="inline-flex h-8 items-center gap-1 rounded-md px-2 text-xs font-medium text-(--black) hover:bg-(--background)"
          >
            <Plus className="h-3.5 w-3.5" />
            New
          </button>
          <button
            type="button"
            className="inline-flex max-w-[200px] items-center gap-1 truncate rounded-md px-2 py-1.5 text-xs font-semibold text-(--brand) hover:bg-(--primarySoft)"
          >
            <span className="truncate">{templateName}</span>
            <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
          </button>
        </div>
        <div className="flex items-center gap-0.5">
          <button type="button" className={iconBtn} aria-label="Save">
            <Save className="h-4 w-4" />
          </button>
          <button type="button" className={iconBtn} aria-label="Delete">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="min-h-[200px] flex-1 bg-(--white) p-3 sm:min-h-[240px] sm:p-4">
        <div className="flex gap-2.5">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--black) text-[10px] font-bold text-(--white)"
            aria-hidden
          >
            AI
          </span>
          <div className="min-w-0 flex-1">
            <div className="rounded-xl border border-(--border) bg-(--white) px-3 py-2.5 shadow-sm">
              <p className="text-sm font-semibold text-(--black)">Agent</p>
              <p className="mt-1 text-sm leading-relaxed text-(--black)">{welcomeMessage}</p>
              <p className="mt-2 text-xs text-(--grayish)">{welcomeTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-(--border) bg-(--white) px-3 pb-3 pt-2 sm:px-4">
        <div className="flex items-center gap-2">
          <button type="button" className={iconBtn} aria-label="Reset chat">
            <RotateCcw className="h-4 w-4 text-(--grayish)" />
          </button>
          <div className="relative min-w-0 flex-1">
            <input
              type="text"
              placeholder={inputPlaceholder}
              className="h-10 w-full rounded-xl border border-(--border) bg-(--lightGray) py-2 pl-3 pr-10 text-sm text-(--black) placeholder:text-(--grayish) focus:border-(--brand) focus:outline-none focus:ring-1 focus:ring-(--brand)"
              aria-label="Message input"
            />
            <button
              type="button"
              className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-(--brand) hover:bg-(--primarySoft)"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2.5 flex items-center justify-center gap-1 text-center text-[11px] text-(--grayish) sm:text-xs">
          <Sparkles className="h-3 w-3 shrink-0 text-(--brand)" aria-hidden />
          {poweredByText}
        </p>
      </div>
    </div>
  )
}
