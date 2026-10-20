import { describe, expect, it } from "vitest";
import { currentStreak, EMPTY_STATS, leaderboardScore, loadStats, recordResult, saveStats } from "./stats";

describe("recordResult", () => {
  it("counts a win and its mistakes", () => {
    const next = recordResult(EMPTY_STATS, "2026-10-16", true, 2);
    expect(next).toMatchObject({ played: 1, won: 1, streak: 1, maxStreak: 1, mistakes: [0, 0, 1, 0, 0] });
  });

  it("extends the streak for a win on the next day", () => {
    const first = recordResult(EMPTY_STATS, "2026-10-16", true, 0);
    const second = recordResult(first, "2026-10-17", true, 1);
    expect(second.streak).toBe(2);
    expect(second.maxStreak).toBe(2);
  });

  it("starts the streak again after a gap", () => {
    const first = recordResult(EMPTY_STATS, "2026-10-16", true, 0);
    const later = recordResult(first, "2026-10-18", true, 0);
    expect(later.streak).toBe(1);
    expect(later.maxStreak).toBe(1);
  });

  it("expires a streak after a missed UTC day without changing the best", () => {
    const first = recordResult(EMPTY_STATS, "2026-10-16", true, 0);
    const second = recordResult(first, "2026-10-17", true, 1);
    expect(currentStreak(second, "2026-10-18")).toBe(2);
    expect(currentStreak(second, "2026-10-19")).toBe(0);
    expect(second.maxStreak).toBe(2);
  });

  it("ends the streak on a loss but keeps the best", () => {
    const won = recordResult(EMPTY_STATS, "2026-10-16", true, 0);
    const streakTwo = recordResult(won, "2026-10-17", true, 0);
    const lost = recordResult(streakTwo, "2026-10-18", false, 4);
    expect(lost).toMatchObject({ played: 3, won: 2, streak: 0, maxStreak: 2, mistakes: [2, 0, 0, 0, 1] });
    expect(recordResult(lost, "2026-10-19", true, 0).streak).toBe(1);
  });

  it("counts losses in the four-mistake chart bucket", () => {
    expect(recordResult(EMPTY_STATS, "2026-10-16", false, 4).mistakes).toEqual([0, 0, 0, 0, 1]);
  });

  it("counts a date only once", () => {
    const once = recordResult(EMPTY_STATS, "2026-10-16", true, 0);
    expect(recordResult(once, "2026-10-16", true, 0)).toBe(once);
  });

  it("keeps saved history and upgrades the previous four-bucket format", () => {
    localStorage.setItem("fourfold-stats", JSON.stringify({
      ...EMPTY_STATS,
      played: 2,
      won: 2,
      mistakes: [1, 0, 1, 0],
    }));
    expect(loadStats()).toMatchObject({ played: 2, won: 2, mistakes: [1, 0, 1, 0, 0] });
    const updated = recordResult(loadStats(), "2026-10-16", true, 2);
    saveStats(updated);
    expect(loadStats()).toEqual(updated);
  });
});

describe("leaderboardScore", () => {
  it("rewards fewer mistakes and less time, and never drops below 1", () => {
    expect(leaderboardScore(0, 60)).toBeGreaterThan(leaderboardScore(1, 60));
    expect(leaderboardScore(0, 60)).toBeGreaterThan(leaderboardScore(0, 600));
    expect(leaderboardScore(4, 5000)).toBe(1);
  });
});
