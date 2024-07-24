// src/app/api/users/[uuid]/route.js
import { db } from '@vercel/postgres';

export async function GET(req) {
  // Use req.nextUrl to access route parameters in Next.js app directory
  const uuid = req.nextUrl.pathname.split('/').pop(); // Extract the last part of the path as the UUID
  console.log('UUID received:', uuid);

  const client = await db.connect();

  try {
    if (!uuid) {
      return new Response(JSON.stringify({ error: 'UUID is required' }), {
        status: 400,
      });
    }

    const { rows } = await client.sql`
      SELECT * FROM users WHERE id = ${uuid}
    `;
    console.log('Database rows:', rows);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
      });
    } else {
      return new Response(JSON.stringify(rows[0]), { status: 200 });
    }
  } catch (error) {
    console.error('Error querying the database:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  } finally {
    client.release();
  }
}
