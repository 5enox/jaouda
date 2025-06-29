import './regionStyle.css'
import MapComponent from '../map/Map.jsx'
import Title from '../titleComponent/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'
import { useTranslation } from 'react-i18next'

function RegionInfo(props) {
    const content = props.content
    const title = props.title
    const {t} = useTranslation()
    return (
    <section className='location'>
        <div className="region-text">
            <Title title={title} />
            <Paragraph textAlign={''} padding={'0 0px 20px '} content={content}/>
            <ul className="products-list">
                <li className='apt-child'> <a href="#appartement"> {t("productsList.apartment")}</a> </li>
                <li className='br-child'> <a href="#office"> {t("productsList.office")}</a> </li>
                <li className='cm-child'> <a href="#commercial"> {t("productsList.commercialSpaces")}</a> </li>
            </ul>
        </div> 
        <div className="region-map">
        <MapComponent  zoom={14} popupText="Jaouda Location" />
        </div>
    </section >
  )
}

export default RegionInfo