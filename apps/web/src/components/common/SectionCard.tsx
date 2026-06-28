import type { ReactNode } from 'react'

type SectionCardProps = {
  title: string
  description: string
  children?: ReactNode
}

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <section className="rounded-[20px] border border-[#27272A] bg-[#111827] p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-slate-400">{description}</p>
      </div>
      {children}
    </section>
  )
}
