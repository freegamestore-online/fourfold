import { readFile } from "node:fs/promises";

const puzzleSource = await readFile(new URL("../web/src/data/puzzles.ts", import.meta.url), "utf8");
const count = [...puzzleSource.matchAll(/^\s+id:\s*\d+,\s*$/gm)].length;
const start = new Date("2026-10-16T00:00:00Z");
const today = new Date();
today.setUTCHours(0, 0, 0, 0);
let future = 0;
for (let i = 0; i < count; i++) {
  const date = new Date(start);
  date.setUTCDate(date.getUTCDate() + i);
  if (date >= today) future++;
}
console.log(`Future dailies remaining: ${future} (from ${count} puzzle slots)`);
if (future < 30) {
  console.error("FAIL: fewer than 30 future dailies remain!");
  process.exit(1);
}
console.log("OK: buffer is sufficient.");
