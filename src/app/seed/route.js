// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { users } from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     })
//   );

//   return insertedUsers;
// }

// async function seedHabits() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS habits (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID REFERENCES users(id),
//       name VARCHAR(255) NOT NULL,
//       streak_count INT NOT NULL,
//       created_at DATE NOT NULL,
//       last_updated DATE NOT NULL
//     );
//   `;

//   const insertedHabits = await Promise.all(
//     users.flatMap((user) =>
//       user.habits.map(
//         (habit) =>
//           client.sql`
//           INSERT INTO habits (id, user_id, name, streak_count, created_at, last_updated)
//           VALUES (${habit.id}, ${user.id}, ${habit.name}, ${habit.streak_count}, ${habit.created_at}, ${habit.last_updated})
//           ON CONFLICT (id) DO NOTHING;
//         `
//       )
//     )
//   );

//   return insertedHabits;
// }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedHabits();
//     await client.sql`COMMIT`;

//     return new Response(
//       JSON.stringify({ message: 'Database seeded successfully' }),
//       { status: 200 }
//     );
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
