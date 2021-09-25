import React from "react";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Search from "./Search";
import Modal from "../Components/Modal";

export default function Home() {
  const [page, setPage] = React.useState(1); //pagination
  const [data, setResults] = React.useState([]); //guarda para los datos de la api
  const [dataVideo, setMovie] = React.useState(undefined); //guargar datos del video
  const [isModalOpen, setIsModalOpen] = React.useState(false); //cambiando el estado con setismodal
  
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = (id) => {
    //parametro se puede cambiar
    setIsModalOpen(true); //cambiando el estado si es verdadero
    getMovie(id); //ejecutando function
  };

  const getMovie = async (id) => {
    //inicializando function getmovie
    const api_key = "ae97605229cea5a5f8ab7cc59dd73bc1";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
    );
    const data = await response.json();
    console.log(data);
    setMovie(data.results); //results objeto de la api results
  };

  React.useEffect(() => {
    getMovies(); //llamado de la function
  }, []);

  const getMovies = async () => {
    //creacion de la function
    const api_key = "ae97605229cea5a5f8ab7cc59dd73bc1";
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page}`
    );
    const users = await data.json();
    setResults(users.results);
  };

  function searchMovies(query) {
    //parametro se crea function no es un hook
    if (query === "") {
      //si esta vacio ejecuta y no lo toma en cuenta
      return getMovies(); //me trae la api de populares
    }
    //apikey const
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ae97605229cea5a5f8ab7cc59dd73bc1&language=en-US&page=&query=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          //si no hay errores en la data !!!!
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  const next = () => {
    setPage( page+1 )  //page + 1 sumando1 tiene que estar pegado al nombre de la funcion
    // (function (prevState) {
    //   return prevState + 1;
    //prevState valor actual de page
    getMovies();
  };

  const prev = () => { 
    if (page <= 1) { //menor <
      return;//se sale de la function
    }

    setPage((prevState) => prevState - 1);//resta 1 anterior pagina
    getMovies();
  };

  return (
    <>
      <Navbar />
      <Search searchMovies={searchMovies} />{/*se envia las props*/}
      {isModalOpen && dataVideo && <Modal data={dataVideo} closeModal={closeModal}/>}{/*si quiero abrir el modal*/}
      {data && ( //esto es otra validacion para pasar a otro componenten se envia las props
        <Main data={data} prev={prev} next={next} openModal={openModal} />
      )}
    </>
  );
}
