export function Stats() {
  return (
    <div className="border-y border-line-soft bg-bg">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center py-[52px] gap-y-8">
          <div className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">92%</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Model accuracy</div>
          </div>
          <div className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">200+</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Students mentored</div>
          </div>
          <div className="md:border-r border-line-soft px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">10+</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Projects shipped</div>
          </div>
          <div className="px-[10px]">
            <div className="text-[clamp(30px,4vw,46px)] font-semibold tracking-[-0.03em] text-ink leading-none">40%</div>
            <div className="mt-[10px] text-[13px] text-ink-faint">Performance boost</div>
          </div>
        </div>
      </div>
    </div>
  );
}
