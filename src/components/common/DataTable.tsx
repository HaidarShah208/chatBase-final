import type { ReactNode } from 'react'

import { cn } from '../../lib/cn'

type DataTableHeader = {
  key: string
  label: string
  className?: string
}

type DataTableRow = Record<string, ReactNode>

type DataTableProps = {
  headers: DataTableHeader[]
  rows: DataTableRow[]
  rowKey?: (row: DataTableRow, index: number) => string
  emptyState?: ReactNode
  emptyColSpan?: number
  className?: string
  tableClassName?: string
  headerClassName?: string
  bodyClassName?: string
}

export function DataTable({
  headers,
  rows,
  rowKey,
  emptyState,
  emptyColSpan,
  className,
  tableClassName,
  headerClassName,
  bodyClassName,
}: DataTableProps) {
  return (
    <div className={cn('h-full overflow-x-auto', className)}>
      <table className={cn('w-full min-w-[760px] text-left text-sm', tableClassName)}>
        <thead className={cn('bg-(--lightGray) text-(--black)', headerClassName)}>
          <tr>
            {headers.map((header) => (
              <th key={header.key} className={cn('px-3 py-3 font-semibold', header.className)}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={cn(bodyClassName)}>
          {rows.length ? (
            rows.map((row, rowIndex) => (
              <tr key={rowKey ? rowKey(row, rowIndex) : String(rowIndex)} className="border-t border-(--border)">
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
