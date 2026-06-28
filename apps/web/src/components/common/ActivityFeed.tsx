import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type ActivityItem = {
  name: string
  action: string
  time: string
  status: 'Live' | 'Queued' | 'Completed'
  accent?: string
}

type ActivityFeedProps = {
  items?: ActivityItem[]
  className?: string
}

const defaultItems: ActivityItem[] = [
  { name: 'CEO AI', action: 'Prepared an investor update summary', time: '2m ago', status: 'Live', accent: 'from-violet-500 to-cyan-400' },
  { name: 'Research AI', action: 'Mapped new market signals and competitors', time: '14m ago', status: 'Queued', accent: 'from-cyan-500 to-blue-400' },
  { name: 'Finance AI', action: 'Forecasted runway and growth scenarios', time: '27m ago', status: 'Completed', accent: 'from-emerald-500 to-teal-400' },
  { name: 'Marketing AI', action: 'Drafted launch messaging for the new funnel', time: '41m ago', status: 'Live', accent: 'from-fuchsia-500 to-violet-400' },
  { name: 'Legal AI', action: 'Reviewed contract clauses for expansion readiness', time: '1h ago', status: 'Completed', accent: 'from-amber-500 to-orange-400' },
]

export function ActivityFeed({ items = defaultItems, className }: ActivityFeedProps) {
  return (
    <GlassCard className={cn('border-white/10 bg-[#0b1120]/90 p-0', className)}>
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-sm font-semibold text-white">Live activity</p>
        <p className="text-sm text-slate-400">Recent AI updates across your startup stack</p>
      </div>

      <div className="divide-y divide-white/10">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="flex items-start gap-3 px-5 py-4"
          >
            <div className={cn('flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-lg', item.accent)}>
              <Sparkles className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.action}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  {item.status === 'Live' ? <span className="h-2 w-2 rounded-full bg-emerald-400" /> : null}
                  <span>{item.time}</span>
                </div>
              </div>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <span className={cn(item.status === 'Live' ? 'text-emerald-300' : item.status === 'Queued' ? 'text-amber-300' : 'text-cyan-300')}>
                  {item.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
