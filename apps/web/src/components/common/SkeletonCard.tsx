export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-[20px] border border-white/10 bg-white/5 p-6">
      <div className="h-4 w-24 rounded bg-white/10" />
      <div className="mt-4 h-8 w-full rounded bg-white/10" />
      <div className="mt-3 h-4 w-3/4 rounded bg-white/10" />
      <div className="mt-3 h-4 w-1/2 rounded bg-white/10" />
    </div>
  )
}
