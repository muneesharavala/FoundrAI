import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Aurora } from '@/components/animations/Aurora'
import { Particles } from '@/components/animations/Particles'
import { GradientButton } from '@/components/ui/GradientButton'
import { GlowCard } from '@/components/ui/GlowCard'
import { cn } from '@/lib/cn'

type HeroSectionProps = {
  title?: string
  subtitle?: string
  eyebrow?: string
  actions?: React.ReactNode
  className?: string
}

export function HeroSection({
  title = 'The AI Operating System\nfor Startup Founders',
  subtitle = 'Launch faster with an intelligent command center for product strategy, fundraising, execution, and daily decision-making.',
  eyebrow = 'AI PRODUCTIVITY',
  actions,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn('relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060816] px-6 py-16 sm:px-10 lg:px-16 lg:py-24', className)}>
      <Aurora />
      <Particles />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
            {title.split('\n').map((line, index) => (
              <span key={`${line}-${index}`} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {actions ?? (
              <>
                <GradientButton className="px-6 py-3 text-base">
                  Start building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </GradientButton>
                <button className="rounded-[20px] border border-white/10 bg-white/8 px-6 py-3 text-base font-semibold text-slate-200 backdrop-blur transition hover:bg-white/12">
                  Explore workspace
                </button>
              </>
            )}
          </div>
        </div>

        <GlowCard className="w-full max-w-xl border-white/15 bg-[rgba(7,11,24,0.82)]">
          <div className="relative space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">FoundrAI Command Center</p>
                <p className="text-xs text-slate-500">Real-time AI copilots for your startup</p>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                LIVE
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#0c1222] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-sm font-semibold text-white">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Strategic planning assistant</p>
                  <p className="text-sm text-slate-400">Summarizing traction and investor signals</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm text-slate-300">Launch experiments, manage roadmaps, and move faster.</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Signal</p>
                <p className="mt-2 text-sm text-slate-300">Turn messy context into proactive founder guidance.</p>
              </div>
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </section>
  )
}
