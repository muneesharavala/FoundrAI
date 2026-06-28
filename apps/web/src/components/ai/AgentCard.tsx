import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type AgentCardProps = {
  name: string
  role: string
  description: string
  status?: 'Online' | 'Busy' | 'Standby'
  accent?: string
  className?: string
}

export function AgentCard({ name, role, description, status = 'Online', accent = 'from-violet-500 to-cyan-400', className }: AgentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn('group', className)}
    >
      <GlassCard className="relative overflow-hidden border-white/10 bg-[#0b1120]/90 p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="relative flex items-start gap-3">
          <div className={cn('flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-lg', accent)}>
            <Sparkles className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-slate-400">{role}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {status}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
