import { cn } from '@/lib/cn'

type GlowCardProps = {
  children: React.ReactNode
  className?: string
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.95),rgba(10,14,24,0.95))] p-6 shadow-[0_20px_80px_-30px_rgba(139,92,246,0.45)]',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.22),transparent_40%)]" />
      <div className="relative">{children}</div>
    </div>
  )
}
