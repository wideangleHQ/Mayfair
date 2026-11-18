export type Stay = { property: string; checkIn: string; checkOut: string; guests: number; rooms: number };
export type Field = "property" | "checkIn" | "checkOut" | "guests";
export type Errors = Partial<Record<Field, string>>;

const DAY = 86_400_000;
/** ISO yyyy-mm-dd arithmetic in UTC so timezones never shift the date. */
export const addDays = (iso: string, n: number) => new Date(Date.parse(iso) + n * DAY).toISOString().slice(0, 10);
export const nightsBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);

/** `today` is the guest's local yyyy-mm-dd, or "" before it is known. */
export function validate(s: Stay, today: string): Errors {
  const e: Errors = {};
  if (!s.property) e.property = "Choose a destination.";
  if (!s.checkIn) e.checkIn = "Choose an arrival date.";
  else if (today && s.checkIn < today) e.checkIn = "Arrival can't be in the past.";
  if (!s.checkOut) e.checkOut = "Choose a departure date.";
  else if (s.checkIn && s.checkOut <= s.checkIn) e.checkOut = "Departure must be after arrival.";
  if (s.guests < s.rooms) e.guests = "Each room needs at least one guest.";
  return e;
}
