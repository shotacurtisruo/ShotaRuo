import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; // Import the scroll function
import '../styles/footer.css'; // Import the footer styles

export const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuad' }); // Smooth scroll to the top
    };

    return (
        <footer className="footer">
            <hr className="footer-line" /> {/* Horizontal line */}
            <div className="footer-content">
                {/* Left Section */}
                <div className="footer-left">
                    <p1 className="footer-text">Built by Shota</p1>
                </div>

                {/* Right Section */}
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

            {/* Scroll-to-Top Button */}
            
        </footer>
    );
};