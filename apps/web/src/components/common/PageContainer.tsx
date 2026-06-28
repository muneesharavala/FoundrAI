import { cn } from '@/lib/cn'

type PageContainerProps = {
  children: React.ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn('mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10', className)}>{children}</div>
}
