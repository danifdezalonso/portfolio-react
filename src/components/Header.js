import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="header__logo">
          <span id="logo">
            <Link to="/">
              &lt;Dani /&gt; <span class="logo__blinking">|</span>
            </Link>
          </span>
        </div>
        <div className="header__navigation">
          <ul className="header__navigation__list">
            <Link to="/about">
              <li id="aboutli">About</li>
            </Link>
            <Link to="/projects">
              <li id="projectli">Projects</li>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:danifdezalonso@gmail.com?subject=I've%20seen%20your%20portfolio%20and..."
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
