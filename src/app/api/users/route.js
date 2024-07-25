// src/app/api/users/route.js
import { db } from '@vercel/postgres';
import bcrypt from 'bcrypt';

export async function GET(req) {
  const client = await db.connect();

  try {
    const { rows } = await client.sql`SELECT * FROM users`;
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  } finally {
    client.release();
  }
}

export async function POST(req) {
  const client = await db.connect();
  const { name, email, password } = await req.json(); // Assuming the request body is in JSON format

  try {
    // Validate the data (basic example)
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Check if the email already exists
    const { rowCount } =
      await client.sql`SELECT 1 FROM users WHERE email = ${email}`;
    if (rowCount > 0) {
      return new Response(JSON.stringify({ error: 'Email already exists' }), {
        status: 409,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await client.sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;

    return new Response(
      JSON.stringify({ message: 'User created successfully' }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  } finally {
    client.release();
  }
}
