import React, { useState } from 'react'

const Searchbar = ({searchQuery , setSearchQuery}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Moviee Name'
        name="Movie_Search"
        onChange={(e)=>setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  )
}

export default Searchbar
