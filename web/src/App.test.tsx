import { act, render } from "@testing-library/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { puzzleForDate } from "./daily/date";
import App from "./App";

vi.mock("@freegamestore/games", () => ({
  GameAuth: () => null,
  GameTopbar: ({ title }: { title: string }) => <header>{title}</header>,
  GameButton: ({ children, onClick, disabled }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button type="button" onClick={onClick} disabled={disabled}>{children}</button>
  ),
  useLeaderboard: () => ({ submitScore: vi.fn() }),
}));

vi.mock("./GameShell", () => ({ default: ({ children }: { children: ReactNode }) => <main>{children}</main> }));

function tileWords(): Set<string> {
  return new Set(Array.from(document.querySelectorAll(".tile-grid button"), (button) => button.textContent ?? ""));
}

describe("App daily rollover", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-16T23:59:30Z"));
  });

  afterEach(() => vi.useRealTimers());

  it("switches an open daily screen to the new UTC day's puzzle", async () => {
    render(<App />);
    const tomorrow = "2026-10-17";

    expect(tileWords()).toEqual(new Set(puzzleForDate("2026-10-16").groups.flatMap((group) => group.words)));

    await act(async () => {
      vi.advanceTimersByTime(60_000);
    });

    expect(tileWords()).toEqual(new Set(puzzleForDate(tomorrow).groups.flatMap((group) => group.words)));
  });
});
