import { Settings } from 'lucide-react'
import { useState } from 'react'

import { BillingTab } from './tabs/BillingTab'
import { GeneralTab } from './tabs/GeneralTab'
import { NotificationsTab } from './tabs/NotificationsTab'
import { PlansTab } from './tabs/PlansTab'

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
          {activeTab === 'general' && <GeneralTab /> }
          {activeTab === 'plans' && <PlansTab /> }
          {activeTab === 'billing' && <BillingTab /> }
          {activeTab === 'notifications' && <NotificationsTab /> }
        </div>
      </section>
    </div>
  )
}

