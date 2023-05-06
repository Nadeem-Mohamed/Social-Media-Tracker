import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
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
    
  );
}