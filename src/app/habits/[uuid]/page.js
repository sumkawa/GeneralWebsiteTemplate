import React from 'react';
import styles from './page.module.css';
import * as Avatar from '@radix-ui/react-avatar';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import HabitCard from '@/components/HabitCard';

export default function Profile({ params }) {
  const data = [
    {
      uuid: '123e4567-e89b-12d3-a456-426614174000',
      password: 'password123',
      email: 'john.doe@example.com',
      name: 'John Doe',
      username: 'johnnyD',
      habits: [
        {
          name: 'Morning Exercise',
          streak: 10,
          dateStarted: '2024-07-01',
          lastDayLogged: '2024-07-10',
        },
        {
          name: 'Reading',
          streak: 5,
          dateStarted: '2024-07-05',
          lastDayLogged: '2024-07-10',
        },
      ],
    },
    {
      uuid: '123e4567-e89b-12d3-a456-426614174001',
      password: 'securePass456',
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      username: 'janeS',
      habits: [
        {
          name: 'Meditation',
          streak: 20,
          description:
            'I will meditate for 15 mins every day to become a more mindful person',
          dateStarted: '2024-06-20',
          lastDayLogged: '2024-07-10',
        },
        {
          name: 'Water Intake',
          streak: 15,
          dateStarted: '2024-06-25',
          lastDayLogged: '2024-07-10',
        },
      ],
    },
  ];

  const user = data.find((object) => object.uuid === params.uuid);

  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.heroText}>Hydrogen</div>
        <div className={styles.profilePic}>
          <Avatar.Root className={styles.AvatarRoot}>
            <Avatar.Image
              className={styles.AvatarImage}
              src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              alt='Colm Tuite'
            />
            <Avatar.Fallback className={styles.AvatarFallback} delayMs={600}>
              JS
            </Avatar.Fallback>
          </Avatar.Root>
        </div>
        <NavigationMenu.Root className={styles.NavigationMenuRoot}>
          <NavigationMenu.List className={styles.NavigationMenuList}>
            <NavigationMenu.Item className={styles.NavigationMenuItem}>
              <NavigationMenu.Link className={styles.NavigationMenuLink}>
                TEST
              </NavigationMenu.Link>
              <NavigationMenu.Link className={styles.NavigationMenuLink}>
                TEST
              </NavigationMenu.Link>
              <NavigationMenu.Link className={styles.NavigationMenuLink}>
                TEST
              </NavigationMenu.Link>
              <NavigationMenu.Link className={styles.NavigationMenuLink}>
                TEST
              </NavigationMenu.Link>
              <NavigationMenu.Link className={styles.NavigationMenuLink}>
                TEST
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </aside>
      <section className={styles.content}>
        <div className={styles.habitsHeader}>
          <p>Welcome back, </p>
          <h1 className={styles.span}>{user.name}</h1>
        </div>
        <div className={styles.habitsContainer}>
          {/* {user.habits.map((habit, index) => (
            <HabitCard key={`${habit}-${index}`} habitObject={habit} />
          ))} */}
          <HabitCard key='yadad' habitObject={user.habits[0]} />
        </div>
      </section>
    </main>
  );
}
