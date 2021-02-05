import React,{useState}from 'react'
import "../css/Modal.css"
import ReactPlayer from 'react-player'

export default function Modal({ data }) {
  
  console.log(data)
  const urlYoutube = `https://www.youtube.com/watch?v=${data[0].key}`
    
    return (
        <div className="video"> 
        <ReactPlayer
          url={urlYoutube}
          className='react-player'
          playing
          width='100%'
          height='100%'
        /> 
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
    )
}
