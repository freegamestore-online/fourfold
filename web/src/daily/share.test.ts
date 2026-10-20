import { describe, expect, it } from "vitest";
import { gridRows, shareText } from "./share";

describe("shareText", () => {
  it("draws one row per guess, with level colours and grey misses", () => {
    expect(
      gridRows([
        { result: "wrong" },
        { result: "one-away" },
        { result: "correct", level: 0 },
        { result: "correct", level: 3 },
      ]),
    ).toEqual(["⬛⬛⬛⬛", "⬜⬜⬜⬜", "🟨🟨🟨🟨", "🟪🟪🟪🟪"]);
  });

  it("states the number, mistakes and time on a win", () => {
    const text = shareText({
      number: 12,
      won: true,
      mistakes: 1,
      seconds: 95,
      history: [{ result: "wrong" }, { result: "correct", level: 1 }],
      url: "https://fourfold.freegamestore.online/",
    });
    expect(text.split("\n")).toEqual([
      "Fourfold #12 1 mistake 1:35",
      "⬛⬛⬛⬛",
      "🟩🟩🟩🟩",
      "https://fourfold.freegamestore.online/",
    ]);
  });

  it("says out of mistakes on a loss", () => {
    expect(shareText({
      number: 3,
      won: false,
      mistakes: 4,
      seconds: 10,
      history: [],
      url: "https://fourfold.freegamestore.online/",
    })).toBe(
      "Fourfold #3 out of mistakes\nhttps://fourfold.freegamestore.online/",
    );
  });

  it("never includes a word from the puzzle", () => {
    const text = shareText({
      number: 1,
      won: true,
      mistakes: 0,
      seconds: 30,
      history: [{ result: "correct", level: 2 }],
      url: "https://fourfold.freegamestore.online/",
    });
    expect(text).not.toMatch(/[A-Z]{3,}/);
  });
});
