import { Plus } from 'lucide-react'

import { Button } from '../../ui/Button'

export function McpAddModalContent() {
  return (
    <div className="space-y-4 pb-2">
      <div>
        <p className="text-sm font-semibold text-(--black)">MCP</p>
        <p className="mt-1 text-sm text-(--black)">
          Add the MCP server to your workspace by pasting the configuration details into the form below
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Enter the name of the MCP"
          className="h-10 w-full rounded-lg border border-(--border) bg-(--white) px-3 text-sm text-(--black) outline-none"
        />
        <input
          type="text"
          placeholder="Enter the URL of the MCP"
          className="h-10 w-full rounded-lg border border-(--border) bg-(--white) px-3 text-sm text-(--black) outline-none"
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-(--black)">Timeout (ms)</p>
        <div className="mt-2 flex overflow-hidden rounded-lg border border-(--border)">
          <input
            type="text"
            defaultValue="10000"
            className="h-10 flex-1 bg-(--white) px-3 text-sm text-(--black) outline-none"
          />
          <span className="inline-flex min-w-[100px] items-center justify-center border-l border-(--border) bg-(--white) px-3 text-sm text-(--black)">
            milliseconds
          </span>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-(--black)">Headers</p>
        <p className="mt-1 text-sm text-(--black)">
          Specify the HTTP headers required for your MCP connection request.
        </p>
        <Button type="button" variant="outline" size="sm" className="mt-2 rounded-lg px-3">
          <Plus className="h-4 w-4" />
          New key value pair
        </Button>
      </div>

      <div>
        <p className="text-sm font-semibold text-(--black)">Query Parameters</p>
        <p className="mt-1 text-sm text-(--black)">
          Query string parameters to append to the URL.
        </p>
        <Button type="button" variant="outline" size="sm" className="mt-2 rounded-lg px-3">
          <Plus className="h-4 w-4" />
          New key value pair
        </Button>
      </div>
    </div>
  )
}

