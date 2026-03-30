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
import sparkles from '../../assets/sparkles.svg'
import type { AgentBotProps } from '../../types/types'


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
        'flex w-[420px]  h-full max-h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--white) shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)]',
        className,
      )}
    >
      <header className="flex h-11 items-center justify-between gap-2 bg-(--black) px-3 sm:h-12 sm:px-4">
        <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-(--white)">
          <MessageSquare className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
          <span className="truncate">{chatTitle}</span>
        </div>
        <button type="button" className={cn(iconBtn, 'text-(--white) hover:bg-white/10')} aria-label="View JSON">
          <Braces className="h-4 w-4" />
        </button>
      </header>
      <div className="flex flex-col flex-1 min-h-0 bg-linear-to-b from-[#F8FAFC80] to-(--white)">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-(--border)  px-2 py-2 sm:px-3">
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
        <div className="flex items-center ">
          <button type="button" className={iconBtn} aria-label="Save">
            <Save className="h-4 w-4" />
          </button>
          <button type="button" className={iconBtn} aria-label="Delete">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto  p-4">
        <div className="max-w-[70%] rounded-2xl border border-(--border) bg-(--white) px-5 py-4 shadow-sm">
          <div className="flex items-center gap-1">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--black)"
              aria-hidden
            >
              <img src={sparkles} alt="" className="h-4.5 w-4.5" />
            </span>
            <p className="text-sm font-semibold leading-none text-(--black)">Agent</p>
          </div>
          <p className="pt-3 pb-1 text-sm  text-(--black)">{welcomeMessage}</p>
          <p className="text-[10px] leading-none text-(--muted)">{welcomeTime}</p>
        </div>
      </div>

      <div className="border-t border-(--border) bg-(--white) px-3 pb-3 pt-2 ">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={cn(
              iconBtn,
              'h-12 w-12 rounded-md cursor-pointer border border-(--border) bg-(--lightGray) hover:bg-(--background)',
            )}
            aria-label="Reset chat"
          >
            <RotateCcw className="h-5 w-5 text-(--grayish)" />
          </button>
          <div className="relative min-w-0 flex-1">
            <input
              type="text"
              placeholder={inputPlaceholder}
              className="h-12 w-full rounded-md border border-(--border) bg-(--lightGray) py-2 pl-3 pr-10 text-sm text-(--black) placeholder:text-(--grayish)   focus:outline-none focus:ring-0"
              aria-label="Message input"
            />
            <button
              type="button"
              className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-(--black) hover:bg-(--primarySoft)"
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="pt-2.5 flex items-center justify-center gap-1 text-center text-[10px] text-(--grayish) ">
          <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
          {poweredByText}
        </p>
      </div>
    </div>
    </div>
  )
}
