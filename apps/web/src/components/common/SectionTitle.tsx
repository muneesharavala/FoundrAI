import { cn } from '@/lib/cn'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionTitle({ eyebrow, title, description, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-400">{description}</p> : null}
    </div>
  )
}
