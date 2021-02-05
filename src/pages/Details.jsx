import React from 'react'
import {useParams,withRouter} from "react-router-dom";
import "../css/Detail.css"

function Details(props) {
const {history} = props
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
        <div className="container-details">
          <div className="cards">
           <h1 className="cards__title">{detail.title}</h1>
           <img className="cards__img" src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`}/>
           <h2 className="cards__name">{detail.release_date}</h2>
           <strong className="cards__strong">{detail.tagline}</strong>
           <p className="cards__pill">{detail.overview}</p>   
        </div>
        <div className="button">
        <button onClick={()=>history.goBack()}>Atras</button>
        </div>
      </div>
    )
}

export default withRouter(Details)