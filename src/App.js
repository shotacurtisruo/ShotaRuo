import './App.css';

import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Header } from './components/header';
 

import { MyProjects } from './components/myProjects';


function App() {
  return (
    <div className="App">
     
      <Header/>
      <main className='main-content' >
        <section id="home">
          <Home />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="myprojects">
          <MyProjects />
        </section>
      

      </main>
      
      
    </div>
  );
}

export default App;
