import { cn } from '@/lib/cn'

type StatusBadgeProps = {
  label: string
  tone?: 'default' | 'success' | 'warning' | 'danger'
  className?: string
}

export function StatusBadge({ label, tone = 'default', className }: StatusBadgeProps) {
  const toneClass = {
    default: 'bg-white/10 text-slate-300',
    success: 'bg-emerald-500/15 text-emerald-300',
    warning: 'bg-amber-500/15 text-amber-300',
    danger: 'bg-rose-500/15 text-rose-300',
  }[tone]

  return <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-medium', toneClass, className)}>{label}</span>
}
