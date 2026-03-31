import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Modal } from '../../ui/Modal'
import { GeneralSettingsModalContent } from '../modals/GeneralSettingsModalContent'
import { AgentSettingsNavList } from './AgentSettingsNavList'
import type { AgentSettingsNavItem } from './agentSettingsNav'
import { AiSettingsModal } from '../modals/AiSettingsModal'
import { ChatInterfaceModal } from '../modals/ChatInterfaceModal'

export function AgentWorkspaceSettingsPanel() {
  const { agentId = '' } = useParams<{ agentId: string }>()
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [openModal, setOpenModal] = useState<'general' | 'ai' | 'chat' | null>(null)

  function handleSelect(item: AgentSettingsNavItem) {
    setActiveKey(item.key)
    if (item.modal) setOpenModal(item.modal)
  }

  function handleModalClose(which: 'general' | 'ai' | 'chat', open: boolean) {
    if (!open) {
      setOpenModal((prev) => (prev === which ? null : prev))
      setActiveKey(null)
    }
  }

  return (
    <div className="bg-(--white) px-3 pb-20">
      <div className="bg-(--white) ps-8 sm:ps-10">
        <AgentSettingsNavList activeKey={activeKey} onSelect={handleSelect} />
      </div>

      <Modal
        open={openModal === 'general'}
        onOpenChange={(open) => handleModalClose('general', open)}
        title="General"
        className="max-w-[800px] max-h-[90vh]"
      >
        <GeneralSettingsModalContent agentId={agentId} />
      </Modal>

      <Modal
        open={openModal === 'ai'}
        onOpenChange={(open) => handleModalClose('ai', open)}
        title="AI"
        className="max-h-[90vh] w-[95vw] max-w-[800px]"
      >
        <AiSettingsModal />
      </Modal>

      <Modal
        open={openModal === 'chat'}
        onOpenChange={(open) => handleModalClose('chat', open)}
        title="Chat interface"
        className="max-h-[90vh] w-[95vw] max-w-[1200px]"
      >
        <ChatInterfaceModal />
      </Modal>
    </div>
  )
}
