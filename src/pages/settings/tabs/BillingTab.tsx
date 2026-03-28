import type { ReactNode } from 'react'
import { CreditCard, Mail, Plus, SaveAll } from 'lucide-react'
import billingRecipt from '../../../assets/settings/billingReceipt.svg'
import recipt from '../../../assets/settings/Receipt.svg'
import { DataTable } from '../../../components/common/DataTable'
import { Input } from '../../../components/ui/Input'
import { billingHistoryHeaders, billingMethodHeaders } from '../../../lib/data'



export function BillingTab() {
  const paymentMethodRows: Array<Record<string, ReactNode>> = [
    {
      id: '1',
      brand: 'Lorem ipsum',
      lastFour: '2345',
      exp: '12/2026',
    },
  ]

  const billingHistoryRows: Array<Record<string, ReactNode>> = [
    {
      id: '1',
      invoiceNumber: '10017878',
      created: '2345',
      amount: '$500',
      status: <span className="font-semibold text-emerald-500">Done</span>,
    },
  ]

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
        <div className="mb-5 flex items-center gap-2 md:text-2xl text-lg font-semibold text-(--black)">
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

      <div className="mt-4 rounded-xl border border-(--border) bg-(--white) p-3 sm:p-5">
        <div className="-mx-3 flex flex-col gap-4 border-b border-(--border) px-3 pb-4 sm:-mx-5 sm:px-5 sm:flex-row sm:items-start sm:justify-between sm:pb-5">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--black) sm:h-9 sm:w-9">
              <CreditCard className="h-4 w-4 text-(--white)" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-(--black) md:text-2xl">Billing method</h3>
              <p className="mt-0.5 md:text-sm text-xs text-(--black)">Manage your payment methods</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-full shrink-0 items-center justify-center gap-2.5 rounded-md bg-(--brand) lg:px-12 md:px-8 px-4 text-sm font-medium text-(--white) sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>

        {paymentMethodRows.length > 0 ? (
          <DataTable
            variant="cards"
            className="mt-4 min-h-70"
            headers={billingMethodHeaders}
            rows={paymentMethodRows}
            rowKey={(row) => String(row.id)}
            headerClassName="rounded-lg"
            cardsListClassName="!px-0"
          />
        ) : (
          <>
            <div className="mt-4 rounded-lg bg-(--background) px-3 py-2.5 sm:px-4">
              <div className="grid grid-cols-3 gap-2 text-xs uppercase tracking-wide text-(--grayish) md:text-sm">
                <span className="text-left">Brand</span>
                <span className="text-center">Number (Last 4)</span>
                <span className="text-right">Exp. Date</span>
              </div>
            </div>

            <div className="flex min-h-[220px] flex-col items-center justify-center px-4 py-10 sm:min-h-[260px] sm:py-14">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-(--bg-primary) sm:h-20 sm:w-20">
                <CreditCard className="h-7 w-7 text-(--black) sm:h-9 sm:w-9" strokeWidth={1.25} />
              </span>
              <p className="pt-4 text-center text-sm  text-(--black) sm:text-base">
                No payment methods added yet
              </p>
              <p className="mt-1 text-center text-xs text-(--grayish) sm:text-sm">
                Add a credit card to manage billing
              </p>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 rounded-xl border border-(--border) bg-(--white) p-3 sm:p-5">
        <div className="-mx-3 border-b border-(--border) px-3 pb-4 sm:-mx-5 sm:px-5 sm:pb-5">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-(--black) sm:h-9 sm:w-9">
              <img src={billingRecipt} className="h-4 w-4  " />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-(--black) md:text-2xl">Billing history</h3>
              <p className="mt-0.5 text-xs text-(--black) md:text-sm">View and download past invoices</p>
            </div>
          </div>
        </div>

        {billingHistoryRows.length > 0 ? (
          <DataTable
            variant="cards"
            className="mt-4 min-h-70"
            headers={billingHistoryHeaders}
            rows={billingHistoryRows}
            rowKey={(row) => String(row.id)}
            headerClassName="rounded-lg"
            cardsListClassName="!px-0"
          />
        ) : (
          <>
            <div className="mt-4 overflow-x-auto rounded-lg bg-(--background) px-3 py-2.5 sm:px-4">
              <div className="grid min-w-[280px] grid-cols-4 gap-2 text-xs uppercase tracking-wide text-(--grayish) sm:min-w-0 md:text-sm">
                <span className="text-left">Invoice Number</span>
                <span className="text-center">Created</span>
                <span className="text-center">Amount</span>
                <span className="text-right">Status</span>
              </div>
            </div>

            <div className="flex min-h-[220px] flex-col items-center justify-center px-4 py-10 sm:min-h-[260px] sm:py-14">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-(--bg-primary) sm:h-20 sm:w-20">
                <img src={recipt} className="h-7 w-7 text-(--black) sm:h-9 sm:w-9" alt="" />
              </span>
              <p className="pt-4 text-center text-sm font-medium text-(--black) sm:text-base">
                No invoices yet
              </p>
              <p className="mt-1 text-center text-xs text-(--grayish) sm:text-sm">
                Your billing history will appear here
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

