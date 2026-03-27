import { useState } from 'react'
import { NOTIFICATION_ITEMS } from '../../../lib/data'

export function NotificationsTab() {
  const [items, setItems] = useState(NOTIFICATION_ITEMS)

  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-(--black) md:text-xl lg:text-3xl">
        Notification Preferences
      </h2>
      <p className="mt-1 text-xs text-(--black) md:text-sm">
        Choose which notifications you want to receive
      </p>

      <div className="mt-7 space-y-3">
        {items.map((item) => {
          return (
            <div
              key={item.key}
              className="flex items-center justify-between gap-3 rounded-xl border border-(--border) bg-(--white) px-3 py-3 sm:py-4s sm:px-5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
                >
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <div className="truncate lg:text-lg text-sm font-semibold text-(--black)">{item.title}</div>
                  <div className=" truncate text-xs lg:text-base text-(--darkGray)">
                    {item.description}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setItems((prev) =>
                    prev.map((it) =>
                      it.key === item.key ? { ...it, enabled: !it.enabled } : it,
                    ),
                  )
                }
                className={`relative h-6 w-10 rounded-full transition ${
                  item.enabled ? 'bg-(--brand)' : 'bg-(--border)'
                }`}
                aria-label={`${item.title} notifications`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-(--white) transition ${
                    item.enabled ? 'left-[18px]' : 'left-0.5'
                  }`}
                />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

