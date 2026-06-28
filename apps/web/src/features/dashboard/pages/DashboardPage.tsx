import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { AICommandCard } from '@/features/dashboard/components/AICommandCard'
import { ActivityTimeline } from '@/features/dashboard/components/ActivityTimeline'
import { AgentOverview } from '@/features/dashboard/components/AgentOverview'
import { AnalyticsCharts } from '@/features/dashboard/components/AnalyticsCharts'
import { StatsGrid } from '@/features/dashboard/components/StatsGrid'
import { WelcomeHeader } from '@/features/dashboard/components/WelcomeHeader'

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeHeader />
        <StatsGrid />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
          <ActivityTimeline />
          <AICommandCard />
        </section>

        <AnalyticsCharts />
        <AgentOverview />
      </div>
    </DashboardLayout>
  )
}
