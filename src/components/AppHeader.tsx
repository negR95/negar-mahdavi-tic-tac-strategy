export function AppHeader() {
  return (
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
  )
}