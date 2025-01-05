import React from 'react';
import Navbar from '../components/Navbar';
import Register from '../components/Register';

const RegisterPage = () => {
  

  return (
    <div className="register-page">
      <Navbar variant="slim" />
      <Register />
    </div>
  );
};

export default RegisterPage;
