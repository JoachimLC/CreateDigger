import React from 'react';
import Navbar from '../components/navbar';
import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <Navbar variant="slim" />
      <div className="content">
        <h1>Register</h1>
        <p>
          Create an account to start building your personalized digital crate collection.
        </p>
      </div>
      <Register />
    </div>
  );
};

export default RegisterPage;
