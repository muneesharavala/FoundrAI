type Props = {
  suggestions: string[]
  onClick: (text: string) => void
}

export function PromptSuggestions({ suggestions, onClick }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map(s => (
        <button
          key={s}
          onClick={() => onClick(s)}
          className="rounded-full bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200 hover:bg-white/[0.06] transition"
        >
          {s}
        </button>
      ))}
    </div>
  )
}

export default PromptSuggestions
