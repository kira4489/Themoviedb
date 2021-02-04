import React from 'react'
import {
    useParams
  } from "react-router-dom";

export default function Cards() {
const [movie,setMovie] = React.useState({})
let {id} = useParams();
console.log(id)
    React.useEffect(() =>{
      console.log("useeffect")
      obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        
        const data = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=ae97605229cea5a5f8ab7cc59dd73bc1`)
        const users = await data.json()
        setMovie(users)
        console.log(users)
    }
    return (
        <>
           <h1>{movie.title}</h1>
           <img src={movie.backdrop_path}/>
        </>
    )
}