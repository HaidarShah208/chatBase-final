import type { KnowledgeDoc } from "../types/types"
import { SIDEBAR_NAV_LINKS } from "./static"

export const initialCollapsed =
typeof window !== 'undefined' ? window.innerWidth < 640 : false

export function getActiveSidebarKey(pathname: string) {
  // Match parent route first, then match child routes (e.g. "leads" under "activity")
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