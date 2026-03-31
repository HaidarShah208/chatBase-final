import { useState } from 'react'
import { Menu, PanelLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { AgentWorkspaceHeader } from '../../components/agent/AgentWorkspaceHeader'
import { AgentWorkspaceSidebar } from '../../components/agent/AgentWorkspaceSidebar'
import { AgentInstructionsPanel } from '../../components/agent/AgentInstructionsPanel'
import { ManualChatPanel } from '../../components/agent/ManualChatPanel'
import { ChatBot } from '../../components/chatBot/ChatBot'
import { cn } from '../../lib/cn'

export function AgentWorkspacePage() {
  const { agentId = '' } = useParams<{ agentId: string }>()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [instructionsOpen, setInstructionsOpen] = useState(false)
  const [showManualChat, setShowManualChat] = useState(false)
  const [openSectionId, setOpenSectionId] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setOpenSectionId((current) => (current === id ? null : id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AgentWorkspaceHeader agentId={agentId} />

      <div className="flex min-h-0 flex-1 bg-(--background)">
        <div className="hidden md:flex">
          <AgentWorkspaceSidebar
            openSectionId={openSectionId}
            onToggleSection={toggleSection}
            collapsed={false}
          />
        </div>

        {sidebarOpen ? (
          <div
            className="fixed inset-0 z-40 flex md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="h-full w-[280px] max-w-[80%] bg-(--white) shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AgentWorkspaceSidebar
                openSectionId={openSectionId}
                onToggleSection={toggleSection}
                collapsed={false}
              />
            </div>
            <div className="flex-1 bg-black/40" />
          </div>
        ) : null}

        <div className="min-w-0 flex-1 bg-(--background) px-2 sm:px-3">
          <div
            className="relative flex h-[calc(100vh)] w-full overflow-hidden rounded-xl border border-[#D7E7F5]"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 100%, #4CB5FF 0%, #89CCF8 34%, #A9DBFA 55%, #CDE9FB 78%, #E9F5FE 100%)',
            }}
          >
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="absolute left-3 top-3 z-30 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--white) text-(--black) shadow-sm transition hover:bg-(--background) md:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setInstructionsOpen((o) => !o)}
              className="absolute md:left-3 right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--white) text-(--black) shadow-sm transition hover:bg-(--background)"
              aria-label={instructionsOpen ? 'Hide instructions' : 'Show instructions'}
              aria-pressed={instructionsOpen}
            >
              <PanelLeft className="h-4 w-4" />
            </button>

            <div
              className={cn(
                'h-full flex shrink-0 overflow-hidden bg-(--white) transition-all duration-300 ease-in-out',
                instructionsOpen ? 'w-full lg:w-[52%] opacity-100' : 'w-0 opacity-0',
              )}
            >
              <div className="flex h-full w-full">
                <AgentInstructionsPanel />
              </div>
            </div>

            <div
              className={cn(
                'flex flex-1 items-stretch justify-center py-0 transition-all',
                instructionsOpen ? 'hidden lg:flex' : 'flex',
              )}
            >
              {showManualChat ? (
                <ManualChatPanel />
              ) : (
                <div className="mx-auto flex items-center py-10 lg:mx-0">
                  <ChatBot
                    className="shadow-[0_16px_48px_-12px_rgba(15,23,42,0.2)]"
                    templateName="Unsaved Test Template"
                    poweredByText="Powered by Your AI Agent"
                    onNewChatClick={() => {
                      setInstructionsOpen(true)
                      setShowManualChat(true)
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}