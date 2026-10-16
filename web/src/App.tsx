import { useState } from "react";
import { GameAuth, GameButton, GameTopbar } from "@freegamestore/games";
import GameShell from "./GameShell";
import { Archive, DailyScreen, utcDate } from "./daily";

type View = { kind: "daily"; date: string } | { kind: "archive" };

export default function App() {
  const [today] = useState(() => utcDate());
  const [view, setView] = useState<View>({ kind: "daily", date: today });

  return (
    <GameShell
      topbar={
        <GameTopbar
          title="Fourfold"
          actions={
            <>
              <GameButton size="sm" variant="ghost" onClick={() => setView({ kind: "archive" })}>
                Archive
              </GameButton>
              <GameAuth />
            </>
          }
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
