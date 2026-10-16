import { GameAuth, GameTopbar } from "@freegamestore/games";
import GameShell from "./GameShell";
import { Board } from "./Board";
import type { PuzzleDef } from "./engine/grouping";

// Development sample only. Real puzzle loading is a later ticket.
const SAMPLE_PUZZLE: PuzzleDef = {
  groups: [
    { label: "Pastries", words: ["BAGEL", "DANISH", "MUFFIN", "SCONE"], level: 0, icon: "◆" },
    { label: "Woodwinds", words: ["OBOE", "FLUTE", "CLARINET", "BASSOON"], level: 1, icon: "▲" },
    { label: "Planets", words: ["MARS", "VENUS", "SATURN", "MERCURY"], level: 2, icon: "●" },
    { label: "Dogs", words: ["BEAGLE", "POODLE", "BOXER", "HUSKY"], level: 3, icon: "■" },
  ],
};

export default function App() {
  return (
    <GameShell topbar={<GameTopbar title="Fourfold" actions={<GameAuth />} />}>
      <Board puzzle={SAMPLE_PUZZLE} />
    </GameShell>
  );
}
