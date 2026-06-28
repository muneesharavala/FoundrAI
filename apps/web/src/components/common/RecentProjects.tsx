import { motion } from 'framer-motion'
import { ArrowRight, Clock3 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/cn'

type ProjectItem = {
  name: string
  industry: string
  progress: number
  status: 'On Track' | 'Review' | 'Needs Attention'
  lastUpdated: string
}

type RecentProjectsProps = {
  projects?: ProjectItem[]
  className?: string
}

const defaultProjects: ProjectItem[] = [
  { name: 'Northstar AI', industry: 'SaaS', progress: 82, status: 'On Track', lastUpdated: '2h ago' },
  { name: 'SignalOps', industry: 'Fintech', progress: 64, status: 'Review', lastUpdated: '5h ago' },
  { name: 'Pulse Labs', industry: 'Healthtech', progress: 47, status: 'Needs Attention', lastUpdated: '1d ago' },
  { name: 'Aurelia AI', industry: 'MarTech', progress: 91, status: 'On Track', lastUpdated: '2d ago' },
]

export function RecentProjects({ projects = defaultProjects, className }: RecentProjectsProps) {
  return (
    <div className={cn('grid gap-4 lg:grid-cols-2', className)}>
      {projects.map((project) => (
        <motion.div key={project.name} whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
          <GlassCard className="border-white/10 bg-[#0b1120]/90 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{project.name}</p>
                <p className="mt-1 text-sm text-slate-400">{project.industry}</p>
              </div>
              <span className={cn('rounded-full px-2.5 py-1 text-xs font-medium', project.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-300' : project.status === 'Review' ? 'bg-amber-500/10 text-amber-300' : 'bg-rose-500/10 text-rose-300')}>
                {project.status}
              </span>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))]" style={{ width: `${project.progress}%` }} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {project.lastUpdated}
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                Open
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}
