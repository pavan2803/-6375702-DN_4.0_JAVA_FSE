import React from 'react';
import FlightList from './FlightList';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets.</p>
      <FlightList canBook={true} />
    </div>
  );
};

export default UserPage;
