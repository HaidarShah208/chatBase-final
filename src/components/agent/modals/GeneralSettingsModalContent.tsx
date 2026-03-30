import { useState } from 'react'
import { AlertTriangle, Copy } from 'lucide-react'

import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { cn } from '../../../lib/cn'
import type { GeneralSettingsModalContentProps } from '../../../types/types'



export function GeneralSettingsModalContent({ agentId }: GeneralSettingsModalContentProps) {
  const [agentName, setAgentName] = useState('Testing agent')
  const [copied, setCopied] = useState(false)

  const displayId = agentId 

  async function copyId() {
    try {
      await navigator.clipboard.writeText(displayId)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="space-y-6 pb-2">
      <section
        className={cn(
          'rounded-2xl border border-(--border) bg-(--white) p-4 sm:p-5',
        )}
      >
        <h3 className="lg:text-lg md:text-base text-sm font-bold text-(--black)">Agent details</h3>

        <div className="mt-4 space-y-4">
          <div>
            <div className="text-sm font-medium text-(--black)">Agent ID</div>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="min-w-0 flex-1 text-sm text-(--black)">
                <span className="block ps-4 truncate font-mono text-sm">{displayId}</span>
              </div>
              <button
                type="button"
                onClick={() => void copyId()}
                className="inline-flex h-9 w-9 cursor-pointer shrink-0 items-center justify-center rounded-md border border-(--border) bg-(--white) text-(--black) transition hover:bg-(--background)"
                aria-label={copied ? 'Copied' : 'Copy agent ID'}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            {copied && <p className="mt-1 text-xs text-(--brand)">Copied to clipboard</p> }
          </div>

          <div>
            <div className="text-sm font-medium text-(--black)">Size</div>
            <div className="mt-1.5 ps-4 text-sm text-(--black)">643 B</div>
          </div>

          <div>
            <div className="text-xs font-medium text-(--slate)">Name</div>
            <Input
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="mt-1.5 h-11 bg-(--background)"
              placeholder="Agent name"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <Button type="button" variant="primary" size="md" className="min-w-[107px] h-9 rounded-lg">
            Save
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-center text-sm font-semibold uppercase tracking-wide text-(--primaryRed)">
          DANGER ZONE
        </div>

        <div className="space-y-3 rounded-xl border border-[#FFC9C9]  p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-row justify-between">

              <div className="flex items-center gap-1.5 text-sm md:text-lg font-bold text-(--primaryRed)">
                <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
                Delete all conversations
              </div>
              <Button
              type="button"
              variant="primary"
              size="md"
              className="h-9 shrink-0 w-[107px] rounded-lg bg-(--primaryRed) text-white hover:brightness-[0.95] sm:self-center"
            >
              Delete
            </Button>
              </div>
              <p className="pt-3 text-xs leading-relaxed text-(--black) sm:text-sm">
                Once you delete all your conversations, there is no going back. <br /> Please be certain. <br /> All
                the conversations on this agent will be deleted. <span className='font-semibold text-sm'>This action <br /> is not reversible.</span>
              </p>
            </div>
          
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-[#FFC9C9]  p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0 flex-1">
            <div className="flex flex-row justify-between">
              <div className="flex items-center gap-1.5 ext-sm md:text-lg font-bold text-(--primaryRed)">
                <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
                Delete agent
              </div>
              <Button
              type="button"
              variant="primary"
              size="md"
              className="h-9 shrink-0 w-[107px] rounded-lg bg-(--primaryRed) text-white hover:brightness-[0.95] sm:self-center"
            >
              Delete
            </Button>
              </div>

              <p className="pt-3 text-xs leading-relaxed text-(--black) sm:text-sm">
                Once you delete your agent, there is no going back.  Please be certain. <br /> All your uploaded
                data will be deleted.  <span className='font-semibold text-sm'>This action is not reversible.</span>
              </p>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}
