import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";

function App() {
  
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
        </Routes>
      </div>

      <div className="Footer">
        {Footer()}
      </div>
    </div>
  );
}

export default App;
