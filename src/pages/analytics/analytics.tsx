import { RefreshCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import chatHistory from '../../assets/sidebar/chatHistory.svg'
import { AnalyticsGraphs } from '../../components/common/AnalyticsGraphs'
import { DateRangePicker } from '../../components/common/DateRangePicker'
import { Button } from '../../components/ui/Button'
import { makeAnalyticsData } from '../../lib/data'



export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState({ from: '2026-03-10', to: '2026-03-10' })
  const [seed, setSeed] = useState(1)

  const graphsData = useMemo(
    () => makeAnalyticsData(dateRange.from, dateRange.to, seed),
    [dateRange.from, dateRange.to, seed],
  )

  return (
    <div className="rounded-(--radius) bg-transparent">
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
     <div className="flex items-center justify-center gap-3">
     <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-(--black)">
          <img src={chatHistory} alt="" className="h-5 w-5 brightness-0 invert" />
        </div>
        <h1 className="text-xl font-bold leading-tight text-(--black) sm:text-3xl">
          Analytics
        </h1>
     </div>

        <div className="flex items-center gap-3">
          <DateRangePicker
            value={{ from: dateRange.from, to: dateRange.to }}
            onChange={(next) => setDateRange({ from: next.from, to: next.to })}
          />

          <Button
            size="sm"
            variant="primary"
            className="h-12  justify-center rounded-md px-4"
            onClick={() => setSeed(Date.now())}
            aria-label="Refresh analytics"
          >
            <RefreshCcw className="h-4 w-4" /> Refresh
          </Button>
        </div>
      </header>

      <AnalyticsGraphs data={graphsData} />
    </div>
  )
}

