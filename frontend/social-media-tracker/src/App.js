import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Stats from './pages/Stats.js';

import { createNewUser, readUser } from './functions/Database-Functions';
import Authentication from './functions/Authentication';
import { useEffect } from 'react';

function App() {
  
  let userData = readUser() || false
  let signedIn = Authentication() || false
  console.log(userData, signedIn)
  useEffect(()=>{
    if(!userData && signedIn) {
      createNewUser()
    }
  },[])

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
        </Routes>
      </div>

      <div className="Footer">
        {Footer()}
      </div>
    </div>
  );
}

export default App;
