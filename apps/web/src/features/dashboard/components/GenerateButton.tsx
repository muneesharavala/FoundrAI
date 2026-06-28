// React imports not required with new JSX transform
import { Sparkles } from 'lucide-react'

type Props = {
  loading?: boolean
  onClick?: () => void
}

export function GenerateButton({ loading = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2 text-sm font-semibold text-white transition transform-gpu ${
        loading
          ? 'bg-gradient-to-r from-slate-600 to-slate-700 cursor-wait opacity-80'
          : 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:scale-105'
      }`}
      aria-busy={loading}
    >
      <Sparkles className="size-4" />
      {loading ? 'Generating…' : 'Generate Startup'}
    </button>
  )
}

export default GenerateButton
