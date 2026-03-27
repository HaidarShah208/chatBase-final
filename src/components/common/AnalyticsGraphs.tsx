import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import type { AnalyticsGraphsData } from '../../types/types'
import { TrendingUp } from 'lucide-react'
import curve from '../../assets/analytics/curve.svg'
import pieChart from '../../assets/analytics/pieChart.svg'

const BLUE = 'var(--brand)'
const BLUE_DEEP = 'var(--brand)'
const MUTED = 'var(--border)'

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
          endAngle={550}
          outerRadius={size / 2 - 10}
          innerRadius={size / 2 - 22}
          cornerRadius={1}
          stroke="none"
        >
          <Cell fill={BLUE_DEEP} />
          <Cell fill={MUTED} />
        </Pie>
      </PieChart>
      <div className="absolute flex flex-col items-center justify-center">
        <div className="lg:text-2xl text-lg font-semibold leading-none text-(--brand)">{safe}%</div>
      </div>
    </div>
  )
}

export function AnalyticsGraphs({ data }: { data: AnalyticsGraphsData }) {
  const pieColors = [BLUE_DEEP, BLUE, MUTED]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-(--border) bg-(--white) p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--black)">
                <span><TrendingUp className='w-5 h-5'/> </span>
              </div>
              <div>
                <div className="lg:text-2xl md:text-lg text-base font-semibold text-(--black)">Usage history</div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-56 lg:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.usageHistory}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical
                  horizontal
                  stroke="var(--darkGray)"
                  strokeOpacity={0.35}
                />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#8B8D8D' }} />
                <YAxis
                  tick={{ fontSize: 11, fill: '#8B8D8D' }}
                  axisLine={{ stroke: 'var(--darkGray)', strokeWidth: 1.5 }}
                  tickLine={false}
                  width={42}
                />
                <Bar dataKey="value" fill={BLUE} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4 lg:col-span-1">
          {data.circularTopRight.map((c, idx) => (
            <div key={idx} className="rounded-xl border border-(--border) bg-(--white) p-4">
              <div className="flex items-start justify-between">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-(--brand) text-(--brand)">
                <img src={curve} className='w-4 h-4'/>
                </div>
                <span className="rounded-md bg-(--primarySoft) px-2.5 py-0.5 text-xs border border-(--brandBorder) font-semibold text-(--brand)">
                  {c.percent}%
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="lg:text-2xl text-lg font-bold leading-none text-(--black)">
                      {c.fraction.split('/')[0]?.trim()}
                    </span>
                    <span className="text-lg leading-none text-(--muted)">
                      / {c.fraction.split('/')[1]?.trim()}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-(--darkGray)">
                    {c.label}
                  </div>
                </div>

                <CircularPercent percent={c.percent} size={125} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-(--border) bg-(--white) p-4">
        <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--black)">
                <span><img src={pieChart} className='w-5 h-5'/> </span>
              </div>
          <div className="lg:text-2xl md:text-lg text-base font-semibold text-(--black)">Credits used per agent</div>
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
                className="flex items-center justify-between rounded-lg bg-(--primarySoft) px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-(--brand)" />
                  <span className="text-sm font-medium text-(--black)">{d.name}</span>
                </div>
                <span className="text-xs font-semibold border border-(--border) bg-white p-1.5 rounded-md text-(--black)">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

