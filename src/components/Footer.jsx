import { Link } from 'react-router-dom';
import logo from '../assets/images/branding/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-about">
          <Link to="/" className="logo">
            <span className="logo-mark"><img src={logo} alt="Banaras Hospital logo" /></span>
            <span className="logo-text">Banaras <span>Hospital</span></span>
          </Link>
          <p>Leading the way in medical excellence and compassionate care.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/banaras.hospital.9/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">24/7 Emergency Care</Link></li>
            <li><Link to="/services">Advanced ICU</Link></li>
            <li><Link to="/services">Surgery</Link></li>
            <li><Link to="/services">Cardiology</Link></li>
            <li><Link to="/services">Orthopedics</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Connect With Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/banaras.hospital.9/">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; 2024 Banaras Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
