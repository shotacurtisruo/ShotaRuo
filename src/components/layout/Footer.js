/* ============================================
   FOOTER COMPONENT
   ============================================
   Minimal, sleek footer with:
   - 3D model on the left (clickable)
   - Centered social media links
   - Subtle attribution
   - Clean, modern design
   ============================================ */

import React, { useState } from 'react';
import { ModelViewer } from '../shared/ModelViewer';
import './Footer.css';

export const Footer = () => {
    const [isRotating, setIsRotating] = useState(true);

    const handleModelClick = () => {
        setIsRotating(!isRotating);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 3D Model on Left */}
                <div className="footer-model" onClick={handleModelClick}>
                    <ModelViewer 
                        modelPath="/models/ditto.glb"
                        autoRotate={isRotating}
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={true}
                        cameraPosition={[0, 0, 2.5]}
                        modelScale={1.5}
                        className="footer-3d-model"
                    />
                </div>

                {/* Center Content */}
                <div className="footer-center">
                    {/* Social Media Links */}
                    <div className="footer-social">
                    <a 
                        href="https://github.com/shotacurtisruo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/shota-ruo-1869b7244/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a 
                        href="https://www.instagram.com/shota_ruo/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Instagram"
                    >
                        <svg className="social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    </div>

                    {/* Attribution */}
                    <div className="footer-attribution">
                        <p className="footer-text">
                            <span className="footer-year">{new Date().getFullYear()}</span>
                            <span className="footer-separator">·</span>
                            <span className="footer-name">Shota Curtis Ruo</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
