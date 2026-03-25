export type Agent = {
    id: string
    name: string
    editedAt: string
  }

  export type CardProps = React.HTMLAttributes<HTMLDivElement>
 
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode
}

export type SidebarNavKey =
  | 'agents'
  | 'knowledge'
  | 'chat'
  | 'activity'
  | 'analytics'
  | 'notifications'

export type SidebarNavChild = {
  key: string
  label: string
}

export type SidebarNavItem = {
  key: SidebarNavKey
  label: string
  iconSrc: string
  activeIconSrc?: string
  path?: string
  children?: SidebarNavChild[]
}

export type SidebarState = {
  // Can be either a parent nav key (e.g. "agents") or a child key (e.g. "activity-child")
  activeKey: string
  activityOpen: boolean
  isCollapsed: boolean
}


export type AgentCardProps = {
  name: string
  editedAt: string
  className?: string
}

export type KnowledgeDoc = {
  id: string
  title: string
  uploadedBy: string
  uploadedAt: string
  attachments: Array<{
    fileName: string
    fileSize: string
  }>
}