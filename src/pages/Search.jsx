import React, { useState } from "react";
import ResultCard from "../Components/ResultCard";
import "../css/Search.css"

function Search ({ searchMovies }){
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const onChange = (e) => {
    setQuery(e.target.value);
    searchMovies(e.target.value)
  };

  return (
    <div className="input-wrapper">
      <input className="input-text"
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={onChange}
      />

      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Search;
