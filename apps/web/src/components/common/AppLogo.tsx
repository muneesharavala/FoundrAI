import { cn } from '@/lib/cn'

type AppLogoProps = {
  className?: string
}

export function AppLogo({ className }: AppLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-sm font-semibold text-white shadow-lg">
        F
      </div>
      <div>
        <p className="text-sm font-semibold text-white">FoundrAI</p>
        <p className="text-xs text-slate-400">Design System</p>
      </div>
    </div>
  )
}
