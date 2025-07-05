import React, { useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import * as THREE from 'three';
import '../styles/Animation.css';

export const Animation = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!window.THREE) window.THREE = THREE;
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
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="animation-container" ref={vantaRef}>
      <h1>Globe Animation Section</h1>
      <p>Enjoy the Vanta Globe effect!</p>
    </div>
  );
};