import { Download, Filter, Search, UserPlus } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { DateRangePicker } from '../../components/common/DateRangePicker'
import { StatusFilterDropdown } from '../../components/common/StatusFilterDropdown'
import userPlus from '../../assets/leads/userPlus.svg'
import type { Lead } from '../../types/types'

export function LeadsPage() {
  const headers = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']

  const allLeads: Lead[] = useMemo(
    () => [
      {
        id: 'l1',
        company: 'Lorem ipsum',
        status: 'Qualified',
        lastContacted: '2026-03-18',
        assigned: 'Lorem ipsum',
      },
      {
        id: 'l2',
        company: 'Lorem ipsum',
        status: 'New',
        lastContacted: '2026-03-20',
        assigned: 'Lorem ipsum',
      },
    ],
    [],
  )

  const statusOptions = useMemo(
    () => [
      { value: 'all', label: 'All Statuses' },
      { value: 'New', label: 'New' },
      { value: 'Qualified', label: 'Qualified' },
      { value: 'Converted', label: 'Converted' },
    ],
    [],
  )

  const [filters, setFilters] = useState({
    dateFrom: '2026-03-11',
    dateTo: '2026-03-12',
    status: 'all',
    query: '',
  })

  const filteredLeads = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    const fromTime = filters.dateFrom ? new Date(filters.dateFrom + 'T00:00:00').getTime() : null
    const toTime = filters.dateTo ? new Date(filters.dateTo + 'T00:00:00').getTime() : null

    return allLeads.filter((l) => {
      const leadTime = new Date(l.lastContacted + 'T00:00:00').getTime()
      if (fromTime !== null && leadTime < fromTime) return false
      if (toTime !== null && leadTime > toTime) return false
      if (filters.status !== 'all' && l.status !== filters.status) return false
      if (q) {
        const hay = `${l.company} ${l.assigned}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [allLeads, filters.dateFrom, filters.dateTo, filters.query, filters.status])

  return (
    <div className="rounded-(--radius)">
      <header className=" flex items-center">
      <div className="flex items-center md:ml-0 ml-2 gap-3">
        <div className="flex h-14 w-14   items-center justify-center rounded-2xl bg-(--black) text-(--background)">
            <img src={userPlus} alt="" className="h-[25px] w-[25px]" />
          </div>
          <h1 className=" text-xl font-bold tracking-tight leading-tight text-(--black) lg:text-3xl">
          Leads
          </h1>
        </div>
      </header>

      <section className="mt-7 overflow-hidden rounded-xl border border-(--border) bg-(--white)">

        <div className=" px-4 pt-2.5">
          <span className="text-sm font-medium text-(--darkGray)">Filters</span>
        </div>

        <div className="flex flex-wrap items-center gap-2  px-4 py-2.5">
          <DateRangePicker
            value={{ from: filters.dateFrom, to: filters.dateTo }}
            onChange={(next) =>
              setFilters((p) => ({ ...p, dateFrom: next.from, dateTo: next.to }))
            }
          />

          <StatusFilterDropdown
            value={filters.status}
            options={statusOptions}
            onChange={(next) => setFilters((p) => ({ ...p, status: next }))}
            leftIcon={<Filter className="h-3 w-3 shrink-0 text-(--darkGray)" />}
          />

          <div className="min-w-[180px] flex-1">
            <Input
              placeholder="Search leads..."
              className="h-9 bg-transparent text-xs"
              leftIcon={<Search className="h-3.5 w-3.5" />}
              value={filters.query}
              onChange={(e) => setFilters((p) => ({ ...p, query: e.target.value }))}
            />
          </div>

          <Button
            size="sm"
            variant="primary"
            className="ml-auto h-9 gap-1.5 rounded-md px-4 text-xs"
          >
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
        </div>
        </section>
<section className='mt-3 rounded-xl border border-(--border) bg-(--white)'>

        <div className="grid grid-cols-4 mx-2 mt-4  rounded-lg bg-(--background) px-4 py-2.5 ">
          {headers.map((h, i) => (
            <div key={i} className="text-sm text-center text-(--darkGray)">
              {h}
            </div>
          ))}
        </div>

        <div className="flex min-h-[90vh] flex-col">
          {filteredLeads.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 py-24 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--background)">
                <UserPlus className="h-5 w-5 text-(--darkGray)" />
              </div>
              <p className="text-sm font-medium text-(--black)">No leads found</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-(--border)">
              {filteredLeads.map((row, i) => (
                <div key={i} className="grid grid-cols-4 px-4 py-3 text-sm text-(--black)">
                  <div>{row.company}</div>
                  <div>{row.status}</div>
                  <div>{row.lastContacted}</div>
                  <div>{row.assigned}</div>
                </div>
              ))}
            </div>
          )}
        </div>
</section>

    </div>
  )
}