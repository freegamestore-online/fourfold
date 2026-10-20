import type { ColourLevel } from "../engine/grouping";
import type { GuessRecord } from "../engine/replay";
import { formatDuration } from "../lib/format";

// Spoiler-free: the grid shows only colours and the number of tries, never the words.
const LEVEL_SQUARE: Record<ColourLevel, string> = { 0: "🟨", 1: "🟩", 2: "🟦", 3: "🟪" };

/** One row per scored guess: a correct group shows its colour, a near miss and a miss show grey. */
export function gridRows(history: readonly GuessRecord[]): string[] {
  return history.map((guess) => {
    if (guess.result === "correct" && guess.level !== undefined) return LEVEL_SQUARE[guess.level].repeat(4);
    if (guess.result === "one-away") return "⬜⬜⬜⬜";
    return "⬛⬛⬛⬛";
  });
}

export interface ShareInput {
  number: number;
  won: boolean;
  mistakes: number;
  seconds: number;
  history: readonly GuessRecord[];
  url: string;
}

export function shareText({ number, won, mistakes, seconds, history, url }: ShareInput): string {
  const headline = won
    ? `Fourfold #${number} ${mistakes} ${mistakes === 1 ? "mistake" : "mistakes"} ${formatDuration(seconds * 1000)}`
    : `Fourfold #${number} out of mistakes`;
  return [headline, ...gridRows(history), url].join("\n");
}
