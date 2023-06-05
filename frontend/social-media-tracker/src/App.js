import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Stats from './pages/Stats.js';

import Authentication from './functions/Authentication';
import {auth, app, db} from './firebase-config'
import { collection, doc, query, setDoc, where, getDoc } from 'firebase/firestore';

function App() {
  
  // START
  const changeUser = () => {
    var userInfo = Authentication();
    // console.log(userInfo.uid)  
    if(userInfo) {
      const users = collection(db, "test")
      try {
        var q = 0;
        const test = async() => {
          q = await getDoc(doc(db, `/test/${userInfo.uid}`))
          return q
        }

        // const w = setDoc(doc(db, `/test/${userInfo.uid}`), {
        //   useruid: userInfo.uid,
        //   calendarEvents: []
        // })
        test().then(() => {
          console.log(q.exists);
        //   if(q == undefined || q == null) {
        //   }
          
        //   test().then(() => {
        //     console.log(q);
        //   });
        });
        
      } catch (err) {
        console.log(err)
      }
    }
  }

  let username = changeUser() || false

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
