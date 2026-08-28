import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type StatCardProps = {
  icon: ReactNode
  label: string
  value: string
  tone: 'orange' | 'blue' | 'slate'
}

const TONE_STYLES = {
  orange: 'bg-brand-orange/10 text-brand-orange',
  blue: 'bg-brand-blue/10 text-brand-blue',
  slate: 'bg-slate-100 text-slate-500',
} as const

export function StatCard({ icon, label, value, tone }: StatCardProps) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm shadow-slate-900/5">
      <span
        className={twMerge(
          'grid size-10 shrink-0 place-items-center rounded-xl',
          TONE_STYLES[tone],
        )}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold text-slate-400">
          {label}
        </span>
        <span className="block truncate text-sm font-extrabold text-slate-800">
          {value}
        </span>
      </span>
    </div>
  )
}
