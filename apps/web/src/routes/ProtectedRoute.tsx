import { Navigate } from 'react-router-dom'
import { type PropsWithChildren } from 'react'

const isAuthenticated = false

export function ProtectedRoute({ children }: PropsWithChildren) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}
