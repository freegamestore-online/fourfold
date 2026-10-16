import { describe, expect, it } from "vitest";
import { formatDuration } from "./format";

describe("formatDuration", () => {
  it("shows minutes and zero-padded seconds", () => {
    expect(formatDuration(0)).toBe("0:00");
    expect(formatDuration(7_000)).toBe("0:07");
    expect(formatDuration(125_900)).toBe("2:05");
  });

  it("clamps negative input", () => {
    expect(formatDuration(-5_000)).toBe("0:00");
  });
});
