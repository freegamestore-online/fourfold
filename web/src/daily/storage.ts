// Saved state for the daily: one result per day, in-progress guesses, and the stats record.
// Missing, corrupt or blocked storage reads as empty; a full quota just means nothing is kept.

export const STATS_KEY = "fourfold-stats";
const resultKey = (date: string) => `fourfold-result-${date}`;
const progressKey = (date: string) => `fourfold-progress-${date}`;

export interface DayResult {
  date: string;
  won: boolean;
  mistakes: number;
  seconds: number;
  guesses: string[][];
}

export interface Progress {
  date: string;
  /** When the first guess started, in ms since the epoch. Time counts from here. */
  startedAt: number;
  guesses: string[][];
}

export function readJson(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}

export function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private mode or a full quota: play still works, it just isn't kept.
  }
}

function isGuessList(value: unknown): value is string[][] {
  return (
    Array.isArray(value) &&
    value.every((guess) => Array.isArray(guess) && guess.length === 4 && guess.every((w) => typeof w === "string"))
  );
}

function isMistakeCount(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 4;
}

export function saveResult(result: DayResult): void {
  writeJson(resultKey(result.date), result);
}

export function loadResult(date: string): DayResult | null {
  const value = readJson(resultKey(date));
  if (!value || typeof value !== "object") return null;
  const r = value as Partial<DayResult>;
  const valid =
    r.date === date &&
    typeof r.won === "boolean" &&
    isMistakeCount(r.mistakes) &&
    typeof r.seconds === "number" &&
    Number.isFinite(r.seconds) &&
    r.seconds >= 0 &&
    isGuessList(r.guesses);
  return valid ? (r as DayResult) : null;
}

export function saveProgress(progress: Progress): void {
  writeJson(progressKey(progress.date), progress);
}

export function loadProgress(date: string): Progress | null {
  const value = readJson(progressKey(date));
  if (!value || typeof value !== "object") return null;
  const p = value as Partial<Progress>;
  const valid =
    p.date === date && typeof p.startedAt === "number" && Number.isFinite(p.startedAt) && isGuessList(p.guesses);
  return valid ? (p as Progress) : null;
}
