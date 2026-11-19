"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Native scroll-snap row that bleeds to the right edge of the viewport, with one pagination dot
 * per hotel. Cards stay server-rendered (children). Swipe, trackpad and arrow keys all scroll it.
 */
export default function DestinationsCarousel({ children, label, count }: { children: ReactNode; label: string; count: number }) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const stepWidth = (el: HTMLUListElement) => {
    const item = el.firstElementChild as HTMLElement | null;
    return item ? item.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0) : 1;
  };

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      setActive(atEnd ? count - 1 : Math.round(el.scrollLeft / stepWidth(el)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * stepWidth(el), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    // Negative right margin = the wrap's side margin, so the row runs off the viewport edge.
    <div className="reveal min-w-0 mr-[calc((min(100vw-40px,1440px)-100vw)/2)] md:mr-[calc((min(100vw-48px,1440px)-100vw)/2)]">
      <ul
        ref={track}
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 outline-offset-4 [scrollbar-width:none] md:gap-6 md:pr-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>

      <div className="mt-8 flex justify-center pr-5 md:pr-6" role="group" aria-label="Choose a hotel">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show hotel ${i + 1} of ${count}`}
            aria-current={i === active ? "true" : undefined}
            className="group/dot flex size-6 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active ? "size-2.5 bg-sage-light" : "size-1.5 bg-ivory/45 group-hover/dot:bg-ivory/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
