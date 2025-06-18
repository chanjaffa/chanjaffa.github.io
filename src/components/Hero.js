import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-content">
      <h1>Chance Wijewardena</h1>
      <h2><strong>Aspiring Software Engineer</strong> | Cybersecurity Enthusiast</h2>

      <div className="hero-image">Image goes here</div>

      <p>
        I'm passionate about building creative tech solutions and love learning new tools in computer science.
        Currently exploring web dev, cybersecurity, and AI.
      </p>

      <div className="hero-socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
      </div>
    </div>
  );
};

export default Hero;
