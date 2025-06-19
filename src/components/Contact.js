import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me for any opportunities, questions, or just to connect!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:chancewijewardena@gmail.com">chancewijewardena@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+16047102947">(604)-710-2947</a></p>
      </div>

      <div className="contact-socials">
        <a href="https://github.com/chanjaffa" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/chance-wijewardena-119636239/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/chancewije/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/chance.wije" target="_blank" rel="noreferrer">Facebook</a>
      </div>
      <div className="resume-download">
        <a href="/resume.pdf" download className="resume-button">
          📄 Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
