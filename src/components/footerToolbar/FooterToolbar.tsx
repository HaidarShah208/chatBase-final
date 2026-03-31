import type { FC } from 'react'
import {
  Bold,
  Italic,
  Underline,
  Link2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo2,
  Redo2,
} from 'lucide-react'

import { cn } from '../../lib/cn'
import type { FooterToolbarProps } from '../../types/types'

export const FooterToolbar: FC<FooterToolbarProps> = ({
  onBold,
  onItalic,
  onUnderline,
  onLink,
  onAlignChange,
  align,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}) => {
  return (
    <div className="mb-1 flex items-center gap-2 rounded-lg border border-(--border) bg-(--background) px-3 py-2 text-xs text-(--black)">
      <button type="button" className="p-1" onClick={onBold}>
        <Bold className="h-3.5 w-3.5" />
      </button>
      <button type="button" className="p-1" onClick={onItalic}>
        <Italic className="h-3.5 w-3.5" />
      </button>
      <button type="button" className="p-1" onClick={onUnderline}>
        <Underline className="h-3.5 w-3.5" />
      </button>

      <button type="button" className="p-1" onClick={onLink}>
        <Link2 className="h-3.5 w-3.5" />
      </button>

      <span className="mx-1 h-4 w-px bg-(--border)" />

      <button
        type="button"
        className={cn('p-1', align === 'left' && 'text-(--black)')}
        onClick={() => onAlignChange('left')}
      >
        <AlignLeft className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        className={cn('p-1', align === 'center' && 'text-(--black)')}
        onClick={() => onAlignChange('center')}
      >
        <AlignCenter className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        className={cn('p-1', align === 'right' && 'text-(--black)')}
        onClick={() => onAlignChange('right')}
      >
        <AlignRight className="h-3.5 w-3.5" />
      </button>

      <span className="mx-1 h-4 w-px bg-(--border)" />

      <button
        type="button"
        className="p-1 disabled:opacity-40"
        disabled={!canUndo}
        onClick={onUndo}
      >
        <Undo2 className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        className="p-1 disabled:opacity-40"
        disabled={!canRedo}
        onClick={onRedo}
      >
        <Redo2 className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}