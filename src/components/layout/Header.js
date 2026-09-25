/* ============================================
   HEADER COMPONENT
   ============================================
   Creative floating navigation with unique animations
   ============================================ */

import React, { useState, useEffect } from 'react';
import '../../styles/layout/App.css';
import './Header.css';
import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['animation', 'experience', 'myprojects', 'photos'];
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
    { id: 'myprojects', label: 'Projects' },
    { id: 'photos', label: 'Photos' },
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
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <line x1="12" y1="2" x2="12" y2="4.5" />
              <line x1="12" y1="19.5" x2="12" y2="22" />
              <line x1="4.5" y1="12" x2="2" y2="12" />
              <line x1="22" y1="12" x2="19.5" y2="12" />
              <line x1="6.3" y1="6.3" x2="4.6" y2="4.6" />
              <line x1="19.4" y1="19.4" x2="17.7" y2="17.7" />
              <line x1="6.3" y1="17.7" x2="4.6" y2="19.4" />
              <line x1="19.4" y1="4.6" x2="17.7" y2="6.3" />
            </svg>
          ) : (
            <svg className="theme-toggle-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
            </svg>
          )}
        </button>
      </nav>
      <div className="header-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </header>
  );
};
