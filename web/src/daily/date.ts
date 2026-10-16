import { puzzles, type Puzzle } from "../data/puzzles";

/** Daily puzzle #1. Puzzles then cycle in id order, one per UTC day. */
export const EPOCH = "2026-10-16";

const DAY_MS = 86_400_000;

/** Today's date in UTC as YYYY-MM-DD, so everyone worldwide gets the same day. */
export function utcDate(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

function toUtcMs(date: string): number {
  const [year, month, day] = date.split("-").map(Number) as [number, number, number];
  return Date.UTC(year, month - 1, day);
}

export function addDays(date: string, days: number): string {
  return new Date(toUtcMs(date) + days * DAY_MS).toISOString().slice(0, 10);
}

export function previousUtcDate(date: string): string {
  return addDays(date, -1);
}

/** Whole days from `from` to `to`. Negative when `to` is earlier. */
export function daysBetween(from: string, to: string): number {
  return Math.round((toUtcMs(to) - toUtcMs(from)) / DAY_MS);
}

/** The puzzle number for a date: #1 on EPOCH, #2 the day after, and so on. */
export function dailyNumber(date: string): number {
  return daysBetween(EPOCH, date) + 1;
}

/** The puzzle for a date. Puzzles repeat in id order once the list is used up. */
export function puzzleForDate(date: string, list: readonly Puzzle[] = puzzles): Puzzle {
  const count = list.length;
  const index = (((dailyNumber(date) - 1) % count) + count) % count;
  return list[index]!;
}

/** Past days, newest first, from yesterday back to EPOCH. Today is not included. */
export function archiveDates(today: string): string[] {
  const dates: string[] = [];
  for (let date = previousUtcDate(today); daysBetween(EPOCH, date) >= 0; date = previousUtcDate(date)) {
    dates.push(date);
  }
  return dates;
}
