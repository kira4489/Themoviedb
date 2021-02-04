import React from 'react'

function Pagination() {
    return (
        <>
        <nav aria-label="Page">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">Prev</span>
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
    )
}

export default Pagination