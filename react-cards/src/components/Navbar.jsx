import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">Brand</Link>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__menu-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="navbar__menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
