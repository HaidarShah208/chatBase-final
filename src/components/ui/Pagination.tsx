import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '../../lib/cn'
import type { PaginationProps } from '../../types/types'



const PAGE_SIZE_OPTIONS = [10, 25, 50, 100]

export function Pagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  className,
}: PaginationProps) {
  const safeTotalPages = Math.max(1, totalPages)
  const canGoPrev = page > 1
  const canGoNext = page < safeTotalPages

  return (
    <div
      className={cn(
        'flex flex-col gap-2 border-t border-(--border) px-3 py-3 text-sm text-(--grayish) sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      <div>
        {`Page ${Math.min(page, safeTotalPages)} of ${safeTotalPages} · Total Session: ${totalItems}`}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => canGoPrev && onPageChange(page - 1)}
          disabled={!canGoPrev}
          className="flex h-8 w-8 items-center justify-center rounded border border-(--border) text-(--grayish) disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-3 w-3" />
        </button>

        <span className="flex w-8 h-8 min-w-6 items-center justify-center rounded border border-(--border) px-1 text-(--black)">
          {Math.min(page, safeTotalPages)}
        </span>

        <button
          type="button"
          onClick={() => canGoNext && onPageChange(page + 1)}
          disabled={!canGoNext}
          className="flex h-8 w-8 items-center justify-center rounded border border-(--border) text-(--grayish) disabled:opacity-40"
          aria-label="Next page"
        >
          <ChevronRight className="h-3 w-3" />
        </button>

        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="h-8 rounded border border-(--border) bg-(--white) px-2 text-sm focus:outline-none"
          aria-label="Rows per page"
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {`${size} / page`}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
