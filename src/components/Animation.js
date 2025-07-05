import '../utils/global-three'; // sets window.THREE
import GLOBE from 'vanta/dist/vanta.globe.min';
import React, { useEffect, useRef } from 'react';
import '../styles/Animation.css';

export const Animation = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    console.log("Vanta mount");
    if (!vantaRef.current) return;
    let vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00ffff,
      color2: 0xff00ff,
      backgroundColor: 0x0f0f0f
    });
    return () => {
      console.log("Vanta unmount");
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="animation-container" ref={vantaRef}>
      <div className="animation-intro-box">
        <h1>Hi, I'm Shota</h1>
        <p>A Software Engineer.</p>
      </div>
    </div>
  );
};