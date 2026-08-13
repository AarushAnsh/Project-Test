import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='nav'>
      
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/savedMovie'>Saved Movie</Link>
      
    </div>
  )
}

export default Navbar
