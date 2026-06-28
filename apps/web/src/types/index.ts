export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export type ApiResponse<T> = {
  data: T
  status: number
  error?: string
}
