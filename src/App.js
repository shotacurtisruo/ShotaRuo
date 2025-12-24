/* ============================================
   MAIN APP COMPONENT
   ============================================ */

import './App.css';

// Three.js setup for Vanta.js animations
import * as THREE from 'three';

// Component Imports
import { Experience } from './components/experience';
import { Header } from './components/header';
import { MyProjects } from './components/myProjects';
import { Animation } from './components/Animation';
import { Footer } from './components/footer';

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
          <Animation />
        </section>
        
        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Projects Section */}
        <section id="myprojects">
          <MyProjects />
        </section>
      </main>
      
      {/* Footer with Social Links */}
      <Footer />
    </div>
  );
}

export default App;
