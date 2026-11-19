"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { logos } from "@/constants/content";

/**
 * Entry preloader. It shows on every full page load (so on refresh too) but not on in-app
 * navigation, since the root layout does not remount. A tiny inline script in layout.tsx adds
 * `pl-lock` to <html> before first paint, so there is no flash and, without JavaScript, the
 * overlay simply never appears. This component only runs the exit:
 * it waits for the minimum sequence time, fonts and the hero image (capped), then fades away,
 * releasing the scroll lock and letting the hero's own entrance play underneath.
 */
const MIN_MS = 1500; // entrance sequence + a short hold
const MIN_MS_REDUCED = 700;
const MAX_MS = 3500; // never keep anyone waiting longer than this
const EXIT_MS = 700;

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const el = root.current;
    if (!el || !html.classList.contains("pl-lock")) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const fonts = document.fonts?.ready ?? Promise.resolve();
    const hero = new Promise<void>((resolve) => {
      const img = document.querySelector<HTMLImageElement>("#top img");
      if (!img || img.complete) return resolve();
      img.addEventListener("load", () => resolve(), { once: true });
      img.addEventListener("error", () => resolve(), { once: true });
    });

    let cancelled = false;
    let endTimer: ReturnType<typeof setTimeout>;
    Promise.race([Promise.all([wait(reduce ? MIN_MS_REDUCED : MIN_MS), fonts, hero]), wait(MAX_MS)]).then(() => {
      if (cancelled) return;
      // Unlock scroll and start the hero now; the overlay keeps covering it while it fades.
      html.classList.add("pl-leaving");
      html.classList.remove("pl-lock");
      el.dataset.state = "leaving";
      endTimer = setTimeout(() => html.classList.remove("pl-leaving"), reduce ? 50 : EXIT_MS + 100);
    });

    return () => {
      cancelled = true;
      clearTimeout(endTimer);
    };
  }, []);

  return (
    <div ref={root} className="preloader" aria-hidden="true" data-state="active">
      <div className="flex flex-col items-center px-6 text-center">
        <Image
          src={logos.white}
          alt=""
          width={200}
          height={141}
          preload
          sizes="160px"
          onError={() => setLogoOk(false)}
          className={`pl-logo h-auto w-[clamp(6.5rem,9vw,9.5rem)] ${logoOk ? "" : "invisible"}`}
        />
        <p className="pl-title mt-[clamp(1.75rem,3.2vw,2.75rem)] font-display text-[clamp(1.5rem,3.3vw,3.125rem)] leading-[1.18] text-balance text-paper">
          <span className="block">Some places welcome you.</span> <span className="block">Others stay with you.</span>
        </p>
        <span aria-hidden className="pl-rule mt-[clamp(1.5rem,2.6vw,2.25rem)] block h-px w-[clamp(4rem,6vw,5.5rem)] bg-sage-light" />
        <p className="pl-sub eyebrow mt-[clamp(1rem,1.8vw,1.5rem)] text-[clamp(0.6875rem,0.9vw,0.75rem)] tracking-[0.24em] text-ivory/70">A MOMENT OF WELCOME</p>
      </div>
    </div>
  );
}
