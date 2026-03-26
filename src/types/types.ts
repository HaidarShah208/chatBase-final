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

export type DocSource = 'web' | 'files' | 'text' | 'qa' | null

export type CreateKnowledgeBaseModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export type DropdownItem = {
  key: string
  label: string
  description?: string
  icon?: React.ReactNode
  onSelect?: () => void
}

export type DropdownProps = {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: 'start' | 'center' | 'end'
}

export type PaginationProps = {
  page: number
  totalPages: number
  totalItems: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  className?: string
}