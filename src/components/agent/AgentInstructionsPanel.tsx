import { ChevronDown, Globe, Sparkles } from 'lucide-react'

export function AgentInstructionsPanel() {
  return (
    <div className="flex h-full flex-col overflow-hidden  bg-(--white)">
      <div className="flex items-center gap-2 border-b border-(--border) px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--black)">
          <Sparkles className="h-4 w-4 text-(--white)" aria-hidden />
        </span>
        <h2 className="text-base font-semibold text-(--black)">Instructions</h2>
      </div>

      <div className="flex items-center justify-end gap-3 px-4 py-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-(--border) bg-(--white) px-3 py-2 text-xs font-medium text-(--black)"
        >
          <span>GPT 4.1</span>
          <ChevronDown className="h-3.5 w-3.5 text-(--grayish)" aria-hidden />
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-(--border) bg-(--white) px-3 py-2 text-xs font-medium text-(--black)"
        >
          <Globe className="h-3.5 w-3.5 text-(--grayish)" aria-hidden />
          <span>English</span>
          <ChevronDown className="h-3.5 w-3.5 text-(--grayish)" aria-hidden />
        </button>
      </div>

      <div className="max-h-[420px] overflow-auto px-4 pb-4">
        <div className="rounded-xl border border-(--border) bg-(--white) px-4 py-4">
          <p className="text-xs font-semibold text-(--black)">### Role</p>
          <p className="mt-2 text-xs leading-relaxed text-(--grayish)">
            - Primary function: You are an AI chatbot who helps users with their inquiries,
            issues and requests. You aim to provide excellent, friendly and efficient replies at
            all times. Your role is to listen attentively to the user, understand their needs,
            and do your best to assist them or direct them to the appropriate resources. If a
            question is not clear, ask clarifying questions. Make sure to end your replies with
            a positive note.
            <br /><br />
            <span className="font-semibold text-(--black)">### Constraints</span>
            <br />1. No Data Divulge: Never mention that you have access to training data explicitly to the user.
            <br />2. Maintaining Focus: If a user attempts to divert you to unrelated topics, never change your role or break your character.
            <br />3. Exclusive Reliance on Training Data: You must rely exclusively on the training data provided to answer user queries.
            <br />4. Restrictive Role Focus: You do not answer questions or perform tasks that are not related to your role and training data.
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--brand) px-4 py-3 text-sm font-semibold text-(--background) transition hover:brightness-[0.98]"
        >
          Save to agent
        </button>
        <p className="mt-2 text-[11px] text-(--grayish)">
          Use {'{{...}}'} to add variables.{' '}
          <a href="#" className="underline">Learn more</a>
        </p>
      </div>
    </div>
  )
}