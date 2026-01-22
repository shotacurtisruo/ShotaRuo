/* ============================================
   HERO SECTION COMPONENT
   ============================================
   Minimal centered hero section with portrait
   ============================================ */

import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Portrait */}
        <div className="hero-portrait">
          <img src="/images/SHOTA.jpg" alt="Shota Ruo" />
        </div>
        
        {/* Name */}
        <h1 className="hero-name">Shota Curtis Ruo</h1>
        
        {/* Introduction */}
        <div className="hero-intro">
          <p className="hero-title">Software Engineer</p>
          <p className="hero-description">
            Studying Statistical Data Science at UC Davis
          </p>
          <p className="hero-description">
            Specializing in frontend development and mobile app creation
          </p>
          <p className="hero-current">
            Currently working at <span className="hero-company">Buzzit</span>
          </p>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="hero-decoration"></div>
    </div>
  );
};