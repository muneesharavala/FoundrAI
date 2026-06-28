import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

type StatCardProps = {
  label: string
  value: string
  icon: LucideIcon
  trend?: string
  gradient: string
}

export function StatCard({ label, value, icon: Icon, trend, gradient }: StatCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="group rounded-[24px] p-px"
    >
      <div className="h-full rounded-[23px] border border-white/8 bg-gradient-to-br from-white/3 to-transparent p-5 backdrop-blur-3xl transition group-hover:shadow-[0_20px_60px_-30px_rgba(99,102,241,0.45)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
          </div>
          <div className={`grid size-12 shrink-0 place-items-center rounded-2xl p-2 shadow-inner ${gradient} ring-1 ring-white/6`} aria-hidden>
            <motion.div
              animate={{ boxShadow: '0 6px 30px -12px rgba(99,102,241,0.45)' }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3 }}
              className="grid place-items-center rounded-xl bg-white/6 p-2"
            >
              <Icon className="size-6 text-white" />
            </motion.div>
          </div>
        </div>
        {trend && (
          <motion.div whileHover={{ scale: 1.02 }} className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/18 bg-emerald-300/[0.06] px-3 py-1 text-xs font-semibold text-emerald-200">
            <span className="inline-flex -ml-1 h-3 w-3 items-center justify-center rounded-full bg-emerald-400/90 shadow-[0_6px_18px_-8px_rgba(34,197,94,0.6)]" />
            <span>{trend}</span>
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
