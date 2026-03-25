import type { PropsWithChildren } from 'react'

import { Sidebar } from '../components/common/Sidebar'

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-(--background)">
      <div className="mx-auto flex min-h-screen gap-0 sm:gap-2">
        <Sidebar />

        <main className="min-w-0 flex-1 px-3 py-4 sm:px-5 sm:py-6">
          {children}
        </main>
      </div>
    </div>
  )
}

