import React from "react";
import Home from "./home";
import Contact from "./contact";
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/header-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link to="#" className="navbar-brand">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1557368579/logo_iqjuay.png"
                width="45"
                alt=""
                className="d-inline-block align-middle mr-2"
              />

              <span className="text-uppercase font-weight-bold">Company</span>
            </Link>

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

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default Header;
