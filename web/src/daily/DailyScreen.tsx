import { useEffect, useRef, useState } from "react";
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
import { gridRows, shareText } from "./share";

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
  const [progress, setProgress] = useState<Progress>(() => loadProgress(date) ?? { date, guesses: [] });
  const [saved, setSaved] = useState<DayResult | null>(() => loadResult(date));
  const [stats, setStats] = useState<Stats>(loadStats);
  const [deck] = useState(() => seededRandom(date));

  function handleProgress(guesses: string[][], startedAt: number) {
    const next = { ...progress, startedAt: progress.startedAt ?? startedAt, guesses };
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
    const latestStats = loadStats();
    const next = recordResult(latestStats, date, outcome.won, outcome.mistakes);
    const alreadyRecorded = next === latestStats;
    if (!alreadyRecorded) saveStats(next);
    setStats(alreadyRecorded ? latestStats : next);
    // Quiet on failure: submitScore never throws, and an "Invalid game" reply is ignored.
    if (outcome.won && !alreadyRecorded) void submitScore(leaderboardScore(outcome.mistakes, outcome.seconds));
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
        statusAction={
          <GameButton size="sm" variant="ghost" onClick={onArchive}>
            Archive
          </GameButton>
        }
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
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const history = replayGuesses(createGame(puzzle), result.guesses).history;
  const text = shareText({
    number,
    won: result.won,
    mistakes: result.mistakes,
    seconds: result.seconds,
    history,
    url: window.location.href,
  });

  async function share() {
    try {
      if (typeof navigator.share === "function") {
        try {
          await navigator.share({ text });
          return;
        } catch (error) {
          if (error instanceof DOMException && error.name === "AbortError") return;
        }
      }
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard is unavailable");
      await navigator.clipboard.writeText(text);
      if (isMounted.current) setMessage("Copied");
    } catch {
      if (isMounted.current) setMessage("Couldn't copy — try long-pressing the text");
    }
  }

  return (
    <section className="result-card" aria-label="Result">
      <h2>{result.won ? "Solved!" : "Out of mistakes"}</h2>
      <p className="result-meta">
        #{number} · {formatDuration(result.seconds * 1000)} · {result.mistakes}{" "}
        {result.mistakes === 1 ? "mistake" : "mistakes"}
      </p>
      <pre className="share-grid">{gridRows(history).join("\n") || "No guesses"}</pre>
      <div className="result-actions">
        <GameButton size="md" onClick={() => void share()}>
          {message ?? "Share"}
        </GameButton>
        <GameButton variant="secondary" size="md" onClick={onArchive}>
          Archive
        </GameButton>
      </div>
      <a className="store-link" href="https://freegamestore.online" target="_blank" rel="noopener noreferrer">
        Built for freegamestore.online
      </a>
      {stats && (
        <p className="stats-line">
          Played {stats.played} · Win {stats.played === 0 ? 0 : Math.round((stats.won / stats.played) * 100)}% · Streak{" "}
          {stats.streak} · Best {stats.maxStreak}
        </p>
      )}
    </section>
  );
}
