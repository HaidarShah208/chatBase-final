export type AgentSettingsNavKey = 'general' | 'ai' | 'chat' | 'domains'

export type AgentSettingsNavItem = {
  key: AgentSettingsNavKey
  label: string
  /** Opens this modal when the row is clicked; null = row is selectable only (future pages) */
  modal: 'general' | 'ai' | null
}

export const AGENT_SETTINGS_NAV: AgentSettingsNavItem[] = [
  { key: 'general', label: 'General', modal: 'general' },
  { key: 'ai', label: 'AI', modal: 'ai' },
  { key: 'chat', label: 'Chat Interface', modal: null },
  { key: 'domains', label: 'Custom Domains', modal: null },
]
