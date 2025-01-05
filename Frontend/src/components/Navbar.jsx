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
              <div className="user-avatar">
                {user.email.charAt(0).toUpperCase()} {/* First letter of the email */}
              </div>
              <div className="dropdown">
                <button className="dropdown-button">{user.email.split('@')[0]}</button>
                <div className="dropdown-content">
                  <button onClick={logout} className="logout-button">Logout</button>
                </div>
              </div>
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
