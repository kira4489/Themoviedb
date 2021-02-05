import React from "react";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Modal from "../Components/Modal";
import Search from "./Search";
import {fetchAPI} from "../api/index"

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [data, setResults] = React.useState([]);
  const [dataVideo, setDataVideo] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const url = "movie/popular?page=${page}";
    const data = await fetchAPI(url);
    setResults(data.results);
  };

  const searchMovies = async (query) => {
    if (query === "") {
      return obtenerDatos();
    }

    const urlSearch = `search/movie?language=en-US&query=${query}&page=${page}`;
    const data = await fetchAPI(urlSearch);
    setResults(data.results);
  };

  const next = () => {
    setPage((prevState) => prevState + 1);
    obtenerDatos();
  };

  const prev = () => {
    if (page <= 1) {
      return;
    }

    setPage((prevState) => prevState - 1);
    obtenerDatos();
  };

  const openModal = (id) => {
    setIsModalOpen(true);
    obtenerVideo(id);
  };

  const obtenerVideo = async (id) => {
    const urlVideo = `movie/${id}/videos?language=en-US`;
    const data = await fetchAPI(urlVideo);
    setDataVideo(data.results);
  };

  //cambiando el estado con setismodal

  return (
    <>
      <Navbar />
      {isModalOpen && dataVideo.length > 0 && <Modal data={dataVideo} />}
      <Search searchMovies={searchMovies} />
      {data && (
        <Main data={data} prev={prev} next={next} openModal={openModal} />
      )}
    </>
  );
}
