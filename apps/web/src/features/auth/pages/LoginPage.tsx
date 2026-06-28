import { Button } from '@/components/ui/button'

export function LoginPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-4 py-16">
      <div className="w-full rounded-[20px] border border-[#27272A] bg-surface p-10 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.65)]">
        <h1 className="text-3xl font-semibold text-white">Sign in to FoundrAI</h1>
        <p className="mt-2 text-slate-400">Continue to your founder workspace and AI command center.</p>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-[#27272A] bg-[#0b1120] px-4 py-3 text-white outline-none focus:border-primary" placeholder="Email" type="email" />
          <input className="w-full rounded-2xl border border-[#27272A] bg-[#0b1120] px-4 py-3 text-white outline-none focus:border-primary" placeholder="Password" type="password" />
          <Button className="w-full">Sign in</Button>
        </div>
      </div>
    </div>
  )
}
