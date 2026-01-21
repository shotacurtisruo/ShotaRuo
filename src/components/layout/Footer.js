/* ============================================
   FOOTER COMPONENT
   ============================================
   Footer with:
   - Attribution text
   - Social media links (GitHub, LinkedIn, Instagram)
   ============================================ */

import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            {/* Divider Line */}
            <hr className="footer-line" />
            
            {/* Footer Content Container */}
            <div className="footer-content">
                {/* Left Section: Attribution */}
                <div className="footer-left">
                    <p1 className="footer-text">Built by Shota</p1>
                </div>

                {/* Right Section: Social Media Links */}
                <div className="footer-right">
                    <div className="social-container">
                        <div className="social-icons">
                            <a href="https://github.com/shotacurtisruo" target="_blank" rel="noopener noreferrer">
                                <img src="/images/github.png" alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/shota-ruo-1869b7244/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/shota_ruo/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/instagram.png" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};