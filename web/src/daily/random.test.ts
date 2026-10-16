import { describe, expect, it } from "vitest";
import { seededRandom } from "./random";

describe("seededRandom", () => {
  it("gives the same sequence for the same seed", () => {
    const a = seededRandom("2026-10-16");
    const b = seededRandom("2026-10-16");
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
  });

  it("gives different sequences for different seeds", () => {
    expect(seededRandom("2026-10-16")()).not.toBe(seededRandom("2026-10-17")());
  });

  it("stays in [0, 1)", () => {
    const next = seededRandom("bounds");
    for (let i = 0; i < 1000; i++) {
      const value = next();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    }
  });
});
