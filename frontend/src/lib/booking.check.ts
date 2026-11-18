// Run: bun src/lib/booking.check.ts
import assert from "node:assert/strict";
import { addDays, nightsBetween, validate } from "./booking";

const ok = { property: "lagoon", checkIn: "2026-12-01", checkOut: "2026-12-03", guests: 2, rooms: 1 };
const today = "2026-11-18";

assert.deepEqual(validate(ok, today), {});
assert.ok(validate({ ...ok, property: "" }, today).property);
assert.ok(validate({ ...ok, checkIn: "2026-11-17" }, today).checkIn);
assert.ok(validate({ ...ok, checkOut: "2026-12-01" }, today).checkOut);
assert.ok(validate({ ...ok, checkOut: "2026-11-30" }, today).checkOut);
assert.ok(validate({ ...ok, guests: 1, rooms: 2 }, today).guests);
assert.deepEqual(validate({ ...ok, checkIn: "2026-11-18", checkOut: "2026-11-19" }, today), {});
assert.equal(addDays("2026-12-31", 1), "2027-01-01");
assert.equal(nightsBetween("2027-03-28", "2027-03-30"), 2);
console.log("booking: ok");
