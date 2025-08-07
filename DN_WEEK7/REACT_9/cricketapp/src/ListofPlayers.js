import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 80 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'Ravindra Jadeja', score: 66 },
    { name: 'Jasprit Bumrah', score: 88 },
    { name: 'Hardik Pandya', score: 59 },
    { name: 'KL Rahul', score: 74 },
    { name: 'Shreyas Iyer', score: 69 },
    { name: 'R Ashwin', score: 50 },
    { name: 'Mohammed Shami', score: 42 },
    { name: 'Surya Kumar Yadav', score: 77 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70:</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
