import React,{useState}from 'react'
import ReactPlayer from 'react-player'

export default function Modal({ data }) {
  console.log(data)
  const urlYoutube = `https://www.youtube.com/watch?v=${data[0].key}`
    
    return (
        <div style={{position:"absolute"}}>  
        <ReactPlayer
          url={urlYoutube}
          className='react-player'
          playing
          width='100%'
          height='100%'
        /> 
        </div>
    )
}
