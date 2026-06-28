import { cn } from '@/lib/cn'

type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-20px_rgba(59,130,246,0.75)] transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
