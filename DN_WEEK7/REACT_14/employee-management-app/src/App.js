import React, { useState } from 'react';
import EmployeesList from './components/EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app-container ${theme}`}>
        <h1>Employee Management Application</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
