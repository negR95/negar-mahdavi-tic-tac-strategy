import type { Player } from "../types/game"

type MarkProps = {
  player: Player
  className?: string
}

export function Mark({ player, className = '' }: MarkProps) {
  if (player === 'X') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
        <path
          d="M17 17 47 47M47 17 17 47"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  )
}
