import { describe, expect, it } from "vitest";
import indexHtml from "../index.html?raw";
import { LISTING } from "./listing";

// The listing must not use another game's name or look. Connections and the NYT are
// trademarks, and Wordle draws takedowns over its name; none of these appear in shipped copy.
const BANNED: RegExp[] = [/connections/i, /\bNYT\b/i, /new york times/i, /wordle/i];

// Cognitive-benefit claims are banned too, as in every FreeGameStore game.
const BANNED_CLAIMS: RegExp[] = [
  /improve memory/i,
  /boost.*brain/i,
  /\bIQ\b/i,
  /brain health/i,
  /cognitive benefit/i,
  /make you smarter/i,
  /enhance.*cognit/i,
];

const ALL_BANNED = [...BANNED, ...BANNED_CLAIMS];

// Every source file under src, as raw text. This file is excluded because it lists the banned words.
const sources = import.meta.glob<string>(["./**/*.{ts,tsx,css}", "!./copy-compliance.test.ts"], {
  query: "?raw",
  import: "default",
  eager: true,
});

function violationsIn(text: string, label: string): string[] {
  return text
    .split("\n")
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => ALL_BANNED.some((pattern) => pattern.test(line)))
    .map(({ line, index }) => `${label}:${index + 1}: ${line.trim()}`);
}

describe("shipped copy", () => {
  it("uses no other game's name or look, and makes no cognitive claims, in the source", () => {
    const violations = Object.entries(sources).flatMap(([file, text]) => violationsIn(text, file));
    expect(violations).toEqual([]);
  });

  it("keeps the HTML shell (title and meta description) clean too", () => {
    expect(violationsIn(indexHtml, "index.html")).toEqual([]);
  });

  it("keeps the listing copy clean", () => {
    const listing = [LISTING.title, LISTING.tagline, LISTING.description, ...LISTING.screenshots].join("\n");
    expect(violationsIn(listing, "listing")).toEqual([]);
  });

  it("uses the listing description as the page's meta description", () => {
    expect(indexHtml).toContain(`<meta name="description" content="${LISTING.description}" />`);
  });

  it("gives every screenshot a description", () => {
    for (const alt of LISTING.screenshots) expect(alt.trim().length).toBeGreaterThan(20);
  });

  it("scans the daily sources", () => {
    expect(Object.keys(sources)).toContain("./daily/DailyScreen.tsx");
  });
});
