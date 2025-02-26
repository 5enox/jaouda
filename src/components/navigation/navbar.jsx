import React from 'react'
import './navbar.css'
import '../../assets/logos/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let img = props.img
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\logos\whitelogo.png" alt="Jaouda Immobilier Logo" />
        <h1>Jaouda Immobilier</h1>
      </div>
      <div className="contact-btn"><Link to="/" ><p>Contact Us</p></Link></div>
      
    </nav>
  )
}
