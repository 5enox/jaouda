import Card from "../card/Card.jsx"
import './Products.css'
import aptImg from '../../assets/pictures/unreal pic/Screenshot 2025-02-27 122901.png'
import officeImg from '../../assets/pictures/unreal pic/Atera Offices - Tel Aviv _ Office Snapshots.jpeg'
import magazinImg from '../../assets/pictures/unreal pic/magazin.jpeg'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next"


function Products() {
  const {t} = useTranslation()
  return (
    <section className="products">
      <h1 className="products-title">{t("products.title")}</h1>
      <p className="product-p">{t("products.description")}</p>
      <div className="product-types">
        <Link to={'/DarBouaaza'}><Card src={aptImg} text={t('products.apt')} height={'300px'} width={'350px'} alt={'appartement'} /> </Link>
        <HashLink to={'/DarBouaaza'}><Card src={officeImg} text={t('products.office')} height={'300px'} width={'350px'} alt={'office'} /></HashLink>
        <Link to={'/DarBouaaza'}><Card src={magazinImg} text={t("products.ce")} height={'300px'} width={'350px'} alt={'magazin'} /></Link>
      </div>
    </section>

  ) 
}

export default Products
