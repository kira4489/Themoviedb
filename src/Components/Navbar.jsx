import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
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
              <Link to="/estrenos" className="nav-item">
                <a className="nav-link" href="#">
                  Estrenos
                </a>
              </Link>
              <Link to="/valorados" className="nav-item">
                <a className="nav-link" href="#">
                  Valorados
                </a>
              </Link>
              <Link to="/populares" className="nav-item">
                <a className="nav-link" href="#">
                  Populares
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
