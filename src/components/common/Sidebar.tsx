import { useState } from 'react'
import { ChevronDown, LogOut, Settings } from 'lucide-react'
import leaf from '../../assets/dashboard/leaf.png'
import user from '../../assets/dashboard/user.png'
import arrowUp from '../../assets/dashboard/arrowUp.png'
import toggler from '../../assets/sidebar/toggler.png'
import collapseLogo from '../../assets/sidebar/collapseLogo.png'
import brandName from '../../assets/sidebar/brandName.png'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import type { SidebarState } from '../../types/types'
import { SIDEBAR_FOOTER_LINKS, SIDEBAR_NAV_LINKS } from '../../lib/static/navLinks'

export function Sidebar() {
  const [state, setState] = useState<SidebarState>({
    activeKey: 'agents',
    activityOpen: false,
    isCollapsed: false,
  })

  return (
    <aside
      className={cn(
        'relative flex min-h-screen shrink-0 flex-col bg-(--white) transition-all duration-300 ease-in-out',
        state.isCollapsed ? 'w-[74px]' : 'w-[272px]',
      )}
    >
      <button
        type="button"
        onClick={() => setState((p) => ({ ...p, isCollapsed: !p.isCollapsed, activityOpen: p.isCollapsed ? p.activityOpen : false }))}
        className="absolute -right-4 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--background) shadow-sm"
        aria-label={state.isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <img
          src={toggler}
          alt=""
          className={cn('h-4 w-4 transition-transform duration-300', state.isCollapsed ? 'rotate-180' : 'rotate-0')}
        />
      </button>

      <div
        className={cn(
          'flex shrink-0 items-center justify-center px-4 py-5 transition-all duration-300',
        )}
      >
        <img
          src={state.isCollapsed ? collapseLogo : brandName}
          alt="Stackup Solutions"
          className={cn(
            'transition-all duration-300 object-contain',
            state.isCollapsed ? 'h-8 w-8' : 'h-10 w-[160px]',
          )}
        />
      </div>

      <nav
        className={cn(
          'mt-3 min-h-0 flex-1 overflow-y-auto space-y-2 text-sm font-medium transition-all duration-300',
          state.isCollapsed ? 'px-2' : 'px-2',
        )}
      >
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
                  state.isCollapsed && 'justify-center gap-0 px-2',
                    isActive
                      ? 'bg-(--primaryColor) text-(--brand)'
                      : 'text-(--black)',
                  )}
                >
                  <img
                    src={isActive && item.activeIconSrc ? item.activeIconSrc : item.iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                  />
                  <span
                    className={cn(
                      'truncate transition-all duration-300',
                      state.isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100',
                    )}
                  >
                    {item.label}
                  </span>

                  {isActivity && !state.isCollapsed ? (
                    <ChevronDown
                      className={cn(
                        'ml-auto h-4 w-4 text-(--muted) transition-transform',
                        state.activityOpen ? 'rotate-180' : 'rotate-0',
                      )}
                    />
                  ) : null}
                </button>

                {isActivity && !state.isCollapsed && state.activityOpen && item.children?.length ? (
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
        {!state.isCollapsed ? (
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
        ) : null}

        <div className={cn('border-t border-(--border) py-6', state.isCollapsed ? 'mx-2 px-0' : 'mt-6 mx-3')}>
          <div className={cn('flex items-center rounded-xl px-2 py-2', state.isCollapsed ? 'justify-center gap-0' : 'gap-2')}>
          <img src={user} alt="user" />
            <div className={cn('min-w-0 transition-all duration-300', state.isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100')}>
              <div className="truncate text-base font-medium text-(--black)">
                Stackup Solutions
              </div>
            </div>
          </div>
          <div className="mt-2 grid gap-1">
            {SIDEBAR_FOOTER_LINKS.map(({ key, label }) => (
              <button
                key={label}
                type="button"
                className={cn(
                  'flex items-center rounded-xl py-2 text-left text-base font-medium text-(--black) hover:border hover:border-(--border)',
                  state.isCollapsed ? 'justify-center px-2' : 'gap-2 px-3',
                )}
              >
                {key === 'logout' ? (
                  <LogOut
                    className={cn('h-[18px] w-[18px] text-(--black)', 'rotate-180')}
                  />
                ) : (
                  <Settings className={cn('h-[18px] w-[18px] text-(--black)')} />
                )}
                <span className={cn('transition-all duration-300', state.isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100')}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
