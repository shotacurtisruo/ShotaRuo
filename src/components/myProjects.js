import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt'; // npm install react-parallax-tilt
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa"; // npm install react-icons
import '../styles/myProjects.css';

export const MyProjects = () => {
    return (
        <div id="main">
            <h1 className="projects-heading">My Projects:</h1>
            <div className="projects-card-container">
                {/* Project 1 */}
                <Fade duration={2000}>
                    <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} transitionSpeed={250}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/images/icon.png" alt="Web Chrome Extension" />
                            </div>
                            <div className="project-content">
                                <h2>Chrome Extension</h2>
                                <p>
                                    Chrome extension that allows users to save and store links or tabs directly on their computer, providing a convenient way to manage and access their browsing sessions.
                                </p>
                                <a href="https://github.com/shotacurtisruo/chrome-web-browser-version-1.1" target="_blank" rel="noopener noreferrer">
                                    Source Code on Github
                                </a>
                            </div>
                        </div>
                    </Tilt>
                </Fade>
                {/* Project 2 */}
                <Fade duration={2000}>
                    <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05} transitionSpeed={250}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src="/images/KSC.png" alt="KSC" />
                            </div>
                            <div className="project-content">
                                <h2>Kefli Sports Club Website</h2>
                                <p>
                                    Website I built for Kefli Sports Club (KSC) to provide information about the club, its activities, and events in the early stages.
                                </p>
                                <a href="https://kefli-sports-club.web.app/" target="_blank" rel="noopener noreferrer">
                                    KSC Webpage
                                </a>
                            </div>
                        </div>
                    </Tilt>
                </Fade>
            </div>
            <ScrollToTop
                smooth
                component={
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                    }}>
                        <FaArrowUp size={22} color="#00fff7" />
                    </div>
                }
                style={{
                    background: "rgba(30,30,30,0.92)",
                    borderRadius: "50%",
                    boxShadow: "0 4px 24px 0 #00fff7, 0 2px 12px rgba(0,0,0,0.18)",
                    right: 32,
                    bottom: 32,
                    zIndex: 1000,
                    width: 52,
                    height: 52,
                    border: "2px solid #00fff7",
                    transition: "box-shadow 0.2s, border 0.2s"
                }}
            />
        </div>
    );
};
