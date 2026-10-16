import { describe, expect, it } from "vitest";
import {
  type GameState,
  type PuzzleDef,
  createGame,
  deselectAll,
  shuffle,
  submit,
  toggleTile,
  validatePuzzle,
} from "./grouping";

const PUZZLE: PuzzleDef = {
  groups: [
    { label: "Pastries", words: ["BAGEL", "DANISH", "MUFFIN", "SCONE"], level: 0, icon: "◆" },
    { label: "Woodwinds", words: ["OBOE", "FLUTE", "CLARINET", "BASSOON"], level: 1, icon: "▲" },
    { label: "Planets", words: ["MARS", "VENUS", "SATURN", "MERCURY"], level: 2, icon: "●" },
    { label: "Dogs", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], level: 3, icon: "■" },
  ],
};

const PASTRIES = PUZZLE.groups[0]?.words ?? [];
const WOODWINDS = PUZZLE.groups[1]?.words ?? [];
const PLANETS = PUZZLE.groups[2]?.words ?? [];
const DOGS = PUZZLE.groups[3]?.words ?? [];

/** A deterministic random source, so shuffles are repeatable. */
function seeded(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x80000000;
  };
}

function select(state: GameState, words: readonly string[]): GameState {
  return words.reduce((acc, word) => toggleTile(acc, word), state);
}

describe("createGame", () => {
  it("starts with 16 tiles, nothing selected, no mistakes, and playing", () => {
    const state = createGame(PUZZLE, seeded(1));
    expect(state.tiles).toHaveLength(16);
    expect([...state.tiles].sort()).toEqual([...PASTRIES, ...WOODWINDS, ...PLANETS, ...DOGS].sort());
    expect(state.selected).toEqual([]);
    expect(state.solved).toEqual([]);
    expect(state.mistakes).toBe(0);
    expect(state.status).toBe("playing");
  });

  it("rejects a puzzle with a group that is not four words", () => {
    const bad: PuzzleDef = {
      groups: [{ ...PUZZLE.groups[0]!, words: ["BAGEL", "DANISH", "MUFFIN"] }, ...PUZZLE.groups.slice(1)],
    };
    expect(() => createGame(bad)).toThrow(/needs 4 words/);
  });

  it("rejects a word used in two groups", () => {
    const bad: PuzzleDef = {
      groups: [PUZZLE.groups[0]!, { ...PUZZLE.groups[1]!, words: ["BAGEL", "OBOE", "FLUTE", "CLARINET"] }, ...PUZZLE.groups.slice(2)],
    };
    expect(() => validatePuzzle(bad)).toThrow(/more than one group/);
  });

  it("rejects a puzzle without four groups", () => {
    expect(() => validatePuzzle({ groups: PUZZLE.groups.slice(0, 3) })).toThrow(/needs 4 groups/);
  });
});

describe("toggleTile", () => {
  it("selects a tile, and deselects it on a second toggle", () => {
    const start = createGame(PUZZLE, seeded(2));
    const word = start.tiles[0]!;
    const selected = toggleTile(start, word);
    expect(selected.selected).toEqual([word]);
    expect(toggleTile(selected, word).selected).toEqual([]);
  });

  it("cannot select more than four tiles", () => {
    const start = createGame(PUZZLE, seeded(3));
    const five = start.tiles.slice(0, 5);
    const state = select(start, five);
    expect(state.selected).toHaveLength(4);
    expect(state.selected).not.toContain(five[4]);
  });

  it("ignores a word that is not an unsolved tile", () => {
    const start = createGame(PUZZLE, seeded(4));
    expect(toggleTile(start, "NOT-A-WORD")).toBe(start);
  });
});

describe("submit", () => {
  it("locks a correct group, clears the selection and records it in solve order", () => {
    const start = select(createGame(PUZZLE, seeded(5)), WOODWINDS);
    const { state, result, solvedGroup } = submit(start);

    expect(result).toBe("correct");
    expect(solvedGroup).toEqual({ label: "Woodwinds", level: 1, icon: "▲", words: WOODWINDS });
    expect(state.solved).toEqual([solvedGroup]);
    expect(state.selected).toEqual([]);
    expect(state.tiles).toHaveLength(12);
    for (const word of WOODWINDS) expect(state.tiles).not.toContain(word);
    expect(state.mistakes).toBe(0);
  });

  it("does not let a locked group's words be selected again", () => {
    const solved = submit(select(createGame(PUZZLE, seeded(6)), PASTRIES)).state;
    expect(toggleTile(solved, PASTRIES[0]!).selected).toEqual([]);
  });

  it("reports one-away when three of four words belong to one group", () => {
    const guess = [...PLANETS.slice(0, 3), DOGS[0]!];
    const { state, result } = submit(select(createGame(PUZZLE, seeded(7)), guess));
    expect(result).toBe("one-away");
    expect(state.mistakes).toBe(1);
    expect(state.solved).toEqual([]);
  });

  it("reports a plain wrong guess and costs a mistake", () => {
    const guess = [PASTRIES[0]!, PASTRIES[1]!, WOODWINDS[0]!, PLANETS[0]!];
    const { state, result } = submit(select(createGame(PUZZLE, seeded(8)), guess));
    expect(result).toBe("wrong");
    expect(state.mistakes).toBe(1);
    expect(state.selected).toEqual(guess);
  });

  it("does nothing when fewer than four tiles are selected", () => {
    const start = select(createGame(PUZZLE, seeded(9)), PASTRIES.slice(0, 3));
    const { state, result } = submit(start);
    expect(result).toBe("incomplete");
    expect(state).toBe(start);
    expect(state.mistakes).toBe(0);
  });

  it("ends the game as lost after four mistakes", () => {
    const wrong = [PASTRIES[0]!, PASTRIES[1]!, WOODWINDS[0]!, PLANETS[0]!];
    let state = createGame(PUZZLE, seeded(10));
    for (let i = 0; i < 3; i++) {
      state = submit(select(state, wrong)).state;
      state = deselectAll(state);
    }
    expect(state.mistakes).toBe(3);
    expect(state.status).toBe("playing");

    const last = submit(select(state, wrong));
    expect(last.state.mistakes).toBe(4);
    expect(last.state.status).toBe("lost");
    expect(submit(select(last.state, wrong)).result).toBe("already-lost");
  });

  it("wins once all four groups are solved", () => {
    let state = createGame(PUZZLE, seeded(11));
    for (const group of PUZZLE.groups) {
      state = submit(select(state, group.words)).state;
    }
    expect(state.solved).toHaveLength(4);
    expect(state.solved.map((g) => g.label)).toEqual(["Pastries", "Woodwinds", "Planets", "Dogs"]);
    expect(state.tiles).toEqual([]);
    expect(state.status).toBe("won");
    expect(submit(select(state, PASTRIES)).result).toBe("already-solved");
  });
});

describe("shuffle", () => {
  it("changes the tile order but keeps the same tiles", () => {
    const start = createGame(PUZZLE, seeded(13));
    const next = shuffle(start, seeded(99));
    expect(next.tiles).not.toEqual(start.tiles);
    expect([...next.tiles].sort()).toEqual([...start.tiles].sort());
  });

  it("keeps the selection", () => {
    const start = select(createGame(PUZZLE, seeded(14)), PASTRIES.slice(0, 2));
    expect(shuffle(start, seeded(5)).selected).toEqual(start.selected);
  });

  it("does not mutate the previous state", () => {
    const start = createGame(PUZZLE, seeded(15));
    const before = [...start.tiles];
    shuffle(start, seeded(7));
    expect(start.tiles).toEqual(before);
  });
});

describe("deselectAll", () => {
  it("clears the selection", () => {
    const state = select(createGame(PUZZLE, seeded(16)), PASTRIES.slice(0, 3));
    expect(deselectAll(state).selected).toEqual([]);
  });

  it("returns the same state when nothing is selected", () => {
    const state = createGame(PUZZLE, seeded(17));
    expect(deselectAll(state)).toBe(state);
  });
});
