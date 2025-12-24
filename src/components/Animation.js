/* ============================================
   ANIMATION COMPONENT (Hero Section)
   ============================================
   Hero section with 3D animated background using Vanta.js
   - Uses Three.js for 3D globe animation
   - Displays introduction text overlay
   ============================================ */

import '../utils/global-three'; // Sets window.THREE for Vanta.js
import GLOBE from 'vanta/dist/vanta.globe.min';
import React, { useEffect, useRef } from 'react';
import '../styles/Animation.css';

export const Animation = () => {
  // Ref for the DOM element that will contain the Vanta.js animation
  const vantaRef = useRef(null);

  // Initialize and cleanup Vanta.js animation
  useEffect(() => {
    console.log("Vanta mount");
    if (!vantaRef.current) return;
    
    // Create Vanta.js globe effect
    let vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00ffff,      // Cyan
      color2: 0xff00ff,     // Magenta
      backgroundColor: 0x0f0f0f  // Dark background
    });
    
    // Cleanup function: destroy animation on unmount
    return () => {
      console.log("Vanta unmount");
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); // Empty dependency array: run once on mount

  return (
    <div className="animation-container" ref={vantaRef}>
      {/* Introduction Text Overlay */}
      <div className="animation-intro-box">
        <h1>Hi, I'm Shota</h1>
        <p>A Software Engineer.</p>
      </div>
    </div>
  );
};