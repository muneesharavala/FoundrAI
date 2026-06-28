import { motion } from 'framer-motion'
import { ArrowUp, Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type CommandPromptProps = {
  placeholder?: string
  buttonLabel?: string
  className?: string
  onSubmit?: () => void
}

export function CommandPrompt({
  placeholder = 'Ask FoundrAI to plan, analyze, or automate...',
  buttonLabel = 'Run',
  className,
  onSubmit,
}: CommandPromptProps) {
  return (
    <GlassCard className={cn('overflow-hidden border-white/10 bg-[#0b1120]/90 p-0', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          AI command prompt
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#060816] p-3 shadow-inner">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-sm font-semibold text-white">
              AI
            </div>

            <input
              className="flex-1 bg-transparent px-2 py-2 text-sm text-slate-200 outline-none placeholder:text-slate-500"
              placeholder={placeholder}
              aria-label="AI command prompt"
            />

            <button
              type="button"
              onClick={onSubmit}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {buttonLabel}
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Plan a launch</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Analyze traction</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Draft investor updates</span>
          </div>
        </div>
      </motion.div>
    </GlassCard>
  )
}
