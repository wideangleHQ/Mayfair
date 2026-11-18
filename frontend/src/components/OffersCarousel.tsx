"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Native scroll-snap track with prev/next arrows. Cards stay server-rendered (passed as children).
 * Arrows render only when the track actually overflows, so three offers never fake a carousel.
 */
export default function OffersCarousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ overflow: false, start: true, end: true });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdge({
        overflow: el.scrollWidth > el.clientWidth + 1,
        start: el.scrollLeft <= 1,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  const arrow = (dir: 1 | -1, disabled: boolean, pos: string) => (
    <button
      type="button"
      onClick={() => step(dir)}
      disabled={disabled}
      aria-label={dir < 0 ? "Previous offers" : "Next offers"}
      aria-controls="offers-track"
      className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-white text-forest shadow-md transition-[opacity,background-color,color,border-color,transform] duration-200 hover:border-forest hover:bg-forest hover:text-white disabled:pointer-events-none disabled:opacity-0 ${pos}`}
    >
      <svg aria-hidden width="9" height="16" viewBox="0 0 9 16">
        <path d={dir < 0 ? "M8 1L1 8l7 7" : "M1 1l7 7-7 7"} fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </button>
  );

  const side = "pointer-events-auto absolute top-[calc((100cqw-4rem)/3*0.625/2)] -translate-y-1/2 z-10";

  return (
    <div className="@container relative">
      <ul
        ref={track}
        id="offers-track"
        aria-label={label}
        // Focusable so keyboard users can scroll it with arrow keys.
        tabIndex={edge.overflow ? 0 : -1}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:gap-8 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      {edge.overflow && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden lg:block">
            {arrow(-1, edge.start, `${side} left-3 xl:-left-6`)}
            {arrow(1, edge.end, `${side} right-3 xl:-right-6`)}
          </div>
          {/* Tablet and mobile: a quiet, touch-friendly navigation row under the cards. */}
          <div className="mt-8 flex justify-end gap-3 lg:hidden">
            {arrow(-1, edge.start, "")}
            {arrow(1, edge.end, "")}
          </div>
        </>
      )}
    </div>
  );
}
