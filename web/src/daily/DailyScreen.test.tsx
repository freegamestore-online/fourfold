import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EPOCH, addDays, puzzleForDate } from "./date";
import { DailyScreen } from "./DailyScreen";
import { loadProgress, loadResult, saveResult } from "./storage";
import { loadStats } from "./stats";

const TODAY = EPOCH;
const YESTERDAY = addDays(EPOCH, -1);

/** Counts the leaderboard posts the SDK has sent through the mocked fetch. */
function scorePosts(): unknown[] {
  return vi
    .mocked(fetch)
    .mock.calls.filter(([, init]) => (init as RequestInit | undefined)?.method === "POST")
    .map(([, init]) => JSON.parse(String((init as RequestInit).body)));
}

/** Clicks each group's words and submits, solving the puzzle for `date`. */
function solve(date: string) {
  const puzzle = puzzleForDate(date);
  for (const group of puzzle.groups) {
    for (const word of group.words) fireEvent.click(screen.getByRole("button", { name: word }));
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  }
}

describe("DailyScreen", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(fetch).mockClear();
  });

  it("solves today's puzzle, saves it, and counts it in stats and on the leaderboard", async () => {
    render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);
    solve(TODAY);

    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
    expect(loadResult(TODAY)).toMatchObject({ won: true, mistakes: 0 });
    expect(loadStats()).toMatchObject({ played: 1, won: 1, streak: 1 });
    await vi.waitFor(() => expect(scorePosts()).toHaveLength(1));
    expect(scorePosts()[0]).toMatchObject({ game: "fourfold" });
  });

  it("shows a spoiler-free share grid with no words in it", () => {
    render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);
    solve(TODAY);

    const grid = document.querySelector(".share-grid")?.textContent ?? "";
    expect(grid).toMatch(/🟨🟨🟨🟨/);
    for (const group of puzzleForDate(TODAY).groups) {
      for (const word of group.words) expect(grid).not.toContain(word);
    }
  });

  it("saves in-progress guesses and restores them on reopen", () => {
    const { unmount } = render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);
    const first = puzzleForDate(TODAY).groups[0]!;
    for (const word of first.words) fireEvent.click(screen.getByRole("button", { name: word }));
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(loadProgress(TODAY)?.guesses).toEqual([[...first.words]]);
    unmount();

    render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);
    expect(screen.getByRole("region", { name: first.label })).toBeInTheDocument();
  });

  it("reopens a finished day straight to its result, without counting it again", () => {
    saveResult({ date: TODAY, won: false, mistakes: 4, seconds: 300, guesses: [] });
    render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);

    expect(screen.getByRole("heading", { name: "Out of mistakes" })).toBeInTheDocument();
    expect(loadStats().played).toBe(0);
  });

  it("does not count an archive day in stats or on the leaderboard", () => {
    render(<DailyScreen date={YESTERDAY} today={TODAY} onArchive={() => {}} />);
    solve(YESTERDAY);

    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
    expect(loadResult(YESTERDAY)).toMatchObject({ won: true });
    expect(loadStats().played).toBe(0);
    expect(scorePosts()).toHaveLength(0);
  });

  it("handles an 'Invalid game' leaderboard reply quietly", async () => {
    vi.mocked(fetch).mockImplementation(() =>
      Promise.resolve({ ok: false, status: 400, json: () => Promise.resolve({ error: "Invalid game" }) } as Response),
    );
    render(<DailyScreen date={TODAY} today={TODAY} onArchive={() => {}} />);
    solve(TODAY);

    await vi.waitFor(() => expect(scorePosts()).toHaveLength(1));
    expect(screen.queryByText(/invalid game/i)).toBeNull();
    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
  });

  it("offers the archive from the result", () => {
    const onArchive = vi.fn();
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    render(<DailyScreen date={TODAY} today={TODAY} onArchive={onArchive} />);
    fireEvent.click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Archive" }));
    expect(onArchive).toHaveBeenCalledTimes(1);
  });
});
