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

  // #347: batch 1 was revised to the harder bar. Batch 2 follows the same guidance under
  // #344 and is not yet covered by these two rules.
  const REVISED_THROUGH = 60;
  describe.each(puzzles.filter((p) => p.id <= REVISED_THROUGH).map((puzzle) => [puzzle.id, puzzle] as const))(
    "revised puzzle %i",
    (_id, puzzle) => {
      it("has a wordplay group at difficulty 3 or harder", () => {
        const hard = puzzle.groups.filter((group) => group.kind === "wordplay" && group.difficulty >= 3);
        expect(hard.length).toBeGreaterThanOrEqual(1);
      });

      it("has at least two cross-group decoys, each in exactly one group", () => {
        const decoys = puzzle.decoys ?? [];
        expect(new Set(decoys).size).toBeGreaterThanOrEqual(2);
        for (const decoy of decoys) {
          const homes = puzzle.groups.filter((group) => group.words.includes(decoy));
          expect(homes, `${decoy} must sit in exactly one group`).toHaveLength(1);
        }
      });
    },
  );

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
