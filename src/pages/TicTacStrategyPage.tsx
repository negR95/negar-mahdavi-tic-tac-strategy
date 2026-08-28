import { AppHeader } from "../components/AppHeader";
import { GamePanel } from "../components/GamePanel";
import { ScoreBoard } from "../components/ScoreBoard";
import { useTicTacStrategy } from "../hooks/useTicTacStrategy";

export function TicTacStrategyPage() {
  const {
    game,
    isDraw,
    isFinished,
    status,
    restart,
    resetMatch,
    playCell,
    expiringCells,
    score,
  } = useTicTacStrategy();

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(248,101,46,0.08),transparent_28%),radial-gradient(circle_at_85%_90%,rgba(29,78,102,0.08),transparent_30%)]" />

      <AppHeader />

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold text-brand-orange">
            <span className="h-px w-4 bg-brand-orange" />
            چالش استراتژیک
          </div>
          <h1 className="text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
            سه حرکت جلوتر فکر کن.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            فقط سه مهره داری. مهره‌ی چهارم که گذاشته بشه، قدیمی‌ترین مهره حذف
            می‌شه؛ پس هر حرکت، بازی رو تغییر می‌ده.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-8">
          <GamePanel
            game={game}
            isDraw={isDraw}
            isFinished={isFinished}
            expiringCells={expiringCells}
            onPlay={playCell}
            status={status}
            onRestart={restart}
          />
          <aside>
            <ScoreBoard score={score} onRestart={resetMatch} />
          </aside>
        </div>
      </div>
    </main>
  );
}
