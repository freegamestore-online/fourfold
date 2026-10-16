import { describe, expect, it } from "vitest";
import { createGame, type PuzzleDef } from "./grouping";
import { replayGuesses } from "./replay";

const PUZZLE: PuzzleDef = {
  groups: [
    { label: "Pastries", words: ["BAGEL", "DANISH", "MUFFIN", "SCONE"], level: 0, icon: "◆" },
    { label: "Woodwinds", words: ["OBOE", "FLUTE", "CLARINET", "BASSOON"], level: 1, icon: "▲" },
    { label: "Planets", words: ["MARS", "VENUS", "SATURN", "MERCURY"], level: 2, icon: "●" },
    { label: "Dogs", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], level: 3, icon: "■" },
  ],
};

const PASTRIES = PUZZLE.groups[0]!.words;
const WOODWINDS = PUZZLE.groups[1]!.words;

describe("replayGuesses", () => {
  it("restores a solved group from its word set, whatever order the tiles are in", () => {
    const start = createGame(PUZZLE, () => 0.9);
    const { game, history } = replayGuesses(start, [[...WOODWINDS]]);
    expect(game.solved.map((g) => g.label)).toEqual(["Woodwinds"]);
    expect(history).toEqual([{ result: "correct", level: 1 }]);
  });

  it("counts wrong and one-away guesses as mistakes and records them", () => {
    const start = createGame(PUZZLE, () => 0.2);
    const wrong = [PASTRIES[0]!, PASTRIES[1]!, WOODWINDS[0]!, PUZZLE.groups[2]!.words[0]!];
    const oneAway = [...PUZZLE.groups[2]!.words.slice(0, 3), PUZZLE.groups[3]!.words[0]!];
    const { game, history } = replayGuesses(start, [wrong, oneAway]);
    expect(game.mistakes).toBe(2);
    expect(history.map((h) => h.result)).toEqual(["wrong", "one-away"]);
  });

  it("skips a guess that cannot be scored, so a bad save cannot break the replay", () => {
    const start = createGame(PUZZLE, () => 0.2);
    const { game, guesses } = replayGuesses(start, [["NOT", "A", "WORD", "HERE"], [...WOODWINDS]]);
    expect(guesses).toEqual([[...WOODWINDS]]);
    expect(game.solved).toHaveLength(1);
  });
});
