import { BadgeCheck, Bot, Rocket, Sparkles } from 'lucide-react'
import { StatCard } from '@/features/dashboard/components/StatCard'

const stats = [
  {
    label: 'Active Startups',
    value: '12',
    icon: Rocket,
    trend: '+12%',
    gradient: 'bg-[linear-gradient(135deg,rgba(56,189,248,0.95),rgba(147,51,234,0.9))]',
  },
  {
    label: 'AI Agents Running',
    value: '8',
    icon: Bot,
    gradient: 'bg-[linear-gradient(135deg,rgba(99,102,241,0.95),rgba(14,165,233,0.9))]',
  },
  {
    label: 'Ideas Generated',
    value: '247',
    icon: Sparkles,
    gradient: 'bg-[linear-gradient(135deg,rgba(217,70,239,0.95),rgba(59,130,246,0.9))]',
  },
  {
    label: 'Funding Score',
    value: '92%',
    icon: BadgeCheck,
    gradient: 'bg-[linear-gradient(135deg,rgba(34,197,94,0.9),rgba(59,130,246,0.9))]',
  },
]

export function StatsGrid() {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {stats.map(stat => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  )
}
