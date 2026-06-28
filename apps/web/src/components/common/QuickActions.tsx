import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Briefcase, FileText, Lightbulb, Search, Sparkles, TrendingUp } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type QuickActionItem = {
  title: string
  description: string
  icon: React.ReactNode
}

type QuickActionsProps = {
  items?: QuickActionItem[]
  className?: string
}

const defaultItems: QuickActionItem[] = [
  { title: 'Validate Startup', description: 'Assess ideas, product fit, and key assumptions.', icon: <Lightbulb className="h-5 w-5" /> },
  { title: 'Generate MVP', description: 'Turn strategy into an execution-ready roadmap.', icon: <Sparkles className="h-5 w-5" /> },
  { title: 'Market Research', description: 'Surface demand signals and target audience insights.', icon: <Search className="h-5 w-5" /> },
  { title: 'Competitor Analysis', description: 'Compare positioning, features, and whitespace.', icon: <BarChart3 className="h-5 w-5" /> },
  { title: 'Business Model', description: 'Build unit economics and growth hypotheses.', icon: <Briefcase className="h-5 w-5" /> },
  { title: 'Financial Forecast', description: 'Model runway, revenue scenarios, and burn rate.', icon: <TrendingUp className="h-5 w-5" /> },
  { title: 'Pitch Deck', description: 'Craft investor-ready narratives and slide structure.', icon: <FileText className="h-5 w-5" /> },
  { title: 'Go To Market', description: 'Plan launches, messaging, and acquisition motion.', icon: <ArrowRight className="h-5 w-5" /> },
]

export function QuickActions({ items = defaultItems, className }: QuickActionsProps) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-2 xl:grid-cols-4', className)}>
      {items.map((item, index) => (
        <motion.button
          key={item.title}
          type="button"
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-left"
        >
          <GlassCard className="group h-full border-white/10 bg-[#0b1120]/90 p-5 transition hover:border-cyan-400/30 hover:bg-[#10182d]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-white shadow-lg">
                {item.icon}
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">0{index + 1}</span>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:translate-x-1">
              Open task
              <ArrowRight className="h-4 w-4" />
            </div>
          </GlassCard>
        </motion.button>
      ))}
    </div>
  )
}
