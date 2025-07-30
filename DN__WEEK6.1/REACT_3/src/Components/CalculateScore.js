import React from 'react';

const CalculateScore = ({ name, school, total, goal }) => {
  const average = (total / goal) * 100;

  return (
    <div className="score-card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
};

export default CalculateScore;