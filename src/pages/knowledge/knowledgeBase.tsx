import { useMemo } from 'react'
import {
  Calendar,
  Dot,
  Download,
  FileText,
  Filter,
  Pencil,
  Plus,
  Trash2,
  Upload,
} from 'lucide-react'
import defaultImg from '../../assets/knowledgeBase/default.png'
import book from '../../assets/knowledgeBase/book.png'
import database from '../../assets/knowledgeBase/database.png'
import qa from '../../assets/knowledgeBase/q&a.png'
import webPages from '../../assets/knowledgeBase/webpages.png'
import text from '../../assets/knowledgeBase/text.png'

import { Button } from '../../components/ui/Button'
import { Dropdown } from '../../components/ui/Dropdown'
import { cn } from '../../lib/cn'
import { DOCS } from '../../lib/static/navLinks'

export function KnowledgeBasePage() {
  const doc = useMemo(() => DOCS[0], [])

  const filteredAttachments = useMemo(() => doc.attachments, [doc.attachments])

  return (
    <div className="rounded-(--radius)">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center md:ml-0 ml-2 gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--black) text-(--background)">
            <img src={book} alt="" className="h-[25px] w-[25px]" />
          </div>
          <h1 className="text-[28px] font-bold tracking-tight leading-tight text-(--black) lg:text-[38px]">
            Knowledge Base
          </h1>
        </div>

        <Button
          size="md"
          variant="primary"
          className="w-full sm:w-auto justify-center"
        >
          <Plus className="h-4 w-4" />
          New knowledge base
        </Button>
      </header>

      <div className="mt-6 rounded-xl border min-h-screen border-(--border) bg-(--white)">
        <div className="px-4 pt-4 sm:px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--black)">
                <img src={database} className="h-6 w-6 text-(--black)" />
              </div>
              <div>
                <div className="md:text-2xl text-base font-bold text-(--black)">
                  {doc.title}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm font-medium text-(--slate)">
                  <span className="inline-flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>ID:</span> {doc.id}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Dot className="h-4 w-4 sm:block hidden" />
                    <Calendar className="h-4 w-4" />
                    Uploaded by: {doc.uploadedBy}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    {doc.uploadedAt}
                  </span>
                </div>
              </div>
            </div>

            <Dropdown
              trigger={
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-10 border  border-(--border) bg-(--white) px-4"
                >
                  <Filter className="h-3 w-3" />
                  <span className="ml-2">Filter</span>
                </Button>
              }
              items={[
                { key: 'web', label: 'Web Pages', icon: <img src={webPages} className="h-3.5 w-3.5" /> },
                { key: 'files', label: 'Files', icon: <Upload className="h-3.5 w-3.5" /> },
                { key: 'text', label: 'Text', icon: <img src={text} className="h-3.5 w-3.5" /> },
                { key: 'qa', label: 'Q&A', icon: <img src={qa} className="h-3.5 w-3.5" /> },
              ]}
            />
          </div>
        </div>

        <div className="my-6 border-t border-(--border)" />

        <div className="px-4 pb-4 sm:px-4">
          <div className="mt-4 space-y-3">
          {filteredAttachments.map((a, idx) => (
            <div
              key={`${a.fileName}-${idx}`}
              className={cn(
                'flex flex-col gap-3 rounded-lg border border-(--border) bg-(--white) px-3 py-3 sm:flex-row sm:items-center sm:justify-between',
              )}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--secondaryBlue)">
                  <img
                    src={defaultImg}
                    alt=""
                    className="h-5 w-5 opacity-70"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-(--black)">{a.fileName}</div>
                  <div className="mt-1 text-xs text-(--slate) ">{a.fileSize}</div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <button type="button" className="text-(--black) cursor-pointer">
                  <Pencil className="h-5 w-5" />
                </button>
                <button type="button" className="text-red-500 cursor-pointer">
                  <Trash2 className="h-5 w-5" />
                </button>
                <button type="button" className="text-(--slate) cursor-pointer">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          {filteredAttachments.length === 0 ? (
            <div className="rounded-lg border border-(--border) bg-(--background) p-6 text-sm text-(--muted)">
              No attachments found.
            </div>
          ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

