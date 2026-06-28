import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Sidebar } from '@/components/layout/Sidebar'
import { TopNavbar } from '@/components/layout/TopNavbar'
import { MainContent } from '@/components/layout/MainContent'

type DashboardLayoutProps = {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(168,85,247,0.18),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)] text-foreground"
    >
      <div className="flex min-h-screen">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          isMobileOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        <div
          className={[
            'flex min-h-screen min-w-0 flex-1 transition-[padding-left] duration-300',
            isSidebarCollapsed ? 'md:pl-[88px]' : 'md:pl-[280px]',
          ].join(' ')}
        >
          <TopNavbar
            isSidebarCollapsed={isSidebarCollapsed}
            onCollapseToggle={() => setIsSidebarCollapsed(current => !current)}
            onMobileMenuClick={() => setIsMobileSidebarOpen(true)}
          />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </motion.div>
  )
}
