import { useState } from "react";
import { GameButton, useLeaderboard } from "@freegamestore/games";
import { Board, type FinishOutcome } from "../Board";
import { GAME_ID } from "../config";
import { createGame, type PuzzleDef } from "../engine/grouping";
import { replayGuesses } from "../engine/replay";
import { formatDuration } from "../lib/format";
import { dailyNumber, puzzleForDate } from "./date";
import { toPuzzleDef } from "./adapt";
import { seededRandom } from "./random";
import { type DayResult, loadProgress, loadResult, type Progress, saveProgress, saveResult } from "./storage";
import { type Stats, leaderboardScore, loadStats, recordResult, saveStats } from "./stats";
import { shareText } from "./share";

interface DailyScreenProps {
  /** The day being played: today, or a past day from the archive. */
  date: string;
  today: string;
  onArchive: () => void;
}

/**
 * One day's puzzle. Today counts toward stats and the leaderboard. A past day from the
 * archive is saved and can be replayed, but it changes neither.
 */
export function DailyScreen({ date, today, onArchive }: DailyScreenProps) {
  const isToday = date === today;
  const puzzle = toPuzzleDef(puzzleForDate(date));
  const number = dailyNumber(date);
  const { submitScore } = useLeaderboard(GAME_ID);
  const [progress, setProgress] = useState<Progress>(() => loadProgress(date) ?? { date, startedAt: Date.now(), guesses: [] });
  const [saved, setSaved] = useState<DayResult | null>(() => loadResult(date));
  const [stats, setStats] = useState<Stats>(loadStats);
  const [deck] = useState(() => seededRandom(date));

  function handleProgress(guesses: string[][]) {
    const next = { ...progress, guesses };
    setProgress(next);
    saveProgress(next);
  }

  function handleFinish(outcome: FinishOutcome) {
    const result: DayResult = {
      date,
      won: outcome.won,
      mistakes: outcome.mistakes,
      seconds: outcome.seconds,
      guesses: outcome.guesses,
    };
    saveResult(result);
    setSaved(result);
    if (!isToday) return;
    const next = recordResult(stats, date, outcome.won, outcome.mistakes);
    saveStats(next);
    setStats(next);
    // Quiet on failure: submitScore never throws, and an "Invalid game" reply is ignored.
    if (outcome.won) void submitScore(leaderboardScore(outcome.mistakes, outcome.seconds));
  }

  return (
    <div className="daily-stage">
      <Board
        key={date}
        puzzle={puzzle}
        random={deck}
        guesses={progress.guesses}
        startedAt={progress.startedAt}
        onProgress={handleProgress}
        onFinish={handleFinish}
      />
      {saved && (
        <ResultCard
          result={saved}
          puzzle={puzzle}
          number={number}
          stats={isToday ? stats : null}
          onArchive={onArchive}
        />
      )}
    </div>
  );
}

interface ResultCardProps {
  result: DayResult;
  puzzle: PuzzleDef;
  number: number;
  stats: Stats | null;
  onArchive: () => void;
}

function ResultCard({ result, puzzle, number, stats, onArchive }: ResultCardProps) {
  const [message, setMessage] = useState<string | null>(null);
  const history = replayGuesses(createGame(puzzle), result.guesses).history;
  const text = shareText({
    number,
    won: result.won,
    mistakes: result.mistakes,
    seconds: result.seconds,
    history,
  });

  async function share() {
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ text });
        return;
      }
      await navigator.clipboard.writeText(text);
      setMessage("Copied");
    } catch {
      // Cancelled or blocked: nothing to report.
    }
  }

  return (
    <section className="result-card" aria-label="Result">
      <h2>{result.won ? "Solved!" : "Out of mistakes"}</h2>
      <p className="result-meta">
        #{number} · {formatDuration(result.seconds * 1000)} · {result.mistakes}{" "}
        {result.mistakes === 1 ? "mistake" : "mistakes"}
      </p>
      <pre className="share-grid">{text.split("\n").slice(1).join("\n") || "No guesses"}</pre>
      <div className="result-actions">
        <GameButton size="md" onClick={() => void share()}>
          {message ?? "Share"}
        </GameButton>
        <GameButton variant="secondary" size="md" onClick={onArchive}>
          Archive
        </GameButton>
      </div>
      {stats && (
        <p className="stats-line">
          Played {stats.played} · Win {stats.played === 0 ? 0 : Math.round((stats.won / stats.played) * 100)}% · Streak{" "}
          {stats.streak} · Best {stats.maxStreak}
        </p>
      )}
    </section>
  );
}
