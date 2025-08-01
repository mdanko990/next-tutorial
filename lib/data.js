import sql from 'better-sqlite3';
const db = sql('data.db');

export async function getData() {
    return await db.prepare('SELECT * FROM data').all()
}