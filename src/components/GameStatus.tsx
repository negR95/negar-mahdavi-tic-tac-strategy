import { twMerge } from 'tailwind-merge'
import type { GameState } from '../types/game'
import { Mark } from './Mark'

type GameStatusProps = {
  game: GameState
  isDraw: boolean
  title: string
}

export function GameStatus({
  game,
  isDraw,
  title,
}: GameStatusProps) {
  const containerStyle = getContainerStyle(Boolean(game.winner), isDraw)

  return (
    <div
      className={twMerge(
        'mb-6 flex items-center gap-3 rounded-2xl border px-4 py-3.5',
        containerStyle,
      )}
      role="status"
      aria-live="polite"
    >
      <div
        className={twMerge(
          'grid size-10 shrink-0 place-items-center rounded-xl',
          game.winner
            ? 'bg-emerald-500 text-white'
            : 'bg-white text-brand-orange shadow-sm',
        )}
      >
        {game.winner ? (
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        ) : (
          <Mark player={game.currentPlayer} className="size-6" />
        )}
      </div>
      <div>
        <p className="text-sm font-black text-slate-800">{title}</p>
      </div>
    </div>
  )
}

function getContainerStyle(hasWinner: boolean, isDraw: boolean): string {
  if (hasWinner) return 'border-emerald-200 bg-emerald-50'
  if (isDraw) return 'border-slate-200 bg-slate-50'
  return 'border-brand-orange/15 bg-brand-orange/[0.06]'
}
