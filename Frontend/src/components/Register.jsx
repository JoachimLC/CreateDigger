import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { register as registerService } from '../services/authService'; // Import the service function
import { useSearchParams } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [redirectMessage, setRedirectMessage] = useState('');

  useEffect(() => {
    if (searchParams.get('redirected') === 'true') {
      setRedirectMessage('You need to register before you can make crates');
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerService(email, password);
      setMessage('Registration successful! Redirecting to login...');
      setError('');
      setEmail('');
      setPassword('');


      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="register-screen">
      <div className="form-container">
        <h2>Create an Account</h2>
        {redirectMessage && <p className="redirect-message">{redirectMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="redirect-text">
          Already have an account? <button><a href="/login">Log in here</a></button>.
        </p>
      </div>
    </div>
  );
};


export default Register;
