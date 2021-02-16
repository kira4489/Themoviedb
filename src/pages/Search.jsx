import React, { useState } from "react";
import "../css/Search.css"

function Search ({searchMovies}){  //destruturing
  // const {searchMovies} = props
  const [query, setQuery] = useState("");
  
  const onChange = (e) => { //fcuntion 
    setQuery(e.target.value);//guardar valicacion del input
    searchMovies(e.target.value) //se pasa por props y se pasa para guardar la validacion en el input
  };

  return (
    <div className="input-wrapper">
      <input className="input-text"
        type="text"
        placeholder="Search for a movie"
        value={query}
        onChange={onChange} //se ejecuta cuando voy a escirbir en el input es decir en el boton buscar
      />
    </div>
  );
};
export default Search;
