import './aptGreating.css'
import UpDownCar from '../carousel/UpDownCarousel.jsx'


function AptGreating() {
  const images_part1 = [
    'src/assets/pictures/real pic/w3appartement.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.29_c6e81e12.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.22_0da47aad.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.24_7e200876.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4e619317.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_a71dde3e.jpg',
  ]
  const images_part2 = [
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.25_479b33ba.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4ac95fef.jpg ',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.30_6c07887c.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.30_36ef5313.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.34_c3e001d9.jpg',
    'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.32_ff96656c.jpg',
  ]
  const images_part3 = [
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-13 at 15.30.42_e13d67e6.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-13 at 15.30.36_dd580d92.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-13 at 15.36.28_7d6828c3.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-21 at 12.57.10_8094eb5b.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-21 at 12.57.10_d8ee20af.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-27 at 21.54.20_17b9aa14.jpg',
    'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-22 at 21.30.25_69f1e690.jpg',
  ]
  return (
    <>
      <section className='head-car'>
        <UpDownCar images1={images_part1} images2={images_part2}></UpDownCar>
        <UpDownCar images1={images_part2} images2={images_part3}></UpDownCar>
        <UpDownCar images1={images_part3} images2={images_part1}></UpDownCar>
      </section>
    </>
  )
}

export default AptGreating