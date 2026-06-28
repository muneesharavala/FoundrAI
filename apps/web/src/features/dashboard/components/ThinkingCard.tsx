import { motion } from 'framer-motion'

type Props = {
  name: string
  role: string
  progress: number
  task?: string
  active?: boolean
  completed?: boolean
}

export function ThinkingCard({ name, role, progress = 0, task = '', active = false, completed = false }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3">
      <div className="relative">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-sm font-semibold text-white">{name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
        <span className="absolute -right-1 -bottom-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400/90 shadow-sm">
          <span className="animate-pulse inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-slate-400">{role}</p>
          </div>
          <p className="text-xs text-slate-400">{Math.floor(progress)}%</p>
        </div>

        <div className="mt-2 text-xs text-slate-400">
          {active ? (
            <span className="inline-flex items-center gap-2">
              <span>{task}</span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-[pulse_1.2s_infinite]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-[pulse_1.4s_infinite]" />
              </span>
            </span>
          ) : completed ? (
            <span className="inline-flex items-center gap-2 text-emerald-300">✓ Completed</span>
          ) : (
            <span className="text-slate-400">{task || 'Idle'}</span>
          )}
        </div>

        <div className="mt-2 h-2 w-full rounded-full bg-white/6 overflow-hidden">
          <div style={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}

export default ThinkingCard
