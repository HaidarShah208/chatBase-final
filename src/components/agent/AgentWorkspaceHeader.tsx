import { History, Rocket } from 'lucide-react'

import agentImg from '../../assets/dashboard/agent.png'
import copyIcon from '../../assets/agentWorkSpace/copy.svg'
import infoIcon from '../../assets/agentWorkSpace/info.svg'
import analysis from '../../assets/agentWorkSpace/analysis.svg'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import type { AgentWorkspaceHeaderProps, AgentWorkspaceMetaEntry } from '../../types/types'

const META = {
  agentId: 'agt_8f2c1b9e4d7a3m6k5p0q',
  retellLlmId: 'llm_rt_4n8x2v1w9j5h3k7c',
  pricing: '$0.015/msg',
  tokenRange: '65–295 tokens',
} as const

const WORKSPACE_META_ENTRIES: AgentWorkspaceMetaEntry[] = [
  {
    id: 'agent-id',
    label: 'Agent ID:',
    value: META.agentId,
    valueCompact: true,
    action: { type: 'copy', ariaLabel: 'Copy Agent ID' },
  },
  {
    id: 'retell-llm',
    label: 'Retell LLM ID:',
    value: META.retellLlmId,
    valueCompact: true,
    action: { type: 'copy', ariaLabel: 'Copy Retell LLM ID' },
  },
  {
    id: 'pricing',
    value: META.pricing,
    action: { type: 'icon', src: analysis, ariaLabel: 'About pricing' },
  },
  {
    id: 'token-range',
    value: META.tokenRange,
    action: { type: 'icon', src: infoIcon, ariaLabel: 'About token range' },
  },
]

const metaRowClass =
  'inline-flex max-w-full items-center gap-1 text-[11px] text-(--black) sm:text-xs'
const metaLabelClass = 'shrink-0 font-medium text-(--black)'
const metaValueCopyClass = 'truncate text-(--black) text-xs'
const metaValuePlainClass = 'text-(--black)'
const metaActionBtnClass =
  'shrink-0 rounded p-0.5 text-(--black) hover:bg-(--background) hover:text-(--black)'

export function AgentWorkspaceHeader({ className }: AgentWorkspaceHeaderProps) {
  return (
    <header
      className={cn(
        'flex flex-col gap-4 border-b border-(--border) bg-(--background) px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-5',
        className,
      )}
    >
      <div className="min-w-0 flex-1 ">
        <div className="flex flex-wrap items-start gap-3">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-(--black)">
            <img src={agentImg} alt="" className="h-7 w-6 object-contain brightness-0 invert" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg font-bold tracking-tight text-(--black) md:text-xl lg:text-3xl">
              Single-Prompt Agent
            </h1>
             
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              {WORKSPACE_META_ENTRIES.map((entry) => (
                <span key={entry.id} className={metaRowClass}>
                  {entry.label != null ? (
                    <span className={metaLabelClass}>{entry.label}</span>
                  ) : null}
                  <span
                    className={entry.valueCompact ? metaValueCopyClass : metaValuePlainClass}
                  >
                    {entry.value}
                  </span>
                  {entry.action.type === 'copy' ? (
                    <button
                      type="button"
                      className={metaActionBtnClass}
                      aria-label={entry.action.ariaLabel}
                      onClick={() => navigator.clipboard?.writeText(entry.value)}
                    >
                      <img src={copyIcon} className="h-3 w-3" alt="" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={metaActionBtnClass}
                      aria-label={entry.action.ariaLabel}
                    >
                      <img src={entry.action.src} className="h-3 w-3" alt="" />
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 self-stretch sm:self-auto sm:pt-1">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--white) text-(--black) transition hover:bg-(--background)"
          aria-label="History"
        >
          <History className="h-4 w-4" />
        </button>
        <Button
          type="button"
          variant="primary"
          className="h-10 w-auto min-w-[120px] gap-2 px-4 text-sm font-semibold"
        >
          <Rocket className="h-4 w-4" />
          Publish
        </Button>
      </div>
    </header>
  )
}
