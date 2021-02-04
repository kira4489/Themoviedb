import React, { useState } from "react";
import ResultCard from "../Components/ResultCard";

function Search (){
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ae97605229cea5a5f8ab7cc59dd73bc1&language=en-US&page=&query=${e.target}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results)
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="input-wrapper">
      <input
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
