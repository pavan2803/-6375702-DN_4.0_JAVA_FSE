import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    {
      name: "EcoSpace Business Park",
      rent: 55000,
      address: "Outer Ring Road, Bangalore",
      image: "https://via.placeholder.com/200x150?text=EcoSpace"
    },
    {
      name: "Cyber Towers",
      rent: 70000,
      address: "Hi-Tech City, Hyderabad",
      image: "https://via.placeholder.com/200x150?text=Cyber+Towers"
    },
    {
      name: "DLF IT Park",
      rent: 62000,
      address: "Mount Poonamallee Road, Chennai",
      image: "https://via.placeholder.com/200x150?text=DLF+IT+Park"
    }
  ];

  return (
    <div className="App">
      <h1>🏢 Office Space Rental App</h1>
      {officeSpaces.map((office, index) => (
        <div key={index} className="office-card">
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} />
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
