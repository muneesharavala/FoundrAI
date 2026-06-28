import { motion } from 'framer-motion'
import { Bot, BriefcaseBusiness, Code2, Landmark, Megaphone, Scale, Search } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Agent = {
  name: string
  role: string
  tasks: number
  icon: LucideIcon
  accent: string
}

const agents: Agent[] = [
  { name: 'CEO AI', role: 'Strategy and decisions', tasks: 34, icon: BriefcaseBusiness, accent: 'from-cyan-400 to-blue-500' },
  { name: 'CTO AI', role: 'Architecture and systems', tasks: 27, icon: Code2, accent: 'from-blue-400 to-violet-500' },
  { name: 'Marketing AI', role: 'Positioning and growth', tasks: 41, icon: Megaphone, accent: 'from-fuchsia-400 to-purple-500' },
  { name: 'Finance AI', role: 'Forecasts and runway', tasks: 22, icon: Landmark, accent: 'from-emerald-400 to-cyan-500' },
  { name: 'Research AI', role: 'Market validation', tasks: 38, icon: Search, accent: 'from-sky-400 to-indigo-500' },
  { name: 'Legal AI', role: 'Risk and compliance', tasks: 16, icon: Scale, accent: 'from-violet-400 to-fuchsia-500' },
]

export function AgentOverview() {
  return (
    <section className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/75">AI Agents</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Founder operating team</h2>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-200">
          <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.95)]" />
          All systems online
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent, index) => {
          const Icon = agent.icon

          return (
            <motion.article
              key={agent.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.24, ease: 'easeOut', delay: index * 0.03 }}
              className="rounded-[24px] border border-white/10 bg-slate-950/46 p-5 shadow-[0_18px_60px_-45px_rgba(59,130,246,0.9)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`relative grid size-[3.25rem] place-items-center rounded-2xl bg-gradient-to-br ${agent.accent}`}>
                    <Icon className="size-6 text-white" />
                    <span className="absolute -right-1 -top-1 size-3.5 rounded-full border-2 border-slate-950 bg-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{agent.role}</p>
                  </div>
                </div>
                <Bot className="size-5 text-slate-500" />
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Completed tasks</p>
                <p className="mt-1 text-2xl font-semibold text-white">{agent.tasks}</p>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
