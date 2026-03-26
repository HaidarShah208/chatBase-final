import activity from '../../assets/sidebar/activity.svg'
import knowledge from '../../assets/sidebar/knowledge.svg'
import agents from '../../assets/sidebar/agents.svg'
import chatHistory from '../../assets/sidebar/chatHistory.svg'
import notification from '../../assets/sidebar/notification.svg'
import analysis from '../../assets/sidebar/analysis.svg'
import activeActivity from '../../assets/sidebar/activeActivity.png'
import activeAgents from '../../assets/sidebar/activeAgents.png'
import activeAnalysis from '../../assets/sidebar/activeAnalysis.png'
import activeKnowledge from '../../assets/sidebar/activeKnowledge.png'
import activeNotification from '../../assets/sidebar/activeNotification.png'
import activeHistory from '../../assets/sidebar/activeHistory.png'

import type { SidebarNavItem } from '../../types/types'

export const SIDEBAR_NAV_LINKS: SidebarNavItem[] = [
  {
    key: 'agents',
    label: 'Agent',
    iconSrc: agents,
    activeIconSrc: activeAgents,
    path: '/',
  },
  {
    key: 'knowledge',
    label: 'Knowledge base',
    iconSrc: knowledge,
    activeIconSrc: activeKnowledge,
    path: '/knowledge',
  },
  {
    key: 'chat',
    label: 'Chat History',
    iconSrc: chatHistory,
    activeIconSrc: activeHistory,
    path: '/chat-history',
  },
  {
    key: 'activity',
    label: 'Activity',
    iconSrc: activity,
    activeIconSrc: activeActivity,
    path: '/',
    children: [{ key: 'activity-child', label: 'Activity' }],
  },
  {
    key: 'analytics',
    label: 'Analytics',
    iconSrc: analysis,
    activeIconSrc: activeAnalysis,
    path: '/',
  },
  {
    key: 'notifications',
    label: 'Notifications',
    iconSrc: notification,
    activeIconSrc: activeNotification,
    path: '/',
  },
]

export const SIDEBAR_FOOTER_LINKS = [
  { key: 'settings', label: 'Settings' },
  { key: 'logout', label: 'Logout' },
] as const


