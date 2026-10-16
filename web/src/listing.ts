// Store listing copy. index.html's meta description and the manifest tagline are kept in
// step with this file by copy-compliance.test.ts, so the copy only lives here.

export const LISTING = {
  title: "Fourfold",
  tagline: "Sort sixteen words into four hidden groups of four.",
  description:
    "Fourfold is a free daily word-grouping puzzle. Pick four words that belong together, lock in each group, and watch out for words that could fit two groups. A new puzzle arrives every day, with an archive of past days. Share your result as an emoji grid that never gives the answers away.",
  screenshots: [
    "The Fourfold board: sixteen word tiles, with two solved groups above them in yellow and green.",
    "A Fourfold result card with an emoji grid of the guesses and a share button.",
    "The Fourfold archive: a list of past daily puzzles with how each one went.",
  ],
} as const;
