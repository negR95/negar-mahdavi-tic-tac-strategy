import type { GameState } from "../types/game";
import { GameStats } from "./GameStats";
import { GameStatus } from "./GameStatus";

type GamePanelProps = {
  game: GameState;
  isDraw: boolean;
  isFinished: boolean;
  status: {
    title: string;
  };
  onRestart: () => void;
};

export function GamePanel({
  game,
  isFinished,
  onRestart,
  isDraw,
  status,
}: GamePanelProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/[0.06] sm:p-6 lg:p-8">
      <GameStats game={game} isFinished={isFinished} />
      <GameStatus
        game={game}
        isDraw={isDraw}
        title={status.title}
      />

      {/* game board */}

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
        {isFinished && (
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl bg-brand-navy px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-brand-navy/15 transition hover:-translate-y-0.5 hover:bg-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/20"
          >
            دوباره بازی کن
          </button>
        )}
      </div>
    </section>
  );
}
