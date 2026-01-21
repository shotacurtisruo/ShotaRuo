/* ============================================
   HEADER COMPONENT
   ============================================
   Navigation bar with:
   - Profile photo (links to LinkedIn)
   - Navigation menu (smooth scroll to sections)
   ============================================ */

import React from 'react';
import '../../styles/layout/App.css';
import './Header.css';

export const Header = () => {
  return (
    <header className="header-custom">
      {/* Left Section: Profile Photo */}
      <div className="header-left">
        <div className="photo-frame">
          <a
            href="https://www.linkedin.com/in/shota-ruo-1869b7244"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Shota Ruo LinkedIn"
          >
            <img src="/images/SHOTA.jpg" alt="Shota Ruo" className="header-photo" />
          </a>
        </div>
      </div>
      
      {/* Right Section: Navigation Menu */}
      <nav className="header-right">
        <a href="#animation">Home</a>
        <a href="#experience">Experience</a>
        <a href="#myprojects">My Projects</a>
      </nav>
    </header>
  );
};
