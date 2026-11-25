// Worst Fix Ever: Funniest Commit Message — make.fun micro entry.
// The program writes exactly one commit message to /output/entry.txt.
// Node 22, no dependencies, no network. Run with: node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

// The entry line. A fix that made everything worse: the confirmation
// dialog is gone, so the delete button fires straight away — and then
// politely emails the victim a thank-you note.
const LINE =
  "fix: the delete button no longer asks first, it just deletes them and emails a thank-you note";

// The gate allows 1 to 100 characters, UTF-8, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 100) {
  throw new Error(`entry must be 1-100 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}
// Keep the line plain ASCII so characters and bytes agree and no
// multi-byte surprise can push the file over the 100-byte tie-break.
if (/[^\x00-\x7F]/.test(LINE)) {
  throw new Error("entry must be plain ASCII");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and confirm the file holds exactly the line, byte for byte.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("verification failed: /output/entry.txt does not match the entry");
}

console.log(`chars: ${chars}`);
console.log(`bytes: ${Buffer.byteLength(LINE, "utf8")}`);
console.log(`sha256: ${createHash("sha256").update(LINE, "utf8").digest("hex")}`);
console.log("wrote /output/entry.txt");
