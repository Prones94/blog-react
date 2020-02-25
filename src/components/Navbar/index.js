import React from 'react'
import './style.css'

const Navbar = props => {
  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div>
        <input />
      </div>
    </div>
  )
}

export default Navbar