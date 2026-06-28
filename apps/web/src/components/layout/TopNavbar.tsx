import { motion } from 'framer-motion'
import { Bell, Menu, Moon, PanelLeftClose, PanelLeftOpen, Search } from 'lucide-react'

type TopNavbarProps = {
  isSidebarCollapsed: boolean
  onCollapseToggle: () => void
  onMobileMenuClick: () => void
}

export function TopNavbar({ isSidebarCollapsed, onCollapseToggle, onMobileMenuClick }: TopNavbarProps) {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={[
        'fixed right-0 top-0 z-30 border-b border-white/10 bg-slate-950/62 px-4 py-3 shadow-[0_18px_55px_-38px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-[left] duration-300 sm:px-6',
        isSidebarCollapsed ? 'left-0 md:left-[88px]' : 'left-0 md:left-[280px]',
      ].join(' ')}
    >
      <div className="flex min-h-14 items-center gap-3">
        <button
          type="button"
          onClick={onMobileMenuClick}
          aria-label="Open sidebar"
          className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-slate-200 transition hover:bg-white/[0.12] hover:text-white md:hidden"
        >
          <Menu className="size-5" />
        </button>

        <button
          type="button"
          onClick={onCollapseToggle}
          aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-slate-200 transition hover:bg-white/[0.12] hover:text-white md:grid"
        >
          {isSidebarCollapsed ? <PanelLeftOpen className="size-5" /> : <PanelLeftClose className="size-5" />}
        </button>

        <div className="min-w-0 flex-1">
          <label className="relative block max-w-2xl">
            <span className="sr-only">Search FoundrAI</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              placeholder="Search agents, projects, insights..."
              className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.07] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/10 focus:ring-4 focus:ring-cyan-300/10"
            />
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="relative grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-slate-200 transition hover:bg-white/[0.12] hover:text-white"
          >
            <Bell className="size-5" />
            <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
          </button>

          <button
            type="button"
            aria-label="Theme toggle"
            className="hidden size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-slate-200 transition hover:bg-white/[0.12] hover:text-white sm:grid"
          >
            <Moon className="size-5" />
          </button>

          <button
            type="button"
            aria-label="User profile"
            className="grid size-10 place-items-center rounded-2xl border border-white/[0.12] bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(168,85,247,0.26),rgba(244,114,182,0.18))] text-sm font-semibold text-white shadow-[0_16px_40px_-24px_rgba(34,211,238,0.9)]"
          >
            FA
          </button>
        </div>
      </div>
    </motion.header>
  )
}
