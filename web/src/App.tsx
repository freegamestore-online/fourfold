import { useEffect, useState } from "react";
import { GameAuth, GameButton, GameTopbar } from "@freegamestore/games";
import GameShell from "./GameShell";
import { Archive, DailyScreen, utcDate } from "./daily";
import { StatsScreen } from "./daily/StatsScreen";
import { loadStats } from "./daily/stats";

type View = { kind: "daily"; date: string } | { kind: "archive" } | { kind: "stats" };

export default function App() {
  const [today, setToday] = useState(() => utcDate());
  const [view, setView] = useState<View>({ kind: "daily", date: today });

  useEffect(() => {
    const refreshToday = () => {
      const nextToday = utcDate();
      if (nextToday === today) return;
      setToday(nextToday);
      setView((current) =>
        current.kind === "daily" && current.date === today ? { kind: "daily", date: nextToday } : current,
      );
    };
    const timer = window.setInterval(refreshToday, 60_000);
    return () => window.clearInterval(timer);
  }, [today]);

  return (
    <GameShell
      topbar={
        <GameTopbar
          title="Fourfold"
          actions={<><GameButton size="sm" variant="ghost" onClick={() => setView({ kind: "stats" })}>Stats</GameButton><GameAuth /></>}
        />
      }
    >
      {view.kind === "stats" ? (
        <StatsScreen stats={loadStats()} today={today} onBack={() => setView({ kind: "daily", date: today })} />
      ) : view.kind === "archive" ? (
        <Archive today={today} onPlay={(date) => setView({ kind: "daily", date })} onExit={() => setView({ kind: "daily", date: today })} />
      ) : (
        <DailyScreen key={view.date} date={view.date} today={today} onArchive={() => setView({ kind: "archive" })} onStats={() => setView({ kind: "stats" })} />
      )}
    </GameShell>
  );
}
