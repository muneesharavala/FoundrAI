import { motion } from 'framer-motion'
import { Mic, Paperclip, Sparkles, Wand2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type PromptBoxProps = {
  className?: string
  placeholder?: string
  initialValue?: string
}

export function PromptBox({ className, placeholder = 'Describe your startup idea, target user, or current challenge...', initialValue = '' }: PromptBoxProps) {
  const characterCount = initialValue.length

  return (
    <GlassCard className={cn('relative overflow-hidden border-white/10 bg-[#0b1120]/90 p-0', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-transparent bg-[linear-gradient(120deg,rgba(139,92,246,0.25),rgba(59,130,246,0.15),transparent_50%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:xor] [padding:1px]" />

        <div className="relative p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Prompt composer
            </div>
            <div className="text-xs text-slate-500">Ctrl + Enter to generate</div>
          </div>

          <div className="mt-4 rounded-[20px] border border-white/10 bg-[#060816]/80 p-3 shadow-inner">
            <textarea
              className="min-h-[180px] w-full resize-none bg-transparent px-2 py-2 text-sm leading-7 text-slate-200 outline-none placeholder:text-slate-500"
              placeholder={placeholder}
              defaultValue={initialValue}
              aria-label="Startup prompt"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                <Mic className="h-4 w-4" />
                Voice
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                <Paperclip className="h-4 w-4" />
                Upload
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                <Sparkles className="h-4 w-4" />
                Templates
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">{characterCount}/1200</span>
              <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_-20px_rgba(59,130,246,0.75)] transition hover:opacity-95">
                <Wand2 className="h-4 w-4" />
                Generate Startup
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </GlassCard>
  )
}
