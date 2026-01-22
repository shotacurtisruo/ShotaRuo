/* ============================================
   HEADER COMPONENT
   ============================================
   Creative floating navigation with unique animations
   ============================================ */

import React, { useState, useEffect } from 'react';
import '../../styles/layout/App.css';
import './Header.css';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['animation', 'experience', 'myprojects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      const header = document.querySelector('.header-custom');
      if (header) {
        const rect = header.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    const header = document.querySelector('.header-custom');
    if (header) {
      header.addEventListener('mousemove', handleMouseMove);
    }
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (header) {
        header.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'animation', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'myprojects', label: 'Projects' }
  ];

  return (
    <header className="header-custom">
      <div className="header-gradient" style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}></div>
      <nav className="header-nav">
        {navItems.map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => handleClick(e, `#${item.id}`)}
          >
            <span className="nav-text">{item.label}</span>
            <div className="nav-glow"></div>
            <div className="nav-dot"></div>
          </a>
        ))}
      </nav>
      <div className="header-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </header>
  );
};
