import { useState } from 'react'
import { PanelLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { AgentWorkspaceHeader } from '../../components/agent/AgentWorkspaceHeader'
import { AgentWorkspaceSidebar } from '../../components/agent/AgentWorkspaceSidebar'
import { ChatBot } from '../../components/chatBot/ChatBot'

export function AgentWorkspacePage() {
  const { agentId = '' } = useParams<{ agentId: string }>()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [openSectionId, setOpenSectionId] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setOpenSectionId((current) => (current === id ? null : id))
  }

  return (
    <div className="flex min-h-screen flex-col bg-(--white)">
      <AgentWorkspaceHeader agentId={agentId} />

      <div className="flex min-h-0 flex-1">
        <AgentWorkspaceSidebar
          openSectionId={openSectionId}
          onToggleSection={toggleSection}
          collapsed={!sidebarOpen}
        />

        <div
          className="relative flex min-h-[calc(100vh-180px)] min-w-0 flex-1 flex-col"
          style={{
            background: 'linear-gradient(180deg, var(--secondaryBlue) 0%, var(--white) 42%, var(--white) 100%)',
          }}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            className="absolute left-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--white) text-(--black) shadow-sm transition hover:bg-(--background)"
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-pressed={sidebarOpen}
          >
            <PanelLeft className="h-4 w-4" />
          </button>

          <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-8">
            <ChatBot
              className="max-w-[420px] shadow-[0_16px_48px_-12px_rgba(15,23,42,0.2)]"
              templateName="Unsaved Test Template"
              poweredByText="Powered by Your AI Agent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
