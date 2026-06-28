import { cn } from '@/lib/cn'

type GlassCardProps = {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-[20px] border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.65)] backdrop-blur-xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
