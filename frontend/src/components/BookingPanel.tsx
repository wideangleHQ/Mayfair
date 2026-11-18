"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { properties, propertyById } from "@/constants/content";
import { addDays, nightsBetween, validate, type Errors, type Field, type Stay } from "@/lib/booking";

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
// Local calendar date; read on the client only (no clock access during prerender).
const noop = () => () => {};
const useToday = () => useSyncExternalStore(noop, () => new Date().toLocaleDateString("en-CA"), () => "");

const labelCls = "eyebrow mb-2 block text-botanical";
const controlCls =
  "h-12 w-full border-0 border-b border-sage bg-transparent px-0 text-base text-charcoal transition-colors focus:border-forest aria-invalid:border-error";

export default function BookingPanel() {
  const uid = useId();
  const today = useToday();
  const [stay, setStay] = useState<Stay>({ property: "", checkIn: "", checkOut: "", guests: 2, rooms: 1 });
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState("");
  const checkInRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Links like #book-lagoon (mega-menu, destination cards) preselect the property here.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.<HTMLAnchorElement>('a[href^="#book-"]');
      const id = link?.getAttribute("href")?.slice(6);
      if (!id || !propertyById(id)) return;
      e.preventDefault();
      setStay((s) => ({ ...s, property: id }));
      history.replaceState(null, "", "#booking");
      // Focus first: focusing during a smooth scroll cancels it in Chromium.
      checkInRef.current?.focus({ preventScroll: true });
      sectionRef.current?.scrollIntoView({ block: "center" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const set = <K extends keyof Stay>(k: K, v: Stay[K]) => {
    setStay((s) => {
      const next = { ...s, [k]: v };
      if (k === "checkIn" && next.checkOut && next.checkOut <= next.checkIn) next.checkOut = "";
      return next;
    });
    setSummary("");
    if (k in errors) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(stay, today);
    setErrors(e);
    const first = (Object.keys(e) as Field[])[0];
    if (first) {
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    const p = propertyById(stay.property);
    const n = nightsBetween(stay.checkIn, stay.checkOut);
    // ponytail: no booking engine exists in this project yet. Hand `stay` to it here when it does;
    // until then we only restate the selection and never imply availability or confirmation.
    setSummary(
      `${p?.name}, ${fmt(stay.checkIn)} – ${fmt(stay.checkOut)} · ${n} night${n > 1 ? "s" : ""}, ${stay.guests} guest${stay.guests > 1 ? "s" : ""}, ${stay.rooms} room${stay.rooms > 1 ? "s" : ""}. Live availability will appear here once online reservations are connected.`,
    );
  };

  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${uid}-${f}-err`} className="mt-2 text-sm text-error">
        {errors[f]}
      </p>
    ) : null;
  const a11y = (f: Field) => ({
    id: `${uid}-${f}`,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": errors[f] ? `${uid}-${f}-err` : undefined,
  });

  return (
    <section ref={sectionRef} id="booking" aria-labelledby={`${uid}-title`} className="relative z-10 scroll-mt-24">
      <div className="wrap lg:-mt-24">
        <div className="bg-paper px-5 py-8 shadow-[0_30px_60px_-30px_rgb(25_62_48/0.35)] sm:px-8 lg:px-10 lg:py-9">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 lg:mb-4">
            <h2 id={`${uid}-title`} className="font-display text-h4 text-forest">
              Plan your stay
            </h2>
            <p className="text-sm text-botanical">All fields required</p>
          </div>

          <form noValidate onSubmit={onSubmit} className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-[1.6fr_1fr_1fr_0.7fr_0.7fr_auto] lg:items-start lg:gap-x-8">
            <div className="col-span-2 lg:col-span-1">
              <label htmlFor={`${uid}-property`} className={labelCls}>
                Destination
              </label>
              <select {...a11y("property")} value={stay.property} onChange={(e) => set("property", e.target.value)} className={controlCls}>
                <option value="">Select a hotel or resort</option>
                {properties.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.place}
                  </option>
                ))}
              </select>
              {err("property")}
            </div>

            <div>
              <label htmlFor={`${uid}-checkIn`} className={labelCls}>
                Check-in
              </label>
              <input
                ref={checkInRef}
                type="date"
                {...a11y("checkIn")}
                min={today || undefined}
                value={stay.checkIn}
                onChange={(e) => set("checkIn", e.target.value)}
                className={controlCls}
              />
              {err("checkIn")}
            </div>

            <div>
              <label htmlFor={`${uid}-checkOut`} className={labelCls}>
                Check-out
              </label>
              <input
                type="date"
                {...a11y("checkOut")}
                min={stay.checkIn ? addDays(stay.checkIn, 1) : today || undefined}
                value={stay.checkOut}
                onChange={(e) => set("checkOut", e.target.value)}
                className={controlCls}
              />
              {err("checkOut")}
            </div>

            <div>
              <label htmlFor={`${uid}-guests`} className={labelCls}>
                Guests
              </label>
              <select {...a11y("guests")} value={stay.guests} onChange={(e) => set("guests", Number(e.target.value))} className={controlCls}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {err("guests")}
            </div>

            <div>
              <label htmlFor={`${uid}-rooms`} className={labelCls}>
                Rooms
              </label>
              <select id={`${uid}-rooms`} value={stay.rooms} onChange={(e) => set("rooms", Number(e.target.value))} className={controlCls}>
                {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn col-span-2 bg-forest text-white hover:bg-forest-hover lg:col-span-1 lg:mt-6">
              Check availability
            </button>
          </form>

          <p role="status" className={summary ? "mt-6 border-l-2 border-gold pl-4 text-sm text-charcoal" : "sr-only"}>
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
