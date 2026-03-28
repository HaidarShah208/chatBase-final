import { Mail, Save, SaveAll } from 'lucide-react'

import { Input } from '../../../components/ui/Input'
import { Button } from '../../../components/ui/Button'

export function BillingTab() {
  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-(--black) md:text-xl lg:text-3xl">Billing</h2>
      <p className="mt-1 text-xs text-(--black) md:text-sm">Choose the perfect plan for your needs</p>

      <div className="mt-6 rounded-xl border border-(--border) p-3 sm:p-6">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-(--grayish)">Organization name</label>
            <Input placeholder="Enter Organization name" className="h-11 bg-(--white)" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-(--grayish)">Country or region</label>
            <Input placeholder="Enter country or region" className="h-11 bg-(--white)" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-(--grayish)">Address line 1</label>
            <Input placeholder="Enter address" className="h-11 bg-(--white)" />
          </div>
        </div>

        <div className="mt-10 flex justify-end">
        <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-md bg-(--brand) lg:px-12 md:px-8 px-4 text-sm font-medium text-(--white)"
          >
            <SaveAll className="h-3.5 w-3.5" />
            save
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-(--border) p-3 sm:px-4 sm:py-7" >
        <div className="mb-5 flex items-center gap-2 text-2xl font-semibold text-(--black)">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-(--black)">
            <Mail className="h-4 w-4 text-(--white)" />
          </span>
          Billing email
        </div>

        <div className='md:pt-6 pt-3'>
          <label className="mb-2 block text-sm text-(--grayish)">Email used for invoices</label>
          <Input defaultValue="@gmail.com" className="h-11 bg-(--white)" />
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-2.5 rounded-md bg-(--brand) lg:px-12 md:px-8 px-4 text-sm font-medium text-(--white)"
          >
            <SaveAll className="h-3.5 w-3.5" />
            save
          </button>
        </div>
      </div>
    </div>
  )
}

