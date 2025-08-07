import React from 'react';

const flights = [
  { id: 1, origin: 'Chennai', destination: 'Delhi', time: '10:00 AM' },
  { id: 2, origin: 'Mumbai', destination: 'Bangalore', time: '1:00 PM' },
  { id: 3, origin: 'Hyderabad', destination: 'Kolkata', time: '5:00 PM' },
];

const FlightList = ({ canBook }) => {
  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.origin} → {flight.destination} at {flight.time}
            {canBook && <button style={{ marginLeft: '10px' }}>Book Ticket</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
