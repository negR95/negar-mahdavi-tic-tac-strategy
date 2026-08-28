import { useState } from "react";
import { MAX_MARKS, MAX_TURNS } from "../constants/game";
import type { GameState, MatchScore } from "../types/game";
import { formatNumber } from "../utils/format";
import {
  createGame,
  getExpiringCells,
  isGameDraw,
  isGameFinished,
  playMove,
} from "../utils/game";

const INITIAL_SCORE: MatchScore = { X: 0, O: 0, draws: 0 };

export function useTicTacStrategy() {
  const [game, setGame] = useState<GameState>(createGame);
  const [score, setScore] = useState<MatchScore>(INITIAL_SCORE);

  const isDraw = isGameDraw(game);
  const isFinished = isGameFinished(game);
  const expiringCells = getExpiringCells(game);

  const playCell = (cell: number) => {
    const nextGame = playMove(game, cell);
    if (nextGame === game) return;

    setGame(nextGame);

    if (nextGame.winner) {
      const winner = nextGame.winner;
      setScore((current) => ({
        ...current,
        [winner]: current[winner] + 1,
      }));
    } else if (isGameDraw(nextGame)) {
      setScore((current) => ({ ...current, draws: current.draws + 1 }));
    }
  };

  const restart = () => setGame(createGame());

  const resetMatch = () => {
    setGame(createGame());
    setScore(INITIAL_SCORE);
  };

  const status = getGameStatus(game, isDraw);

  return {
    game,
    isDraw,
    isFinished,
    status,
    playCell,
    restart,
    resetMatch,
    expiringCells,
    score,
  };
}

function getGameStatus(game: GameState, isDraw: boolean) {
  if (game.winner) {
    return {
      title: `بازیکن ${game.winner} برنده شد!`,
      detail: "سه مهره در یک ردیف؛ عالی بازی کردی.",
    };
  }

  if (isDraw) {
    return {
      title: "بازی مساوی شد",
      detail: `${formatNumber(MAX_TURNS)} حرکت بدون برنده انجام شد.`,
    };
  }

  const marksUntilShift = MAX_MARKS - game.queues[game.currentPlayer].length;
  const detail =
    marksUntilShift === 0
      ? "با حرکت بعدی، قدیمی‌ترین مهره‌ات حذف می‌شود."
      : `${formatNumber(marksUntilShift)} مهره تا شروع جابه‌جایی صفحه باقی مانده است.`;

  return {
    title: `نوبت بازیکن ${game.currentPlayer}`,
    detail,
  };
}
