import React from 'react';
import './ProjectsSection.css';

const projectsData = [
  {
    num: '01',
    title: 'Chrome Extension',
    description: 'Save and manage browser tabs directly on your computer.',
    link: 'https://github.com/shotacurtisruo/chrome-web-browser-version-1.1',
  },
  {
    num: '02',
    title: 'Sho AI',
    description: 'AI chatbot that answers questions about me.',
    link: 'https://sho-ai.vercel.app/',
  },
  {
    num: '03',
    title: 'uotani (魚谷)',
    description: 'Fishing web game featuring Japan',
      link: 'https://uotani.vercel.app/',
  },
];

export const ProjectsSection = () => (
  <div id="projects-main">
    <div className="projects-header">
      <h1>Projects</h1>
    </div>

    <div className="projects-bands">
      {projectsData.map((project) =>
        project.link ? (
          <a
            key={project.num}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-band"
          >
            <div className="p-band-flood" />
            <span className="p-num">{project.num}</span>
            <span className="p-title">{project.title}</span>
            <span className="p-desc">{project.description}</span>
            <svg className="p-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        ) : (
          <div key={project.num} className="p-band p-band--muted">
            <div className="p-band-flood" />
            <span className="p-num">{project.num}</span>
            <span className="p-title">{project.title}</span>
            <span className="p-desc">{project.description}</span>
          </div>
        )
      )}
    </div>
  </div>
);
