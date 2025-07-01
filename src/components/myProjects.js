import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Import the Fade animation
import '../styles/myProjects.css'; // Import the styles

export const MyProjects = () => {
    return (
        <div id="main">
            <h1 className="projects-heading">My Projects:</h1>
            
            <div className="projects-container">
                {/* Project 1 */}
                <Fade duration={3000}>
                    <div className="project-box">
                        <div className="project-image">
                            <img src="/images/icon.png" alt="Web Chrome Extension" />
                        </div>
                        <div className="project-content">
                    
                            <p>
                                Chrome extension that allows users to save and store links or tabs directly on their computer, providing a convenient way to manage and access their browsing sessions.
                            </p>
                            <a href="https://github.com/shotacurtisruo/chrome-web-browser-version-1.1" target="_blank" rel="noopener noreferrer">Source Code on Github</a>
                        </div>
                    </div>
                </Fade>

                {/* Project 2 */}
                <Fade duration={3000}>
                    <div className="project-box">
                        <div className="project-image">
                            <img src="/images/KSC.png" alt="KSC" />
                        </div>
                        <div className="project-content">
                            
                            <p>
                                Website I built for Kefli Sports Club (KSC) to provide information about the club, its activities, and events in the early stages.
                            </p>
                            <a href="https://kefli-sports-club.web.app/" target="_blank" rel="noopener noreferrer">KSC Webpage</a>
                        </div>
                    </div>
                </Fade>

                {/* Add more projects as needed */}
            </div>
        </div>
    );
};
