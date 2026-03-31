export type AgentSettingsNavKey = 'general' | 'ai' | 'chat' | 'domains'

export type AgentSettingsNavItem = {
  key: AgentSettingsNavKey
  label: string
  modal: 'general' | 'ai' | 'chat' | null
}

export const AGENT_SETTINGS_NAV: AgentSettingsNavItem[] = [
  { key: 'general', label: 'General', modal: 'general' },
  { key: 'ai', label: 'AI', modal: 'ai' },
  { key: 'chat', label: 'Chat Interface', modal: 'chat' },
  { key: 'domains', label: 'Custom Domains', modal: null },
]
