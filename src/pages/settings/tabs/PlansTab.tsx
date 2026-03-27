const PLAN_CARDS = [
  {
    key: 'hobby',
    title: 'Hobby',
    price: '$40',
    per: 'Per month',
    features: ['20 messages / month', '2 agents', '10 MB'],
    featured: false,
    cornerClass: 'lg:rounded-r-none',          
  },
  {
    key: 'standard',
    title: 'Standard',
    price: '$40',
    per: 'Per month',
    features: ['40 messages / month', '4 agents', '20 MB'],
    featured: true,
    cornerClass: '',
  },
  {
    key: 'pro',
    title: 'Pro',
    price: '$40',
    per: 'Per month',
    features: ['40 messages / month', '4 agents', '20 MB'],
    featured: false,
    cornerClass: 'lg:rounded-l-none',           
  },
] as const

import { Crown } from 'lucide-react'
import check from '../../../assets/settings/check.svg'
import { Button } from '../../../components/ui/Button'

export function PlansTab() {
  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-(--black) md:text-xl lg:text-3xl">Plans</h2>
      <p className="mt-1 text-xs text-(--black) md:text-sm">Choose the perfect plan for your needs</p>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-6">
        {PLAN_CARDS.map((plan) => (
          <div
            key={plan.key}
            className={`relative rounded-xl border ${plan.cornerClass} ${
              plan.featured
                ? 'z-10 lg:-mt-3 border-(--brand) border-b-4 border-x-4 border-t-30  bg-(--black) text-(--white)'
                : 'border-(--border) bg-(--white) text-(--black)'
            }`}
          >
            {plan.featured ? (
              <span className="absolute -top-10.5 left-1/2 -translate-x-1/2 rounded-md bg-(--black) px-4.5 py-1.5 text-base font-semibold leading-none tracking-[0.32em] text-(--white)">
                POPULAR
              </span>
            ) : null}

            <div
              className={`px-5 py-7 ${
                plan.featured
                  ? 'pt-2'                      
                  : 'border-b border-(--border)'
              }`}
            >
              <div className="text-2xl font-medium">{plan.title}</div>
              <div className="mt-4 text-5xl font-semibold">{plan.price}</div>
              <div className={`mt-1 text-base ${plan.featured ? 'text-[#D4D4D4]' : 'text-(--black)'}`}>
                {plan.per}
              </div>
            </div>

            <div className="px-5 py-9">
              <div className={`text-sm ${plan.featured ? 'text-[#D4D4D4]' : 'text-(--slate)'}`}>Included</div>
              <ul className="mt-4 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <img src={check} alt="" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-5 h-10 w-full cursor-pointer rounded-md border text-sm font-medium ${
                  plan.featured
                    ? 'border-(--brand) bg-(--brand) text-(--white)'
                    : 'border-(--brandBorder) hover:bg-(--brand) hover:text-(--white) bg-(--white) text-(--black)'
                }`}
              >
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 rounded-xl border border-(--border) bg-(--lightGray) px-5 py-5">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xl font-bold text-(--black)">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-(--black)">
                <Crown className="h-4 w-4 text-(--white)" />
              </span>
              Enterprise
            </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="pt-6 text-sm text-(--slate)">Everything in Pro +</p>

          <Button
            type="button"
            variant='primary'
            className="h-11 rounded-lg bg-(--brand) px-6 text-base font-medium text-(--white)"
            >
            Contact us
          </Button>
        </div>
            </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {['SSO', 'SLAs', 'Priority support', 'Higher limits', 'Success manager (CSM)'].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-base font-medium text-(--black)">
              <img src={check} alt="" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}