/* ============================================
   HERO SECTION COMPONENT
   ============================================
   Kinetic name + rotating role, an ASCII portrait
   (generated from the real photo) that resolves on
   hover, over a washed scenic backdrop.
   ============================================ */

import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import { ResumeModal } from '../../shared/ResumeModal';

const NAME = 'Shota Curtis Ruo';
const ROLES = [
  'Software Engineer',
  'Frontend & Mobile Developer',
  'Statistical Data Science @ UC Davis',
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);
  const [ascii, setAscii] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = prefersReducedMotion();
  }, []);

  /* Generate an ASCII rendering of the portrait from its pixels */
  useEffect(() => {
    const img = new Image();
    img.src = '/images/SHOTA.jpg';
    img.onload = () => {
      const cols = 56;
      const rows = Math.max(1, Math.round(cols * (img.height / img.width) * 0.5));
      const canvas = document.createElement('canvas');
      canvas.width = cols;
      canvas.height = rows;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, cols, rows);
      let data;
      try {
        data = ctx.getImageData(0, 0, cols, rows).data;
      } catch (e) {
        return; /* leave ascii empty; real photo still shows */
      }
      const ramp = '@%#*+=-:. ';
      let out = '';
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
          const idx = Math.min(
            ramp.length - 1,
            Math.floor((lum / 255) * (ramp.length - 1))
          );
          out += ramp[idx];
        }
        out += '\n';
      }
      setAscii(out);
    };
  }, []);

  /* Rotate the role line */
  useEffect(() => {
    if (reduced.current) return undefined;
    const interval = setInterval(() => {
      setRoleVisible(false);
      const swap = setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 280);
      return () => clearTimeout(swap);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {/* Washed scenic backdrop (decorative) */}
      <div
        className="hero-photo"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/japan-scenery.jpg)`,
        }}
      />
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-content">
        {/* Portrait: ASCII that resolves to the real photo on hover */}
        <div
          className="hero-portrait"
          role="img"
          aria-label="Portrait of Shota Ruo"
        >
          {ascii && <pre className="hero-ascii" aria-hidden="true">{ascii}</pre>}
          <img
            className="hero-portrait-real"
            src="/images/SHOTA.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Kinetic name */}
        <h1 className="hero-name">
          {NAME.split('').map((ch, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </h1>

        {/* Introduction */}
        <div className="hero-intro">
          <p className="hero-title">
            <span
              className={`hero-role${roleVisible ? ' is-visible' : ''}`}
            >
              {ROLES[roleIdx]}
            </span>
          </p>
          <p className="hero-current">
            Currently working at <span className="hero-company">Buzzit</span>
          </p>
          <button
            className="hero-resume-btn"
            onClick={() => setShowResume(true)}
          >
            Resume
          </button>
        </div>
      </div>

      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </div>
  );
};
