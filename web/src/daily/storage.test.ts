import { beforeEach, describe, expect, it } from "vitest";
import { loadProgress, loadResult, saveProgress, saveResult, type DayResult } from "./storage";

const RESULT: DayResult = {
  date: "2026-10-16",
  won: true,
  mistakes: 1,
  seconds: 95,
  guesses: [["A", "B", "C", "D"]],
};

describe("daily storage", () => {
  beforeEach(() => localStorage.clear());

  it("round-trips a saved result", () => {
    saveResult(RESULT);
    expect(loadResult("2026-10-16")).toEqual(RESULT);
    expect(loadResult("2026-10-17")).toBeNull();
  });

  it("ignores a stored result that does not match its own date or shape", () => {
    localStorage.setItem("fourfold-result-2026-10-16", JSON.stringify({ ...RESULT, date: "2026-10-15" }));
    expect(loadResult("2026-10-16")).toBeNull();
    localStorage.setItem("fourfold-result-2026-10-16", JSON.stringify({ ...RESULT, guesses: [["A", "B"]] }));
    expect(loadResult("2026-10-16")).toBeNull();
    localStorage.setItem("fourfold-result-2026-10-16", "{not json");
    expect(loadResult("2026-10-16")).toBeNull();
  });

  it("round-trips in-progress guesses with their start time", () => {
    const progress = { date: "2026-10-16", startedAt: 1_000, guesses: [["A", "B", "C", "D"]] };
    saveProgress(progress);
    expect(loadProgress("2026-10-16")).toEqual(progress);
  });

  it("rejects progress with a bad start time", () => {
    localStorage.setItem(
      "fourfold-progress-2026-10-16",
      JSON.stringify({ date: "2026-10-16", startedAt: "soon", guesses: [] }),
    );
    expect(loadProgress("2026-10-16")).toBeNull();
  });
});
