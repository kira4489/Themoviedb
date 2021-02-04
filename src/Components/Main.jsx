import React from 'react'
import { useHistory } from "react-router-dom"

export default function Main(){
const history = useHistory()

const [data, setResults] = React.useState([])
    React.useEffect(() =>{
      console.log("useeffect")
      obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data = await fetch ("https://api.themoviedb.org/3/movie/popular?api_key=ae97605229cea5a5f8ab7cc59dd73bc1")
        const users = await data.json()
        setResults(users.results)
        console.log(users.results)
    }
    return (
        <div>
            {
             data.length > 0 && data.map((item => {
            return  <li key={item.id} onClick={()=>history.push(`/card/${item.id}`)}>{item.original_title}</li>
        }))
            }
        </div>
    )
}