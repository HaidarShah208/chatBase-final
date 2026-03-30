import { Database, Mail, MessageSquare, Plug, Puzzle, Settings, Shield, TriangleAlert, Webhook, Zap } from "lucide-react"
import type { AnalyticsGraphsData, KnowledgeDoc, NotificationItem, NotificationPreference, Section } from "../types/types"
import { SIDEBAR_NAV_LINKS } from "./static"
import bot from '../assets/bot.svg'
import message from '../assets/message.svg'
import agent from '../assets/bot.svg'
import envalop from '../assets/envalop.svg'
import wallet from '../assets/wallet.svg'


export const initialCollapsed =
typeof window !== 'undefined' ? window.innerWidth < 640 : false

export function getActiveSidebarKey(pathname: string) {
  for (const item of SIDEBAR_NAV_LINKS) {
    if (item.path) {
      if (item.path === '/') {
        if (pathname === '/') return item.key
      } else if (pathname.startsWith(item.path)) {
        return item.key
      }
    }

    if (item.children?.length) {
      for (const child of item.children) {
        if (!child.path) continue
        if (child.path === '/') {
          if (pathname === '/') return child.key
        } else if (pathname.startsWith(child.path)) {
          return child.key
        }
      }
    }
  }

  return 'agents'
}

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

function mulberry32(seed: number) {
  let t = seed
  return () => {
    t += 0x6d2b79f5
    let x = Math.imul(t ^ (t >>> 15), 1 | t)
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x)
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

export function makeAnalyticsData(dateFrom: string, _dateTo: string, seed: number): AnalyticsGraphsData {
  const rand = mulberry32(seed)
  const anchor = dateFrom ? new Date(dateFrom + 'T00:00:00') : new Date()
  const year = anchor.getFullYear()
  const month = anchor.getMonth()
  const monthShort = anchor.toLocaleString('en-US', { month: 'short' })
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Keep full odd-date x-axis labels, but show one actual bar value.
  const selectedDayRaw = Math.max(1, Math.min(daysInMonth, anchor.getDate()))
  const oddDays = Array.from({ length: daysInMonth })
    .map((_, idx) => idx + 1)
    .filter((day) => day % 2 === 1)
  const selectedDay =
    selectedDayRaw % 2 === 1
      ? selectedDayRaw
      : selectedDayRaw === daysInMonth
        ? selectedDayRaw - 1
        : selectedDayRaw + 1

  const usageHistory = oddDays.map((day) => ({
    label: `${monthShort} ${day}`,
    value: day === selectedDay ? Math.round((0.45 + rand() * 0.45) * 100) / 100 : 0,
  }))

  const circularTopRight = [
    {
      icon: <Zap className="h-4 w-4 text-(--brand)" />,
      percent: 75,
      fraction: '1 / 2',
      label: 'Credits used',
    },
    {
      icon: <Zap className="h-4 w-4 text-(--brand)" />,
      percent: 50,
      fraction: '1 / 2',
      label: 'Credits used',
    },
  ]

  const creditsUsedPerAgent = [
    { name: 'Testing agent', value: 80 + Math.round(rand() * 40) },
    // { name: 'Testing agent', value: 40 + Math.round(rand() * 40) },
  ]

  return { usageHistory, circularTopRight, creditsUsedPerAgent }
}

export const CHAT_THREADS = [
  { id: 't1', title: 'test', ago: '1 day ago', messages: 2, active: true },
  { id: 't2', title: 'what is the font family to use?', ago: '13 days ago', messages: 8, active: false },
]

export   const threadDetails = {
    t1: {
      source: 'Playground',
      userMessage: 'test',
      userAgo: '1 day ago',
      assistantText:
        "It seems like you're testing the system! If you have any specific questions or need assistance, feel free to ask. I'm here to help!",
      assistantTag: '# agent',
      assistantAgo: '1 day ago',
    },
    t2: {
      source: 'Playground',
      userMessage: 'what is the font family to use?',
      userAgo: '13 days ago',
      assistantText:
        "Use a clear, modern sans-serif stack for readability and consistency. A good default is Inter with fallbacks like 'Segoe UI', Roboto, and Arial.",
      assistantTag: '# design',
      assistantAgo: '13 days ago',
    },
  }

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: 'You received daily leads report by email',
    ago: '56m ago',
    unread: true,
    icon: <Mail className="h-5 w-5 text-(--white)" />,
  },
  {
    id: 'n2',
    title: 'You received daily conversations report by email',
    ago: '1h ago',
    unread: true,
    icon: <img src={message} className="h-4.5 w-4.5 text-(--white)" />,
  },
  {
    id: 'n3',
    title: 'Your AI agent is currently offline',
    ago: '1h ago',
    icon: <img src={bot} className="h-5 w-5 text-(--white)" />,
  },
  {
    id: 'n4',
    title: 'CRM sync failed. Please check your integration',
    ago: '3h ago',
    icon: <Plug className="h-5 w-5 text-(--white)" />,
  },
  {
    id: 'n5',
    title: 'Your usage has reached 80% of the monthly limit',
    ago: '16h ago',
    icon: <TriangleAlert className="h-5 w-5 text-(--white)" />,
  },
  {
    id: 'n6',
    title: 'New device login detected on your account',
    ago: '20h ago',
    icon: <Shield className="h-5 w-5 text-(--white)" />,
  },
]


export const SETTINGS_TABS = [
  { key: 'general', label: 'General' },
  { key: 'plans', label: 'Plans' },
  { key: 'billing', label: 'Billing' },
  { key: 'notifications', label: 'Notifications' },
] as const

export const NOTIFICATION_ITEMS: NotificationPreference[] = [
  {
    key: 'leads',
    title: 'Leads',
    description: 'Receive email with daily leads',
    icon: <img src={envalop} alt="" />,
    iconBg: 'bg-[#2B7FFF]',
    enabled: true,
  },
  {
    key: 'conversations',
    title: 'Conversations',
    description: 'Receive email with daily conversations',
    icon: <img src={message} className="w-7 h-7"  alt="" />,
    iconBg: 'bg-[#00C950]',
    enabled: false,
  },
  {
    key: 'agent',
    title: 'Agent',
    description: 'Notify when agent goes offline',
    icon: <img src={agent} className="w-7 h-7" alt="" />,
    iconBg: 'bg-[#AD46FF]',
    enabled: true,
  },
  {
    key: 'integration',
    title: 'Integration',
    description: 'Notify when CRM sync fails',
    icon: <Plug className="h-7 w-7 text-(--white)" />,
    iconBg: 'bg-[#FF6900]',
    enabled: false,
  },
  {
    key: 'usage',
    title: 'Usage & Billing',
    description: 'Notify when usage reaches 80%',
    icon: <img src={wallet} alt="" />,
    iconBg: 'bg-[#F6339A]',
    enabled: true,
  },
  {
    key: 'system',
    title: 'System',
    description: 'Notify when login from a new device occurs',
    icon: <Shield className="h-5 w-5 text-(--white)" />,
    iconBg: 'bg-[#615FFF]',
    enabled: true,
  },
]

export const billingHistoryHeaders = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    align: 'left' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
  {
    key: 'created',
    label: 'Created',
    align: 'center' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
  {
    key: 'amount',
    label: 'Amount',
    align: 'center' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
  {
    key: 'status',
    label: 'Status',
    align: 'right' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
]

export const SECTIONS: Section[] = [
  { id: 'actions', label: 'Actions/ Functions', icon: Puzzle },
  { id: 'chat', label: 'Chat Settings', icon: MessageSquare },
  { id: 'knowledge', label: 'Knowledge Base', icon: Database },
  { id: 'webhook', label: 'Webhook Settings', icon: Webhook },
  { id: 'mcps', label: 'MCPs', icon: Puzzle },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export const COLUMN_TEXT_ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const satisfies Record<'left' | 'center' | 'right', string>

export const billingMethodHeaders = [
  {
    key: 'brand',
    label: 'Brand',
    align: 'left' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
  {
    key: 'lastFour',
    label: 'Number (Last 4)',
    align: 'center' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
  {
    key: 'exp',
    label: 'Exp. Date',
    align: 'right' as const,
    className: 'text-(--grayish) font-medium normal-case !tracking-normal',
  },
]