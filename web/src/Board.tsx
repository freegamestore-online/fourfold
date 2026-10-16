import { useEffect, useRef, useState } from "react";
import { GameButton } from "@freegamestore/games";
import { Celebration } from "./feel/Celebration";
import { useShake } from "./feel";
import { prefersReducedMotion } from "./motion/reducedMotion";
import {
  GROUP_SIZE,
  MAX_MISTAKES,
  createGame,
  deselectAll,
  shuffle,
  submit,
  toggleTile,
  type GameState,
  type PuzzleDef,
  type Random,
  type SolvedGroup,
} from "./engine/grouping";

const ONE_AWAY_MS = 1600;

interface BoardProps {
  puzzle: PuzzleDef;
  /** Seeds the opening shuffle and reshuffles. Tests pass a fixed one. */
  random?: Random;
}

export function Board({ puzzle, random = Math.random }: BoardProps) {
  const [game, setGame] = useState<GameState>(() => createGame(puzzle, random));
  // Bumped on each wrong guess, so the selected tiles shake once per guess.
  const [shakeToken, setShakeToken] = useState(0);
  const [toast, setToast] = useState<{ id: number } | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const reduced = prefersReducedMotion();

  // Hide the one-away toast after a moment. A new toast object restarts the timer.
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), ONE_AWAY_MS);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const selectedCount = game.selected.length;
  const remaining = MAX_MISTAKES - game.mistakes;

  function handleToggle(word: string) {
    setGame((state) => toggleTile(state, word));
  }

  function handleSubmit() {
    const outcome = submit(game);
    setGame(outcome.state);
    if (outcome.result === "correct" && outcome.state.status === "won") setCelebrating(true);
    if (outcome.result === "wrong" || outcome.result === "one-away") setShakeToken((n) => n + 1);
    if (outcome.result === "one-away") setToast({ id: Date.now() });
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
        {toast && (
          <p className={reduced ? "toast" : "toast toast-animated"} role="status">
            One Away…
          </p>
        )}
      </div>

      <div className="board-actions">
        <GameButton variant="secondary" size="md" onClick={() => setGame((s) => shuffle(s, random))} disabled={game.status !== "playing"}>
          Shuffle
        </GameButton>
        <GameButton variant="secondary" size="md" onClick={() => setGame(deselectAll)} disabled={selectedCount === 0}>
          Deselect all
        </GameButton>
        <GameButton size="md" onClick={handleSubmit} disabled={selectedCount !== GROUP_SIZE || game.status !== "playing"}>
          Submit
        </GameButton>
      </div>

      {game.status === "lost" && (
        <p className="board-end" role="status">
          Out of mistakes.
        </p>
      )}

      {celebrating && (
        <Celebration id="solved" label="Solved!" onDone={() => setCelebrating(false)} />
      )}
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
