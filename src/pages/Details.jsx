import React from 'react'
import {
    useParams
  } from "react-router-dom";

export default function Details() {
const [detail,setDetail] = React.useState({})
let {id} = useParams();
console.log(id)
    React.useEffect(() =>{
      console.log("useeffect")
      obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const api_key = 'ae97605229cea5a5f8ab7cc59dd73bc1'
        const data = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        const users = await data.json()
        setDetail(users)
        console.log(users)
    }
    return (
        <>
           <h1>{detail.title}</h1>
           <img src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`}/>
           <h2>{detail.release_date}</h2>
           <p>{detail.tagline}</p>
           <p>{detail.overview}</p>   
           <p>{detail.video}</p> 
      </>
    )
}