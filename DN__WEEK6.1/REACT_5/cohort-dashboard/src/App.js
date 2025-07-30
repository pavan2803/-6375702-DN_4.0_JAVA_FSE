import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    {
      id: 1,
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-15',
    },
    {
      id: 2,
      name: 'Angular Basics',
      status: 'completed',
      startDate: '2025-05-01',
      endDate: '2025-06-15',
    },
  ];

  return (
    <div>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.id} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;