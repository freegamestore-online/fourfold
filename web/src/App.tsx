import { useEffect, useState } from "react";
import { GameAuth, GameTopbar } from "@freegamestore/games";
import GameShell from "./GameShell";
import { Archive, DailyScreen, utcDate } from "./daily";

type View = { kind: "daily"; date: string } | { kind: "archive" };

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
          actions={<GameAuth />}
        />
      }
    >
      {view.kind === "archive" ? (
        <Archive today={today} onPlay={(date) => setView({ kind: "daily", date })} onExit={() => setView({ kind: "daily", date: today })} />
      ) : (
        <DailyScreen key={view.date} date={view.date} today={today} onArchive={() => setView({ kind: "archive" })} />
      )}
    </GameShell>
  );
}
