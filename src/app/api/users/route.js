import { db } from '@vercel/postgres';

export default async function handler(req, res) {
  const client = await db.connect();

  try {
    const { rows } = await client.sql`SELECT * FROM users`;
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
}
