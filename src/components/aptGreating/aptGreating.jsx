import './aptGreating.css'
import UpDownCar from '../carousel/UpDownCarousel.jsx'
import Title from '../titleComponent/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'

function AptGreating() {
  return (
    <>
    <section className='head-car'>
        <UpDownCar ></UpDownCar>
        <UpDownCar ></UpDownCar>
        <UpDownCar ></UpDownCar>
    </section>
    <Title content={'Hello World'}></Title>
    <Paragraph textAlign={'left'} width={'400px'} margin={'0 0 0 40px'} content={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum similique architecto corrupti tempore maxime dignissimos mollitia eius incidunt vero eaque sint rerum. Voluptates modi libero cum laudantium sunt blanditiis'}></Paragraph>
    
    </>
)
}

export default AptGreating