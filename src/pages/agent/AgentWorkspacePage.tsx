import { useState } from 'react'
import { PanelLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { AgentWorkspaceHeader } from '../../components/agent/AgentWorkspaceHeader'
import { AgentWorkspaceSidebar } from '../../components/agent/AgentWorkspaceSidebar'
import { AgentInstructionsPanel } from '../../components/agent/AgentInstructionsPanel'
import { ChatBot } from '../../components/chatBot/ChatBot'

export function AgentWorkspacePage() {
  const { agentId = '' } = useParams<{ agentId: string }>()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [instructionsOpen, setInstructionsOpen] = useState(false)
  const [openSectionId, setOpenSectionId] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setOpenSectionId((current) => (current === id ? null : id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AgentWorkspaceHeader agentId={agentId} />

      <div className="flex min-h-0 flex-1 bg-(--background)">
        <AgentWorkspaceSidebar
          openSectionId={openSectionId}
          onToggleSection={toggleSection}
          collapsed={!sidebarOpen}
        />

        <div className="min-w-0 flex-1 bg-(--background) px-2 sm:px-3">
          <div
            className="relative flex min-h-[calc(100vh-188px)] w-full overflow-hidden rounded-xl border border-[#D7E7F5]"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 100%, #4CB5FF 0%, #89CCF8 34%, #A9DBFA 55%, #CDE9FB 78%, #E9F5FE 100%)',
            }}
          >
            <button
              type="button"
              onClick={() => setInstructionsOpen((o) => !o)}
              className="absolute left-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--white) text-(--black) shadow-sm transition hover:bg-(--background)"
              aria-label={instructionsOpen ? 'Hide instructions' : 'Show instructions'}
              aria-pressed={instructionsOpen}
            >
              <PanelLeft className="h-4 w-4" />
            </button>

            <div
              className="h-full shrink-0 overflow-hidden bg-(--white) transition-all duration-300 ease-in-out"
              style={{
                width: instructionsOpen ? '50%' : '0%',
                opacity: instructionsOpen ? 1 : 0,
              }}
            >
              <div className="h-full w-full">
                <AgentInstructionsPanel />
              </div>
            </div>

            <div
              className="flex flex-1 items-center justify-center py-16 transition-all duration-300 ease-in-out"
              style={{
                paddingLeft: instructionsOpen ? '2rem' : '0',
                paddingRight: '2rem',
              }}
            >
              <ChatBot
                className="shadow-[0_16px_48px_-12px_rgba(15,23,42,0.2)]"
                templateName="Unsaved Test Template"
                poweredByText="Powered by Your AI Agent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}