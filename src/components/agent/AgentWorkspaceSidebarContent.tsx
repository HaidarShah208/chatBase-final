import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  ArrowUpRight,
  Calendar1,
  CalendarSearch,
  MessageCircleX,
  Minus,
  Plus,
  Puzzle,
  Save,
  Settings,
  SquarePen,
  Trash2,
} from 'lucide-react'
import { ActionDropdown } from '../ui/ActionDropdown'
import { Button } from '../ui/Button'
import { InputRange } from '../common/InputRange'
import { Modal } from '../ui/Modal'
import { GeneralSettingsModalContent } from './modals/GeneralSettingsModalContent'
import { McpAddModalContent } from './modals/McpAddModalContent'
import { cn } from '../../lib/cn'
import type { AgentWorkspaceSectionContentProps } from '../../types/types'
import slider from '../../assets/agentWorkSpace/slidder.svg'


export function AgentWorkspaceSectionContent({
  sectionId,
  sectionLabel,
}: AgentWorkspaceSectionContentProps) {
  const [autoCloseEnabled, setAutoCloseEnabled] = useState(false)
  const [inactivityTimeout, setInactivityTimeout] = useState(70)
  const [kbRetrievalOpen, setKbRetrievalOpen] = useState(false)
  const [kbChunks, setKbChunks] = useState(3)
  const [kbSimilarity, setKbSimilarity] = useState(0.6)
  const [webhookTimeout, setWebhookTimeout] = useState(4)
  const [webhookEventsOpen, setWebhookEventsOpen] = useState(false)
  const [webhookEvents, setWebhookEvents] = useState({
    chatStarted: true,
    chatEnded: false,
    chatAnalyzed: false,
  })
  const [mcpModalOpen, setMcpModalOpen] = useState(false)
  const [generalModalOpen, setGeneralModalOpen] = useState(false)
  const [activeSettingsKey, setActiveSettingsKey] = useState<string | null>(null)
  const { agentId = '' } = useParams<{ agentId: string }>()
  const timeoutMin = 1
  const timeoutMax = 120
  const kbChunkMin = 1
  const kbChunkMax = 10
  const webhookTimeoutMin = 1
  const webhookTimeoutMax = 10

  if (sectionId === 'actions') {
    return (
      <div className="border-t border-(--border) bg-(--white) px-3 py-2.5">
        <p className="text-xs leading-relaxed text-(--black)">
          Enable your agent with capabilities such as calendar booking, call termination, etc.
        </p>

        <div className="mt-3 rounded-lg border border-(--border) bg-(--background) px-3 py-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs text-(--black)">
              <Puzzle className="h-4 w-4 text-(--black)" aria-hidden />
              <span>end_call</span>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-(--black) transition hover:bg-(--white)"
                aria-label="Edit action"
              >
                <SquarePen className="h-3.5 w-3.5" aria-hidden />
              </button>
              <button
                type="button"
                className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-(--primaryRed) transition hover:bg-(--white)"
                aria-label="Delete action"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <ActionDropdown.Root>
          <ActionDropdown.Trigger>
            <Button
              type="button"
              variant="outline"
              size="md"
              fullWidth
              className="mt-3 h-9 rounded-md font-medium"
            >
              <Plus className="h-4 w-4" aria-hidden />
              Add
            </Button>
          </ActionDropdown.Trigger>
          <ActionDropdown.Content
            align="start"
            contentClassName="w-full p-2"
            items={[
              {
                key: 'end-chat',
                label: 'End Chat',
                icon: <MessageCircleX className="h-4 w-4" />,
                labelClassName: 'font-normal',
              },
              {
                key: 'check-calendar',
                label: 'Check Calendar Availability (Cal.com)',
                icon: <CalendarSearch className="h-4 w-4" />,
                labelClassName: 'font-normal',
              },
              {
                key: 'book-calendar',
                label: 'Book on the Calendar (Cal.com)',
                icon: <Calendar1 className="h-4 w-4" />,
                labelClassName: 'font-normal',
              },
              {
                key: 'custom-function',
                label: 'Custom Function',
                icon: <img src={slider} alt="" className="h-4 w-4" />,
                labelClassName: 'font-normal',
                itemClassName: 'mt-1 rounded-none border-t border-(--border) pt-2',
              },
            ]}
          />
        </ActionDropdown.Root>
      </div>
    )
  }

  if (sectionId === 'chat') {
    return (
      <div className="border-t border-(--border) bg-(--white) px-3 py-3">
        <h3 className="text-sm font-medium leading-tight text-(--black)">Auto Close Inactive chats</h3>
        <p className="mt-2 text-xs leading-relaxed text-(--grayish)">
          Enable AI to automatically close inactive chats after a set timeout period.
        </p>
        <button
          type="button"
          onClick={() => setAutoCloseEnabled((prev) => !prev)}
          className={`mt-3 inline-flex cursor-pointer h-6 w-11 items-center rounded-full px-1 transition ${
            autoCloseEnabled ? 'bg-(--brand)' : 'bg-(--lightGray)'
          }`}
          aria-label="Toggle auto close inactive chats"
          aria-pressed={autoCloseEnabled}
        >
          <span
            className={`h-4.5 w-5 rounded-full bg-(--white) shadow-sm transition-transform ${
              autoCloseEnabled ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>

        {autoCloseEnabled ? (
          <div className="mt-1">
            <p className="text-sm font-medium leading-none text-(--black)">Inactivity Timeout</p>
            <div className="mt-1 flex items-center gap-3">
              <InputRange
                min={timeoutMin}
                max={timeoutMax}
                value={inactivityTimeout}
                onChange={setInactivityTimeout}
                className="h-1.5 w-full"
                inactiveColor="#B8DDF7"
                ariaLabel="Set inactivity timeout in hours"
              />
              <span className="min-w-[18px] text-xs font-medium text-(--grayish)">
                {inactivityTimeout}hr
              </span>
            </div>
          </div>
        ) : null}
      </div>
    )
  }

  if (sectionId === 'knowledge') {
    return (
      <div className="border-t border-(--border) bg-(--white) px-3 py-3">
        <p className="text-xs leading-relaxed text-(--grayish)">
          Add knowledge base to provide context to the agent.
        </p>

        <ActionDropdown.Root>
          <ActionDropdown.Trigger>
             
            <Button
          type="button"
          variant="outline"
          size="md"
          fullWidth
          onClick={() => setMcpModalOpen(true)}
          className="mt-3 h-9 rounded-md font-medium"
        >
          <Plus className="h-4 w-4" aria-hidden />
          Add
        </Button>
          </ActionDropdown.Trigger>
          <ActionDropdown.Content
            align="start"
            items={[
              {
                key: 'add-knowledge-base',
                label: 'Add Knowledge Base',
                icon: <ArrowUpRight className="h-4 w-4" />,
              },
            ]}
          />
        </ActionDropdown.Root>

        <div className="mt-4 border-t border-(--border) pt-4">
          <p className="text-sm font-medium text-(--black)">Advance Setting</p>
          <ActionDropdown.Root open={kbRetrievalOpen} onOpenChange={setKbRetrievalOpen}>
            <ActionDropdown.Trigger>
              <button
                type="button"
                className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-(--border) bg-(--white) px-3 py-1.5 text-xs font-medium text-(--black)"
              >
                <Settings className="h-4 w-4 text-(--grayish)" aria-hidden />
                Adjust KB Retrieval Chunks and Similarity
              </button>
            </ActionDropdown.Trigger>
            <ActionDropdown.Content align="start" side="bottom" contentClassName="p-0">
              <div className="w-[307px] p-3.5">
                <p className="text-sm font-medium leading-tight text-(--black)">Chunks to retrieve</p>
                <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
                  The max number of chunks to retrieve from the KB, range 1-10
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <InputRange
                    min={kbChunkMin}
                    max={kbChunkMax}
                    value={kbChunks}
                    onChange={setKbChunks}
                    className="h-1.5 w-full"
                    inactiveColor="#B8DDF7"
                    ariaLabel="Set chunks to retrieve"
                  />
                  <span className="min-w-[14px] text-sm font-medium leading-none text-(--black)">{kbChunks}</span>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium leading-tight text-(--black)">Similarity Threshold</p>
                  <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
                    Adjust how strict the system is when matching chunks to the context. A higher
                    setting gives you fewer, but more similar, matches
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg border border-(--border) px-3 py-1">
                  <button
                    type="button"
                    onClick={() => setKbSimilarity((prev) => Math.max(0.1, Number((prev - 0.1).toFixed(2))))}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-(--black) transition hover:bg-(--background)"
                    aria-label="Decrease similarity threshold"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium leading-none text-(--black)">
                    {kbSimilarity.toFixed(2)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setKbSimilarity((prev) => Math.min(1, Number((prev + 0.1).toFixed(2))))}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-(--black) transition hover:bg-(--background)"
                    aria-label="Increase similarity threshold"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setKbRetrievalOpen(false)}
                    className="min-w-[90px] rounded-md"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={() => setKbRetrievalOpen(false)}
                    className="min-w-[90px] rounded-md"
                  >
                    <Save className='w-4 h-4'/>
                    Save
                  </Button>
                </div>
              </div>
            </ActionDropdown.Content>
          </ActionDropdown.Root>
        </div>
      </div>
    )
  }

  if (sectionId === 'webhook') {
    return (
      <div className="border-t border-(--border) bg-(--white) px-3 py-3">
        <div>
          <p className="text-xs font-medium text-(--black)">Agent Level Webhook URL</p>
          <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
            Webhook URL to receive events from Retell. <br />
            <a href="#" className="text-(--brand) underline">
              (Learn more)
            </a>
          </p>

          <div className="mt-3 flex items-center gap-2">
            <input
              type="text"
              value="https://your-webhook-url.com"
              readOnly
              className="h-9 flex-1 rounded-md border border-(--border) bg-(--background) px-3 text-sm text-(--grayish) outline-none"
              aria-label="Webhook URL"
            />
            <Button type="button" variant="outline" size="sm" className="h-10 rounded-xl text-(--grayish) px-4">
              Test
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-(--black)">Webhook Timeout</p>
          <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
            Set the maximum time to wait for a webhook response before timing out.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <InputRange
              min={webhookTimeoutMin}
              max={webhookTimeoutMax}
              value={webhookTimeout}
              onChange={setWebhookTimeout}
              className="h-2 flex-1"
              ariaLabel="Set webhook timeout in seconds"
            />
            <span className="text-sm font-semibold text-(--black)">{webhookTimeout} s</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs font-medium text-(--black)">Webhook Events</p>
          <p className="mt-1 text-xs leading-relaxed text-(--grayish)">
            Choose which events this webhook should receive.
          </p>
          <ActionDropdown.Root open={webhookEventsOpen} onOpenChange={setWebhookEventsOpen}>
            <ActionDropdown.Trigger>
              <Button
                type="button"
                variant="outline"
                size="md"
                fullWidth
                className="mt-3 h-9 rounded-md font-medium"
              >
                <Settings className="h-4 w-4" aria-hidden />
                Set Up
              </Button>
            </ActionDropdown.Trigger>
            <ActionDropdown.Content align="start" side="bottom" contentClassName="w-[340px] p-0">
              <div className="p-4">
                <p className="text-sm font-medium leading-tight text-(--black)">Webhook Events</p>

                <div className="mt-3 space-y-2">
                  <label className="flex items-center gap-2 text-sm text-(--black)">
                    <input
                      type="checkbox"
                      checked={webhookEvents.chatStarted}
                      onChange={(event) =>
                        setWebhookEvents((prev) => ({ ...prev, chatStarted: event.target.checked }))
                      }
                      className="h-4 w-4 rounded border-(--border) accent-(--brand)"
                    />
                    Chat started
                  </label>
                  <label className="flex items-center gap-2 text-sm text-(--black)">
                    <input
                      type="checkbox"
                      checked={webhookEvents.chatEnded}
                      onChange={(event) =>
                        setWebhookEvents((prev) => ({ ...prev, chatEnded: event.target.checked }))
                      }
                      className="h-4 w-4 rounded border-(--border) accent-(--brand)"
                    />
                    Chat ended
                  </label>
                  <label className="flex items-center gap-2 text-sm text-(--black)">
                    <input
                      type="checkbox"
                      checked={webhookEvents.chatAnalyzed}
                      onChange={(event) =>
                        setWebhookEvents((prev) => ({ ...prev, chatAnalyzed: event.target.checked }))
                      }
                      className="h-4 w-4 rounded border-(--border) accent-(--brand)"
                    />
                    Chat analyzed
                  </label>
                </div>

                <div className="mt-5 flex items-center justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setWebhookEventsOpen(false)}
                    className="min-w-[90px] h-9 rounded-md"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={() => setWebhookEventsOpen(false)}
                    className="min-w-[90px] h-9 rounded-md"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </ActionDropdown.Content>
          </ActionDropdown.Root>
        </div>
      </div>
    )
  }

  if (sectionId === 'mcps') {
    return (
      <div className="border-t border-(--border) bg-(--white) px-3 py-3">
        <p className="text-xs leading-relaxed text-(--grayish)">
          Enable your agent with capabilities of MCPs
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          fullWidth
          onClick={() => setMcpModalOpen(true)}
          className="mt-3 h-9 rounded-md font-medium"
        >
          <Plus className="h-4 w-4" aria-hidden />
          Add MCP
        </Button>

        <Modal
          open={mcpModalOpen}
          onOpenChange={setMcpModalOpen}
          title="Add MCP"
          className="max-w-[800px]"
          footer={
            <>
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => setMcpModalOpen(false)}
                className="min-w-[105px] h-9 rounded-md"
              >
                Cancel
              </Button>
              <Button type="button" variant="primary" size="md" className="min-w-[105px] h-9 rounded-md">
                Save
              </Button>
            </>
          }
        >
          <McpAddModalContent />
        </Modal>
      </div>
    )
  }

  if (sectionId === 'settings') {
    return (
      <div className="bg-(--white) px-3 pb-20">
        <div className="bg-(--white) ps-13">
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => {
                setActiveSettingsKey('general')
                setGeneralModalOpen(true)
              }}
              className={cn(
                'flex w-full cursor-pointer items-center justify-between gap-2 text-left text-sm transition focus:outline-none focus-visible:ring-0',
                activeSettingsKey === 'general' ? 'font-medium text-(--brand)' : 'text-(--black)',
              )}
              aria-pressed={activeSettingsKey === 'general'}
            >
              <span className=''>General</span>
              {activeSettingsKey === 'general' ? (
                <span className="h-2 w-2 rounded-full bg-(--brand)" aria-hidden />
              ) : null}
            </button>
            <div className="rounded-lg  text-sm text-(--black)">AI</div>
            <div className="rounded-lg  text-sm text-(--black)">Chat Interface</div>
            <div className="rounded-lg  text-sm text-(--black)">Custom Domains</div>
          </div>
        </div>

        <Modal
          open={generalModalOpen}
          onOpenChange={(open) => {
            setGeneralModalOpen(open)
            if (!open) setActiveSettingsKey(null)
          }}
          title="General"
          className="max-w-[800px] max-h-[90vh] "
        >
          <GeneralSettingsModalContent agentId={agentId} />
        </Modal>
      </div>
    )
  }

  return (
    <div className="border-t border-(--border) bg-(--lightGray) px-3 py-3 text-xs leading-relaxed text-(--grayish)">
      Configure {sectionLabel.toLowerCase()} for this agent. Connect your tools and preferences
      here.
    </div>
  )
}
