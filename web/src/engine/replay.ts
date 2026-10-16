// Replays a list of submitted guesses (word sets) onto a fresh game. A saved run restores
// to exactly the state it had, because each guess only depends on its words.
import {
  type ColourLevel,
  type GameState,
  deselectAll,
  submit,
  toggleTile,
  type SubmitResult,
} from "./grouping";

/** One scored guess, as shown in the emoji grid. */
export interface GuessRecord {
  result: SubmitResult;
  level?: ColourLevel;
}

export interface Replay {
  game: GameState;
  /** The word sets that were submitted, in order. */
  guesses: string[][];
  /** Scored guesses only: correct, wrong and one-away. */
  history: GuessRecord[];
}

const SCORED: readonly SubmitResult[] = ["correct", "wrong", "one-away"];

export function replayGuesses(start: GameState, guesses: readonly (readonly string[])[]): Replay {
  let game = start;
  const kept: string[][] = [];
  const history: GuessRecord[] = [];
  for (const words of guesses) {
    game = deselectAll(game);
    for (const word of words) game = toggleTile(game, word);
    const outcome = submit(game);
    game = outcome.state;
    if (!SCORED.includes(outcome.result)) continue;
    kept.push([...words]);
    history.push({ result: outcome.result, level: outcome.solvedGroup?.level });
  }
  return { game, guesses: kept, history };
}
