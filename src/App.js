import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutMe';
import { Error } from './components/error';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
