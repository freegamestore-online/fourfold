import type { ColourLevel, PuzzleDef } from "../engine/grouping";
import type { Puzzle } from "../data/puzzles";

// One glyph per level, so the groups read without colour too.
const ICON: Record<ColourLevel, string> = { 0: "◆", 1: "▲", 2: "●", 3: "■" };

/** Turns a data puzzle (difficulty 1-4) into the engine's puzzle (colour level 0-3). */
export function toPuzzleDef(puzzle: Puzzle): PuzzleDef {
  return {
    groups: puzzle.groups.map((group) => {
      const level = (group.difficulty - 1) as ColourLevel;
      return { label: group.label, words: group.words, level, icon: ICON[level] };
    }),
  };
}
