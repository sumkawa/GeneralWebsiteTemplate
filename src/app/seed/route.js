// // src/app/api/seed.js
// import { db } from '@vercel/postgres';
// import bcrypt from 'bcrypt';
// import { users } from '../lib/place-holder-data';

// const client = await db.connect();

// async function seedDatabase() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   // Create tables
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS habits (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID REFERENCES users(id),
//       name VARCHAR(255) NOT NULL,
//       streak_count INT DEFAULT 0,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;

//   // Seed users and their habits
//   for (const user of users) {
//     const hashedPassword = await bcrypt.hash(user.password, 10);

//     // Insert user
//     const { rows } = await client.sql`
//       INSERT INTO users (id, name, email, password)
//       VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//       RETURNING id
//     `;
//     const userId = rows[0].id;

//     // Insert habits for the user
//     for (const habit of user.habits) {
//       await client.sql`
//         INSERT INTO habits (id, user_id, name, streak_count, created_at, last_updated)
//         VALUES (${habit.id}, ${userId}, ${habit.name}, ${habit.streak_count}, ${habit.created_at}, ${habit.last_updated})
//       `;
//     }
//   }

//   client.release();
// }

// seedDatabase().catch((err) => console.error('Error seeding database:', err));
