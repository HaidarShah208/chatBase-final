const PLAN_CARDS = [
  {
    key: 'hobby',
    title: 'Hobby',
    price: '$40',
    per: 'Per month',
    features: ['20 messages / month', '2 agents', '10 MB'],
    featured: false,
  },
  {
    key: 'standard',
    title: 'Standard',
    price: '$40',
    per: 'Per month',
    features: ['40 messages / month', '4 agents', '20 MB'],
    featured: true,
  },
  {
    key: 'pro',
    title: 'Pro',
    price: '$40',
    per: 'Per month',
    features: ['40 messages / month', '4 agents', '20 MB'],
    featured: false,
  },
] as const
import check from '../../../assets/settings/check.svg'
export function PlansTab() {
  return (
    <div>
      <h2 className="pt-6 text-lg font-bold text-(--black) md:text-xl lg:text-3xl">Plans</h2>
      <p className="mt-1 text-xs text-(--black) md:text-sm">Choose the perfect plan for your needs</p>

      <div className="mt-4 grid grid-cols-1 gap-0 lg:grid-cols-3">
        {PLAN_CARDS.map((plan) => (
          <div
            key={plan.key}
            className={`relative rounded-xl border ${
              plan.featured
                ? 'z-10 lg:-mt-3 border-(--brand) border-4 bg-(--black) text-(--white)'
                : 'border-(--border) bg-(--white) text-(--black)'
            }`}
          >
            {plan.featured ? (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-(--black) px-4.5 py-1.5 text-base font-semibold leading-none tracking-[0.32em] text-(--white)">
                POPULAR
              </span>
            ) : null}

            <div
              className={`px-5 py-7 ${
                plan.featured ? '' : 'border-b border-(--border)'
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
    </div>
  )
}

