import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Navbar variant="slim" />
      <Login />
    </div>
  );
};

export default LoginPage;
