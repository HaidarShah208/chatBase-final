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

export function makeAnalyticsData(dateFrom: string, dateTo: string, seed: number): AnalyticsGraphsData {
  const rand = mulberry32(seed)

  const from = new Date(dateFrom + 'T00:00:00')
  const to = new Date(dateTo + 'T00:00:00')
  const diffDays = Math.max(0, Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)))

  const labels = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(from.getTime() + i * 24 * 60 * 60 * 1000)
    const m = d.toLocaleString('en-US', { month: 'short' })
    return `${m} ${d.getDate()}`
  })

  const usageHistory = labels.map((label, idx) => {
    const base = 0.35 + Math.min(0.45, diffDays * 0.03)
    const variance = (rand() - 0.5) * 0.35
    const v = Math.max(0.05, Math.min(0.95, base + variance + idx * 0.02))
    return { label, value: Math.round(v * 100) / 100 }
  })

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
    { name: 'Testing agent', value: 40 + Math.round(rand() * 40) },
  ]

  return { usageHistory, circularTopRight, creditsUsedPerAgent }
}