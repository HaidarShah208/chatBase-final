import type { KnowledgeDoc } from "../types/types"
import { SIDEBAR_NAV_LINKS } from "./static"

export const initialCollapsed =
typeof window !== 'undefined' ? window.innerWidth < 640 : false

export function getActiveSidebarKey(pathname: string) {
  const match = SIDEBAR_NAV_LINKS.find((l) => {
    if (!l.path) return false
    if (l.path === '/') return pathname === '/'
    return pathname.startsWith(l.path)
  })
  return match?.key ?? 'agents'
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