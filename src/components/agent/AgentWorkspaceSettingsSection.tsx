import { useState } from 'react'

import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import { AGENT_WORKSPACE_SETTINGS_NAV } from '../../lib/static/agentWorkspaceSettingsNav'
import type { AgentWorkspaceSettingsModalId } from '../../lib/static/agentWorkspaceSettingsNav'
import { GeneralSettingsModalContent } from './modals/GeneralSettingsModalContent'
import { AiSettingsModal } from './modals/AiSettingsModal'

type AgentWorkspaceSettingsSectionProps = {
  agentId: string
}

const SETTINGS_MODAL_CLASS =
  'w-[min(100vw-2rem,640px)] max-h-[90vh] max-w-[calc(100vw-2rem)] sm:max-w-xl'

function SettingsNavRow({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-2 text-left text-sm transition',
        'hover:bg-(--background) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) focus-visible:ring-offset-2',
        active ? 'font-medium text-(--brand)' : 'text-(--black)',
      )}
      aria-pressed={active}
    >
      <span>{label}</span>
      {active ? <span className="h-2 w-2 shrink-0 rounded-full bg-(--brand)" aria-hidden /> : null}
    </button>
  )
}

export function AgentWorkspaceSettingsSection({ agentId }: AgentWorkspaceSettingsSectionProps) {
  const [activeNavKey, setActiveNavKey] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState<AgentWorkspaceSettingsModalId | null>(null)

  function closeModal() {
    setOpenModal(null)
    setActiveNavKey(null)
  }

  return (
    <div className="bg-(--white) px-3 pb-20">
      <div className="bg-(--white) ps-13">
        <nav className="space-y-1" aria-label="Agent settings">
          {AGENT_WORKSPACE_SETTINGS_NAV.map((item) => (
            <SettingsNavRow
              key={item.key}
              label={item.label}
              active={activeNavKey === item.key}
              onClick={() => {
                setActiveNavKey(item.key)
                if (item.modalId) setOpenModal(item.modalId)
                else setOpenModal(null)
              }}
            />
          ))}
        </nav>
      </div>

      <Modal
        open={openModal === 'general'}
        onOpenChange={(open) => {
          if (!open) closeModal()
        }}
        title="General"
        className={SETTINGS_MODAL_CLASS}
      >
        <GeneralSettingsModalContent agentId={agentId} />
      </Modal>

      <Modal
        open={openModal === 'ai'}
        onOpenChange={(open) => {
          if (!open) closeModal()
        }}
        title="AI"
        className={SETTINGS_MODAL_CLASS}
        footer={
          <Button type="button" variant="primary" size="md" className="min-w-[120px] rounded-md">
            Save to agent
          </Button>
        }
      >
        <AiSettingsModal />
      </Modal>
    </div>
  )
}
