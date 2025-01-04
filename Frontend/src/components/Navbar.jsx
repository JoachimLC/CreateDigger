import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ variant = "landing" }) => {
  return (
    <nav className={`navbar ${variant}`}>
      <div className="logo">CrateDigger™</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link> {/* Links to the landing page */}
        </li>
        <li>
          <Link to="/create-crates">New Crate</Link> {/* Links to the create crates page */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Placeholder for an about page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Placeholder for a contact page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
