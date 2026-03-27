import {
  Bell,
  Check,
  Trash2,
} from 'lucide-react'
import { NOTIFICATIONS } from '../../lib/data'


export function NotificationsPage() {
  return (
    <div className="rounded-(--radius)">
      <header className="mb-7 ms-2 sm:ms-0 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--black)">
          <Bell className="h-5 w-5 text-(--white)" />
        </div>
        <h1 className="text-xl font-bold leading-tight text-(--black) sm:text-3xl">
          Notifications
        </h1>
      </header>

      <section className="rounded-xl min-h-screen border border-(--border) bg-(--white) p-3 sm:p-4">
      <div className="border border-(--border) overflow-hidden rounded-xl">
      <div className="flex flex-col p-3 gap-3 border-b border-(--border) pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-9 rounded-lg bg-(--brand) px-7 text-base font-medium text-(--white)"
            >
              All
            </button>
            <button
              type="button"
              className="h-9 rounded-lg border border-(--border) bg-(--white) px-7 text-base font-medium text-(--black)"
            >
              Unread
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 self-start rounded-md border border-(--border) bg-(--white) px-3 text-base font-medium text-(--black) sm:self-auto"
          >
            <Check className="h-3.5 w-3.5" />
            Mark All Read
          </button>
        </div>

        <div className="mt-3 overflow-hidden">
          {NOTIFICATIONS.map((n, idx) => (
            <div
              key={n.id}
              className={`flex items-center justify-between gap-3 border-b border-(--border) px-3 py-3 last:border-b-0 sm:px-4 ${
                idx < 2 ? 'bg-(--primarySoft)' : 'bg-(--white)'
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--black)">
                  {n.icon}
                </span>
                <div className="min-w-0">
                  <div className="truncate md:text-base text-xs font-semibold text-(--black)">{n.title}</div>
                  <div className="flex items-center gap-1 md:text-sm text-xs text-(--tertiary)">
                    <span>{n.ago}</span>
                    {n.unread ? <span className="h-1.5 w-1.5 rounded-full bg-(--brand)" /> : null}
                  </div>
                </div>
              </div>

              <div className="flex items-center md:gap-3 gap-1 text-(--darkGray)">
                {idx < 2 ? <Check className="h-4.5 w-4.5 text-(--slate)" /> : null}
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-(--background)"
                  aria-label="Delete notification"
                >
                  <Trash2 className="h-4.5 w-4.5 text-(--slate)" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  )
}

