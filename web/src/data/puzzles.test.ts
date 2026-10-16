import { describe, expect, it } from "vitest";
import blocklist from "./offensive.txt?raw";
import { puzzles, type Puzzle } from "./puzzles";

// Lowercased, comment-free blocklist. Matching is whole-word, as in crossweave.
const OFFENSIVE = new Set(
  blocklist
    .split("\n")
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line !== "" && !line.startsWith("#")),
);

const ALL_DIFFICULTIES = [1, 2, 3, 4];

function wordsOf(puzzle: Puzzle): string[] {
  return puzzle.groups.flatMap((group) => [...group.words]);
}

describe("content batch 1", () => {
  it("has exactly 120 puzzles, numbered 1 to 120", () => {
    expect(puzzles).toHaveLength(120);
    expect(puzzles.map((p) => p.id)).toEqual(Array.from({ length: 120 }, (_, i) => i + 1));
  });

  it("loads the offensive blocklist", () => {
    expect(OFFENSIVE.size).toBeGreaterThan(50);
    expect(OFFENSIVE.has("shit")).toBe(true);
  });

  describe.each(puzzles.map((puzzle) => [puzzle.id, puzzle] as const))("puzzle %i", (_id, puzzle) => {
    it("has exactly four groups of four words", () => {
      expect(puzzle.groups).toHaveLength(4);
      for (const group of puzzle.groups) {
        expect(group.words).toHaveLength(4);
      }
    });

    it("uses difficulties 1, 2, 3 and 4 exactly once each", () => {
      const difficulties = puzzle.groups.map((group) => group.difficulty).sort();
      expect(difficulties).toEqual(ALL_DIFFICULTIES);
    });

    it("has a label and a red herring for every group", () => {
      for (const group of puzzle.groups) {
        expect(group.label.trim()).not.toBe("");
        expect(group.redHerring.trim()).not.toBe("");
      }
    });

    it("uses only uppercase letters in every word", () => {
      for (const word of wordsOf(puzzle)) {
        expect(word).toMatch(/^[A-Z]+$/);
      }
    });

    it("has no word repeated within the puzzle", () => {
      const words = wordsOf(puzzle);
      expect(new Set(words).size).toBe(words.length);
    });

    it("has no offensive word", () => {
      for (const word of wordsOf(puzzle)) {
        expect(OFFENSIVE.has(word.toLowerCase()), `${word} is on the blocklist`).toBe(false);
      }
    });
  });

  it("has no two puzzles with the same set of sixteen words, across all batches", () => {
    const seen = new Map<string, number>();
    for (const puzzle of puzzles) {
      const key = wordsOf(puzzle).sort().join(",");
      const earlier = seen.get(key);
      expect(earlier, `puzzle ${puzzle.id} repeats puzzle ${earlier}`).toBeUndefined();
      seen.set(key, puzzle.id);
    }
  });
});
