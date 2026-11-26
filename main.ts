// One-Line Office Jokes — make.fun entry
// Writes a single-line office joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic: the same bytes on every run. No network, no input, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I hit reply-all to ask everyone to stop hitting reply-all, and now 400 colleagues are debating it in a thread titled 'Re: Re: Re: Re: stop'.";

// The gate: UTF-8 text of 1 to 199 characters, not only white space, one line.
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-199`);
}
if (/\n/.test(ENTRY) || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
