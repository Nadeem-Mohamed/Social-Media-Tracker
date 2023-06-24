import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Stats from './pages/Stats.js';
import Demo from './pages/Demo.js';

import setNewUser from './functions/User-Function';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    setNewUser()
  }, [])

  return (
    <div className="App">
      <div className="Navbar">
        {Navbar()}
      </div>

      <div className="Body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>

      <div className="Footer">
        {Footer()}
      </div>
    </div>
  );
}

export default App;
