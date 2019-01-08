import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header>
    <div className="header-child">
      <Link to="/" className="home-link">
        <h1 className="home-h1">Patrick Kearney</h1>
      </Link>
      <Link to="/about" className="home-link">
        <h5>Scientist, Entrepreneur, Web-Developer</h5>
      </Link>
    </div>
    <ul className="header-child">
      <li className="header-li">
        <Link to="/about" className="hvr-grow active">
          About
        </Link>
      </li>
      <li className="header-li">
        <Link to="/portfolio" className="hvr-grow">
          Portfolio
        </Link>
      </li>
      <li className="header-li">
        <Link to="/blog" className="hvr-grow">
          Blog
        </Link>
      </li>
      <li className="header-li">
        <Link to="/contact" className="hvr-grow">
          Contact
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
