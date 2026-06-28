import { motion } from 'framer-motion'
import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type MetricCardProps = {
  title: string
  value: string
  subtitle?: string
  tone?: 'violet' | 'cyan' | 'emerald' | 'amber'
  className?: string
}

function MetricCard({ title, value, subtitle, tone = 'violet', className }: MetricCardProps) {
  const toneClasses = {
    violet: 'from-violet-500/20 to-violet-400/5 text-violet-200',
    cyan: 'from-cyan-500/20 to-cyan-400/5 text-cyan-200',
    emerald: 'from-emerald-500/20 to-emerald-400/5 text-emerald-200',
    amber: 'from-amber-500/20 to-amber-400/5 text-amber-200',
  }

  return (
    <GlassCard className={cn('border-white/10 bg-[#0b1120]/90 p-5', className)}>
      <div className={cn('inline-flex rounded-2xl bg-gradient-to-br p-3', toneClasses[tone])}>
        <div className="h-2.5 w-2.5 rounded-full bg-current" />
      </div>
      <div className="mt-4">
        <p className="text-sm text-slate-400">{title}</p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-3xl font-semibold text-white"
        >
          {value}
        </motion.p>
        {subtitle ? <p className="mt-2 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
    </GlassCard>
  )
}

type AnalyticsCardsProps = {
  className?: string
}

export function AnalyticsCards({ className }: AnalyticsCardsProps) {
  const trendData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 34 },
    { month: 'Mar', value: 28 },
    { month: 'Apr', value: 52 },
    { month: 'May', value: 64 },
    { month: 'Jun', value: 76 },
  ]

  const breakdownData = [
    { name: 'Growth', value: 42, color: '#8B5CF6' },
    { name: 'Revenue', value: 33, color: '#3B82F6' },
    { name: 'Funding', value: 25, color: '#06B6D4' },
  ]

  return (
    <div className={cn('grid gap-4 xl:grid-cols-[1.1fr_0.9fr]', className)}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        <MetricCard title="Startup Score" value="92/100" subtitle="Momentum is strong" tone="violet" />
        <MetricCard title="Funding Score" value="81/100" subtitle="Investor readiness" tone="cyan" />
        <MetricCard title="Market Size" value="$3.2B" subtitle="Addressable TAM" tone="emerald" />
        <MetricCard title="Revenue" value="$1.4M" subtitle="Annualized run rate" tone="amber" />
      </div>

      <div className="grid gap-4">
        <GlassCard className="border-white/10 bg-[#0b1120]/90 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Growth</p>
              <p className="mt-1 text-2xl font-semibold text-white">+38%</p>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Healthy
            </div>
          </div>

          <div className="mt-4 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="url(#trendFill)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="border-white/10 bg-[#0b1120]/90 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Performance Mix</p>
              <p className="mt-1 text-2xl font-semibold text-white">Balanced</p>
            </div>
          </div>

          <div className="mt-4 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={breakdownData} dataKey="value" nameKey="name" innerRadius={46} outerRadius={70} paddingAngle={2}>
                  {breakdownData.map((entry) => (
                    <Pie key={entry.name} dataKey="value" data={breakdownData} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
