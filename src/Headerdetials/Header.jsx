import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">BuffetApp</div>

        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/accountpage">Account</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;