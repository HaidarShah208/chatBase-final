import { CalendarDays, RotateCcw, Settings } from 'lucide-react'

import { DataTable } from '../../components/common/DataTable'
import { Pagination } from '../../components/ui/Pagination'
import chatHistoryIcon from '../../assets/sidebar/chatHistory.svg'
import message from '../../assets/chatHistory/message.svg'

export function ChatHistoryPage() {
  const headers = [
    { key: 'time', label: 'Time' },
    { key: 'cost', label: 'Cost' },
    { key: 'sessionId', label: 'Session ID' },
    { key: 'status', label: 'Session Status' },
    { key: 'sentiment', label: 'User Sentiment' },
    { key: 'from', label: 'From' },
    { key: 'to', label: 'To' },
  ]

  const rows: Array<Record<string, string>> = []

  return (
    <div className="rounded-(--radius)">
      <header className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-(--black)">
          <img src={chatHistoryIcon} alt="" className="h-5 w-5 brightness-0 invert" />
        </div>
        <h1 className="text-2xl font-bold leading-tight text-(--black) sm:text-[38px]">
          Chat History
        </h1>
      </header>

      <section className="mt-6 flex min-h-[90vh]  flex-col overflow-hidden rounded-xl border border-(--border) bg-(--white)">
        <div className="flex flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="inline-flex h-7 items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-2 text-xs font-medium text-(--black)"
            >
              <CalendarDays className="h-3 w-3" />
              Date Range
            </button>
            <button
              type="button"
              className="inline-flex h-7 items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-2 text-xs font-medium text-(--black)"
            >
              <RotateCcw className="h-3 w-3" />
              Customize View
            </button>
            <button
              type="button"
              className="inline-flex h-7 items-center gap-1.5 rounded-md border border-(--border) bg-(--white) px-2 text-xs font-medium text-(--black)"
            >
              <Settings className="h-3 w-3" />
              Custom Attributes
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-7 items-center justify-center gap-1.5 self-start rounded-md border border-(--border) bg-(--white) px-3 text-xs font-medium text-(--black) sm:self-auto"
          >
            Export
          </button>
        </div>

        <div className="flex-1">
          <DataTable
            headers={headers}
            rows={rows}
            emptyState={
              <div className="flex min-h-[90vh] items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-(--border) bg-(--background) text-(--darkGray)">
                    <img src={message} className="h-7 w-7" />
                  </span>
                  <div className="mt-4 text-sm text-(--black)">No chat sessions yet</div>
                  <div className="mt-1 text-xs text-(--grayish)">
                    Chat sessions will appear here once they are created
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <Pagination
          page={1}
          totalPages={1}
          totalItems={0}
          pageSize={50}
          onPageChange={() => undefined}
          onPageSizeChange={() => undefined}
        />
      </section>
    </div>
  )
}
