import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/branding/logo.png';

export default function Navbar() {
  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="logo">
          <span className="logo-mark"><img src={logo} alt="Banaras Hospital logo" /></span>
          <span className="logo-text">Banaras <span>Hospital</span></span>
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>About Us</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)}>Gallery</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>Services</NavLink></li>
          <li><NavLink to="/departments" className={({ isActive }) => (isActive ? 'active' : undefined)}>Departments</NavLink></li>
          <li><NavLink to="/doctors" className={({ isActive }) => (isActive ? 'active' : undefined)}>Doctors</NavLink></li>
          <li><NavLink to="/location" className={({ isActive }) => (isActive ? 'active' : undefined)}>Location</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>Contact</NavLink></li>
        </ul>
        <Link to="/contact" className="nav-cta"><i className="fas fa-calendar-check"></i> Book Visit</Link>
        <button className="menu-toggle" aria-label="Toggle menu"><i className="fas fa-bars"></i></button>
      </div>
    </header>
  );
}
