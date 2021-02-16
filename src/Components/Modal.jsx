import React,{useState}from 'react'
import "../css/Modal.css"
import ReactPlayer from 'react-player'
import {Button} from "react-bootstrap"

export default function Modal({ data, closeModal}) {
  
  console.log(data)
  const urlYoutube = `https://www.youtube.com/watch?v=${data[0].key}` //url de youtube del props mas la key(video) de la api
    
    return (
        <div className="video"> 
        <ReactPlayer
          url={urlYoutube}
          className='react-player'
          playing
          width='100%'
          height='100%'
        /> 
        <Button variant="secondary" onClick={closeModal}>
            Close
        </Button>
        </div>
        
    )
}
