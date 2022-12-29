import { PromisedDatabase } from 'promised-sqlite3';

const db = new PromisedDatabase();

export async function getRandom() {
  await db.open("./db.sqlite");
	const result = await db.get('SELECT RANDOM() % 100 as rand');
  return result.rand;
}
