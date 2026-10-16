import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GameButton } from "@freegamestore/games";
import { Celebration } from "./feel/Celebration";
import { fitText, useShake } from "./feel";
import { prefersReducedMotion } from "./motion/reducedMotion";
import { formatDuration } from "./lib/format";
import {
  GROUP_SIZE,
  MAX_MISTAKES,
  createGame,
  deselectAll,
  shuffle,
  submit,
  toggleTile,
  type PuzzleDef,
  type Random,
  type SolvedGroup,
} from "./engine/grouping";
import { type GuessRecord, type Replay, replayGuesses } from "./engine/replay";

const ONE_AWAY_MS = 1600;

export interface FinishOutcome {
  won: boolean;
  mistakes: number;
  seconds: number;
  guesses: string[][];
  history: GuessRecord[];
}

export interface BoardProps {
  puzzle: PuzzleDef;
  /** Seeds the opening deck. Shuffles are always random. */
  random?: Random;
  /** Guesses already made, replayed on mount to restore a saved run. */
  guesses?: string[][];
  /** When the first scored guess was submitted, in ms since the epoch. */
  startedAt?: number;
  onProgress?: (guesses: string[][], startedAt: number) => void;
  onFinish?: (outcome: FinishOutcome) => void;
  /** An extra control shown in the status row, such as the archive button. */
  statusAction?: ReactNode;
}

export function Board({
  puzzle,
  random = Math.random,
  guesses = [],
  startedAt,
  onProgress,
  onFinish,
  statusAction,
}: BoardProps) {
  const [run, setRun] = useState<Replay>(() => replayGuesses(createGame(puzzle, random), guesses));
  const [start, setStart] = useState<number | undefined>(() => startedAt ?? (guesses.length > 0 ? Date.now() : undefined));
  const [now, setNow] = useState(() => Date.now());
  // Bumped on each wrong guess, so the selected tiles shake once per guess.
  const [shakeToken, setShakeToken] = useState(0);
  const [toast, setToast] = useState<{ id: number } | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const reduced = prefersReducedMotion();
  const { game, history } = run;
  const playing = game.status === "playing";

  // Hide the one-away toast after a moment. A new toast object restarts the timer.
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), ONE_AWAY_MS);
    return () => window.clearTimeout(timer);
  }, [toast]);

  // Tick the timer once a second while the run is live.
  useEffect(() => {
    if (!playing || start === undefined) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [playing, start]);

  const selectedCount = game.selected.length;
  const remaining = MAX_MISTAKES - game.mistakes;

  function handleToggle(word: string) {
    setRun((current) => ({ ...current, game: toggleTile(current.game, word) }));
  }

  function handleSubmit() {
    const selected = [...game.selected];
    const outcome = submit(game);
    if (outcome.result !== "correct" && outcome.result !== "wrong" && outcome.result !== "one-away") return;

    const nextHistory = [...history, { result: outcome.result, level: outcome.solvedGroup?.level }];
    const nextGuesses = [...run.guesses, selected];
    const startedAt = start ?? Date.now();
    if (start === undefined) {
      setStart(startedAt);
      setNow(startedAt);
    }
    setRun({ game: outcome.state, guesses: nextGuesses, history: nextHistory });
    if (outcome.result === "correct" && outcome.state.status === "won") setCelebrating(true);
    if (outcome.result === "wrong" || outcome.result === "one-away") setShakeToken((n) => n + 1);
    if (outcome.result === "one-away") setToast({ id: Date.now() });

    onProgress?.(nextGuesses, startedAt);
    if (outcome.state.status !== "playing") {
      onFinish?.({
        won: outcome.state.status === "won",
        mistakes: outcome.state.mistakes,
        seconds: Math.floor((Date.now() - startedAt) / 1000),
        guesses: nextGuesses,
        history: nextHistory,
      });
    }
  }

  return (
    <div className="board">
      <div className="solved-groups">
        {game.solved.map((group) => (
          <SolvedRow key={group.label} group={group} />
        ))}
      </div>

      <div className="tile-grid">
        {game.tiles.map((word) => (
          <Tile
            key={word}
            word={word}
            selected={game.selected.includes(word)}
            shakeToken={shakeToken}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <div className="board-status">
        <span className="mistakes">
          Mistakes
          <span aria-hidden="true">{"●".repeat(remaining)}{"○".repeat(game.mistakes)}</span>
          <span className="sr-only">{`${remaining} of ${MAX_MISTAKES} mistakes left`}</span>
        </span>
        {playing && <span className="timer">{formatDuration(start === undefined ? 0 : now - start)}</span>}
        {toast && (
          <p className={reduced ? "toast" : "toast toast-animated"} role="status">
            One Away…
          </p>
        )}
        {statusAction}
      </div>

      <div className="board-actions">
        <GameButton
          variant="secondary"
          size="md"
          onClick={() => setRun((current) => ({ ...current, game: shuffle(current.game, Math.random) }))}
          disabled={!playing}
        >
          Shuffle
        </GameButton>
        <GameButton
          variant="secondary"
          size="md"
          onClick={() => setRun((current) => ({ ...current, game: deselectAll(current.game) }))}
          disabled={selectedCount === 0}
        >
          Deselect all
        </GameButton>
        <GameButton size="md" onClick={handleSubmit} disabled={selectedCount !== GROUP_SIZE || !playing}>
          Submit
        </GameButton>
      </div>

      {game.status === "lost" && (
        <p className="board-end" role="status">
          Out of mistakes.
        </p>
      )}

      {celebrating && <Celebration id="solved" label="Solved!" onDone={() => setCelebrating(false)} />}
    </div>
  );
}

function SolvedRow({ group }: { group: SolvedGroup }) {
  return (
    <section className={`group level-${group.level}`} aria-label={group.label}>
      <span className="group-icon" aria-hidden="true">
        {group.icon}
      </span>
      <div className="group-text">
        <strong>{group.label}</strong>
        <span>{group.words.join(" · ")}</span>
      </div>
    </section>
  );
}

interface TileProps {
  word: string;
  selected: boolean;
  shakeToken: number;
  onToggle: (word: string) => void;
}

function Tile({ word, selected, shakeToken, onToggle }: TileProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const shake = useShake(ref);
  const lastToken = useRef(shakeToken);

  // Fit the label to the tile, again whenever the word or the screen size changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: the label is the word, so each new word is refitted.
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const refit = () => fitText(element);
    refit();
    window.addEventListener("resize", refit);
    return () => window.removeEventListener("resize", refit);
  }, [word]);

  // A new shake token replays the shake on the selected tiles. Other re-renders do not.
  useEffect(() => {
    if (shakeToken === lastToken.current) return;
    lastToken.current = shakeToken;
    if (selected) shake();
  }, [shakeToken, selected, shake]);

  return (
    <button
      ref={ref}
      type="button"
      className={selected ? "tile selected" : "tile"}
      aria-pressed={selected}
      onClick={() => onToggle(word)}
    >
      {word}
    </button>
  );
}
