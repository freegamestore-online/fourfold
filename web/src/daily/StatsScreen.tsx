import { GameButton } from "@freegamestore/games";
import { currentStreak, type Stats } from "./stats";

const mistakeLabels = ["0", "1", "2", "3", "4 (loss)"] as const;

interface StatsScreenProps {
  stats: Stats;
  today: string;
  onBack: () => void;
}

/** Local lifetime stats for daily games played on this device. */
export function StatsScreen({ stats, today, onBack }: StatsScreenProps) {
  const winRate =
    stats.played === 0 ? 0 : Math.round((stats.won / stats.played) * 100);
  const max = Math.max(1, ...stats.mistakes);

  return (
    <section className="stats-screen" aria-labelledby="stats-title">
      <h1 id="stats-title" className="stats-title">
        Your stats
      </h1>
      <div className="stats-cards">
        <Stat label="Current streak" value={currentStreak(stats, today)} />
        <Stat label="Best streak" value={stats.maxStreak} />
        <Stat label="Games played" value={stats.played} />
        <Stat label="Win rate" value={`${winRate}%`} />
      </div>
      <div
        className="mistakes-chart"
        role="img"
        aria-label={`Mistakes distribution: ${stats.mistakes.map((n, i) => `${i} mistakes ${n} games`).join(", ")}`}
      >
        <h2>Mistakes</h2>
        {mistakeLabels.map((label, index) => {
          const count = stats.mistakes[index] ?? 0;
          return (
            <div className="mistakes-row" key={label}>
              <span>{label}</span>
              <div className="mistakes-track">
                <div
                  className="mistakes-bar"
                  style={{ width: `${(count / max) * 100}%` }}
                />
              </div>
              <span className="mistakes-count">{count}</span>
            </div>
          );
        })}
      </div>
      <p className="stats-note">Stats are saved on this device.</p>
      <GameButton size="md" onClick={onBack}>
        Back to today
      </GameButton>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="stats-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
