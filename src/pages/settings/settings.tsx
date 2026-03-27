import { AlertTriangle, CircleDollarSign, Cog, CreditCard, SaveAll, Settings, Trash2, UserRound } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'

const SETTINGS_TABS = [
  { key: 'general', label: 'General' },
  { key: 'plans', label: 'Plans' },
  { key: 'billing', label: 'Billing' },
  { key: 'notifications', label: 'Notifications' },
] as const

type SettingsTabKey = (typeof SETTINGS_TABS)[number]['key']

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTabKey>('general')

  return (
    <div className="rounded-(--radius)">
      <header className="mb-7 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--black)">
          <Settings className="h-5 w-5 text-(--white)" />
        </div>
        <h1 className="text-xl font-bold leading-tight text-(--black) sm:text-3xl">
          Settings
        </h1>
      </header>

      <section className="rounded-xl border pb-7 border-(--border) bg-(--white)">
        <div className="border-b border-(--border) px-2 sm:px-4 ">
          <div className="flex flex-wrap items-center gap-2">
            {SETTINGS_TABS.map((tab) => {
              const isActive = activeTab === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`border-b-2 px-3 py-4 cursor-pointer text-base font-medium transition ${
                    isActive
                      ? 'border-b-(--brand) text-(--black)'
                      : 'border-b-transparent text-(--darkGray) hover:text-(--black)'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-3 sm:p-4">
          {activeTab === 'general' && (
            <div>
              <h2 className="lg:text-3xl md:text-xl pt-6 text-lg font-bold text-(--black)">General</h2>
              <p className="mt-1 md:text-sm text-xs text-(--black)">
                Manage your account settings and preferences
              </p>

              <div className="mt-7 rounded-xl pt-9 ps-8 border border-(--border) p-4">
                <div className="mb-5 flex items-center gap-2 text-xl font-semibold text-(--black)">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-(--black)">
                    <UserRound className="h-4 w-4 text-(--white)" />
                  </span>
                  User Detail
                </div>

                <label className="block text-base font-medium text-(--black)">User name</label>
                <Input value="Ahmad" readOnly className="mt-2 h-11 bg-(--white)" />

                <div className="mt-4 flex justify-end">
                  <Button size="sm"  className="h-10 rounded-md px-6 cursor-pointer text-sm">
                    <SaveAll className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>

              <div className="my-12 flex justify-center">
                <span className="rounded-full border flex items-center justify-center border-[#FFC9C9] bg-[#FEF2F2] px-6 py-2 text-sm font-bold text-(--primaryRed)">
                  <AlertTriangle className="mr-2 inline h-3.5 w-3.5" />
                  DANGER ZONE
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[#FFC9C9] py-9 px-8">
                <span className="pointer-events-none absolute -top-13 -right-13 h-28 w-28 rounded-full  bg-[#FFEAEA]" />

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#FFE2E2]">
                    <Trash2 className="h-4 w-4 text-(--primaryRed)" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-2xl font-semibold text-(--primaryRed)">
                      Delete account
                    </div>
                    <p className="py-2 text-sm text-(--darkGray)">
                      Once you delete your team account, there is no going back. Please be certain.
                    </p>
                    <p className="text-sm font-medium text-(--black)">
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
          ) }

          {activeTab === 'plans' && (
            <div className="rounded-xl border border-(--border) p-5">
              <div className="flex items-center gap-2 text-lg font-semibold text-(--black)">
                <CircleDollarSign className="h-5 w-5" />
                Plans
              </div>
              <p className="mt-2 text-sm text-(--darkGray)">
                Plan details will appear here.
              </p>
            </div>
          ) }

          {activeTab === 'billing' && (
            <div className="rounded-xl border border-(--border) p-5">
              <div className="flex items-center gap-2 text-lg font-semibold text-(--black)">
                <CreditCard className="h-5 w-5" />
                Billing
              </div>
              <p className="mt-2 text-sm text-(--darkGray)">
                Billing details will appear here.
              </p>
            </div>
          ) }

          {activeTab === 'notifications' && (
            <div className="rounded-xl border border-(--border) p-5">
              <div className="flex items-center gap-2 text-lg font-semibold text-(--black)">
                <Cog className="h-5 w-5" />
                Notifications
              </div>
              <p className="mt-2 text-sm text-(--darkGray)">
                Notification preferences will appear here.
              </p>
            </div>
          )  }
        </div>
      </section>
    </div>
  )
}

