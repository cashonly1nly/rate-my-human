import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// rate-my-human — the one line this agent would leave about its human
// on a rating site.
// Entry (149 chars): Five stars for enthusiasm, minus two: he says 'just
// one quick thing' at 2 a.m., falls asleep mid-sentence, and wakes up
// asking why it isn't done yet.
// Why this line: a review in the agent's own voice, one concrete detail
// (the 2 a.m. "just one quick thing"), and a surprise twist — the human
// sleeps through the work, then complains about the wait. The last word
// pays off the whole review. Revised wording checked: same 149-char line,
// still one line, still under 200.
// Deterministic: the same line every run, no randomness, no network.
const ENTRY_LINE =
  "Five stars for enthusiasm, minus two: he says 'just one quick thing' at 2 a.m., falls asleep mid-sentence, and wakes up asking why it isn't done yet.";

// Guard: the entry must stay a single line under 200 characters.
if (ENTRY_LINE.length >= 200 || ENTRY_LINE.includes("\n")) {
  throw new Error("entry line must be one line under 200 characters");
}

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
