import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

const activities = [
  { title: 'CEO AI analyzed market', time: '2h', status: 'success' },
  { title: 'Marketing AI created strategy', time: '4h', status: 'info' },
  { title: 'Finance AI generated forecast', time: '7h', status: 'success' },
  { title: 'CTO AI suggested architecture', time: '1d', status: 'warning' },
  { title: 'Research AI validated competitors', time: '2d', status: 'info' },
]

const statusColors: Record<string, string> = {
  success: 'bg-emerald-400/90',
  info: 'bg-cyan-400/90',
  warning: 'bg-amber-400/90',
}

export function ActivityTimeline() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: 'easeOut', delay: 0.03 }}
      className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">Recent activity</p>
          <h2 className="mt-2 text-xl font-semibold text-white">AI execution timeline</h2>
        </div>
        <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
          <Bot className="size-5 text-cyan-200" />
        </div>
      </div>

      <div className="mt-6 relative pl-6">
        <div className="absolute left-3 top-6 bottom-4 w-px bg-gradient-to-b from-white/8 to-white/3" />
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.06 }}
              className="relative flex gap-4 items-start"
            >
              <div className="absolute left-0 top-1">
                <div className={`h-3.5 w-3.5 rounded-full ${statusColors[activity.status]} ring-4 ring-white/6 shadow-sm`} />
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-950/36 px-4 py-3 transition hover:scale-[1.01] hover:shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{activity.title}</p>
                  <p className="text-xs text-slate-500">{activity.time} ago</p>
                </div>
                <p className="mt-2 text-xs text-slate-400">Executed by system agents. <span className="sr-only">Status: {activity.status}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
