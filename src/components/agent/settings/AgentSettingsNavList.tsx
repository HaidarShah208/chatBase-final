import { cn } from '../../../lib/cn'
import { AGENT_SETTINGS_NAV, type AgentSettingsNavItem } from './agentSettingsNav'

type AgentSettingsNavListProps = {
  activeKey: string | null
  onSelect: (item: AgentSettingsNavItem) => void
}

export function AgentSettingsNavList({ activeKey, onSelect }: AgentSettingsNavListProps) {
  return (
    <nav aria-label="Agent settings">
      <ul className="space-y-3">
        {AGENT_SETTINGS_NAV.map((item) => {
          const active = activeKey === item.key
          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className={cn(
                  'flex w-full cursor-pointer items-center justify-between gap-2 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-(--brand) focus-visible:ring-offset-2',
                  active ? 'font-medium text-(--brand)' : 'font-normal text-(--black)',
                )}
                aria-pressed={active}
              >
                <span>{item.label}</span>
                {active ? (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-(--brand)" aria-hidden />
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
