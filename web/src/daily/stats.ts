import { previousUtcDate } from "./date";
import { STATS_KEY, readJson, writeJson } from "./storage";

export interface Stats {
  played: number;
  won: number;
  /** Wins in a row on consecutive days, through the last win. */
  streak: number;
  maxStreak: number;
  /** The last date recorded at all, so a day is only counted once. */
  lastPlayed: string | null;
  /** The last date won, which decides whether a new win extends the streak. */
  lastWon: string | null;
  /** Games by mistakes used: index 0 is clean, index 4 is a loss. */
  mistakes: number[];
}

export const EMPTY_STATS: Stats = {
  played: 0,
  won: 0,
  streak: 0,
  maxStreak: 0,
  lastPlayed: null,
  lastWon: null,
  mistakes: [0, 0, 0, 0, 0],
};

function isCount(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0;
}

export function loadStats(): Stats {
  const value = readJson(STATS_KEY);
  if (!value || typeof value !== "object") return EMPTY_STATS;
  const s = value as Partial<Stats>;
  const valid =
    isCount(s.played) &&
    isCount(s.won) &&
    isCount(s.streak) &&
    isCount(s.maxStreak) &&
    (s.lastPlayed === null || typeof s.lastPlayed === "string") &&
    (s.lastWon === null || typeof s.lastWon === "string") &&
    Array.isArray(s.mistakes) &&
    (s.mistakes.length === 4 || s.mistakes.length === EMPTY_STATS.mistakes.length) &&
    s.mistakes.every(isCount);
  return valid
    ? ({ ...s, mistakes: s.mistakes!.length === 4 ? [...s.mistakes!, 0] : s.mistakes } as Stats)
    : EMPTY_STATS;
}

export function saveStats(stats: Stats): void {
  writeJson(STATS_KEY, stats);
}

/**
 * Counts one daily result. Recording the same date twice changes nothing. A win the day
 * after the last win extends the streak; a loss or a gap starts it again.
 */
export function recordResult(stats: Stats, date: string, won: boolean, mistakes: number): Stats {
  if (stats.lastPlayed === date) return stats;
  const played = stats.played + 1;
  const distribution = stats.mistakes.map((count, index) => (index === mistakes ? count + 1 : count));
  if (!won) return { ...stats, played, streak: 0, lastPlayed: date, mistakes: distribution };
  const streak = stats.lastWon === previousUtcDate(date) ? stats.streak + 1 : 1;
  return {
    played,
    won: stats.won + 1,
    streak,
    maxStreak: Math.max(stats.maxStreak, streak),
    lastPlayed: date,
    lastWon: date,
    mistakes: distribution,
  };
}

/** A streak remains current through today if yesterday was the last win. */
export function currentStreak(stats: Stats, today: string): number {
  if (stats.lastPlayed === today && stats.streak === 0) return 0;
  return stats.lastWon === today || stats.lastWon === previousUtcDate(today) ? stats.streak : 0;
}

/** Leaderboard score for a solve. Higher is better: fewer mistakes and less time both help. */
export function leaderboardScore(mistakes: number, seconds: number): number {
  return Math.max(1, 1000 - 100 * mistakes - seconds);
}
