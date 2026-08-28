import { twMerge } from "tailwind-merge";
import { CELL_NAMES } from "../constants/game";
import type { GameState, Player } from "../types/game";
import { Mark } from "./Mark";

const BASE_CELL_STYLES =
  "group relative aspect-square overflow-hidden rounded-2xl border text-slate-300 transition duration-200 focus:outline-none focus:ring-4 focus:ring-brand-orange/20 sm:rounded-[1.35rem]";

type GameBoardProps = {
  game: GameState;
  isFinished: boolean;
  expiringCells: Set<number>;
  onPlay: (cell: number) => void;
};

export function GameBoard({
  game,
  isFinished,
  expiringCells,
  onPlay,
}: GameBoardProps) {
  return (
    <div className="mx-auto grid w-full max-w-[500px] grid-cols-3 gap-2 rounded-[1.75rem] bg-slate-100 p-2.5 sm:gap-3 sm:p-3">
      {game.board.map((player, cell) => {
        const isWinning = game.winningLine.includes(cell);
        const isExpiring = expiringCells.has(cell) && !isWinning;

        const cellStyle = getCellStyle(player, isWinning);
        const label = getCellLabel(cell, player, isExpiring);

        return (
          <button
            key={cell}
            type="button"
            onClick={() => onPlay(cell)}
            disabled={Boolean(player) || isFinished}
            aria-label={label}
            className={twMerge(BASE_CELL_STYLES, cellStyle)}
          >
            {!player && !isFinished && (
              <span className="absolute inset-4 rounded-xl border border-dashed border-slate-200 opacity-0 transition group-hover:opacity-100" />
            )}
            {player && (
              <Mark
                player={player}
                className={twMerge(
                  "mx-auto size-[58%]",
                  player === "X" ? "text-brand-orange" : "text-brand-blue",
                  isExpiring && "opacity-40",
                )}
              />
            )}
            {isWinning && (
              <span className="absolute right-3 top-3 size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.14)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function getCellStyle(player: Player | null, isWinning: boolean): string {
  if (isWinning) {
    return "border-emerald-400 bg-emerald-50 shadow-md shadow-emerald-600/10";
  }

  if (player) {
    return "border-slate-200 bg-white shadow-sm";
  }

  return "border-white bg-white/80 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10";
}

function getCellLabel(
  cell: number,
  player: Player | null,
  isExpiring: boolean,
): string {
  if (!player) {
    return `انتخاب خانه ${CELL_NAMES[cell]}`;
  }

  const expiringLabel = isExpiring ? "، قدیمی‌ترین مهره" : "";
  return `${CELL_NAMES[cell]}: بازیکن ${player}${expiringLabel}`;
}
