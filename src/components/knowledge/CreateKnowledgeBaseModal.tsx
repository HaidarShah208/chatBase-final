import { useMemo, useRef, useState } from 'react'
import { Trash2, Upload } from 'lucide-react'

import webPagesIcon from '../../assets/knowledgeBase/webpages.svg'
import qaIcon from '../../assets/knowledgeBase/q&a.svg'
import textIcon from '../../assets/knowledgeBase/text.svg'
import upload from '../../assets/knowledgeBase/upload.svg'
import { Button } from '../ui/Button'
import { KnowledgeDropdown } from './KnowledgeDropdown'
import { Input } from '../ui/Input'
import { Modal } from '../ui/Modal'
import type { CreateKnowledgeBaseModalProps, DocSource } from '../../types/types'



export function CreateKnowledgeBaseModal({ open, onOpenChange }: CreateKnowledgeBaseModalProps) {
  const [state, setState] = useState({
    name: '',
    source: null as DocSource,
    url: '',
    files: [] as File[],
    fileName: '',
    textContent: '',
    question: '',
    answer: '',
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const addItems = useMemo(
    () => [
      {
        key: 'web',
        label: 'Add Web Pages',
        description: 'Crawl and sync your website',
        icon: <img src={webPagesIcon} className="h-4 w-4" />,
        onSelect: () =>
          setState((p) => ({
            ...p,
            source: 'web',
            url: '',
          })),
      },
      {
        key: 'files',
        label: 'Upload Files',
        description: 'File size should be less than 100MB',
        icon: <img src={upload} className="h-4 w-4" />,
        onSelect: () => {
          setState((p) => ({ ...p, source: 'files', files: [] }))
          setTimeout(() => fileInputRef.current?.click(), 0)
        },
      },
      {
        key: 'text',
        label: 'Add Text',
        description: 'Add articles manually',
        icon: <img src={textIcon} className="h-4 w-4" />,
        onSelect: () =>
          setState((p) => ({
            ...p,
            source: 'text',
            fileName: '',
            textContent: '',
          })),
      },
      {
        key: 'qa',
        label: 'Add Q&A',
        description: 'Add Q&A Pair',
        icon: <img src={qaIcon} className="h-4 w-4" />,
        onSelect: () =>
          setState((p) => ({
            ...p,
            source: 'qa',
            question: '',
            answer: '',
          })),
      },
    ],
    [],
  )

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={
        state.source === 'web'
          ? 'Add Web Pages'
          : state.source === 'files'
            ? 'Upload Files'
            : state.source === 'text'
              ? 'Add Text'
              : state.source === 'qa'
                ? 'Add Q&A'
                : 'Add Knowledge Base'
      }
      footer={
        <>
          <Button
            variant="outline"
            size="sm"
            className='h-9 md:w-24 w-auto lg:w-[105px]'
            onClick={() => {
              if (state.source !== null) {
                setState((p) => ({
                  ...p,
                  source: null,
                  url: '',
                  files: [],
                  fileName: '',
                  textContent: '',
                  question: '',
                  answer: '',
                }))
                return
              }

              onOpenChange(false)
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" size="sm" className='h-9 md:w-24 w-auto lg:w-[105px]'>
            Create
          </Button>
        </>
      }
      className="max-w-[900px]"
    >
      <div className="space-y-5">
        <div>
          {state.source === 'web' ? (
            <>
              <div className="text-sm font-semibold text-(--black)">Enter Address</div>
              <Input
                value={state.url}
                onChange={(e) => setState((p) => ({ ...p, url: e.target.value }))}
                placeholder="Enter URL"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          ) : null}

          {state.source === 'text' ? (
            <>
              <div className="text-sm font-semibold text-(--black)">File Name</div>
              <Input
                value={state.fileName}
                onChange={(e) => setState((p) => ({ ...p, fileName: e.target.value }))}
                placeholder="Enter File Name"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          ) : null}

          {state.source === 'qa' ? (
            <>
              <div className="text-sm font-semibold text-(--black)">Question</div>
              <Input
                value={state.question}
                onChange={(e) => setState((p) => ({ ...p, question: e.target.value }))}
                placeholder="Enter question"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          ) : null}

          {state.source === null ? (
            <>
              <div className="text-sm font-semibold text-(--black)">Knowledge Base Name</div>
              <Input
                value={state.name}
                onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
                placeholder="Enter"
                className="mt-2 h-11 bg-(--background)"
              />
            </>
          ) : null}

          {state.source === 'files' ? (
            <>
              <div className="text-sm font-semibold text-(--black)">Knowledge Base Name</div>
              <Input
                value={state.name}
                onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
                placeholder="Enter"
                className=" h-9 mt-2 w-full resize-none rounded-lg border border-(--border) bg-(--background) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0 "
              />
            </>
          ) : null}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files ?? [])
            setState((p) => ({ ...p, source: 'files', files }))
          }}
        />

        {state.source === 'text' ? (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-(--black)">Text Content</div>
              <textarea
                value={state.textContent}
                onChange={(e) => setState((p) => ({ ...p, textContent: e.target.value }))}
                placeholder="Enter text content"
                className="mt-2 h-[170px] w-full resize-none rounded-[6px] border border-(--border) bg-(--background) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0"
              />
            </div>
          </div>
        ) : null}

        {state.source === 'qa' ? (
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-(--black)">Answer</div>
              <textarea
                value={state.answer}
                onChange={(e) => setState((p) => ({ ...p, answer: e.target.value }))}
                placeholder="Enter answer"
                className="mt-2 h-[170px] w-full resize-none rounded-lg border border-(--border) bg-(--background) px-3 py-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0 "
              />
            </div>
          </div>
        ) : null}

        {state.source === 'files' ? (
          <div className="space-y-3">
            <div className="text-sm font-semibold text-(--black)">Documents</div>

            {state.files.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between gap-3 rounded-[6px] border border-(--border) bg-(--background) px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--secondaryBlue)">
                    <Upload className="h-4 w-4 text-(--muted)" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-(--black)">
                      {file.name}
                    </div>
                    <div className="text-xs text-(--slate)">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="rounded-md p-1 text-(--muted) hover:bg-(--white)"
                  onClick={() => {
                    setState((p) => ({
                      ...p,
                      files: p.files.filter((_, i) => i !== idx),
                    }))
                  }}
                  aria-label="Remove file"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : null}

        {state.source === null ? (
          <div className=" flex justify-start">
            <KnowledgeDropdown
              align="start"
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 w-[110px] justify-center"
                >
                  + Add
                </Button>
              }
              items={addItems}
            />
          </div>
        ) : null}
      </div>
    </Modal>
  )
}

