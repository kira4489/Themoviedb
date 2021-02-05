
import "../css/Pagination.css"

function Pagination({ next, prev }) {
  return (
      <nav aria-label="Page">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link page-width"
              onClick={() => prev()}
              aria-label="Previous"
            >
              <span aria-hidden="true">Prev</span>
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link page-width"
              onClick={() => next()}
              aria-label="Next"
            >
              <span aria-hidden="true">Next</span>
            </button>
          </li>
        </ul>
      </nav>
  );
}

export default Pagination;
