/* ============================================
   MAIN APP COMPONENT
   ============================================ */

import './styles/layout/App.css';

// Three.js setup for Vanta.js animations
import * as THREE from 'three';

// Layout Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Feature Components
import { HeroSection } from './components/features/hero/HeroSection';
import { ExperienceSection } from './components/features/experience/ExperienceSection';
import { ProjectsSection } from './components/features/projects/ProjectsSection';

// Make THREE.js available globally for Vanta.js
if (!window.THREE) {
    window.THREE = THREE;
}

/**
 * Main App Component
 * 
 * Structure:
 * - Header: Navigation bar with profile photo and menu
 * - Animation: Hero section with 3D animated background
 * - Experience: Work experience and tech stack display
 * - MyProjects: Portfolio projects showcase
 * - Footer: Social links and site info
 */
function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content Sections */}
      <main className="main-content">
        {/* Hero Section with 3D Animation */}
        <section id="animation">
          <HeroSection />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <ExperienceSection />
        </section>
        
        {/* Projects Section */}
        <section id="myprojects">
          <ProjectsSection />
        </section>
      </main>
      
      {/* Footer with Social Links */}
      <Footer />
    </div>
  );
}

export default App;
