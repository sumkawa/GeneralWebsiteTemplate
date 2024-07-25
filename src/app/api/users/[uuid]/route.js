// src/app/api/users/[uuid]/route.js
import { db } from '@vercel/postgres';

export async function GET(req) {
  const { pathname } = req.nextUrl;
  const uuid = pathname.split('/').pop(); // Get the last segment of the path
  console.log('UUID received:', uuid);

  const client = await db.connect();

  try {
    if (!uuid) {
      return new Response(JSON.stringify({ error: 'UUID is required' }), {
        status: 400,
      });
    }

    // Fetch user data along with their habits
    const { rows } = await client.sql`
      SELECT 
        u.id, u.name, u.email, 
        json_agg(h.*) AS habits 
      FROM users u
      LEFT JOIN habits h ON u.id = h.user_id
      WHERE u.id = ${uuid}
      GROUP BY u.id
    `;

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
