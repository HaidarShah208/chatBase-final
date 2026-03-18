import { useMemo, useState } from 'react'

import { AgentCard } from '../../components/common/AgentCard'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { cn } from '../../lib/cn'

type Agent = {
  id: string
  name: string
  editedAt: string
}

const AGENTS: Agent[] = Array.from({ length: 12 }).map((_, idx) => ({
  id: String(idx + 1),
  name: 'Real State Agent',
  editedAt: '03/02/2026, 10:52',
}))

export function AgentsPage() {
  const [state, setState] = useState({ query: '' })

  const agents = useMemo(() => {
    const q = state.query.trim().toLowerCase()
    if (!q) return AGENTS
    return AGENTS.filter((a) => a.name.toLowerCase().includes(q))
  }, [state.query])

  return (
    <div className="rounded-(--radius) bg-transparent">
      <header className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--black) text-(--background)">
            <span className="text-sm font-black">□</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-(--black)">Agents</h1>
        </div>

        <Button size="md" variant="primary">
          + New AI agent
        </Button>
      </header>

      <div className="rounded-(--radius) border border-(--border) bg-(--white) p-4">
        <Input
          value={state.query}
          onChange={(e) => setState((p) => ({ ...p, query: e.target.value }))}
          placeholder="Search"
          aria-label="Search agents"
          className="mb-4"
          leftIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5 21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
        />

        <div
          className={cn(
            'grid gap-4',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
          )}
        >
          {agents.map((a) => (
            <AgentCard key={a.id} name={a.name} editedAt={a.editedAt} />
          ))}
        </div>
      </div>
    </div>
  )
}

