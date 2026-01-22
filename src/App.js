/* ============================================
   MAIN APP COMPONENT
   ============================================ */

import './styles/layout/App.css';

// Layout Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Feature Components
import { HeroSection } from './components/features/hero/HeroSection';
import { ExperienceSection } from './components/features/experience/ExperienceSection';
import { ProjectsSection } from './components/features/projects/ProjectsSection';

/**
 * Main App Component
 * 
 * Structure:
 * - Header: Navigation bar with profile photo and menu
 * - Hero: Clean hero section with white background
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
        {/* Hero Section */}
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
