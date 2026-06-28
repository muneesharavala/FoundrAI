import { motion } from 'framer-motion'
import { CalendarDays, Flame, Zap, Award } from 'lucide-react'

const currentDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}).format(new Date())

export function WelcomeHeader() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: 'beforeChildren' } },
      }}
      className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(14,165,233,0.06),transparent),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(99,102,241,0.16))] p-6 shadow-[0_30px_90px_-48px_rgba(99,102,241,0.55)] backdrop-blur-3xl sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.8),rgba(216,180,254,0.8),transparent)]" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Founder cockpit</p>
            <div className="mt-3 flex items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Welcome back, Founder
              </h1>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-fuchsia-500 to-cyan-400/80 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                <Award className="size-4 text-black/70" />
                Premium
              </span>
            </div>
            <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">Let&apos;s build your next billion-dollar startup.</p>
          </motion.div>
        </div>

        <motion.div className="grid gap-3 sm:grid-cols-3 lg:min-w-[430px]">
          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }} className="rounded-[20px] border border-white/8 bg-gradient-to-br from-cyan-800/30 to-slate-900/30 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-md">
                <CalendarDays className="size-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Today</p>
                <p className="mt-1 text-sm font-medium text-white">{currentDate}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }} className="rounded-[20px] border border-white/8 bg-gradient-to-br from-fuchsia-900/20 to-fuchsia-700/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-400 to-pink-500 p-1 shadow-md">
                <Flame className="size-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Streak</p>
                <p className="mt-1 text-sm font-medium text-white">18 day startup streak</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }} className="rounded-[20px] border border-white/8 bg-gradient-to-br from-sky-900/10 to-sky-700/8 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-400 p-1 shadow-md">
                <Zap className="size-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Productivity</p>
                <p className="mt-1 text-sm font-medium text-white">94% focus score</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
