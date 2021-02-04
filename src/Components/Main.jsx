import React from "react";
import { useHistory } from "react-router-dom";
import ResultCard from "./ResultCard";
import Navbar from "./Navbar";

export default function Main() {
  const history = useHistory();

  const [data, setResults] = React.useState([]);
  React.useEffect(() => {
    console.log("useeffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ae97605229cea5a5f8ab7cc59dd73bc1"
    );
    const users = await data.json();
    setResults(users.results);
    console.log(users.results);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">The movies db</h1>
        <div className="row text-center">
        {data.length > 0 &&
              data.map((item) => (
                <div className="col-4 col-md-3 mb-4 d-flex">
                  <div className="card">
                    <img class="card-img-top" src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}/>
                    <div className="card-body">
                      <h4 className="card-title">{item.original_title}</h4>
                    </div>
                    <button id="boton" className="btn btn-success" onClick={() => history.push(`/detail/${item.id}`)}>
                      Informacion
                    </button>
                  </div>
                </div>
           ))}
      </div>
      </div>
    </div>
  );
}
