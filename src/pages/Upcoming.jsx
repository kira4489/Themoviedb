import React from 'react'
import Main from "../Components/Main"
import Navbar from '../Components/Navbar'
import Search from './Search'
import Modal from "../Components/Modal"


export default function Upcoming() {
  const [page, setPage] = React.useState(1)
  const [data, setResults] = React.useState([]);
  const [dataVideo, setMovie] = React.useState(undefined)
  
  const openModal = (id) => {
    setIsModalOpen(true)
    console.log(id)
    getMovie(id)
  }
  
const getMovie= async (id) => {
    const api_key = 'ae97605229cea5a5f8ab7cc59dd73bc1'
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`);
    const data = await response.json();
    setMovie(data.results);
}

 const [isModalOpen, setIsModalOpen] = React.useState(false)//cambiando el estado con setismodal


  React.useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const api_key = 'ae97605229cea5a5f8ab7cc59dd73bc1'
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${page}`);
    const users = await data.json();
    setResults(users.results);
  };

  function searchMovies(query) {
    if(query === '') {
      return getMovies()
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ae97605229cea5a5f8ab7cc59dd73bc1&language=en-US&page=&query=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          setResults(data.results);
          console.log(data.results)
        } else {
          setResults([]);
        }
      });
  }

  const next = () => {
    setPage(prevState => prevState + 1)
    getMovies()
  }

  const prev = () =>{
    if(page <= 1) {
      return 
    }

    setPage(prevState => prevState - 1)
    getMovies()
  }

    return (
        <>
          <Navbar/>
          <Search searchMovies={searchMovies} />
          {isModalOpen && dataVideo && <Modal data={dataVideo} />}
          {data && <Main data={data} prev={prev} next={next} openModal={openModal} />}
        </>
    )
}
