import { useState } from 'react'
import { ChevronDown, LogOut, Settings } from 'lucide-react'
import leaf from '../../assets/dashboard/leaf.png'
import user from '../../assets/dashboard/user.png'
import arrowUp from '../../assets/dashboard/arrowUp.png'
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
            <div className="inline-flex items-center gap-2 rounded-sm bg-(--secondaryGray) px-3 py-1 text-sm font-medium text-(--darkGray)">
            <img src={leaf} alt="leaf" />
              Free Trial
            </div>
            <div className="mt-4 text-sm font-medium text-(--black)">Remaining: $9.87</div>
            <div className="mt-2 text-sm font-medium text-(--black)">Concurrency Used: 0/20</div>
            <div className="mt-3">
              <Button size="sm" className="w-[140px] justify-center gap-2 bg-(--black) rounded-lg" variant="primary">
                <img src={arrowUp} alt="" className="h-3 w-3" />
                Add Payment
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border) mt-6 mx-3 py-6">
          <div className="flex items-center gap-2 rounded-xl px-2 py-2">
          <img src={user} alt="user" />
            <div className="min-w-0">
              <div className="truncate text-base font-medium text-(--black)">
                Stackup Solutions
              </div>
            </div>
          </div>
          <div className="mt-2 grid gap-1">
            {[
              { label: 'Settings', icon: Settings },
              { label: 'Logout', icon: LogOut },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-left text-base font-medium text-(--black) hover:border hover:border-(--border)"
              >
                <Icon className="h-[18px] w-[18px] text-(--black)" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
