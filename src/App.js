import './App.css';

import { Home } from './components/home';
import { Experience } from './components/experience';
import { Header } from './components/header';
import { MyProjects } from './components/myProjects';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
     
      <Header/>
      <main className='main-content' >
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="myprojects">
          <MyProjects />
        </section>
      

      </main>
      <Footer />
      
      
    </div>
  );
}

export default App;
