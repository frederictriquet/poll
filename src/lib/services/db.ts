import { Database } from 'sqlite3';

const db = new Database('db.sqlite');

export function getRandom() {
  console.log('before');
	db.get('SELECT RANDOM() % 100 as result', (_, res) => console.log(res));
  return { result: 'OK' };
}
