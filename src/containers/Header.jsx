import React from "react";
import logo from "../images/logo (1).jpg";

function Header() {
  return (
    <nav className="container navbar navbar-expand-lg bg-dark fixed-top text-light">
      <div className="container">
        <a className="navbar-brand" href="./home">
          .
        </a>
        <img src={logo} alt="" width="70" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="./home">
                Home
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" href="./about">
                About
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" href="./contact">
                Contact
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" href="./login">
                Login
              </a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" href="./Webappi3">
                Webappi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
