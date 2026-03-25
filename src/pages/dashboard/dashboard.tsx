import { useMemo, useState } from 'react'

import { AgentCard } from '../../components/common/AgentCard'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { cn } from '../../lib/cn'
import { Search } from 'lucide-react'
import agent from '../../assets/dashboard/agent.png'
import type { Agent } from '../../types/types'


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
      <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex ms-2 sm:ms-0 items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--black) text-(--background)">
            <img src={agent} alt="" className="h-[34px] w-[28px]" />
          </div>
          <h1 className="text-[28px] font-bold tracking-tight leading-tight text-(--black) sm:text-[38px]">
            Agents
          </h1>
        </div>

        <Button size="md" variant="primary" className="w-full sm:w-auto justify-center">
          + New AI agent
        </Button>
      </header>

      <div className="rounded-xl min-h-screen border border-(--border) bg-(--white) p-3 sm:p-4">
        <Input
          value={state.query}
          onChange={(e) => setState((p) => ({ ...p, query: e.target.value }))}
          placeholder="Search"
          aria-label="Search agents"
          className="mb-4 h-12 bg-transparent"
          leftIcon={
          <Search className='w-3 h-3'/>  
          }
        />

        <div
          className={cn(
            'grid gap-3',
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

