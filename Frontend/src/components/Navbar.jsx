import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = ({ variant = "landing" }) => {
  const { user, logout } = useAuth();

  return (
    <nav className={`navbar ${variant}`}>
      <div className="logo">CrateDigger™</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-crates">New Crate</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          {user ? (
            <div className="user-info">
              <span>{user.email}</span>
              <button onClick={logout} className="logout-button">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-button">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
