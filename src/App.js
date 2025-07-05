import './App.css';

import * as THREE from 'three';

import { Home } from './components/home';
import { Experience } from './components/experience';
import { Header } from './components/header';
import { MyProjects } from './components/myProjects';
import { Animation } from './components/Animation';
import { Footer } from './components/footer';

if (!window.THREE) {
    window.THREE = THREE;
}

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
       
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="myprojects">
          <MyProjects />
        </section>
        <section id="animation">
          <Animation />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
