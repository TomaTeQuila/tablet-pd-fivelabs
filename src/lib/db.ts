import { readFile, writeFile } from "node:fs/promises";
import { CrimeSchema } from "./schemas";
import type { Crime } from "./schemas";

import { z } from "zod";

const DB_PATH = new URL("../../data/db.json", import.meta.url);

const DBShape = z.object({
  crimes: z.record(z.string(), z.array(CrimeSchema))
});
type DB = z.infer<typeof DBShape>;

async function readDB(): Promise<DB> {
  const raw = await readFile(DB_PATH, "utf8");
  return DBShape.parse(JSON.parse(raw));
}

async function writeDB(db: DB) {
  await writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf8");
}

/** CRUD */
export async function getCrimesOf(citizenId: string): Promise<Crime[]> {
  const db = await readDB();
  return db.crimes[citizenId] ?? [];
}

export async function addCrimeTo(citizenId: string, crime: Crime): Promise<Crime> {
  const db = await readDB();
  db.crimes[citizenId] ??= [];
  db.crimes[citizenId].push(crime);
  await writeDB(db);
  return crime;
}

export async function deleteCrime(citizenId: string, index: number) {
  const db = await readDB();
  if (!db.crimes[citizenId]) return;
  db.crimes[citizenId].splice(index, 1);
  await writeDB(db);
}
