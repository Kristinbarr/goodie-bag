import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/candies'>Candies</Link>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
