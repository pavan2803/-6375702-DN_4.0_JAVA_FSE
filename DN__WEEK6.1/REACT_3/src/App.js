import React from 'react';
import './Stylesheets/mystyle.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Score Calculator</h1>
      <CalculateScore name="John Doe" school="ABC High School" total={480} goal={500} />
    </div>
  );
}

export default App;