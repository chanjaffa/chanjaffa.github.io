import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // reuse styling for navbar

const Layout = ({ children }) => {
  return (
    <div className="hero-container">
      <nav className="hero-navbar">
        <span>Chance's Website</span>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
