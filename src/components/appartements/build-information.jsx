import './build-information.css'
import Title from '../titleComponent/title'
import Paragraph from '../paragraph/paragraph'

function BuildInformations({ title, content, imgs, backgroundColor }) {

    const colorClassMap = {
        orange: "orange",
        purple: "purple",
        yellow: "yellow",
      };

    return (

        <section className='each-product-info'>
            <div className={`${colorClassMap[backgroundColor] || "orange"} text-div`}>
                <Title title={title} />
                <Paragraph content={content}  />

                <ul className='tags'>
                    <li className='tag'><img src="src\assets\svg\bedroom.svg" alt="" /><p>2 Bedrooms</p></li>
                    <li className='tag'><img src="src\assets\svg\livingroom.svg" alt="" /><p>Moroccan Livingroom</p></li>
                    <li className='tag'><img src="src\assets\svg\dining.svg" alt="" /><p>Kitchen</p></li>
                    <li className='tag'><img src="src\assets\svg\bathroom.svg" alt="" /><p>Bathroom</p></li>
                </ul>
            </div>
            
            <div className="apt-imgs">
                
                    {Object.entries(imgs).map(([key, value], index) => (
                        <div><img key={index} src={value.src} alt={value.alt} /></div> 
                    ))}
            
            </div>
        </section>

    )
}

export default BuildInformations