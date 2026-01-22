/* ============================================
   PROJECTS COMPONENT
   ============================================
   Using ReactBits card-swap component
   - Cards that automatically cycle through
   - GSAP animations for smooth transitions
   ============================================ */

import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import CardSwap, { Card } from '../../shared/CardSwap';
import './ProjectsSection.css';

const projectsData = [
  {
    title: 'Chrome Extension',
    description: 'Save and manage browser tabs directly on your computer.',
    image: '/images/icon.png',
    link: 'https://github.com/shotacurtisruo/chrome-web-browser-version-1.1',
    linkText: 'View on GitHub'
  },
  {
    title: 'Sho AI',
    description: 'AI chatbot that answers questions about my background and experience.',
    image: '/images/SHOTA.jpg',
    link: 'https://sho-ai.vercel.app/',
    linkText: 'Try Sho AI'
  },
  {
    title: 'TBA',
    description: 'More projects coming soon!',
    image: '',
    link: '',
    linkText: ''
  }
];

export const ProjectsSection = () => {
    const [cardDimensions, setCardDimensions] = useState({ width: 600, height: 500 });

    useEffect(() => {
        const calculateDimensions = () => {
            const viewportWidth = window.innerWidth;
            let width, height;

            if (viewportWidth >= 1200) {
                width = 600;
                height = 500;
            } else if (viewportWidth >= 968) {
                width = Math.max(500, viewportWidth * 0.5);
                height = Math.max(420, width * 0.83);
            } else if (viewportWidth >= 768) {
                width = Math.max(450, viewportWidth * 0.6);
                height = Math.max(375, width * 0.83);
            } else if (viewportWidth >= 480) {
                width = Math.max(380, viewportWidth * 0.75);
                height = Math.max(320, width * 0.84);
            } else {
                width = Math.max(320, viewportWidth * 0.85);
                height = Math.max(280, width * 0.875);
            }

            setCardDimensions({ width, height });
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);
        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    return (
        <div id="projects-main">
            {/* Section Header */}
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            
            {/* Projects Container with Card Swap */}
            <div className="projects-wrapper-swap">
                <Fade duration={600} triggerOnce={false} fraction={0.2}>
                    <CardSwap
                        width={cardDimensions.width}
                        height={cardDimensions.height}
                        cardDistance={Math.max(40, cardDimensions.width * 0.1)}
                        verticalDistance={Math.max(50, cardDimensions.height * 0.14)}
                        delay={5000}
                        pauseOnHover={true}
                        skewAmount={6}
                        easing="elastic"
                    >
                        {projectsData.map((project, index) => (
                            <Card key={index} customClass="project-card-content">
                                {project.image ? (
                                    <div className="project-card-inner">
                                        <div className="project-card-header">
                                            <div className="project-image-wrapper">
                                                <div className="project-image-glow"></div>
                                                <img src={project.image} alt={project.title} className="project-image" />
                                            </div>
                                        </div>
                                        <div className="project-card-body">
                                            <div className="project-title-wrapper">
                                                <h2 className="project-title">{project.title}</h2>
                                            </div>
                                            {project.description && (
                                                <p className="project-description">{project.description}</p>
                                            )}
                                        </div>
                                        {project.link && (
                                            <div className="project-card-footer">
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                >
                                                    <span className="project-link-text">{project.linkText}</span>
                                                    <svg className="project-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="project-card-empty">
                                        <div className="project-card-tba">
                                            <h2 className="project-tba-title">{project.title}</h2>
                                            <p className="project-tba-description">{project.description}</p>
                                        </div>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </CardSwap>
                </Fade>
            </div>
        </div>
    );
};
