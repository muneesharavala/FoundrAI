import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type MainContentProps = {
  children: ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen flex-1 overflow-y-auto scroll-smooth px-4 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </motion.main>
  )
}
