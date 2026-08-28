export type Player = 'X' | 'O'

export type Cell = Player | null

export type Move = {
  turn: number
  player: Player
  cell: number
  removed: number | null
}

export type GameState = {
  board: Cell[]
  queues: Record<Player, number[]>
  currentPlayer: Player
  moves: Move[]
  winner: Player | null
  winningLine: number[]
}

export type MatchScore = Record<Player, number> & {
  draws: number
}
