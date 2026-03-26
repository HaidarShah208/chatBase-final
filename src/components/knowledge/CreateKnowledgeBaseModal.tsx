import { useRef, useState } from 'react'
import { FileText, Trash2 } from 'lucide-react'

import webPagesIcon from '../../assets/knowledgeBase/webpages.svg'
import qaIcon from '../../assets/knowledgeBase/q&a.svg'
import textIcon from '../../assets/knowledgeBase/text.svg'
import upload from '../../assets/knowledgeBase/upload.svg'
import { Button } from '../ui/Button'
import { KnowledgeDropdown } from './KnowledgeDropdown'
import { Input } from '../ui/Input'
import { Modal } from '../ui/Modal'
import type { CreateKnowledgeBaseModalProps, DocSource } from '../../types/types'

type SourceData = {
  url?: string
  files?: File[]
  fileName?: string
  textContent?: string
  question?: string
  answer?: string
}

export function CreateKnowledgeBaseModal({ open, onOpenChange }: CreateKnowledgeBaseModalProps) {
  const [name, setName] = useState('')
  const [source, setSource] = useState<DocSource>(null)
  const [sourceData, setSourceData] = useState<SourceData>({})

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  function changeSource(newSource: DocSource) {
    setSource(newSource)
    setSourceData({})
  }

  const addItems = [
    {
      key: 'web',
      label: 'Add Web Pages',
      description: 'Crawl and sync your website',
      icon: <img src={webPagesIcon} className="h-4 w-4" />,
      onSelect: () => changeSource('web'),
    },
    {
      key: 'files',
      label: 'Upload Files',
      description: 'File size should be less than 100MB',
      icon: <img src={upload} className="h-4 w-4" />,
      onSelect: () => {
        changeSource('files')
        setTimeout(() => fileInputRef.current?.click(), 0)
      },
    },
    {
      key: 'text',
      label: 'Add Text',
      description: 'Add articles manually',
      icon: <img src={textIcon} className="h-4 w-4" />,
      onSelect: () => changeSource('text'),
    },
    {
      key: 'qa',
      label: 'Add Q&A',
      description: 'Add Q&A Pair',
      icon: <img src={qaIcon} className="h-4 w-4" />,
      onSelect: () => changeSource('qa'),
    },
  ]

  const modalTitle =
    source === 'web' ? 'Add Web Pages' :
    source === 'files' ? 'Upload Files' :
    source === 'text' ? 'Add Text' :
    source === 'qa' ? 'Add Q&A' :
    'Add Knowledge Base'

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={modalTitle}
      footer={
        <>
          <Button
            variant="outline"
            size="sm"
            className="h-9 md:w-24 w-auto lg:w-[105px]"
            onClick={() => {
              if (source !== null) {
                changeSource(null)
                return
              }
              onOpenChange(false)
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" size="sm" className="h-9 md:w-24 w-auto lg:w-[105px]">
            Create
          </Button>
        </>
      }
      className="max-w-[701px]"
    >
      <div className="space-y-5">
        <div>
          {source === null && (
            <>
              <div className="text-sm font-semibold text-(--black)">Knowledge Base Name</div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          )}

          {source === 'web' && (
            <>
              <div className="text-sm font-semibold text-(--black)">Enter Address</div>
              <Input
                value={sourceData.url ?? ''}
                onChange={(e) => setSourceData((p) => ({ ...p, url: e.target.value }))}
                placeholder="Enter URL"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          )}

          {source === 'files' && (
            <>
              <div className="text-sm font-semibold text-(--black)">Knowledge Base Name</div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter"
                className="h-9 mt-2 w-full resize-none rounded-lg border border-(--border) bg-(--background) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0"
              />
            </>
          )}

          {source === 'text' && (
            <>
              <div className="text-sm font-semibold text-(--black)">File Name</div>
              <Input
                value={sourceData.fileName ?? ''}
                onChange={(e) => setSourceData((p) => ({ ...p, fileName: e.target.value }))}
                placeholder="Enter File Name"
                className="mt-2 h-10"
              />
            </>
          )}

          {source === 'qa' && (
            <>
              <div className="text-sm font-semibold text-(--black)">Question</div>
              <Input
                value={sourceData.question ?? ''}
                onChange={(e) => setSourceData((p) => ({ ...p, question: e.target.value }))}
                placeholder="Enter question"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files ?? [])
            setSourceData((p) => ({ ...p, files }))
          }}
        />

        {source === 'text' && (
          <div>
            <div className="text-sm font-semibold text-(--black)">Text Content</div>
            <textarea
              value={sourceData.textContent ?? ''}
              onChange={(e) => setSourceData((p) => ({ ...p, textContent: e.target.value }))}
              placeholder="Enter text content"
              className="mt-2 h-[170px] w-full resize-none rounded-[6px] border border-(--border) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0"
            />
          </div>
        )}

        {source === 'qa' && (
          <div>
            <div className="text-sm font-semibold text-(--black)">Answer</div>
            <textarea
              value={sourceData.answer ?? ''}
              onChange={(e) => setSourceData((p) => ({ ...p, answer: e.target.value }))}
              placeholder="Enter answer"
              className="mt-2 h-[170px] w-full resize-none rounded-lg border border-(--border) bg-(--background) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0"
            />
          </div>
        )}

        {source === 'files' && (
          <div className="space-y-3">
            <div className="text-sm font-semibold text-(--black)">Documents</div>
            {(sourceData.files ?? []).map((file, id) => (
              <div
                key={`${file.name}-${id}`}
                className="flex items-center justify-between gap-3 rounded-[6px] border border-(--border) bg-(--secondaryBlue) px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <FileText className="h-4 w-4 text-(--muted)" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-(--black)">{file.name}</div>
                    <div className="text-xs text-(--slate)">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-md p-1 text-(--muted) cursor-pointer hover:bg-(--white)"
                  onClick={() =>
                    setSourceData((p) => ({
                      ...p,
                      files: (p.files ?? []).filter((_, i) => i !== id),
                    }))
                  }
                  aria-label="Remove file"
                >
                  <Trash2 className="h-4 w-4 text-(--tertiary)" />
                </button>
              </div>
            ))}
          </div>
        )}

        {source === null && (
          <div className="flex justify-start">
            <KnowledgeDropdown
              align="start"
              trigger={
                <Button variant="outline" size="sm" className="h-9 w-[110px] justify-center">
                  + Add
                </Button>
              }
              items={addItems}
            />
          </div>
        )}
      </div>
    </Modal>
  )
}