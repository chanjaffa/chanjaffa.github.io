import React from 'react';
import './Hero.css';
import profilePic from '../assets/chancesfu.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Chance Wijewardena</h1>
      <h2><strong>Aspiring Software Engineer</strong> | Cybersecurity Enthusiast</h2>

      <img src={profilePic} alt="Chance Wijewardena" className="hero-image" />

      <p>
        I'm passionate about building creative tech solutions and love learning new tools in computer science.
        Currently exploring web dev, cybersecurity, and AI.
      </p>

      <div className="hero-socials">
        <a href="https://www.facebook.com/chance.wije" target="_blank" rel="noreferrer">🌐</a>
        <a href="https://www.instagram.com/chancewije" target="_blank" rel="noreferrer">📸</a>
        <a href="https://www.linkedin.com/in/chance-wijewardena-119636239/" target="_blank" rel="noreferrer">💼</a>
      </div>
    </div>
  );
};

export default Hero;
