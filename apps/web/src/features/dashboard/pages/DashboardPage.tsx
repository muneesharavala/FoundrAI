import { DashboardLayout } from '@/components/layout/DashboardLayout'

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 rounded-[20px] border border-[#27272A] bg-surface p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">FoundrAI</p>
          <h1 className="text-4xl font-semibold text-white">The AI Operating System for Startup Founders</h1>
          <p className="max-w-2xl text-slate-400">
            Command center placeholder with AI-driven workflows, insights, and rapid decision support for your next milestone.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-[20px] border border-[#27272A] bg-[#111827] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Command Center</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Launch your first AI workflow</h2>
            <p className="mt-2 text-slate-400">Track prompts, workspace state, and growth data from a single dashboard.</p>
          </div>
          <div className="rounded-[20px] border border-[#27272A] bg-[#111827] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">AI Signals</p>
            <p className="mt-3 text-slate-400">Placeholder analytics for model performance, user intent, and product-market fit signals.</p>
          </div>
          <div className="rounded-[20px] border border-[#27272A] bg-[#111827] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Workflow</p>
            <p className="mt-3 text-slate-400">A scalable page ready for the AI Command Center UI in Milestone 2.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
