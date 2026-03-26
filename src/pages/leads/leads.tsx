import { CalendarDays, Download, Filter, Search, UserPlus } from 'lucide-react'

import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import userPlus from '../../assets/leads/userPlus.svg'

const headers = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']

const rows: Array<Record<string, string>> = []

export function LeadsPage() {
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

      <section className="mt-6 overflow-hidden rounded-xl border border-(--border) bg-(--white)">

        <div className=" px-4 pt-2.5">
          <span className="text-sm font-medium text-(--darkGray)">Filters</span>
        </div>

        <div className="flex flex-wrap items-center gap-2  px-4 py-2.5">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-3 py-2.5 text-xs font-medium text-(--black)"
          >
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-(--darkGray)" />
            Mar 11, 2026 – Mar 11, 2026
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-3 py-2.5 text-xs font-medium text-(--black)"
          >
            <Filter className="h-3 w-3 shrink-0 text-(--darkGray)" />
            All Status
          </button>

          <div className="min-w-[180px] flex-1">
            <Input
              placeholder="Search leads..."
              className="h-9 bg-transparent text-xs"
              leftIcon={<Search className="h-3.5 w-3.5" />}
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

        <div className="grid grid-cols-4 m-2  rounded-lg bg-(--background) px-4 py-2.5 ">
          {headers.map((h, i) => (
            <div key={i} className="text-sm text-center text-(--darkGray)">
              {h}
            </div>
          ))}
        </div>

        <div className="flex min-h-[90vh] flex-col">
          {rows.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 py-24 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--background)">
                <UserPlus className="h-5 w-5 text-(--darkGray)" />
              </div>
              <p className="text-sm font-medium text-(--black)">No leads found</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-(--border)">
              {rows.map((row, i) => (
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