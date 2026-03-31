import type { JSX, ReactNode } from "react"
import type { SETTINGS_TABS } from "../lib/data"
import type { LucideIcon } from "lucide-react"

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
  path?: string
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
  activeKey: string
  activityOpen: boolean
  isCollapsed: boolean
}


export type AgentCardProps = {
  name: string
  editedAt: string
  className?: string
  onSelect?: () => void
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

type DataTableHeader = {
  key: string
  label: string
  className?: string
  cellClassName?: string
  align?: 'left' | 'center' | 'right'
}

type DataTableRow = Record<string, ReactNode>

export type DataTableProps = {
  headers: DataTableHeader[]
  rows: DataTableRow[]
  rowKey?: (row: DataTableRow, index: number) => string
  emptyState?: ReactNode
  emptyColSpan?: number
  variant?: 'table' | 'cards'
  className?: string
  tableClassName?: string
  headerClassName?: string
  bodyClassName?: string
  cardsListClassName?: string
}

export type AnalyticsGraphsData = {
  usageHistory: Array<{ label: string; value: number }>
  circularTopRight: Array<{
    icon: ReactNode
    percent: number 
    fraction: string 
    label: string 
  }>
  creditsUsedPerAgent: Array<{ name: string; value: number }>
}

export   type Lead = {
  id: string
  company: string
  status: string
  lastContacted: string  
  assigned: string
}

export type UsagePoint = {
  label: string
  value: number
}

export type DonutDatum = {
  name: string
  value: number
}

export type DateRange = {
  from: string // YYYY-MM-DD
  to: string // YYYY-MM-DD
}

export type DateRangePickerProps = {
  value: DateRange
  onChange: (next: DateRange) => void
  className?: string
  triggerClassName?: string
}

export type StatusOption = {
  value: string
  label: string
}

export type StatusFilterDropdownProps = {
  value: string
  options: StatusOption[]
  onChange: (next: string) => void
  leftIcon?: ReactNode
  className?: string
  triggerClassName?: string
}

export type NotificationItem = {
  id: string
  title: string
  ago: string
  unread?: boolean
  icon: JSX.Element
}

export type AgentWorkspaceMetaEntry = {
  id: string
  value: string
  label?: string
  valueCompact?: boolean
  action:
    | { type: 'copy'; ariaLabel: string }
    | { type: 'icon'; src: string; ariaLabel: string }
}

export type AgentWorkspaceHeaderProps = {
  agentId: string
  className?: string
}

export type Section = {
  id: string
  label: string
  icon: LucideIcon
}

export type GeneralSettingsModalContentProps = {
  agentId: string
}

export type AgentWorkspaceSidebarProps = {
  openSectionId: string | null
  onToggleSection: (id: string) => void
  collapsed?: boolean
  className?: string
}

export type AgentWorkspaceSectionContentProps = {
  sectionId: string
  sectionLabel: string
}

export type AgentBotProps = {
  className?: string
  chatTitle?: string
  templateName?: string
  welcomeMessage?: string
  welcomeTime?: string
  poweredByText?: string
  inputPlaceholder?: string
}

type Align = 'left' | 'center' | 'right'

export type FooterToolbarProps = {
  onBold: () => void
  onItalic: () => void
  onUnderline: () => void
  onLink: () => void
  onAlignChange: (align: Align) => void
  align: Align
  onUndo: () => void
  onRedo: () => void
  canUndo: boolean
  canRedo: boolean
}

export type SettingsTabKey = (typeof SETTINGS_TABS)[number]['key']

export type NotificationPreference = {
  key: string
  title: string
  description: string
  icon: ReactNode
  iconBg: string
  enabled: boolean
}

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = {
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  className?: string
}