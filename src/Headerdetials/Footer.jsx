import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">BuffetApp</h2>
          <p>Delicious food, easy booking, best experience.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/accountpage">Account</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@buffetapp.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BuffetApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;