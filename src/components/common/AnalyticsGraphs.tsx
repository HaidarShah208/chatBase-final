import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import type { AnalyticsGraphsData } from '../../types/types'
import { TrendingUp } from 'lucide-react'


const BLUE = '#0EA5FF'
const BLUE_DEEP = '#0284C7'
const MUTED = '#E2E8F0'

function CircularPercent({ percent, size = 114 }: { percent: number; size?: number }) {
  const safe = Math.max(0, Math.min(100, percent))
  const used = safe
  const rest = 100 - safe

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <PieChart width={size} height={size}>
        <Pie
          data={[
            { name: 'used', value: used },
            { name: 'rest', value: rest },
          ]}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          outerRadius={size / 2 - 10}
          innerRadius={size / 2 - 22}
          stroke="none"
        >
          <Cell fill={BLUE_DEEP} />
          <Cell fill={MUTED} />
        </Pie>
      </PieChart>
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-base font-bold text-(--brand)">{safe}%</div>
      </div>
    </div>
  )
}

export function AnalyticsGraphs({ data }: { data: AnalyticsGraphsData }) {
  const pieColors = ['#0284C7', '#0EA5FF', MUTED]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-(--border) bg-(--white) p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--black)">
                <span><TrendingUp className='w-5 h-5'/> </span>
              </div>
              <div>
                <div className="lg:text-2xl md:text-lg text-base font-semibold text-(--black)">Usage history</div>
              </div>
            </div>
          </div>

          <div className="mt-4 h-56 lg:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.usageHistory}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={MUTED} />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#8B8D8D' }} />
                <YAxis hide />
                <Bar dataKey="value" fill={BLUE} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-1">
          {data.circularTopRight.map((c, idx) => (
            <div key={idx} className="rounded-xl border border-(--border) bg-(--white) p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-medium text-(--darkGray)">{c.label}</div>
                  <div className="text-xs text-(--grayish)">{c.subLabel}</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E0F2FE] text-(--brand)">
                  {c.icon}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <CircularPercent percent={c.percent} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-(--border) bg-(--white) p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-(--black)">Credits used per agent</div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-[200px] w-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.creditsUsedPerAgent}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={95}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={1}
                    >
                      {data.creditsUsedPerAgent.map((d, i) => (
                        <Cell key={`${d.name}-${i}`} fill={pieColors[i % pieColors.length]} />
                      ))}
                    </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {data.creditsUsedPerAgent.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="flex items-center justify-between rounded-lg bg-(--background) px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-(--brand)" />
                  <span className="text-xs font-medium text-(--black)">{d.name}</span>
                </div>
                <span className="text-xs font-semibold text-(--darkGray)">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

