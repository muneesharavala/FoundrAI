import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic, Paperclip, Trash2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { PromptSuggestions } from './PromptSuggestions'
import { ThinkingPanel } from './ThinkingPanel'
import { GenerateButton } from './GenerateButton'

const suggestions = [
  'AI Healthcare',
  'AI Education',
  'FinTech',
  'EdTech',
  'Agriculture',
  'Cybersecurity',
  'SaaS',
  'Climate Tech',
  'Marketplace',
  'Developer Tools',
]

export function CommandCenter() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const AGENTS = [
    { name: 'CEO AI', role: 'Strategy' },
    { name: 'Research AI', role: 'Research' },
    { name: 'Marketing AI', role: 'Growth' },
    { name: 'Finance AI', role: 'Forecast' },
    { name: 'CTO AI', role: 'Engineering' },
    { name: 'Legal AI', role: 'Compliance' },
  ]

  const TASKS: Record<string, string> = {
    'CEO AI': 'Analyzing startup idea...',
    'Research AI': 'Searching competitors...',
    'Marketing AI': 'Creating GTM strategy...',
    'Finance AI': 'Estimating revenue...',
    'CTO AI': 'Designing architecture...',
    'Legal AI': 'Checking regulations...',
  }

  type AgentState = {
    name: string
    role: string
    progress: number
    task: string
    active: boolean
    completed: boolean
  }

  const [agents, setAgents] = useState<AgentState[]>(
    AGENTS.map(a => ({ name: a.name, role: a.role, progress: 0, task: '', active: false, completed: false })),
  )

  const [reportReady, setReportReady] = useState(false)

  async function handleGenerate() {
    setReportReady(false)
    setLoading(true)
    // reset agents
    setAgents(AGENTS.map(a => ({ name: a.name, role: a.role, progress: 0, task: '', active: false, completed: false })))

    for (let i = 0; i < AGENTS.length; i++) {
      const name = AGENTS[i].name
      // set active
      setAgents(prev => prev.map((p, idx) => ({ ...p, active: idx === i, task: idx === i ? TASKS[name] : p.task })))

      // simulate progress
      await new Promise<void>(resolve => {
        let prog = 0
        const id = setInterval(() => {
          prog += 6 + Math.random() * 8
          if (prog >= 100) {
            prog = 100
            clearInterval(id)
            setAgents(prev => prev.map((p, idx) => (idx === i ? { ...p, progress: 100, active: false, completed: true, task: TASKS[name] } : p)))
            setTimeout(() => resolve(), 300)
          } else {
            setAgents(prev => prev.map((p, idx) => (idx === i ? { ...p, progress: Math.floor(prog), task: TASKS[name] } : p)))
          }
        }, 160)
      })
    }

    setLoading(false)
    setReportReady(true)
  }

  function handleSuggestionClick(text: string) {
    setPrompt(text)
    textareaRef.current?.focus()
  }

  return (
    <section className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white">AI Startup Command Center</h2>
          <p className="mt-1 text-sm text-slate-400">Describe your startup idea and let multiple AI agents build your business.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_360px]">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="">
          <GlassCard className="p-4">
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder={"Example: Build an AI platform that helps farmers predict crop diseases using satellite imagery."}
                className="w-full min-h-[220px] resize-none rounded-[20px] border border-white/8 bg-slate-950/50 p-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:shadow-[0_0_0_6px_rgba(99,102,241,0.08)]"
              />

              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button aria-label="voice" className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] focus:premium-focus">
                    <Mic className="size-4" />
                    Voice
                  </button>

                  <label className="inline-flex items-center gap-2 cursor-pointer rounded-2xl bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05]">
                    <Paperclip className="size-4" />
                    Upload
                    <input type="file" className="sr-only" />
                  </label>

                  <button onClick={() => setPrompt('')} aria-label="clear" className="inline-flex items-center gap-2 rounded-2xl bg-white/[0.03] px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.05] focus:premium-focus">
                    <Trash2 className="size-4" />
                    Clear
                  </button>
                </div>

                <GenerateButton onClick={handleGenerate} loading={loading} />
              </div>

              <div className="mt-4">
                <PromptSuggestions suggestions={suggestions} onClick={handleSuggestionClick} />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <ThinkingPanel agents={agents} reportReady={reportReady} />
        </motion.aside>
      </div>
    </section>
  )
}

export default CommandCenter
