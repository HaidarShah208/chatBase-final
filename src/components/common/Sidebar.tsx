import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import activity from '../../assets/sidebar/activity.svg'
import knowledge from '../../assets/sidebar/knowledge.svg'
import agents from '../../assets/sidebar/agents.svg'
import chatHistory from '../../assets/sidebar/chatHistory.svg'
import notification from '../../assets/sidebar/notification.svg'
import analysis from '../../assets/sidebar/analysis.svg'
import brandName from '../../assets/sidebar/brandName.png'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

type NavItem = {
  key: 'agents' | 'knowledge' | 'chat' | 'activity' | 'analytics' | 'notifications'
  label: string
  iconSrc: string
  children?: Array<{ key: string; label: string }>
}

const navItems: NavItem[] = [
  { key: 'agents', label: 'Agent', iconSrc: agents },
  { key: 'knowledge', label: 'Knowledge base', iconSrc: knowledge },
  { key: 'chat', label: 'Chat History', iconSrc: chatHistory },
  {
    key: 'activity',
    label: 'Activity',
    iconSrc: activity,
    children: [{ key: 'activity-child', label: 'Activity' }],
  },
  { key: 'analytics', label: 'Analytics', iconSrc: analysis },
  { key: 'notifications', label: 'Notifications', iconSrc: notification },
]

export function Sidebar() {
  const [state, setState] = useState({
    activeKey: 'agents' as NavItem['key'],
    activityOpen: false,
  })

  return (
    <aside className="flex w-[272px] shrink-0 flex-col bg-(--white)">
      <div className="flex items-center justify-center px-4 py-5">
        <img src={brandName} alt="Stackup Solutions" className="h-10 w-[160px] " />
      </div>

      <nav className="px-2 text-sm font-medium mt-3 pb-3">
        {navItems.map((item) => {
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
                  'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition',
                  isActive ? 'bg-(--primaryColor) text-(--brand)' : 'text-(--black) hover:bg-(--background)',
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

      <div className="mt-auto border-t border-(--border) px-3 py-3">
        <div className="flex items-center gap-2 rounded-xl px-2 py-2">
          <div className="h-8 w-8 rounded-full border border-(--border) bg-(--background)" />
          <div className="min-w-0">
            <div className="truncate text-base font-medium text-(--black)">Stackup Solutions</div>
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
    </aside>
  )
}

