import React from 'react';

const LoginButton = ({ isLoggedIn, handleLoginLogout }) => {
  return (
    <button onClick={handleLoginLogout}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default LoginButton;
