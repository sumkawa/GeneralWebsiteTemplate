import React from 'react';
import './styles.css';

function HabitCard({ habitObject }) {
  // example habit object:
  // habits: [
  //   {
  //     name: 'Meditation',
  //     streak: 20,
  //     description:
  //      'I will meditate for 15 mins every day to become a more mindful person',
  //     tag: 'health',
  //     behavior: 'meditate',
  //     time: 'morning',
  //     location: 'my room',
  //     dateStarted: '2024-06-20',
  //     lastDayLogged: '2024-07-10',
  // ],

  return (
    <div class='outline'>
      <div class='card'>
        <div class='container-card bg-white-box'>
          <p class='card-title'>{habitObject.name}</p>
          <p class='card-description'>{habitObject.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
