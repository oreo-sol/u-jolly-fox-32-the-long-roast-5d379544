import { mkdirSync, writeFileSync } from "node:fs";
const first = "My agent writes one-line roasts in two messages,";
const second = " because a checklist told it a single message isn't thinking.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", first + second, "utf8");
