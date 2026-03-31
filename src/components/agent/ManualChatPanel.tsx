import { MessageSquare, Sparkle, } from 'lucide-react'

export function ManualChatPanel() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-(--white)">
      <div className="mx-auto flex w-full max-w-[420px] flex-col gap-4 lg:mx-0">
        <div className="flex flex-col min-h-[220px] items-center rounded-2xl border border-(--border) bg-(--white) px-6 py-7 text-center shadow-sm">
          <span className="flex h-13 w-13 items-center justify-center rounded-full bg-(--background)">
            <MessageSquare className="h-7 w-7 text-(--grayish)" aria-hidden />
          </span>
          <h2 className="mt-4 text-sm font-medium text-(--black)">Manual Chat</h2>
          <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
            Manually Chat with the agent
          </p>
        </div>

        <div className="flex flex-col items-center rounded-2xl border border-(--border) bg-(--white) px-5 py-6 shadow-sm">
          <div className="w-full max-w-[360px] text-left">
            <p className="text-sm text-(--black)">User Prompt</p>
            <input
              className="mt-3 w-full rounded-lg border border-(--border) bg-(--white) px-3 py-3 text-xs text-(--black) outline-none placeholder:text-(--grayish)"
              placeholder="You are a customer who wants to return a package..."
            />
            <button
              type="button"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-(--brand) px-4 text-xs font-semibold text-(--white) shadow-sm transition hover:brightness-[0.98]"
            >
              <Sparkle className="mr-1.5 h-3.5 w-3.5" aria-hidden />
              Simulate Conversation
            </button>
          </div>

          <span className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-(--background)">
            <Sparkle className="h-5 w-5 text-(--black)" aria-hidden />
          </span>
          <p className="mt-3 text-sm font-medium text-(--black)">AI Simulated Chat</p>
          <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
            Use prompt to simulate user responses with your agent.
          </p>
        </div>

        
      </div>
    </div>
  )
}

