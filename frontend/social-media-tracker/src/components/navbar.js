import './navbar.css';
import { Link } from "react-router-dom";
import Authentication from '../functions/Authentication';

export default function Navbar() {

  const changeUser = () => {
    var userInfo = Authentication();
    if(userInfo) {
      return userInfo.displayName;
    }
    return null;
  }

  let username = changeUser() || "Login"
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
            <Link to="/login">{username}</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}