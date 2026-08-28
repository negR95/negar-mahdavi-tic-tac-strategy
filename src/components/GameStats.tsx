import { MAX_TURNS } from '../constants/game'
import type { GameState } from '../types/game'
import { formatNumber } from '../utils/format'
import { Mark } from './Mark'
import { StatCard } from './StatCard'

type GameStatsProps = {
  game: GameState
  isFinished: boolean
}

export function GameStats({ game, isFinished }: GameStatsProps) {
  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-3">
      <StatCard
        label="نوبت فعلی"
        value={isFinished ? 'پایان بازی' : `بازیکن ${game.currentPlayer}`}
        tone={game.currentPlayer === 'X' ? 'orange' : 'blue'}
        icon={<Mark player={game.currentPlayer} className="size-6" />}
      />
      <StatCard
        label="حرکت‌های انجام‌شده"
        value={`${formatNumber(game.moves.length)} از ${formatNumber(MAX_TURNS)}`}
        tone="slate"
        icon={
          <span className="text-sm font-black tabular-nums">
            {formatNumber(game.moves.length)}
          </span>
        }
      />
      <StatCard
        label="مهره‌های روی صفحه"
        value={`X ${formatNumber(game.queues.X.length)}  ·  O ${formatNumber(game.queues.O.length)}`}
        tone="slate"
        icon={<span className="text-sm font-black">۳×</span>}
      />
    </div>
  )
}
