import './regionStyle.css'
import MapComponent from '../map/Map.jsx'
import Title from '../titleComponent/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'

function RegionInfo(props) {
    const content = props.content
    const title = props.title
    return (
    <section className='location'>
        <div className="region-text">
            <Title title={title} />
            <Paragraph textAlign={''} padding={'0 0px 20px '} content={content}/>
            <ul className="products-list">
                <li className='apt-child'> <a href="#appartement"> Appartement</a> </li>
                <li className='br-child'> <a href="#office"> Office</a> </li>
                <li className='cm-child'> <a href="#commercial"> Commercial spaces</a> </li>
            </ul>
        </div> 
        <div className="region-map">
        <MapComponent  zoom={14} popupText="Jaouda Location" />
        </div>
    </section >
  )
}

export default RegionInfo