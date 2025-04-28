import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Error } from './components/error';
import { Header } from './components/header';
 

import { MyProjects } from './components/myProjects';


function App() {
  return (
    <div className="App">
     
      <Header/>
      <main className='main-content' style={{backgroundColor:'palegoldenrod'}}>
      <Router>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myprojects' element={<MyProjects/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/*' element={<Error/>}/>
          
         
        </Routes>
      </Router>
      
      </main>
      
      
    </div>
  );
}

export default App;
