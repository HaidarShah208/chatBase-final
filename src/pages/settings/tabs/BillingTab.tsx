import { CreditCard } from 'lucide-react'

export function BillingTab() {
  return (
    <div className="rounded-xl border border-(--border) p-5">
      <div className="flex items-center gap-2 text-lg font-semibold text-(--black)">
        <CreditCard className="h-5 w-5" />
        Billing
      </div>
      <p className="mt-2 text-sm text-(--darkGray)">Billing details will appear here.</p>
    </div>
  )
}

