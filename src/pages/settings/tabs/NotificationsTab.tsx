import { Cog } from 'lucide-react'

export function NotificationsTab() {
  return (
    <div className="rounded-xl border border-(--border) p-5">
      <div className="flex items-center gap-2 text-lg font-semibold text-(--black)">
        <Cog className="h-5 w-5" />
        Notifications
      </div>
      <p className="mt-2 text-sm text-(--darkGray)">
        Notification preferences will appear here.
      </p>
    </div>
  )
}

