// Grouping engine: sixteen word tiles, four hidden groups of four. Pure functions over an
// immutable state, with no React dependency, so the board can hold it in state and the
// rules can be tested directly.

export const GROUP_SIZE = 4;
export const GROUP_COUNT = 4;
export const MAX_MISTAKES = 4;

/** Difficulty colour level. 0 is the easiest group (solved first), 3 the hardest. */
export type ColourLevel = 0 | 1 | 2 | 3;

export interface GroupDef {
  label: string;
  words: readonly string[];
  level: ColourLevel;
  /** A glyph shown with the group, so colour is never the only cue. */
  icon: string;
}

export interface PuzzleDef {
  groups: readonly GroupDef[];
}

export interface SolvedGroup {
  label: string;
  level: ColourLevel;
  icon: string;
  words: readonly string[];
}

export type GameStatus = "playing" | "won" | "lost";

export interface GameState {
  /** Unsolved tiles in display order. */
  tiles: readonly string[];
  /** Selected tiles, in the order they were picked. At most GROUP_SIZE. */
  selected: readonly string[];
  /** Solved groups, in solve order. */
  solved: readonly SolvedGroup[];
  mistakes: number;
  status: GameStatus;
  /** The puzzle's groups, kept so submit can check guesses. */
  groups: readonly GroupDef[];
}

export type SubmitResult =
  | "correct"
  | "one-away"
  | "wrong"
  | "incomplete"
  | "already-solved"
  | "already-lost";

export interface SubmitOutcome {
  state: GameState;
  result: SubmitResult;
  solvedGroup?: SolvedGroup;
}

/** A source of randomness in [0, 1). Tests pass a seeded one. */
export type Random = () => number;

/** Throws when the puzzle is not four groups of four unique words, with no word used twice. */
export function validatePuzzle(puzzle: PuzzleDef): void {
  if (puzzle.groups.length !== GROUP_COUNT) {
    throw new Error(`Puzzle needs ${GROUP_COUNT} groups, got ${puzzle.groups.length}`);
  }
  const seen = new Set<string>();
  for (const group of puzzle.groups) {
    if (group.words.length !== GROUP_SIZE) {
      throw new Error(`Group "${group.label}" needs ${GROUP_SIZE} words, got ${group.words.length}`);
    }
    for (const word of group.words) {
      if (seen.has(word)) throw new Error(`Word "${word}" appears in more than one group`);
      seen.add(word);
    }
  }
}

/** A new game with the tiles shuffled. */
export function createGame(puzzle: PuzzleDef, random: Random = Math.random): GameState {
  validatePuzzle(puzzle);
  const tiles = shuffled(
    puzzle.groups.flatMap((group) => [...group.words]),
    random,
  );
  return {
    tiles,
    selected: [],
    solved: [],
    mistakes: 0,
    status: "playing",
    groups: puzzle.groups,
  };
}

/** Select or deselect a tile. Ignores solved or unknown words, and a fifth selection. */
export function toggleTile(state: GameState, word: string): GameState {
  if (state.status !== "playing") return state;
  if (!state.tiles.includes(word)) return state;
  if (state.selected.includes(word)) {
    return { ...state, selected: state.selected.filter((w) => w !== word) };
  }
  if (state.selected.length >= GROUP_SIZE) return state;
  return { ...state, selected: [...state.selected, word] };
}

/** Clear the selection. */
export function deselectAll(state: GameState): GameState {
  if (state.selected.length === 0) return state;
  return { ...state, selected: [] };
}

/** Shuffle the unsolved tiles. The selection is kept. */
export function shuffle(state: GameState, random: Random = Math.random): GameState {
  if (state.status !== "playing") return state;
  return { ...state, tiles: shuffled(state.tiles, random) };
}

/**
 * Check the selection. A full match locks the group and clears the selection. A wrong
 * guess costs a mistake and keeps the selection, so the player can swap one tile. Three of
 * four in one group is a wrong guess too, reported as "one-away".
 */
export function submit(state: GameState): SubmitOutcome {
  if (state.status === "won") return { state, result: "already-solved" };
  if (state.status === "lost") return { state, result: "already-lost" };
  if (state.selected.length !== GROUP_SIZE) return { state, result: "incomplete" };

  const guess = new Set(state.selected);
  const match = state.groups.find(
    (group) =>
      !isSolved(state, group) && group.words.every((word) => guess.has(word)),
  );

  if (match) {
    const solvedGroup: SolvedGroup = {
      label: match.label,
      level: match.level,
      icon: match.icon,
      words: match.words,
    };
    const solved = [...state.solved, solvedGroup];
    const next: GameState = {
      ...state,
      tiles: state.tiles.filter((word) => !guess.has(word)),
      selected: [],
      solved,
      status: solved.length === state.groups.length ? "won" : "playing",
    };
    return { state: next, result: "correct", solvedGroup };
  }

  const mistakes = state.mistakes + 1;
  const next: GameState = {
    ...state,
    mistakes,
    status: mistakes >= MAX_MISTAKES ? "lost" : "playing",
  };
  return { state: next, result: isOneAway(state) ? "one-away" : "wrong" };
}

function isSolved(state: GameState, group: GroupDef): boolean {
  return state.solved.some((solvedGroup) => solvedGroup.label === group.label);
}

function isOneAway(state: GameState): boolean {
  return state.groups.some(
    (group) =>
      !isSolved(state, group) &&
      group.words.filter((word) => state.selected.includes(word)).length === GROUP_SIZE - 1,
  );
}

/** Fisher-Yates on a copy, so the input is never mutated. */
function shuffled<T>(items: readonly T[], random: Random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j] as T, out[i] as T];
  }
  return out;
}
