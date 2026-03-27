import { AlertTriangle, SaveAll, Trash2, UserRound } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../../../components/ui/Button'
import { Input } from '../../../components/ui/Input'

export function GeneralTab() {
  const [userName, setUserName] = useState('Ahmad')

  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-(--black) md:text-xl lg:text-3xl">General</h2>
      <p className="mt-1 text-xs text-(--black) md:text-sm">
        Manage your account settings and preferences
      </p>

      <div className="mt-7 rounded-xl border border-(--border) p-4 pt-9 ps-8">
        <div className="mb-5 flex items-center gap-2 text-xl font-semibold text-(--black)">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-(--black)">
            <UserRound className="h-4 w-4 text-(--white)" />
          </span>
          User Detail
        </div>

        <label className="block text-base font-medium text-(--black)">User name</label>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-2 h-11 bg-(--white)"
        />

        <div className="mt-4 flex justify-end">
          <Button size="sm" className="h-10 cursor-pointer rounded-md px-6 text-sm">
            <SaveAll className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="my-12 flex justify-center">
        <span className="flex items-center justify-center rounded-full border border-[#FFC9C9] bg-[#FEF2F2] px-6 py-2 text-sm font-bold text-(--primaryRed)">
          <AlertTriangle className="mr-2 inline h-3.5 w-3.5" />
          DANGER ZONE
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-[#FFC9C9] px-4 md:px-8 py-9">
        <span className="pointer-events-none absolute -right-13 -top-13 h-28 w-28 rounded-full bg-[#FFEAEA]" />

        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#FFE2E2]">
            <Trash2 className="h-4 w-4 text-(--primaryRed)" />
          </span>
          <div className="min-w-0">
            <div className="text-2xl font-semibold text-(--primaryRed)">Delete account</div>
            <p className="py-2 text-xs md:text-sm text-(--darkGray)">
              Once you delete your team account, there is no going back. Please be certain.
            </p>
            <p className="text-xs md:text-sm font-medium text-(--black)">
              All your uploaded data and trained agents will be deleted.{' '}
              <span className="text-(--primaryRed)">This action is not reversible</span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-(--primaryRed) px-4 text-sm font-medium text-(--white)"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Delete Ahmad
          </button>
        </div>
      </div>
    </div>
  )
}

