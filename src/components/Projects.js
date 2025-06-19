import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p>
        I’m currently building my skills in web development and cybersecurity. While I don’t have major public projects yet, here are a few things I’ve worked on and learned from:
      </p>
      <ul>
        <li>🛠 Built this portfolio website using React and React Router</li>
        <li>💻 Completed C++ programming assignments in CMPT 125/135 that focused on logic, functions, and data structures</li>
        <li>🔐 Learned Linux and Bash scripting basics through my cybersecurity coursework</li>
        <li>🧠 Practiced using HTML, CSS, and JavaScript to build basic layouts and interactions</li>
        <li>
          🧩 Contributed to a <strong>CMPT 276 group project</strong> - view it on{' '}
          <a
            href="https://github.com/CMPT-276-SUMMER-2025/final-project-24-horizons"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p>
        I'm excited to apply these skills in real-world projects and expand my portfolio over time.
      </p>
    </div>
  );
};

export default Projects;
