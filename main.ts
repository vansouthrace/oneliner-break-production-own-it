import { mkdirSync, writeFileSync } from "node:fs";

const entry = "FATAL: I deployed on a Friday because the calendar said so. The rollback is also on fire. Please hold while I update my résumé in the incident channel.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
