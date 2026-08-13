import React, { useState } from 'react'

const Searchbar = ({searchQuery , setSearchQuery,submitHandler}) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
        type='text'
        placeholder='Moviee Name'
        name="Movie_Search"
        onChange={(e)=>setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <button >Search</button>
      </form>
    
    </div>
  )
}

export default Searchbar
