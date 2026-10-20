import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { EPOCH, addDays, puzzleForDate } from "./date";
import { DailyScreen } from "./DailyScreen";
import { loadProgress, loadResult, saveResult } from "./storage";
import { EMPTY_STATS, loadStats, saveStats } from "./stats";

const TODAY = EPOCH;
const YESTERDAY = addDays(EPOCH, -1);

/** Counts the leaderboard posts the SDK has sent through the mocked fetch. */
function scorePosts(): unknown[] {
  return vi
    .mocked(fetch)
    .mock.calls.filter(([, init]) => (init as RequestInit | undefined)?.method === "POST")
    .map(([, init]) => JSON.parse(String((init as RequestInit).body)));
}

async function renderDaily(date: string, today: string, onArchive: () => void) {
  let view!: ReturnType<typeof render>;
  await act(async () => {
    view = render(<DailyScreen date={date} today={today} onArchive={onArchive} />);
    // The SDK loads leaderboard scores on mount through two async fetches.
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  return view;
}

async function click(element: HTMLElement) {
  await act(async () => {
    fireEvent.click(element);
  });
}

/** Clicks each group's words and submits, solving the puzzle for `date`. */
async function solve(date: string) {
  const puzzle = puzzleForDate(date);
  for (const group of puzzle.groups) {
    for (const word of group.words) await click(screen.getByRole("button", { name: word }));
    await click(screen.getByRole("button", { name: "Submit" }));
  }
}

describe("DailyScreen", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.mocked(fetch).mockClear();
  });

  it("solves today's puzzle, saves it, and counts it in stats and on the leaderboard", async () => {
    await renderDaily(TODAY, TODAY, () => {});
    await solve(TODAY);

    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
    expect(loadResult(TODAY)).toMatchObject({ won: true, mistakes: 0 });
    expect(loadStats()).toMatchObject({ played: 1, won: 1, streak: 1 });
    await vi.waitFor(() => expect(scorePosts()).toHaveLength(1));
    expect(scorePosts()[0]).toMatchObject({ game: "fourfold" });
  }, 15_000);

  it("shows a spoiler-free share grid with no words in it", async () => {
    await renderDaily(TODAY, TODAY, () => {});
    await solve(TODAY);

    const grid = document.querySelector(".share-grid")?.textContent ?? "";
    expect(grid).toMatch(/🟨🟨🟨🟨/);
    for (const group of puzzleForDate(TODAY).groups) {
      for (const word of group.words) expect(grid).not.toContain(word);
    }
  });

  it("saves in-progress guesses and restores them on reopen", async () => {
    const { unmount } = await renderDaily(TODAY, TODAY, () => {});
    expect(loadProgress(TODAY)?.startedAt).toBeUndefined();
    const first = puzzleForDate(TODAY).groups[0]!;
    for (const word of first.words) await click(screen.getByRole("button", { name: word }));
    await click(screen.getByRole("button", { name: "Submit" }));
    expect(loadProgress(TODAY)?.guesses).toEqual([[...first.words]]);
    expect(loadProgress(TODAY)?.startedAt).toEqual(expect.any(Number));
    await act(async () => unmount());

    await renderDaily(TODAY, TODAY, () => {});
    expect(screen.getByRole("region", { name: first.label })).toBeInTheDocument();
  });

  it("reopens a finished day straight to its result, without counting it again", async () => {
    saveResult({ date: TODAY, won: false, mistakes: 4, seconds: 300, guesses: [] });
    await renderDaily(TODAY, TODAY, () => {});

    expect(screen.getByRole("heading", { name: "Out of mistakes" })).toBeInTheDocument();
    expect(loadStats().played).toBe(0);
  });

  it("does not count an archive day in stats or on the leaderboard", async () => {
    await renderDaily(YESTERDAY, TODAY, () => {});
    await solve(YESTERDAY);

    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
    expect(loadResult(YESTERDAY)).toMatchObject({ won: true });
    expect(loadStats().played).toBe(0);
    expect(scorePosts()).toHaveLength(0);
  });

  it("handles an 'Invalid game' leaderboard reply quietly", async () => {
    vi.mocked(fetch).mockImplementation(() =>
      Promise.resolve({ ok: false, status: 400, json: () => Promise.resolve({ error: "Invalid game" }) } as Response),
    );
    await renderDaily(TODAY, TODAY, () => {});
    await solve(TODAY);

    await vi.waitFor(() => expect(scorePosts()).toHaveLength(1));
    expect(screen.queryByText(/invalid game/i)).toBeNull();
    expect(screen.getByRole("heading", { name: "Solved!" })).toBeInTheDocument();
  });

  it("uses current localStorage stats to avoid double counting from a stale tab", async () => {
    await renderDaily(TODAY, TODAY, () => {});
    const alreadyRecorded = { ...EMPTY_STATS, played: 1, lastPlayed: TODAY };
    saveStats(alreadyRecorded);

    await solve(TODAY);

    expect(loadStats()).toEqual(alreadyRecorded);
    expect(scorePosts()).toHaveLength(0);
  });

  it("shows a selectable-text hint when sharing and clipboard copy are unavailable", async () => {
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    await renderDaily(TODAY, TODAY, () => {});

    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Share" }));

    expect(await screen.findByText("Couldn't copy — try long-pressing the text")).toBeInTheDocument();
    expect(document.querySelector(".share-grid")).toBeInTheDocument();
  });

  it("shows a selectable-text hint when clipboard writing is rejected", async () => {
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("Clipboard denied")) },
    });
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    await renderDaily(TODAY, TODAY, () => {});

    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Share" }));

    expect(await screen.findByText("Couldn't copy — try long-pressing the text")).toBeInTheDocument();
  });

  it("uses the Web Share API with the spoiler-free result and link", async () => {
    const nativeShare = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", { configurable: true, value: nativeShare });
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn() },
    });
    saveResult({ date: TODAY, won: true, mistakes: 1, seconds: 95, guesses: [] });
    await renderDaily(TODAY, TODAY, () => {});

    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Share" }));

    expect(nativeShare).toHaveBeenCalledWith({
      text: expect.stringContaining("Fourfold #1 1 mistake 1:35"),
    });
    expect(nativeShare.mock.calls[0]?.[0].text).toContain(window.location.href);
    expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
  });

  it("falls back to clipboard when native sharing is unavailable", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    await renderDaily(TODAY, TODAY, () => {});

    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Share" }));

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining(window.location.href));
    expect(await screen.findByRole("button", { name: "Copied" })).toBeInTheDocument();
  });

  it("does not update share state when a clipboard write resolves after unmount", async () => {
    let resolveWrite!: () => void;
    const writeText = vi.fn(() => new Promise<void>((resolve) => { resolveWrite = resolve; }));
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    const { unmount } = await renderDaily(TODAY, TODAY, () => {});
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Share" }));
    expect(writeText).toHaveBeenCalledOnce();
    await act(async () => unmount());
    await act(async () => resolveWrite());

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it("offers the archive from the result", async () => {
    const onArchive = vi.fn();
    saveResult({ date: TODAY, won: true, mistakes: 0, seconds: 40, guesses: [] });
    await renderDaily(TODAY, TODAY, onArchive);
    await click(within(screen.getByRole("region", { name: "Result" })).getByRole("button", { name: "Archive" }));
    expect(onArchive).toHaveBeenCalledTimes(1);
  });
});
