import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const activeStyle = { color: "#FFFF00" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div className="container">
          <NavLink to="#" className="navbar-brand">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png"
              width="45"
              alt=""
              className="d-inline-block align-middle mr-2"
            />

            <span className="text-uppercase font-weight-bold">Company</span>
          </NavLink>

          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeStyle={activeStyle}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeStyle={activeStyle}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  activeStyle={activeStyle}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeStyle={activeStyle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
