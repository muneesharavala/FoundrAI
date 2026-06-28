import { motion } from 'framer-motion'
import { Mic, Paperclip, Sparkles, Keyboard } from 'lucide-react'

export function AICommandCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, ease: 'easeOut', delay: 0.08 }}
      className="rounded-[24px] border border-white/8 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(88,28,135,0.08))] p-6 shadow-[0_28px_90px_-48px_rgba(88,28,135,0.45)] backdrop-blur-3xl"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/75">Quick AI command</p>
        <h2 className="mt-2 text-xl font-semibold text-white">Launch a founder workflow</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">Give your agents the context and generate the next strategic move.</p>
      </div>

      <div className="mt-6 relative">
        <motion.textarea
          placeholder="Describe your startup, include product, market and constraints..."
          aria-label="AI command input"
          className="peer min-h-44 w-full resize-none rounded-[20px] border border-white/8 bg-slate-950/50 p-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-transparent focus:shadow-[0_0_0_4px_rgba(168,85,247,0.08)]"
        />
        <div className="pointer-events-none absolute right-3 bottom-3 flex items-center gap-2 opacity-80">
          <Keyboard className="size-4 text-slate-400" />
          <span className="text-xs text-slate-400">Ctrl + Enter</span>
        </div>
        <div className="absolute -inset-px rounded-[20px] bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/6 to-amber-400/8 opacity-0 peer-focus:opacity-100 transition" aria-hidden />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          aria-label="Start voice input"
          className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] focus:premium-focus"
        >
          <Mic className="size-4" />
          Voice
        </button>
        <label htmlFor="upload" className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]">
          <Paperclip className="size-4" />
          Upload
          <input id="upload" type="file" className="sr-only" aria-hidden />
        </label>
        <button
          type="button"
          aria-label="Generate"
          className="ml-auto inline-flex h-11 items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 text-sm font-semibold text-white shadow-[0_18px_45px_-28px_rgba(99,102,241,0.2)] transition transform-gpu hover:scale-105 focus:premium-focus"
        >
          <Sparkles className="size-4" />
          Generate
        </button>
      </div>
    </motion.section>
  )
}
