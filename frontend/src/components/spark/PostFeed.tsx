/* eslint-disable @next/next/no-img-element */

function FirstPostCard() {
  return (
    <article className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_8px_40px_-12px_rgba(49,41,80,0.06)]">
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-container-low">
              <img
                alt="Elena V."
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLnlDP8qstuuFGLE6I0wpkThqKcNqovKzS9wyjRKHb4UP3pfNmvvVVMFFXKh9imxE8KUkPPqwTgheMxlSgsDb7rATvHahxmmGoTZTXBiqfJqe-P1UA6biMW0mrNOhx12Mb4uyEVkPulzttYePu20D1EvQuLKU760OgiukSyp0tC51jG7YpOQbfazaQAtSg8YBVyvPgTywtLZdf1wrf7hcujO5-QjMIhImjXCxG4W5Qye7yq1D0tecbLrRNBxy9_udD4qmBBKIfUAim"
              />
            </div>
            <div>
              <h3 className="headline-font font-bold leading-tight text-on-surface">Elena V.</h3>
              <p className="text-xs font-medium text-on-surface-variant">2 hours ago • Kyoto, Japan</p>
            </div>
          </div>
          <button className="text-on-surface-variant transition-colors hover:text-primary">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
        <p className="mb-6 leading-relaxed text-on-surface font-body">
          Lost in the bamboo groves of Arashiyama. The way the light filters through the canopy is
          something words cannot quite capture. ✨
        </p>
      </div>

      <div className="relative px-6 pb-2">
        <div className="aspect-4/5 overflow-hidden rounded-xl shadow-md sm:aspect-video">
          <img
            alt="Bamboo Forest"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNNMAIcptla-4eZtFvYbMbdAEt94voCdxbmp3KN4t2XVM0kyANXA1-BD3zIH74gu5DOisV1oVL-Lb0m9KrL0saQtEFajLQV1hQFpzTs3m62b3atR_epnTyjuCR5j87r1-Y3I9Xz9aWROAH2Nhi-JfnrK1HDf45yLLJ5I6IpkTYRkQHLEWE8MYvoDHLH3lJz_FeMUoNoxH8A03zCbfTezM64yg0er5lZc0oN99IsCGBnDm-jqUIC8RvX8GBvIIUBwS5Jep4hgKxCrB"
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
            <span
              className="material-symbols-outlined text-tertiary transition-transform group-hover/btn:scale-110"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="text-sm font-bold text-on-surface">1.2k</span>
          </button>
          <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
            <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/btn:text-primary">
              chat_bubble
            </span>
            <span className="text-sm font-bold text-on-surface">48</span>
          </button>
          <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
            <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/btn:text-primary">
              share
            </span>
          </button>
        </div>

        <button className="rounded-full bg-surface-container-low p-2 text-on-surface-variant transition-all hover:bg-secondary-container hover:text-on-secondary-container">
          <span className="material-symbols-outlined">bookmark</span>
        </button>
      </div>
    </article>
  );
}

export default function PostFeed() {
  return <FirstPostCard />;
}
