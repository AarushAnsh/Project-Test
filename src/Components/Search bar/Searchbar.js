import React, { useState } from 'react'

const Searchbar = () => {
    const[movie,setMovie]=useState()
  return (
    <div>
      <input
        type='text'
        placeholder='Moviee Name'
        name="Movie_Search"
        value={movie}
      />
    </div>
  )
}

export default Searchbar
