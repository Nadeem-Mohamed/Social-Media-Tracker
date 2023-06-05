import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Stats from './pages/Stats.js';

import Authentication from './functions/Authentication';
import { getUserDocument, createUserDocument } from './functions/Database-Functions';

function App() {
  
  // START
  const changeUser = () => {
    var userInfo = Authentication();
    if(userInfo) {
      try {
        getUserDocument(userInfo.uid)
        .then((document) => {
          if(document === false) {
            const data = {
              uid: userInfo.uid,
              stats: []
            }
            createUserDocument(userInfo.uid, data)
          } else {
            console.log(document.data())
          }
        })
        .catch((err) => {
          console.log(err);
        })
      } catch (err) {
        console.log(err);
      }
    }
  }

  let userData = changeUser() || false

  // END

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
