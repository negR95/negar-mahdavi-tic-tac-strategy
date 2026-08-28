export function TicTacStrategyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(248,101,46,0.08),transparent_28%),radial-gradient(circle_at_85%_90%,rgba(29,78,102,0.08),transparent_30%)]" />

      <header className="relative border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-brand-navy text-white shadow-lg shadow-brand-navy/15">
              <span dir="ltr" className="flex items-center text-lg font-black">
                <span className="text-brand-orange">X</span>
                <span className="-ml-0.5">O</span>
              </span>
            </div>
            <div>
              <p className="text-base font-black text-brand-navy">
                تیک<span className="text-brand-orange">تاک</span>
              </p>
              <p className="text-[9px] font-bold text-slate-400">دوز تاکتیکی</p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-extrabold text-brand-orange">
            <span className="h-px w-7 bg-brand-orange" />
            چالش استراتژیک
          </div>
          <h1 className="text-4xl font-black leading-tight text-brand-navy sm:text-5xl">
            سه حرکت جلوتر فکر کن.
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            فقط سه مهره نگه می‌داری. با گذاشتن مهره چهارم، قدیمی‌ترین مهره‌ات
            حذف می‌شود؛ پس هر حرکت، بازی را از نو شکل می‌دهد.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-8">
          {/* game panel */}
          <aside>{/* score board */}</aside>
        </div>
      </div>
    </main>
  );
}
