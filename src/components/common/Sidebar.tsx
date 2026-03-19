import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import brandName from '../../assets/sidebar/brandName.png'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import type { SidebarState } from '../../types/types'
import { SIDEBAR_NAV_LINKS } from '../../lib/static/navLinks'

export function Sidebar() {
  const [state, setState] = useState<SidebarState>({
    activeKey: 'agents',
    activityOpen: false,
  })

  return (
    <aside className="flex min-h-screen w-[272px] shrink-0 flex-col bg-(--white)">
      <div className="flex shrink-0 items-center justify-center px-4 py-5">
        <img src={brandName} alt="Stackup Solutions" className="h-10 w-[160px]" />
      </div>

      <nav className="mt-3 min-h-0  flex-1 overflow-y-auto px-2 mb-52 space-y-2 text-sm font-medium">
          {SIDEBAR_NAV_LINKS.map((item) => {
            const isActive = state.activeKey === item.key
            const isActivity = item.key === 'activity'

            return (
              <div key={item.key}>
                <button
                  type="button"
                  onClick={() => {
                    setState((p) => ({
                      ...p,
                      activeKey: item.key,
                      activityOpen: isActivity ? !p.activityOpen : p.activityOpen,
                    }))
                  }}
                  className={cn(
                    'flex w-full items-center cursor-pointer gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition',
                    isActive
                      ? 'bg-(--primaryColor) text-(--brand)'
                      : 'text-(--black)',
                  )}
                >
                  <img
                    src={item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                  />
                  <span className="truncate">{item.label}</span>

                  {isActivity ? (
                    <ChevronDown
                      className={cn(
                        'ml-auto h-4 w-4 text-(--muted) transition-transform',
                        state.activityOpen ? 'rotate-180' : 'rotate-0',
                      )}
                    />
                  ) : null}
                </button>

                {isActivity && state.activityOpen && item.children?.length ? (
                  <div className="mt-1 space-y-1 pl-7">
                    {item.children.map((child) => (
                      <button
                        key={child.key}
                        type="button"
                        onClick={() => {
                          setState((p) => ({ ...p, activeKey: item.key }))
                        }}
                        className={cn(
                          'flex w-full items-center rounded-lg px-3 py-2 text-left text-[13px] transition',
                          isActive
                            ? 'bg-(--primaryColor) text-(--brand)'
                            : 'text-(--black) hover:bg-(--background)',
                        )}
                      >
                        <span className="truncate">{child.label}</span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
      </nav>

      <div className="mt-auto flex shrink-0 flex-col">
        <div className="px-3 pb-3">
          <div className="rounded-lg border border-(--border) bg-(--white) p-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) px-2 py-1 text-[11px] font-semibold text-(--black)">
              <span className="h-2 w-2 rounded-full bg-(--brand)" />
              Free Trial
            </div>
            <div className="mt-2 text-xs text-(--muted)">Remaining: $9.87</div>
            <div className="mt-1 text-xs text-(--muted)">Concurrency Used: 0/20</div>
            <div className="mt-3">
              <Button size="sm" className="w-full" variant="primary">
                Add Payment
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border) px-3 py-3">
          <div className="flex items-center gap-2 rounded-xl px-2 py-2">
            <div className="h-8 w-8 rounded-full border border-(--border) bg-(--background)" />
            <div className="min-w-0">
              <div className="truncate text-base font-medium text-(--black)">
                Stackup Solutions
              </div>
            </div>
          </div>
          <div className="mt-2 grid gap-1">
            {['Settings', 'Logout'].map((label) => (
              <button
                key={label}
                type="button"
                className="rounded-xl px-3 py-2 text-left text-base font-medium text-(--black) hover:border hover:border-(--border)"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
