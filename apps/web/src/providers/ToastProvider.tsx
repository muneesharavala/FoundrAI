import { Toaster } from 'sonner'
import { type PropsWithChildren } from 'react'

export function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors closeButton />
    </>
  )
}
