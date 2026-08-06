import React from 'react'
import "./Card.css"
const Card = ({movie}) => {
  return (
    <div className='card'>
      <img src={movie.image.medium} alt={movie.name} />
      <h3>{movie.name}</h3>
      <p>{movie.genres[0]}</p>
      <h3>{movie.rating.average}</h3>

    </div>
  )
}

export default Card
