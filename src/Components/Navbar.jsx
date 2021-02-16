import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"

export default function Navbar() {  /*Link es a en react*/
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="!#">
            The movies db
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Link to="/upcoming" className="nav-item"> 
                <span className="nav-link" href="!#">
                  upcoming
                </span>
              </Link>
              <Link to="/toprated" className="nav-item">
                <span className="nav-link" href="!#">
                  top rated
                </span>
              </Link>
              <Link to="/populars" className="nav-item">
                <span className="nav-link" href="!#">
                  populars
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
  );
}
