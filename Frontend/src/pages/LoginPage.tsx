import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/navbar';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Navbar variant="slim" />
      <div className="content">
        <h1>Login</h1>
        <p>
          Access your personalized digital crate collection by logging in to your account.
        </p>
        <p>
          Don’t have an account? 
          <button>
            <Link to="/register">Register here</Link>
          </button>.
        </p>
      </div>
      <Login />
    </div>
  );
};

export default LoginPage;
