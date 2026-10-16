import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Archive } from "./Archive";
import { EPOCH, addDays, archiveDates } from "./date";
import { saveResult } from "./storage";

const TODAY = addDays(EPOCH, 2);

describe("Archive", () => {
  beforeEach(() => localStorage.clear());

  it("lists every past day, with its status", () => {
    saveResult({ date: addDays(EPOCH, 1), won: true, mistakes: 1, seconds: 60, guesses: [] });
    render(<Archive today={TODAY} onPlay={() => {}} onExit={() => {}} />);

    expect(screen.getAllByRole("button", { name: "Play" })).toHaveLength(archiveDates(TODAY).length);
    expect(screen.getByText("Solved, 1 mistake")).toBeInTheDocument();
    expect(screen.getAllByText("Not played")).toHaveLength(1);
  });

  it("plays a chosen day", () => {
    const onPlay = vi.fn();
    render(<Archive today={TODAY} onPlay={onPlay} onExit={() => {}} />);
    fireEvent.click(screen.getAllByRole("button", { name: "Play" })[0]!);
    expect(onPlay).toHaveBeenCalledWith(addDays(EPOCH, 1));
  });

  it("is empty on the first day", () => {
    render(<Archive today={EPOCH} onPlay={() => {}} onExit={() => {}} />);
    expect(screen.queryAllByRole("button", { name: "Play" })).toHaveLength(0);
  });
});
