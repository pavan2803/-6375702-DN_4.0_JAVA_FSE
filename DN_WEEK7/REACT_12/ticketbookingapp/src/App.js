import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginButton from './components/LoginButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLoginState = localStorage.getItem("isLoggedIn");
    if (savedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div>
        <h1>Ticket Booking App</h1>
        <LoginButton isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/user" /> : <GuestPage />} />
          <Route path="/user" element={isLoggedIn ? <UserPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
