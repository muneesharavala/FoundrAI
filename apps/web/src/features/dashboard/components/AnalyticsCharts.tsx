import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 18 },
  { month: 'Feb', revenue: 26 },
  { month: 'Mar', revenue: 34 },
  { month: 'Apr', revenue: 48 },
  { month: 'May', revenue: 63 },
  { month: 'Jun', revenue: 81 },
]

const ideaData = [
  { week: 'W1', ideas: 28 },
  { week: 'W2', ideas: 42 },
  { week: 'W3', ideas: 57 },
  { week: 'W4', ideas: 73 },
  { week: 'W5', ideas: 96 },
  { week: 'W6', ideas: 124 },
]

const chartTheme = {
  axis: '#64748b',
  grid: 'rgba(148,163,184,0.12)',
}

export function AnalyticsCharts() {
  return (
    <section className="grid gap-5 xl:grid-cols-2">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="rounded-[24px] border border-white/8 bg-gradient-to-b from-white/4 to-transparent p-6 shadow-[0_26px_90px_-48px_rgba(14,165,233,0.06)] backdrop-blur-3xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">Analytics</p>
        <h2 className="mt-2 text-xl font-semibold text-white">Revenue Overview</h2>
        <div className="mt-6 h-72 min-h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={chartTheme.grid} vertical={false} />
              <XAxis dataKey="month" stroke={chartTheme.axis} tickLine={false} axisLine={false} />
              <YAxis stroke={chartTheme.axis} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15,23,42,0.92)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  color: '#fff',
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06b6d4"
                strokeWidth={3}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
        className="rounded-[24px] border border-white/8 bg-gradient-to-b from-white/4 to-transparent p-6 shadow-[0_26px_90px_-48px_rgba(168,85,247,0.04)] backdrop-blur-3xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200/75">Momentum</p>
        <h2 className="mt-2 text-xl font-semibold text-white">Idea Growth</h2>
        <div className="mt-6 h-72 min-h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ideaData}>
              <CartesianGrid stroke={chartTheme.grid} vertical={false} />
              <XAxis dataKey="week" stroke={chartTheme.axis} tickLine={false} axisLine={false} />
              <YAxis stroke={chartTheme.axis} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15,23,42,0.92)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  color: '#fff',
                }}
              />
              <Line
                type="monotone"
                dataKey="ideas"
                stroke="#d946ef"
                strokeWidth={3}
                dot={{ fill: '#d946ef', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, fill: '#38bdf8' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.article>
    </section>
  )
}
