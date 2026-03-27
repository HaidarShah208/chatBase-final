import { Zap } from "lucide-react"
import type { AnalyticsGraphsData, KnowledgeDoc } from "../types/types"
import { SIDEBAR_NAV_LINKS } from "./static"

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