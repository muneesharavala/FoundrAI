// no default React import required
import { GlassCard } from '@/components/ui/GlassCard'
import { ThinkingCard } from './ThinkingCard'
import { motion } from 'framer-motion'

type AgentState = {
  name: string
  role: string
  progress: number
  task: string
  active: boolean
  completed: boolean
}

type Props = {
  agents?: AgentState[]
  reportReady?: boolean
}

export function ThinkingPanel({ agents = [], reportReady = false }: Props) {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">AI Thinking Preview</h3>
        <p className="text-xs text-slate-400">Live simulation</p>
      </div>

      <div className="mt-3 space-y-3">
        {agents.map(a => (
          <ThinkingCard key={a.name} {...a} />
        ))}

        {reportReady && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/8 bg-gradient-to-r from-cyan-600/6 to-fuchsia-600/6 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Startup Report Ready</p>
                <p className="text-xs text-slate-400">All agents have completed their tasks</p>
              </div>
              <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-2 text-sm font-semibold text-white">View Startup Report</button>
            </div>
          </motion.div>
        )}
      </div>
    </GlassCard>
  )
}

export default ThinkingPanel
