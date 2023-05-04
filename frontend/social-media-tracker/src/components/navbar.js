import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Social Media Tracker
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}