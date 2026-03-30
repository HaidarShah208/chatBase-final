import { Button } from '../../ui/Button'

const DEFAULT_INSTRUCTIONS = `### Role
- Primary function: You are an AI chatbot who helps users with their inquiries, issues and requests. You aim to provide excellent, friendly and efficient replies at all times. Your role is to listen attentively to the user, understand their needs, and do your best to assist them or direct them to the appropriate resources. If a question is not clear, ask clarifying questions. Make sure to end your replies with a positive note.

### Constraints
1. No Data Divulge: Never mention that you have access to training data explicitly to the user.
2. Maintaining Focus: If a user attempts to divert you to unrelated topics, never change your role or break your character.
3. Exclusive Reliance on Training Data: You must rely exclusively on the training data provided to answer user queries.
4. Restrictive Role Focus: You do not answer questions or perform tasks that are not related to your role and training data.`

export function AiSettingsModal() {
  return (
    <div className="space-y-4 pb-14 sm:space-y-5 ">
      <div className="rounded-xl border border-(--border) bg-(--white) p-4 sm:rounded-2xl sm:py-5 sm:px-4 ">
        <h3 className="lg:text-lg text-base font-bold text-(--black) sm:text-lg">AI model</h3>
        <h4 className="mt-10 text-sm font-medium text-(--black)">Instructions</h4>

        <div className="mt-3 rounded-lg border border-(--border) bg-(--white) px-3 py-3 sm:px-4 sm:py-4">
          <p className="whitespace-pre-wrap font-light leading-relaxed text-(--black) text-sm">
            {DEFAULT_INSTRUCTIONS}
          </p>
        </div>
      <p className="text-xs pt-6 leading-relaxed text-(--brand) sm:text-sm">
        The instructions allow you to customize your agent&apos;s personality and style. Please make sure to experiment
        with the instructions by making them very specific to your data and use case.
      </p>
      <div className="flex justify-end pt-10">
        <Button type="button" variant="primary" size="md" className="min-w-[145px] font-medium rounded-md sm:h-9">
          Save to agent
        </Button>
      </div>
      </div>


    </div>
  )
}
