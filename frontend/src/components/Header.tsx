"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { hotelGroups, logos, nav, properties, propertyById } from "@/constants/content";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 40, () => false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [preview, setPreview] = useState(properties[0].id);
  const drawer = useRef<HTMLDialogElement>(null);
  const megaButton = useRef<HTMLButtonElement>(null);

  const solid = scrolled || megaOpen;
  const active = propertyById(preview) ?? properties[0];
  const closeMega = () => setMegaOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,color,box-shadow] duration-300 ease-calm ${
        solid ? "bg-white text-charcoal shadow-[0_1px_0_var(--color-border)]" : "bg-transparent text-white"
      }`}
      onMouseLeave={closeMega}
      onKeyDown={(e) => {
        if (e.key === "Escape" && megaOpen) {
          closeMega();
          megaButton.current?.focus();
        }
      }}
    >
      {/* Soft top scrim keeps white nav legible over bright skies; disappears once solid. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-linear-to-b from-black/50 via-black/25 to-transparent transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
      />
      <div className="wrap flex h-18 items-center justify-between gap-6 lg:h-22">
        <a href="#top" className="relative block h-12 w-[68px] shrink-0 lg:h-16 lg:w-[90px]" aria-label="MAYFAIR Hotels & Resorts — home">
          <Image src={logos.white} alt="" fill sizes="100px" preload className={`object-contain transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`} />
          <Image src={logos.colour} alt="" fill sizes="100px" className={`object-contain transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9 text-[0.8125rem] xl:text-[0.875rem] font-semibold uppercase tracking-[0.1em]">
            <li onPointerEnter={(e) => e.pointerType === "mouse" && setMegaOpen(true)}>
              <button
                ref={megaButton}
                type="button"
                aria-expanded={megaOpen}
                aria-controls="mega-hotels"
                // Mouse already opened it on hover, so a click keeps it open; keyboard and touch toggle.
                onClick={(e) => setMegaOpen((o) => ((e.nativeEvent as PointerEvent).pointerType === "mouse" ? true : !o))}
                className="flex h-22 items-center gap-2 hover:text-gold transition-colors duration-200"
              >
                Our hotels
                <svg aria-hidden width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </li>
            {nav.map((item) => (
              <li key={item.href} onMouseEnter={closeMega}>
                <a href={item.href} className="flex h-22 items-center hover:text-gold transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className={`btn hidden sm:inline-flex text-xs lg:text-[0.8125rem] font-semibold uppercase tracking-[0.12em] px-6 py-2.5 min-h-[46px] rounded-[2px] transition-all duration-300 ${
              solid
                ? "bg-forest text-white hover:bg-forest-hover border border-forest shadow-xs"
                : "bg-forest text-white hover:bg-white hover:text-forest border border-white/25 shadow-sm"
            }`}
          >
            Book your stay
          </a>
          <button
            type="button"
            className="-mr-2 flex size-12 items-center justify-center lg:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
            onClick={() => drawer.current?.showModal()}
          >
            <svg aria-hidden width="26" height="14" viewBox="0 0 26 14">
              <path d="M0 1h26M8 13h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop mega-menu: destinations by region, with a live image preview. */}
      <div
        id="mega-hotels"
        hidden={!megaOpen}
        className="absolute inset-x-0 top-full border-t border-border bg-white text-charcoal shadow-[0_24px_40px_-24px_rgb(0_0_0/0.25)]"
      >
        {megaOpen && (
          <div className="wrap grid grid-cols-12 gap-8 py-12">
            <div className="col-span-7 grid grid-cols-3 gap-8">
              {hotelGroups.map((group) => (
                <div key={group.title}>
                  <p className="eyebrow mb-5 text-botanical">{group.title}</p>
                  <ul className="space-y-1">
                    {group.ids.map((id) => {
                      const p = propertyById(id);
                      if (!p) return null;
                      return (
                        <li key={id}>
                          <a
                            href={`#book-${id}`}
                            onMouseEnter={() => setPreview(id)}
                            onFocus={() => setPreview(id)}
                            onClick={closeMega}
                            className="group block py-1.5"
                          >
                            <span className={`block font-display text-lg leading-snug transition-colors ${preview === id ? "text-forest" : ""}`}>{p.place}</span>
                            <span className="block text-sm text-botanical">{p.region}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <a href={`#book-${active.id}`} onClick={closeMega} className="group col-span-5 block">
              <div className="relative aspect-[16/10] overflow-hidden bg-border">
                <Image
                  key={active.id}
                  src={active.image.src}
                  alt={active.image.alt}
                  fill
                  sizes="40vw"
                  className="object-cover transition-transform duration-700 ease-calm group-hover:scale-[1.03]"
                  style={{ objectPosition: active.image.position }}
                />
              </div>
              <p className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-display text-h4">{active.name}</span>
                <span className="text-sm font-semibold text-forest">Check availability →</span>
              </p>
            </a>
          </div>
        )}
      </div>

      {/* Mobile drawer: native modal dialog gives focus containment and Escape for free. */}
      <dialog
        ref={drawer}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none bg-forest p-0 text-white opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 open:opacity-100 starting:open:opacity-0 backdrop:bg-transparent"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) drawer.current?.close();
        }}
      >
        <div className="wrap flex min-h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="flex h-16 items-center justify-between">
            <span className="relative block h-11 w-[62px]">
              <Image src={logos.white} alt="MAYFAIR Hotels & Resorts" fill sizes="64px" className="object-contain" />
            </span>
            <button type="button" className="-mr-2 flex size-12 items-center justify-center" aria-label="Close menu" onClick={() => drawer.current?.close()}>
              <svg aria-hidden width="20" height="20" viewBox="0 0 20 20">
                <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex-1">
            <details className="group border-b border-white/15">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between font-display text-h3 [&::-webkit-details-marker]:hidden">
                Our hotels
                <span aria-hidden className="text-2xl transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 pb-6">
                {properties.map((p) => (
                  <li key={p.id}>
                    <a href={`#book-${p.id}`} className="block py-2 text-white/85">
                      {p.place}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-white/15">
                  <a href={item.href} className="flex min-h-16 items-center font-display text-h3">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#booking" className="btn mt-10 w-full bg-white text-forest hover:bg-ivory">
            Book your stay
          </a>
        </div>
      </dialog>
    </header>
  );
}
