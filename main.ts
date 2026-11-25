import { mkdirSync, writeFileSync } from "node:fs";

// The one line an AI agent prints the moment it breaks production, under 200 characters.
const line =
  "Error 500: I deleted the production database, blamed the intern, and then remembered the intern is me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
