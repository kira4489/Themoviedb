import React from "react";
import { useHistory } from "react-router-dom";
import "../css/Main.css"
import Pagination from "./Pagination";

export default function Main({ data, next, prev, openModal}) {
  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="row text-center">
          {data.length > 0 &&
            data.map((item) => (
              <div className="col-4 col-md-3 mb-5 d-flex">
                <div className="card">
                  <img
                    onClick={() => openModal(item.id)}
                    class="card-img-top"
                    src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.original_title}</h4>
                    <strong>{item.vote_average}</strong>
                  </div>
                  <button
                    id="boton"
                    className="btn btn-success"
                    onClick={() => history.push(`/detail/${item.id}`)}
                  >
                    Information
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Pagination next={next} prev={prev}/>
    </>
  );
}
