import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Board } from "./Board";
import type { PuzzleDef } from "./engine/grouping";

const PUZZLE: PuzzleDef = {
  groups: [
    { label: "Pastries", words: ["BAGEL", "DANISH", "MUFFIN", "SCONE"], level: 0, icon: "◆" },
    { label: "Woodwinds", words: ["OBOE", "FLUTE", "CLARINET", "BASSOON"], level: 1, icon: "▲" },
    { label: "Planets", words: ["MARS", "VENUS", "SATURN", "MERCURY"], level: 2, icon: "●" },
    { label: "Dogs", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], level: 3, icon: "■" },
  ],
};

/** A fixed random source, so the opening shuffle is repeatable. */
const random = () => 0.5;

function tile(word: string): HTMLElement {
  return screen.getByRole("button", { name: word });
}

function submitButton(): HTMLElement {
  return screen.getByRole("button", { name: "Submit" });
}

function pick(words: readonly string[]) {
  for (const word of words) fireEvent.click(tile(word));
}

describe("Board", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders all sixteen tiles", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    for (const group of PUZZLE.groups) {
      for (const word of group.words) expect(tile(word)).toBeInTheDocument();
    }
    expect(document.querySelectorAll(".tile")).toHaveLength(16);
  });

  it("selects a tile on click and marks it pressed", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    fireEvent.click(tile("BAGEL"));
    expect(tile("BAGEL")).toHaveAttribute("aria-pressed", "true");
    expect(tile("BAGEL")).toHaveClass("selected");
    fireEvent.click(tile("BAGEL"));
    expect(tile("BAGEL")).toHaveAttribute("aria-pressed", "false");
  });

  it("keeps Submit disabled until exactly four tiles are selected", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    expect(submitButton()).toBeDisabled();

    pick(PUZZLE.groups[0]!.words.slice(0, 3));
    expect(submitButton()).toBeDisabled();

    pick(PUZZLE.groups[0]!.words.slice(3));
    expect(submitButton()).toBeEnabled();
  });

  it("shows a solved group row, in solve order, after a correct submission", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    pick(PUZZLE.groups[1]!.words);
    fireEvent.click(submitButton());

    const row = screen.getByRole("region", { name: "Woodwinds" });
    expect(row).toHaveClass("group", "level-1");
    expect(within(row).getByText("OBOE · FLUTE · CLARINET · BASSOON")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "OBOE" })).not.toBeInTheDocument();
    expect(submitButton()).toBeDisabled();
  });

  it("reports progress after each scored guess", () => {
    const onProgress = vi.fn();
    render(<Board puzzle={PUZZLE} random={random} onProgress={onProgress} />);
    pick(PUZZLE.groups[1]!.words);
    fireEvent.click(submitButton());
    expect(onProgress).toHaveBeenCalledWith([[...PUZZLE.groups[1]!.words]]);
  });

  it("reports the finish once, with the mistakes and history, after four mistakes", () => {
    const onFinish = vi.fn();
    render(<Board puzzle={PUZZLE} random={random} onFinish={onFinish} />);
    const wrong = [PUZZLE.groups[0]!.words[0]!, PUZZLE.groups[0]!.words[1]!, PUZZLE.groups[1]!.words[0]!, PUZZLE.groups[2]!.words[0]!];
    for (let i = 0; i < 4; i++) {
      if (i > 0) fireEvent.click(screen.getByRole("button", { name: "Deselect all" }));
      pick(wrong);
      fireEvent.click(submitButton());
    }
    expect(onFinish).toHaveBeenCalledTimes(1);
    expect(onFinish.mock.calls[0]![0]).toMatchObject({ won: false, mistakes: 4 });
    expect(onFinish.mock.calls[0]![0].history).toHaveLength(4);
  });

  it("restores saved guesses and does not report a finish again", () => {
    const onFinish = vi.fn();
    const onProgress = vi.fn();
    render(
      <Board
        puzzle={PUZZLE}
        random={random}
        guesses={[[...PUZZLE.groups[0]!.words], [...PUZZLE.groups[1]!.words], [...PUZZLE.groups[2]!.words], [...PUZZLE.groups[3]!.words]]}
        onFinish={onFinish}
        onProgress={onProgress}
      />,
    );
    expect(screen.getByRole("region", { name: "Pastries" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Dogs" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
    expect(onFinish).not.toHaveBeenCalled();
    expect(onProgress).not.toHaveBeenCalled();
  });

  it("shows the elapsed time while the run is live", () => {
    vi.useFakeTimers({ shouldAdvanceTime: false });
    try {
      render(<Board puzzle={PUZZLE} random={random} startedAt={Date.now() - 65_000} />);
      expect(screen.getByText("1:05")).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });

  it("celebrates and locks the board once all four groups are solved", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    for (const group of PUZZLE.groups) {
      pick(group.words);
      fireEvent.click(submitButton());
    }
    expect(screen.getByRole("status")).toHaveTextContent("Solved!");
    expect(screen.getByRole("button", { name: "Shuffle" })).toBeDisabled();
  });

  it("shows the One Away toast for a near-miss, and it goes away on its own", async () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    pick([...PUZZLE.groups[2]!.words.slice(0, 3), PUZZLE.groups[3]!.words[0]!]);
    fireEvent.click(submitButton());

    expect(screen.getByRole("status")).toHaveTextContent("One Away…");

    await act(async () => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.queryByText("One Away…")).not.toBeInTheDocument();
  });

  it("does not show the toast for a plain wrong guess", () => {
    render(<Board puzzle={PUZZLE} random={random} />);
    pick([PUZZLE.groups[0]!.words[0]!, PUZZLE.groups[0]!.words[1]!, PUZZLE.groups[1]!.words[0]!, PUZZLE.groups[2]!.words[0]!]);
    fireEvent.click(submitButton());
    expect(screen.queryByText("One Away…")).not.toBeInTheDocument();
    expect(screen.getByText("3 of 4 mistakes left")).toBeInTheDocument();
  });
});
