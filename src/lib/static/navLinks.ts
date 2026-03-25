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

import type { KnowledgeDoc, SidebarNavItem } from '../../types/types'

export const SIDEBAR_NAV_LINKS: SidebarNavItem[] = [
  {
    key: 'agents',
    label: 'Agent',
    iconSrc: agents,
    activeIconSrc: activeAgents,
  },
  {
    key: 'knowledge',
    label: 'Knowledge base',
    iconSrc: knowledge,
    activeIconSrc: activeKnowledge,
  },
  {
    key: 'chat',
    label: 'Chat History',
    iconSrc: chatHistory,
    activeIconSrc: activeHistory,
  },
  {
    key: 'activity',
    label: 'Activity',
    iconSrc: activity,
    activeIconSrc: activeActivity,
    children: [{ key: 'activity-child', label: 'Activity' }],
  },
  {
    key: 'analytics',
    label: 'Analytics',
    iconSrc: analysis,
    activeIconSrc: activeAnalysis,
  },
  {
    key: 'notifications',
    label: 'Notifications',
    iconSrc: notification,
    activeIconSrc: activeNotification,
  },
]

export const SIDEBAR_FOOTER_LINKS = [
  { key: 'settings', label: 'Settings' },
  { key: 'logout', label: 'Logout' },
] as const


export const initialCollapsed =
typeof window !== 'undefined' ? window.innerWidth < 640 : false

export const DOCS: KnowledgeDoc[] = [
  {
    id: 'know_d3of',
    title: 'TEST 2',
    uploadedBy: 'You',
    uploadedAt: '03/13/2026 12:06',
    attachments: [
      {
        fileName: 'Gemini_Generated_Image_by7t2mby7t2mby7t1 (1).png',
        fileSize: '1.5 MB',
      },
      {
        fileName: 'Gemini_Generated_Image_by7t2mby7t2mby7t1 (1).png',
        fileSize: '1.5 MB',
      },
    ],
  },
]