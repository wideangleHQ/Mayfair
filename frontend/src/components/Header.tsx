"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import MegaPanelContent from "@/components/MegaMenus";
import { logos, mainNav, megaMenus, offers, type MenuId } from "@/constants/content";

const subscribeScroll = (cb: () => void) => {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
};

const CLOSE_DELAY = 220; // forgiving: the pointer can cross small gaps without the menu vanishing

export default function Header() {
  const scrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 40, () => false);
  const [open, setOpen] = useState<MenuId | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const header = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  const triggers = useRef<Partial<Record<MenuId, HTMLButtonElement | null>>>({});
  const focusInto = useRef(false);

  const solid = scrolled || open !== null;

  const cancelClose = () => clearTimeout(timer.current);
  const openMenu = (id: MenuId) => {
    cancelClose();
    setOpen(id);
  };
  const closeMenu = () => {
    cancelClose();
    setOpen(null);
  };
  const closeSoon = () => {
    cancelClose();
    timer.current = setTimeout(() => setOpen(null), CLOSE_DELAY);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  // While open: tapping outside closes (touch laptops/tablets), and so does any in-page navigation.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(null);
    };
    const onHash = () => setOpen(null);
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("hashchange", onHash);
    };
  }, [open]);

  // Keyboard users who open a menu land on its first link, since the panel sits after all triggers.
  useEffect(() => {
    if (!open || !focusInto.current) return;
    focusInto.current = false;
    // The panel's visibility is still transitioning at commit time, so wait a beat before focusing.
    const t = setTimeout(() => panel.current?.querySelector<HTMLElement>("a")?.focus(), 60);
    return () => clearTimeout(t);
  }, [open]);

  const onTriggerClick = (id: MenuId, e: React.MouseEvent) => {
    const mouse = (e.nativeEvent as PointerEvent).pointerType === "mouse";
    if (mouse) return openMenu(id); // hover already opened it; a click must not close it
    if (open === id) return closeMenu();
    focusInto.current = e.detail === 0; // keyboard activation
    openMenu(id);
  };

  return (
    <header
      ref={header}
      onPointerEnter={cancelClose}
      onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          const id = open;
          closeMenu();
          triggers.current[id]?.focus();
        }
      }}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,color,box-shadow] duration-300 ease-calm ${
        solid ? "bg-ivory text-forest shadow-[0_1px_0_var(--color-border)]" : "bg-transparent text-white"
      }`}
    >
      {/* Very soft top scrim keeps white nav legible over bright skies; fades out once solid. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-linear-to-b from-black/50 via-black/25 to-transparent transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`}
      />
      <div className="wrap flex h-18 items-center justify-between gap-4 lg:grid lg:h-22 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="relative block h-12 w-[68px] shrink-0 lg:h-16 lg:w-[90px]" aria-label="MAYFAIR Hotels & Resorts — home">
          <Image src={logos.white} alt="" fill sizes="100px" preload className={`object-contain transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`} />
          <Image src={logos.colour} alt="" fill sizes="100px" className={`object-contain transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`} />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-[clamp(1.25rem,2.6vw,3rem)]">
            {mainNav.map((item) => {
              const active = open === item.id;
              return (
                <li key={item.id}>
                  <button
                    ref={(el) => {
                      triggers.current[item.id] = el;
                    }}
                    type="button"
                    aria-expanded={active}
                    aria-controls="mega-panel"
                    onPointerEnter={(e) => e.pointerType === "mouse" && openMenu(item.id)}
                    onClick={(e) => onTriggerClick(item.id, e)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        focusInto.current = true;
                        openMenu(item.id);
                      }
                    }}
                    className="group flex h-22 items-center text-[clamp(0.75rem,0.95vw,0.9375rem)] font-semibold tracking-[0.12em] whitespace-nowrap uppercase"
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -bottom-1.5 h-px origin-left bg-current transition-transform duration-300 ease-calm group-hover:scale-x-100 ${active ? "scale-x-100" : "scale-x-0"}`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3 lg:gap-4">
          <a
            href="#booking"
            className={`btn min-h-11 border px-4 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase sm:min-h-[46px] sm:px-6 sm:text-xs lg:text-[0.8125rem] transition-all duration-300 ${
              solid
                ? "border-forest bg-forest text-white shadow-xs hover:bg-forest-hover"
                : "border-white/25 bg-forest text-white shadow-sm hover:bg-white hover:text-forest"
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

      {/* Desktop mega menu: one full-width panel; switching menus swaps its content, it never closes and reopens. */}
      <div
        id="mega-panel"
        ref={panel}
        className={`absolute inset-x-0 top-full hidden border-t border-border bg-ivory text-forest shadow-[0_28px_40px_-28px_rgb(0_0_0/0.3)] transition-[opacity,translate,visibility] ease-calm [transition-duration:300ms,300ms,0s] lg:block ${
          // Visible the instant it opens (so it is focusable at once); hidden only after the fade-out ends.
          open ? "visible translate-y-0 opacity-100 [transition-delay:0s]" : "invisible -translate-y-2 opacity-0 [transition-delay:0s,0s,300ms]"
        }`}
      >
        <div className="wrap min-h-[clamp(21rem,46svh,27rem)] py-[clamp(1.75rem,3.2svh,2.75rem)]">
          {open && <MegaPanelContent key={open} id={open} onNavigate={closeMenu} />}
        </div>
      </div>

      {/* Mobile and tablet drawer: native modal dialog gives focus containment and Escape for free. */}
      <dialog
        ref={drawer}
        aria-label="Menu"
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-forest p-0 text-white opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 open:opacity-100 starting:open:opacity-0 backdrop:bg-transparent"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) drawer.current?.close();
        }}
      >
        <div className="wrap flex min-h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="flex h-18 shrink-0 items-center justify-between">
            <span className="relative block h-12 w-[68px]">
              <Image src={logos.white} alt="MAYFAIR Hotels & Resorts" fill sizes="68px" className="object-contain" />
            </span>
            <button type="button" className="-mr-2 flex size-12 items-center justify-center" aria-label="Close menu" onClick={() => drawer.current?.close()}>
              <svg aria-hidden width="20" height="20" viewBox="0 0 20 20">
                <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-4 flex-1">
            {mainNav.map((item) => (
              <details key={item.id} name="mobile-nav" className="group border-b border-white/15">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between font-display text-h3 [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <span aria-hidden className="text-2xl text-sage-light transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="pb-6">
                  <DrawerSection id={item.id} />
                </div>
              </details>
            ))}
          </nav>

          <a href="#booking" className="btn mt-8 min-h-14 w-full bg-white text-sm font-semibold tracking-[0.14em] text-forest uppercase hover:bg-ivory">
            Book your stay
          </a>
        </div>
      </dialog>
    </header>
  );
}

const drawerLink = "flex min-h-11 items-center text-[1.0625rem] text-white/85 hover:text-white";
const drawerEyebrow = "eyebrow mb-1 text-sage-light";

function DrawerSection({ id }: { id: MenuId }) {
  switch (id) {
    case "destinations": {
      const m = megaMenus.destinations;
      return (
        <>
          {m.groups.map((g) => (
            <div key={g.title} className="mt-5 first:mt-0">
              <p className={drawerEyebrow}>{g.title}</p>
              <ul className="grid grid-cols-2 gap-x-4">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={drawerLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <a href={m.cta.href} className="eyebrow mt-3 flex min-h-11 items-center text-white">
            {m.cta.label} →
          </a>
        </>
      );
    }
    case "experiences":
    case "celebrations": {
      const items = megaMenus[id].items;
      return (
        <ul>
          {items.map((c) => (
            <li key={c.title}>
              <a href={c.href} className="block py-2">
                <span className="block font-display text-[1.25rem] text-white">{c.title}</span>
                <span className="block text-sm text-white/70">{c.copy}</span>
              </a>
            </li>
          ))}
        </ul>
      );
    }
    case "offers": {
      const m = megaMenus.offers;
      return (
        <>
          <ul>
            {offers.items.slice(0, 3).map((o) => (
              <li key={o.title}>
                <a href={m.all.href} className="block py-2">
                  <span className="block font-display text-[1.25rem] text-white">{o.title}</span>
                  <span className="block text-sm text-white/70">{o.property}</span>
                </a>
              </li>
            ))}
          </ul>
          <a href={m.all.href} className="eyebrow mt-3 flex min-h-11 items-center text-white">
            {m.all.label} →
          </a>
        </>
      );
    }
    case "story":
      return (
        <ul>
          {megaMenus.story.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className={drawerLink}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      );
  }
}
