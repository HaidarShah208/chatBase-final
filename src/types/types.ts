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
  children?: SidebarNavChild[]
}

export type SidebarState = {
  activeKey: SidebarNavKey
  activityOpen: boolean
  isCollapsed: boolean
}


export type AgentCardProps = {
  name: string
  editedAt: string
  className?: string
}

