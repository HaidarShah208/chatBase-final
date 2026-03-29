import { Fragment } from 'react'

import { cn } from '../../lib/cn'
import type { DataTableProps } from '../../types/types'
import { COLUMN_TEXT_ALIGN } from '../../lib/data'



export function DataTable({
  headers,
  rows,
  rowKey,
  emptyState,
  emptyColSpan,
  variant = 'table',
  className,
  tableClassName,
  headerClassName,
  bodyClassName,
  cardsListClassName,
}: DataTableProps) {
  const colCount = headers.length
  const gridTemplate = `repeat(${colCount}, minmax(0, 1fr))`

  if (variant === 'cards') {
    return (
      <div className={cn('flex h-full min-h-0 flex-1 flex-col', className)}>
        {rows.length > 0 ? (
          <>
            <div
              className={cn(
                'mb-3 hidden overflow-x-auto bg-(--background) px-3 py-2.5 sm:px-4 md:block',
                headerClassName,
              )}
            >
              <div
                className="grid min-w-[640px] gap-2 text-xs font-semibold uppercase tracking-wide text-(--black) md:min-w-0 md:px-2 md:text-sm"
                style={{ gridTemplateColumns: gridTemplate }}
              >
                {headers.map((header) => (
                  <span
                    key={header.key}
                    className={cn(COLUMN_TEXT_ALIGN[header.align ?? 'center'], header.className)}
                  >
                    {header.label}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={cn(
                'min-h-0 flex-1 space-y-3 overflow-y-auto px-3 sm:px-4',
                cardsListClassName,
                bodyClassName,
              )}
            >
              {rows.map((row, rowIndex) => (
                <div
                  key={rowKey ? rowKey(row, rowIndex) : String(rowIndex)}
                  className="w-full rounded-lg border border-(--border) px-5 py-2 text-sm text-(--black) sm:px-2"
                >
                  <div
                    className="hidden min-w-0 items-center gap-3 text-sm text-(--black) md:grid md:gap-4"
                    style={{ gridTemplateColumns: gridTemplate }}
                  >
                    {headers.map((header) => {
                      const cell = row[header.key]
                      return (
                        <div
                          key={header.key}
                          className={cn(
                            'min-w-0 text-(--black)',
                            COLUMN_TEXT_ALIGN[header.align ?? 'center'],
                            header.cellClassName,
                          )}
                          title={typeof cell === 'string' ? cell : undefined}
                        >
                          {cell}
                        </div>
                      )
                    })}
                  </div>

                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm md:hidden">
                    {headers.map((header) => (
                      <Fragment key={header.key}>
                        <dt className="text-(--grayish)">{header.label}</dt>
                        <dd className="text-right font-medium text-(--black)">{row[header.key]}</dd>
                      </Fragment>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-[60vh] flex-1 items-center justify-center px-4">
            {emptyState ?? <span className="text-sm text-(--grayish)">No data</span>}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn('h-full overflow-x-auto', className)}>
      <table className={cn('w-full min-w-[760px] text-left text-sm', tableClassName)}>
        <thead
          className={cn('border-b border-(--border) bg-(--lightGray) text-(--black)', headerClassName)}
        >
          <tr>
            {headers.map((header) => (
              <th key={header.key} className={cn('px-3 py-3 text-center font-semibold', header.className)}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={cn(bodyClassName)}>
          {rows.length ? (
            rows.map((row, rowIndex) => (
              <tr
                key={rowKey ? rowKey(row, rowIndex) : String(rowIndex)}
                className="rounded-2xl border border-(--border) text-center"
              >
                {headers.map((header) => (
                  <td key={header.key} className="px-3 py-3 text-(--black)">
                    {row[header.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={emptyColSpan ?? headers.length} className="p-0">
                {emptyState}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
