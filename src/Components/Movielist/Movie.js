import React from 'react'
import data from "../../Services/api"
import Card from '../MovieCard/Card'

const Movie = ({movie}) => {
    
  return (
    <div>
      {
        movie.map((item)=> {
            return(
                <div key={item.id}>
                   <Card   movie={item}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Movie
