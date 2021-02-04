import React from 'react'


export default function ResultCard({item}) {
    return (
        <div>
             {item.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={`${item.title} Poster`}
                />
              ) : (
                <div className="filler-poster" />
              )}   
        </div>
    )
}
