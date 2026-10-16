import { describe, expect, it } from "vitest";
import { puzzles } from "../data/puzzles";
import { EPOCH, addDays, archiveDates, dailyNumber, puzzleForDate, utcDate } from "./date";

describe("daily dates", () => {
  it("uses the UTC calendar day", () => {
    expect(utcDate(new Date("2026-10-16T23:30:00Z"))).toBe("2026-10-16");
    expect(utcDate(new Date("2026-10-17T00:30:00Z"))).toBe("2026-10-17");
  });

  it("numbers the epoch day 1 and counts forward across month ends", () => {
    expect(dailyNumber(EPOCH)).toBe(1);
    expect(dailyNumber(addDays(EPOCH, 1))).toBe(2);
    expect(dailyNumber("2026-11-01")).toBe(17);
  });

  it("gives every date the same puzzle, and wraps after the last puzzle", () => {
    expect(puzzleForDate(EPOCH).id).toBe(1);
    expect(puzzleForDate(addDays(EPOCH, 119)).id).toBe(120);
    expect(puzzleForDate(addDays(EPOCH, 120)).id).toBe(1);
  });

  it("wraps over any list length", () => {
    const three = puzzles.slice(0, 3);
    expect(puzzleForDate(addDays(EPOCH, 3), three).id).toBe(1);
    expect(puzzleForDate(addDays(EPOCH, 4), three).id).toBe(2);
  });

  it("lists past days newest first, stopping at the epoch", () => {
    const today = addDays(EPOCH, 3);
    expect(archiveDates(today)).toEqual([addDays(EPOCH, 2), addDays(EPOCH, 1), EPOCH]);
  });

  it("has no archive before the first day", () => {
    expect(archiveDates(EPOCH)).toEqual([]);
  });
});
