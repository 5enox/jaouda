import './navbar.scss'
import PropTypes from 'prop-types'
import RoundedBotton from '../botton/RoundedBotton.jsx'
import '../../assets/logos/logo.png'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'
//i have remamber i am still trying to make a products link drop a list when hover it 
//and the default props value here don't work



export default function Navbar({ img }) {
  // Define default props (in case they are not provided)
  Navbar.defaultProps = {
    img: 'src/assets/logos/whitelogo.png'
  };

  // Prop types for validation
  Navbar.propTypes = {
    img: PropTypes.string,
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={img} alt="Jaouda Immobilier Logo" />
        <h1>Jaouda Immobilier</h1>
      </div>
      <ul className='nav-links'>
        <li className='drag-down-part' onMouseOver={()=>{
          const productList = document.getElementsByClassName("product-list")
          productList.classList.ass
        }}>
          <Link><p className='link-word'>
            products
          </p></Link>
        </li>
        <li>{/* add a linkTo prop router link */}
          <RoundedBotton content='contact us' height='40px' width='120px' />
        </li>
      </ul>
      <div className="product-list">
        <div className="product-link">Appartements</div>
        <div className="product-link">Offices</div>
        <div className="product-link">Magasin</div>
      </div>
    </nav>
  )
}

