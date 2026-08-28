import {
  BOARD_SIZE,
  MAX_MARKS,
  MAX_TURNS,
  WINNING_LINES,
} from '../constants/game'
import type { Cell, GameState, Player } from '../types/game'

export function createGame(): GameState {
  return {
    board: Array<Cell>(BOARD_SIZE).fill(null),
    queues: { X: [], O: [] },
    currentPlayer: 'X',
    moves: [],
    winner: null,
    winningLine: [],
  }
}

export function isGameDraw(game: GameState): boolean {
  return !game.winner && game.moves.length === MAX_TURNS
}

export function isGameFinished(game: GameState): boolean {
  return Boolean(game.winner) || isGameDraw(game)
}

export function playMove(game: GameState, cell: number): GameState {
  if (game.board[cell] || isGameFinished(game)) return game

  const player = game.currentPlayer
  const playerQueue = [...game.queues[player]]
  const board = [...game.board]
  const removed =
    playerQueue.length === MAX_MARKS ? (playerQueue.shift() ?? null) : null

  if (removed !== null) {
    board[removed] = null
  }

  board[cell] = player
  playerQueue.push(cell)

  const winningLine = getWinningLine(board, player)
  const winner = winningLine.length ? player : null
  const moves = [
    ...game.moves,
    { turn: game.moves.length + 1, player, cell, removed },
  ]

  return {
    board,
    queues: { ...game.queues, [player]: playerQueue },
    currentPlayer: player === 'X' ? 'O' : 'X',
    moves,
    winner,
    winningLine,
  }
}

function getWinningLine(board: Cell[], player: Player): number[] {
  return (
    WINNING_LINES.find((line) =>
      line.every((cell) => board[cell] === player),
    ) ?? []
  ).slice()
}
