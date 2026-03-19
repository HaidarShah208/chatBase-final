import activity from '../../assets/sidebar/activity.svg'
import knowledge from '../../assets/sidebar/knowledge.svg'
import agents from '../../assets/sidebar/agents.svg'
import chatHistory from '../../assets/sidebar/chatHistory.svg'
import notification from '../../assets/sidebar/notification.svg'
import analysis from '../../assets/sidebar/analysis.svg'

import type { SidebarNavItem } from '../../types/types'

export const SIDEBAR_NAV_LINKS: SidebarNavItem[] = [
  { key: 'agents', label: 'Agent', iconSrc: agents },
  { key: 'knowledge', label: 'Knowledge base', iconSrc: knowledge },
  { key: 'chat', label: 'Chat History', iconSrc: chatHistory },
  {
    key: 'activity',
    label: 'Activity',
    iconSrc: activity,
    children: [{ key: 'activity-child', label: 'Activity' }],
  },
  { key: 'analytics', label: 'Analytics', iconSrc: analysis },
  { key: 'notifications', label: 'Notifications', iconSrc: notification },
]
