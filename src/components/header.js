import React from 'react';
import '../App.css';
import '../styles/header.css';

export const Header = () => {
  return (
    <header className="header-custom">
      <div className="header-left">
        <div className="photo-frame">
          <a
            href="https://www.linkedin.com/in/shotaruo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shota Ruo LinkedIn"
          >
            <img src="/images/ShotaRuoMAIN.JPG" alt="Shota Ruo" className="header-photo" />
          </a>
        </div>
      </div>
      <nav className="header-right">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#myprojects">My Projects</a>
      </nav>
    </header>
  );
};
