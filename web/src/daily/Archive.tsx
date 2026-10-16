import { GameButton } from "@freegamestore/games";
import { archiveDates, dailyNumber } from "./date";
import { loadResult } from "./storage";

interface ArchiveProps {
  today: string;
  onPlay: (date: string) => void;
  onExit: () => void;
}

/** Past days, newest first, with how each one went. Past days are not scored. */
export function Archive({ today, onPlay, onExit }: ArchiveProps) {
  const dates = archiveDates(today);
  return (
    <div className="archive">
      <h1 className="archive-title">Archive</h1>
      <ul className="archive-list">
        {dates.map((date) => {
          const result = loadResult(date);
          const status = !result
            ? "Not played"
            : result.won
              ? `Solved, ${result.mistakes} ${result.mistakes === 1 ? "mistake" : "mistakes"}`
              : "Out of mistakes";
          return (
            <li key={date} className="archive-row">
              <span>
                #{dailyNumber(date)} · {date}
              </span>
              <span className="archive-status">{status}</span>
              <GameButton size="sm" variant="secondary" onClick={() => onPlay(date)}>
                Play
              </GameButton>
            </li>
          );
        })}
      </ul>
      <GameButton size="md" variant="ghost" onClick={onExit}>
        Back to today
      </GameButton>
    </div>
  );
}
