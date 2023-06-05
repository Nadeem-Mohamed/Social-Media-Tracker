import './navbar.css';
import { Link } from "react-router-dom";
import Authentication from '../functions/Authentication';
import { logoutTwitter } from '../functions/Login-Function';

export default function Navbar() {

  const changeUser = () => {
    var userInfo = Authentication();
    if(userInfo) {
      return userInfo.displayName;
    }
    return null;
  }

  let username = changeUser() || false

  const showDropdown = () => {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show');
        }
      }
    }
  } 

  if(username) {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Social Media Tracker
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={showDropdown} className="dropbtn">{username}</button>
            <div class="dropdown-content">
              <Link to="stats">Dashboard</Link>
              <Link to="#">Link 2</Link>
              <Link onClick={logoutTwitter}>Log Out</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
  } else {
    return (
      <nav className="navigation">
      <a href="/" className="brand-name">
        Social Media Tracker
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}