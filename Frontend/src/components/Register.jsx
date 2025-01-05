import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { register as registerService } from '../services/authService'; // Import the service function

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerService(email, password); // Call the register API
      setMessage('Registration successful! Redirecting to login...');
      setError('');
      setEmail('');
      setPassword('');

      // Redirect to the login page after a short delay
      setTimeout(() => navigate('/login'), 2000); // Adjust delay as needed
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <div className="register-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
