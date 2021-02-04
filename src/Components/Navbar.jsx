import React from 'react'
import Search from '../pages/Search'

export default function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a style={{color:"#0d253f"}} className="navbar-brand" href="#">
              Themoviesdb
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
            <Search/>
            </div>
          </div>
        </nav>
      </>
    )
}
