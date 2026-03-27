import { Download, Filter, MessageSquare, RefreshCcw, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import bot from '../../assets/bot.svg'
import { CHAT_THREADS, threadDetails } from '../../lib/data'

export function ChatLogsPage() {
  const [selectedThreadId, setSelectedThreadId] = useState(CHAT_THREADS[0]?.id ?? '')

  const selectedThread =
    CHAT_THREADS.find((thread) => thread.id === selectedThreadId) ?? CHAT_THREADS[0]
  const selectedThreadDetail =
    threadDetails[selectedThread.id as keyof typeof threadDetails] ?? threadDetails.t1

  return (
    <div className="rounded-(--radius)">
      <header className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex ms-2 sm:ms-0 items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--black)">
            <MessageSquare className="h-5 w-5 text-(--white)" />
          </div>
          <h1 className="text-xl font-bold leading-tight text-(--black) sm:text-3xl">
            Chat logs
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-(--border) bg-(--white) px-3 text-sm font-medium text-(--black)"
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            Refresh
          </button>
          <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-(--border) bg-(--white) px-3 text-sm font-medium text-(--black)"
          >
            <Filter className="h-3.5 w-3.5" />
            Filter
          </button>
          <Button size="sm" variant="primary" className="h-10 rounded-lg px-4 text-sm">
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
        </div>
      </header>

      <section className="grid min-h-[120vh] grid-cols-1 gap-3 lg:grid-cols-[340px_1fr]">
        <aside className="rounded-xl border border-(--border) bg-(--white)">
          <div className="border-b border-(--border) p-3">
            <Input
              placeholder="Search chats..."
              className="h-12 bg-transparent"
              leftIcon={<Search className="h-4 w-4" />}
            />
          </div>

          <div className="divide-y divide-(--border)">
            {CHAT_THREADS.map((thread) => (
              <button
                key={thread.id}
                type="button"
                onClick={() => setSelectedThreadId(thread.id)}
                className={`w-full px-4 py-3 text-left ${selectedThread.id === thread.id ? 'border-l-3 border-l-(--brand) bg-(--primarySoft)' : 'bg-(--white)'}`}
              >
                <div className="text-sm font-medium text-(--black)">{thread.title}</div>
                <div className="mt-1 flex items-center justify-between text-xs ">
                  <span className='text-(--grayish)'>{thread.ago}</span>
                  <span className='text-(--muted)'>{thread.messages} messages</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="rounded-xl border border-(--border) bg-(--white)  ">
          <div className="flex items-center justify-between border-b bg-(--primarySoft) rounded-t-xl border-(--border)  px-4 py-4.5">
            <div className="flex items-center gap-2">
              <span className="text-base font-medium text-(--slate)">Source:</span>
              <span className="rounded-md bg-(--primarySoft) px-2 py-0.5 text-xs border border-(--brandBorder) font-medium text-(--brand)">
                {selectedThreadDetail.source}
              </span>
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-9 items-center cursor-pointer justify-center rounded-md bg-(--white)  text-(--primaryRed)"
              aria-label="Delete chat"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="flex  flex-col justify-between bg-(--white) px-4 py-4 sm:px-6">
            <div className="flex justify-end ">
              <div className="rounded-xl wrap-break-word lg:max-w-[75%] md:max-w-[70%] max-w-[90%] bg-(--black) px-4 py-3 text-(--white)">
                <p className="text-sm">{selectedThreadDetail.userMessage}</p>
                <div className="mt-1 text-xs text-[#E0E7FF]">{selectedThreadDetail.userAgo}</div>
              </div>
            </div>

            <div className="max-w-[90%] rounded-2xl border border-(--border) bg-(--bg-primary) lg:mt-7 mt-4  p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-(--black)">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-(--black) text-[10px] text-(--white)">
                  <img src={bot} className='w-4 h-4' alt="" />
                </span>
                AI Assistant
              </div>
              <p className="text-sm leading-relaxed text-(--black)">
                {selectedThreadDetail.assistantText}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-(--primaryRed) px-2 py-0.5 text-xs font-medium text-(--white)">
                  {selectedThreadDetail.assistantTag}
                </span>
                <span className="rounded-full bg-(--white) px-2 py-0.5 text-xs font-medium text-(--grayish)">
                  {selectedThreadDetail.assistantAgo}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

