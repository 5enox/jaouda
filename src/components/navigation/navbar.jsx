import './navbar.css'
import RoundedBotton from '../botton/RoundedBotton.jsx'
import '../../assets/logos/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar({img="src/assets/logos/whitelogo.png"}) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Jaouda Immobilier Logo" />
        <h1>Jaouda Immobilier</h1>
      </div>
      {/* add a linkTo prop router link */}
      <RoundedBotton content='contact us' height='40px' width='120px'/>
      
    </nav>
  )
}
