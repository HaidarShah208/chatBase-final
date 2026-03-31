import { Info } from 'lucide-react'

import { Button } from '../../ui/Button'

export function CustomDomainsModal() {
  return (
    <div className="space-y-6 pb-6">
      <p className="text-sm pb-3 text-(--black)">
        Use your own custom domains for the embed script, iframe, and agent link.
      </p>

        <input
          type="text"
          placeholder="chat.my-website.com"
          className="h-11 w-full flex-1 rounded-lg border border-(--border) bg-(--white) px-3 text-sm text-(--black) outline-none focus:ring-0 focus:ring-offset-0"
        />
      <div className="w-full flex justify-end">
        <Button
          type="button"
          variant="primary"
          size="md"
          className="h-10  rounded-md px-6 text-sm font-semibold"
        >
          Save
        </Button>
      </div>

      <div className="flex items-start justify-center gap-2 rounded-lg bg-[#E0F5FF] px-2 md:px-4 py-3 text-xs md:text-sm text-(--slate)">
<div className='mt-1'>
<Info className="h-4 w-4  text-(--brand)" aria-hidden />

</div>
        <p className="leading-relaxed">
          If your domain is example.com, we recommend using{' '}
          <span className="font-semibold">chat.example.com</span> as your custom subdomain. You can
          replace <span className="font-semibold">chat</span> with anything you like, as long as
          it&apos;s a valid subdomain.
        </p>
      </div>
    </div>
  )
}

