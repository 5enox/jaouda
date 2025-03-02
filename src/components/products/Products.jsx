import Card from "../card/Card.jsx"
import './products.css'
import aptImg from '../../assets/pictures/unreal pic/Screenshot 2025-02-27 122901.png'
import officeImg from '../../assets/pictures/unreal pic/Atera Offices - Tel Aviv _ Office Snapshots.jpeg'
import magazinImg from '../../assets/pictures/unreal pic/magazin.jpeg'

function Products() {
  return (
    <section className="products">
      <h1 className="products-title">Our Products </h1>
      <div className="product-types">
        <Card src={aptImg} text={'Appartements'} height={'300px'} width={'350px'} alt={'appartement'} />
        <Card src={officeImg} text={'Offices'} height={'300px'} width={'350px'} alt={'office'} />
        <Card src={magazinImg} text={'Magazin'} height={'300px'} width={'350px'} alt={'magazin'} />
      </div>
    </section>

  )
}

export default Products