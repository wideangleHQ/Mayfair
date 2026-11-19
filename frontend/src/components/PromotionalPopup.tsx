"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { promotionalPopup } from "@/constants/content";

export default function PromotionalPopup() {
  // Opens on every page load when enabled. It starts off-screen (isAnimated=false) and slides in below.
  const [isOpen, setIsOpen] = useState(promotionalPopup.enabled);
  const [isAnimated, setIsAnimated] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close with smooth slide-out animation to the right
  const handleClose = useCallback(() => {
    setIsAnimated(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 450);
  }, []);

  // Slide-in shortly after mount (setState happens in the timer callback, not synchronously).
  useEffect(() => {
    if (!promotionalPopup.enabled) return;

    const animTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 50);

    return () => clearTimeout(animTimer);
  }, []);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Promotional invitation"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100%-1.5rem)] sm:w-[520px] md:w-[560px] pointer-events-none"
    >
      {/* Split-panel card: Instant entrance, slides in smoothly from the RIGHT */}
      <div
        className={`pointer-events-auto relative flex overflow-hidden rounded-[2px] border border-border/90 bg-white shadow-[0_16px_45px_-8px_rgba(0,0,0,0.3)] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isAnimated
            ? "translate-x-0 opacity-100"
            : "translate-x-[110%] opacity-0"
        }`}
      >
        {/* Left: Promotional Image (~38-40% width) */}
        <div className="relative w-[38%] sm:w-[40%] shrink-0 overflow-hidden bg-border min-h-[170px] sm:min-h-[210px]">
          <Image
            src={promotionalPopup.image.src}
            alt={promotionalPopup.image.alt}
            fill
            sizes="(min-width: 640px) 240px, 40vw"
            className="object-cover"
            priority
          />
          {promotionalPopup.image.watermark && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-3 select-none font-display text-lg italic tracking-wider text-white/40 drop-shadow-sm"
            >
              {promotionalPopup.image.watermark}
            </span>
          )}
        </div>

        {/* Right: Promotional Content (~60-62% width) */}
        <div className="relative flex w-[62%] sm:w-[60%] flex-col justify-between bg-white p-4 sm:p-5 sm:pr-7">
          {/* Close button in top-right corner */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close promotional invitation"
            className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 flex size-8 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-black/5 hover:text-forest"
          >
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {/* Heading and copy */}
          <div className="pr-3 sm:pr-4">
            <p className="eyebrow mb-1.5 text-[0.625rem] tracking-[0.16em] text-botanical">
              {promotionalPopup.eyebrow}
            </p>
            <h2 className="font-display text-sm sm:text-base lg:text-[1.0625rem] font-normal uppercase leading-[1.22] tracking-[0.04em] text-forest">
              {promotionalPopup.heading}
            </h2>

            <span
              aria-hidden="true"
              className="my-2 block h-px w-8 bg-sage"
            />

            <p className="text-xs sm:text-[0.8125rem] font-normal leading-[1.6] text-charcoal/80 line-clamp-3">
              {promotionalPopup.copy}
            </p>
          </div>

          {/* Minimal CTA link */}
          <div className="pt-3 sm:pt-4">
            <a
              href={promotionalPopup.cta.href}
              onClick={handleClose}
              className="group inline-flex items-center gap-2 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:text-botanical"
            >
              <span className="border-b border-forest/60 pb-0.5 transition-colors group-hover:border-forest">
                {promotionalPopup.cta.label}
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
