import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { PLAYERS } from "../constants/game";
import type { MatchScore } from "../types/game";
import { formatNumber } from "../utils/format";
import { Mark } from "./Mark";
import { RefreshIcon } from "./icons/RefreshIcon";
import { TrophyIcon } from "./icons/TrophyIcon";

type ScoreBoardProps = {
  score: MatchScore;
  onRestart: () => void;
};

export function ScoreBoard({ score, onRestart }: ScoreBoardProps) {
  return (
    <section className="rounded-[1.75rem] bg-brand-navy p-6 text-white shadow-xl shadow-brand-navy/15">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="mt-1 text-lg font-black">جدول رقابت</h2>
        </div>
        <TrophyIcon className="size-5 text-brand-orange" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {PLAYERS.map((player) => (
          <ScoreTile
            key={player}
            icon={
              <Mark
                player={player}
                className={twMerge(
                  "mx-auto size-6",
                  player === "X" ? "text-brand-orange" : "text-sky-300",
                )}
              />
            }
            value={score[player]}
          />
        ))}
        <ScoreTile
          icon={
            <span className="mx-auto grid size-6 place-items-center text-lg font-black text-white/55">
              =
            </span>
          }
          value={score.draws}
        />
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-brand-orange/30"
      >
        <RefreshIcon className="size-4 transition-transform group-hover:-rotate-45" />
        بازی جدید
      </button>
    </section>
  );
}

type ScoreTileProps = {
  icon: ReactNode;
  value: number;
};

function ScoreTile({ icon, value }: ScoreTileProps) {
  return (
    <div className="rounded-2xl bg-white/8 p-3 text-center">
      {icon}
      <p className="mt-2 text-2xl font-black tabular-nums">
        {formatNumber(value)}
      </p>
    </div>
  );
}
