// placeholder-data.js
export const users = [
  {
    // id: '1a2b3c4d5e', // Remove this line
    name: 'user1',
    email: 'user1@example.com',
    password: 'password1', // Plain text password, should be hashed
    habits: [
      {
        // id: 'h1', // Remove this line
        name: 'Morning Exercise',
        streak_count: 30,
        created_at: '2024-01-01',
        last_updated: '2024-07-24',
      },
      {
        // id: 'h2', // Remove this line
        name: 'Read Philosophy',
        streak_count: 20,
        created_at: '2024-02-01',
        last_updated: '2024-07-24',
      },
    ],
  },
  {
    // id: '2b3c4d5e6f', // Remove this line
    name: 'user2',
    email: 'user2@example.com',
    password: 'password2', // Plain text password, should be hashed
    habits: [
      {
        // id: 'h3', // Remove this line
        name: 'Write Daily Journal',
        streak_count: 25,
        created_at: '2024-03-01',
        last_updated: '2024-07-24',
      },
    ],
  },
];
