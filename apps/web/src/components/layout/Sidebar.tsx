import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart3,
  Bot,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Sparkles,
  X,
  type LucideIcon,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

type SidebarProps = {
  isCollapsed: boolean
  isMobileOpen: boolean
  onClose: () => void
}

type NavItem = {
  label: string
  to: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'AI Agents', to: '/ai-agents', icon: Bot },
  { label: 'Workspace', to: '/workspace', icon: Sparkles },
  { label: 'Analytics', to: '/analytics', icon: BarChart3 },
  { label: 'Projects', to: '/projects', icon: FolderKanban },
  { label: 'Settings', to: '/settings', icon: Settings },
]

function BrandMark({ isCollapsed = false }: { isCollapsed?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.28),rgba(168,85,247,0.3),rgba(244,114,182,0.22))] shadow-[0_18px_45px_-24px_rgba(34,211,238,0.9)]">
        <Sparkles className="size-5 text-cyan-100" />
      </div>
      {!isCollapsed && (
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase text-cyan-100/70">FoundrAI</p>
          <h2 className="truncate text-lg font-semibold tracking-tight text-white">Command OS</h2>
        </div>
      )}
    </div>
  )
}

function SidebarNav({ isCollapsed = false, onNavigate }: { isCollapsed?: boolean; onNavigate?: () => void }) {
  return (
    <nav className="space-y-2">
      {navItems.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          title={isCollapsed ? label : undefined}
          className={({ isActive }) =>
            [
              'group flex h-12 items-center gap-3 rounded-2xl border px-3 text-sm font-medium transition-all duration-200',
              isCollapsed ? 'justify-center' : 'justify-start',
              isActive
                ? 'border-white/[0.16] bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.18))] text-white shadow-[0_18px_50px_-28px_rgba(34,211,238,0.95)]'
                : 'border-transparent text-slate-300 hover:border-white/[0.12] hover:bg-white/[0.08] hover:text-white',
            ].join(' ')
          }
        >
          <Icon className="size-5 shrink-0" />
          {!isCollapsed && <span className="truncate">{label}</span>}
        </NavLink>
      ))}
    </nav>
  )
}

function SidebarPanel({
  isCollapsed = false,
  onClose,
  isMobile = false,
}: {
  isCollapsed?: boolean
  onClose?: () => void
  isMobile?: boolean
}) {
  return (
    <div className="flex h-full flex-col border-r border-white/10 bg-slate-950/72 px-4 py-5 shadow-[24px_0_70px_-44px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-3">
        <BrandMark isCollapsed={isCollapsed} />
        {isMobile && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-slate-200 transition hover:bg-white/[0.12] hover:text-white"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-[0_18px_55px_-34px_rgba(14,165,233,0.75)]">
          <p className="text-xs font-medium text-slate-300">Execution layer</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Coordinate agents, workspaces, metrics, and founder priorities.
          </p>
        </div>
      )}

      <div className="mt-7 flex-1">
        <SidebarNav isCollapsed={isCollapsed} onNavigate={onClose} />
      </div>

      <div
        className={[
          'rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.86),rgba(88,28,135,0.34),rgba(14,165,233,0.16))] p-4 shadow-[0_18px_55px_-34px_rgba(168,85,247,0.75)]',
          isCollapsed ? 'grid place-items-center px-3' : '',
        ].join(' ')}
      >
        <Sparkles className="size-5 text-cyan-200" />
        {!isCollapsed && (
          <>
            <p className="mt-3 text-sm font-semibold text-white">Premium workspace</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Ready for your next sprint.</p>
          </>
        )}
      </div>
    </div>
  )
}

export function Sidebar({ isCollapsed, isMobileOpen, onClose }: SidebarProps) {
  return (
    <>
      <motion.aside
        initial={{ x: -16, opacity: 0 }}
        animate={{ x: 0, opacity: 1, width: isCollapsed ? 88 : 280 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="fixed inset-y-0 left-0 z-40 hidden overflow-hidden md:block"
      >
        <SidebarPanel isCollapsed={isCollapsed} />
      </motion.aside>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close sidebar overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] overflow-hidden md:hidden"
            >
              <SidebarPanel isMobile onClose={onClose} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
