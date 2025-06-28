import Card from "../card/Card.jsx"
import './Products.css'
import aptImg from '../../assets/pictures/unreal pic/Screenshot 2025-02-27 122901.png'
import officeImg from '../../assets/pictures/unreal pic/Atera Offices - Tel Aviv _ Office Snapshots.jpeg'
import magazinImg from '../../assets/pictures/unreal pic/magazin.jpeg'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";


function Products() {
  return (
    <section className="products">
      <h1 className="products-title">Our Products </h1>
      <p className="product-p">Find the perfect space that fits your needs! Whether you are looking for a luxurious apartment, a modern office, or a prime commercial space, we have top-tier properties designed to offer comfort, functionality, and style. Explore our offerings and take the next step towards your dream property today!</p>
      <div className="product-types">
        <Link to={'/DarBouaaza'}><Card src={aptImg} text={'Appartements'} height={'300px'} width={'350px'} alt={'appartement'} /> </Link>
        <HashLink to={'/DarBouaaza'}><Card src={officeImg} text={'Offices'} height={'300px'} width={'350px'} alt={'office'} /></HashLink>
        <Link to={'/DarBouaaza'}><Card src={magazinImg} text={'Magazin'} height={'300px'} width={'350px'} alt={'magazin'} /></Link>
      </div>
    </section>

  )
}

export default Products
