import { useRef, useState } from 'react'

import { ChatBot } from '../../chatBot/ChatBot'
import { cn } from '../../../lib/cn'
import { Button } from '../../ui/Button'
import { FooterToolbar } from '../../footerToolbar/FooterToolbar'

export function ChatInterfaceModal() {
  const [initialMessages, setInitialMessages] = useState('Hi! What can I help you with?')
  const [messagePlaceholder, setMessagePlaceholder] = useState('Type your message here...')
  const [footerText, setFooterText] = useState('© 2025 Chatbase. All rights reserved.')
  const [displayName, setDisplayName] = useState('Testing agent')

  const [footerHistory, setFooterHistory] = useState<string[]>([footerText])
  const [footerHistoryIndex, setFooterHistoryIndex] = useState(0)
  const [footerAlign, setFooterAlign] = useState<'left' | 'center' | 'right'>('left')
  const [footerBold, setFooterBold] = useState(false)
  const [footerItalic, setFooterItalic] = useState(false)
  const [footerUnderline, setFooterUnderline] = useState(false)
  const footerRef = useRef<HTMLTextAreaElement | null>(null)

  function resetInitialMessages() {
    setInitialMessages('Hi! What can I help you with?')
  }

  function pushFooterHistory(next: string) {
    setFooterHistory((prev) => {
      const sliced = prev.slice(0, footerHistoryIndex + 1)
      return [...sliced, next]
    })
    setFooterHistoryIndex((i) => i + 1)
  }

  function handleFooterChange(value: string) {
    setFooterText(value)
    pushFooterHistory(value)
  }

  function footerUndo() {
    setFooterHistoryIndex((i) => {
      const next = Math.max(0, i - 1)
      setFooterText(footerHistory[next])
      return next
    })
  }

  function footerRedo() {
    setFooterHistoryIndex((i) => {
      const next = Math.min(footerHistory.length - 1, i + 1)
      setFooterText(footerHistory[next])
      return next
    })
  }

  function handleBold() {
    setFooterBold((prev) => !prev)
  }

  function handleItalic() {
    setFooterItalic((prev) => !prev)
  }

  function handleUnderline() {
    setFooterUnderline((prev) => !prev)
  }

  function handleLink() {
    const el = footerRef.current
    const link = '[link](https://example.com)'

    if (!el) {
      handleFooterChange(`${footerText} ${link}`)
      return
    }

    const { selectionStart, selectionEnd, value } = el
    const next =
      value.slice(0, selectionStart) + link + value.slice(selectionEnd)

    handleFooterChange(next)

    queueMicrotask(() => {
      const pos = selectionStart + link.length
      el.selectionStart = el.selectionEnd = pos
    })
  }

  return (
    <div
      className={cn(
        'flex min-h-[480px] flex-col gap-6 pb-4',
        'sm:flex-row sm:items-stretch',
      )}
    >
      <div className="w-full space-y-4 sm:w-[50%] sm:min-w-0">
        <section className="">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-(--black) sm:text-sm">
              Initial messages
            </label>
            <button
              type="button"
              onClick={resetInitialMessages}
              className="cursor-pointer text-sm font-medium text-(--brand)"
            >
              Reset
            </button>
          </div>
          <textarea
            className="h-20 mt-3 w-full resize-y rounded-lg border border-(--border) bg-(--white) px-3 py-2 text-sm text-(--black) outline-none focus:ring-0"
            value={initialMessages}
            onChange={(e) => setInitialMessages(e.target.value)}
          />
          <p className="text-xs text-(--grayish)">Enter each message in a new line.</p>
        </section>

        <section className="my-7">
          <label className="text-xs font-semibold text-(--black) sm:text-sm">
            Message placeholder
          </label>
          <input
            className="h-10 w-full rounded-lg border border-(--border) bg-(--white) px-3 text-sm text-(--black) outline-none focus:ring-2 focus:ring-(--brand) focus:ring-offset-2 focus:ring-offset-(--white)"
            value={messagePlaceholder}
            onChange={(e) => setMessagePlaceholder(e.target.value)}
          />
        </section>

        <section className="mb-5">
          <label className="text-xs font-semibold text-(--black) sm:text-sm">Footer</label>

          <FooterToolbar
            onBold={handleBold}
            onItalic={handleItalic}
            onUnderline={handleUnderline}
            onLink={handleLink}
            align={footerAlign}
            onAlignChange={setFooterAlign}
            onUndo={footerUndo}
            onRedo={footerRedo}
            canUndo={footerHistoryIndex > 0}
            canRedo={footerHistoryIndex < footerHistory.length - 1}
          />

          <textarea
            ref={footerRef}
            className={cn(
              'h-20 w-full resize-y rounded-lg border border-(--border) bg-(--white) px-3 py-2 text-sm text-(--black) outline-none focus:ring-0',
              footerBold && 'font-semibold',
              footerItalic && 'italic',
              footerUnderline && 'underline',
              footerAlign === 'left' && 'text-left',
              footerAlign === 'center' && 'text-center',
              footerAlign === 'right' && 'text-right',
            )}
            value={footerText}
            onChange={(e) => handleFooterChange(e.target.value)}
          />
          <p className="text-xs text-(--grayish)">
            You can use this to add a disclaimer or link to your privacy policy.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-(--black) sm:text-sm">Theme</label>
            <select className="mt-1 h-10 w-full rounded-lg border border-(--border) bg-(--background) px-3 text-sm text-(--black) outline-none focus:ring-2 focus:ring-(--brand) focus:ring-offset-2 focus:ring-offset-(--white)">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-(--slate) sm:text-sm">Header color</label>
              <button
                type="button"
                className="text-xs font-medium text-(--brand) hover:underline"
              >
                Reset
              </button>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border border-(--border) bg-(--black)" />
              <span className="text-xs text-(--black)">#000000</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div>
            <label className="text-xs font-medium text-(--slate) sm:text-sm">
              Display name
            </label>
            <input
              className="mt-1 h-10 w-full rounded-lg border border-(--border) bg-(--background) px-3 text-sm text-(--black) outline-none focus:ring-2 focus:ring-(--brand) focus:ring-offset-2 focus:ring-offset-(--white)"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-(--slate) sm:text-sm">
                  Profile picture
                </label>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-9 rounded-md text-xs font-medium"
              >
                Upload image
              </Button>
              <p className="text-[10px] text-(--muted)">
                Supports PNG, JPG, and SVG files up to 1MB.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-(--slate) sm:text-sm">
                  Chat icon
                </label>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-9 rounded-md text-xs font-medium"
              >
                Upload image
              </Button>
              <p className="text-[10px] text-(--muted)">
                Shown in your website chat launcher.
              </p>
            </div>
          </div>
        </section>

        <div className="pt-2">
          <Button
            type="button"
            variant="primary"
            size="md"
            className="min-w-[140px] rounded-md"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="w-full sm:w-[50%] sm:min-w-[280px]">
        <div className="flex h-full items-stretch justify-center sm:justify-end">
          <div
            className="flex  h-full w-full max-w-[340px] items-center justify-center  border border-(--border) p-3  lg:max-w-full"
            style={{
              background:
                'radial-gradient(120% 90% at 50% 100%, #4CB5FF 0%, #89CCF8 34%, #A9DBFA 55%, #CDE9FB 78%, #E9F5FE 100%)',
            }}
          >
            <ChatBot className="h-[90vh] lg:w-[80%] shadow-[0_16px_48px_-12px_rgba(15,23,42,0.2)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

