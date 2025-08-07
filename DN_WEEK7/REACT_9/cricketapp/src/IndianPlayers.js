import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    'Virat Kohli',
    'Rohit Sharma',
    'Shubman Gill',
    'Hardik Pandya',
    'KL Rahul',
    'Ravindra Jadeja',
    'Bhuvneshwar Kumar',
    'Jasprit Bumrah',
    'Shreyas Iyer',
    'Yuzvendra Chahal'
  ];

  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players:</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
