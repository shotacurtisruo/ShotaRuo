/* ============================================
   EXPERIENCE COMPONENT
   ============================================
   Minimal timeline-style experience cards with smooth animations
   - Vertical timeline with connecting lines
   - Cards slide in from alternating sides
   - Clean, modern design matching website aesthetic
   ============================================ */

import './ExperienceSection.css';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { ModelViewer } from '../../shared/ModelViewer';

const experienceData = [
  {
    role: 'Project Lead',
    company: 'Narb',
    logo: '/images/narblogo.png',
    duration: 'August 2025 - January 2026',
    description: 'Responsible for overseeing the planning, execution, and continuous improvement of the company website'
  },
  {
    role: 'Software Engineer',
    company: 'Buzzit',
    logo: '/images/buzzit.jpeg',
    duration: 'May 2025 - Present',
    description: 'Building a new mobile app!'
  },
  {
    role: 'Computer Technician',
    company: 'UCD SOEIT',
    logo: '/images/ucdavis.png',
    duration: 'January 2025 - Present',
    description: 'Assisted in tier 1 tech support, hardware management and client support'
  },
  {
    role: 'Student Helper',
    company: 'CPE IT',
    logo: '/images/ucdavis.png',
    duration: 'May 2025 - Present',
    description: 'Staffing the help desk, providing tier 1 computer support, moving computers, performing computer updates, and finding solutions to novel problems'
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Pal AI',
    logo: '/images/PalAI.jpeg',
    duration: 'June 2025 - August 2025',
    description: 'Working on a startup webapp'
  },
  {
    role: 'Software Engineering Intern',
    company: 'Narb',
    logo: '/images/narblogo.png',
    duration: 'June 2025 - August 2025',
    description: 'Working on new upcoming tech products'
  },
  {
    role: 'Software Developer',
    company: '#include',
    logo: '/images/include.png',
    duration: 'Jan 2023 - June 2023',
    description: 'Developed scalable web applications'
  }
];

export const ExperienceSection = () => {
    return (
        <div id="main">
            {/* 3D Model Viewer */}
            <div className="experience-model-viewer">
                <ModelViewer 
                    modelPath="/models/macbook_pro_m3_16_inch_2024.glb"
                    autoRotate={true}
                    enableZoom={false}
                    enablePan={false}
                    cameraPosition={[0, 0, 5]}
                    modelScale={0.06}
                />
            </div>

            {/* Section Header */}
            <div className="experience-header">
                <h1>Experience</h1>
            </div>

            {/* Timeline Container */}
            <div className="experience-timeline">
                {experienceData.map((exp, index) => (
                    <Fade 
                        key={index}
                        duration={600}
                        delay={index * 80}
                        triggerOnce={false}
                        fraction={0.2}
                    >
                        <div className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                            <div className="timeline-card">
                                <div className="timeline-card-inner">
                                    <div className="timeline-card-header">
                                        <div className="timeline-logo">
                                            <img src={exp.logo} alt={`${exp.company} logo`} />
                                        </div>
                                        <div className="timeline-info">
                                            <h3 className="timeline-role">{exp.role}</h3>
                                            <p className="timeline-company">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="timeline-card-body">
                                        <span className="timeline-duration">{exp.duration}</span>
                                        <p className="timeline-description">{exp.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};
