import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"

function HadSoualem() {

  const hsAptImg = {
    img1 :{
      src : 'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-21 at 12.57.10_8094eb5b.jpg',
      alt : 'APPARTEMENT 1'
    },
    img2 :{
      src : 'src/assets/pictures/real pic/srp/src/WhatsApp Image 2025-02-21 at 12.57.10_d8ee20af.jpg',
      alt : 'APPARTEMENT 1'
    },
    img3 :{
      src : 'src/assets/pictures/real pic/srp/src/WhatsApp Image 2025-02-22 at 21.30.25_69f1e690.jpg',
      alt : 'escaliers'
    },
    img4 :{
      src : 'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-27 at 21.54.20_17b9aa14.jpg',
      alt : 'appartement 2'
    },
    img5 :{
      src : 'src/assets/pictures/real pic/srp/h3appartemet.jpg',
      alt : 'appartement 2 '
    },
    img6 :{
      src : 'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-14 at 23.19.26_4e619317.jpg',
      alt : 'ascenseur'
    },
    img7 :{
      src : 'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-14 at 23.19.26_a71dde3e.jpg',
      alt : 'ascenseur'
    }
  }
    
  const hsEcImg = {
    img1 :{
      src : "src/assets/pictures/real pic/magazin/1qazaq2wsx.jpeg" ,
      alt : '𝗗𝗲𝘀𝗶𝗴𝗻𝗲𝗱 𝗯𝘆 𝗜𝗱𝗼𝘁 Bakery Facade Interior Concept Design 🥖'
    },
    img2 :{
      src : "src/assets/pictures/real pic/magazin/1234543.jpeg" ,
      alt : ''
    },
    img3 :{
      src : "src/assets/pictures/real pic/magazin/8c680dbc-73dc-4d2e-985d-34c3ec508e7a.jpeg" ,
      alt : ''
    },
    img4 :{
      src : "src/assets/pictures/real pic/magazin/8f001ac9-4f7a-477e-b856-0be90ed98a7a.jpeg" ,
      alt : ''
    },
    img5 :{
      src : "src/assets/pictures/real pic/magazin/bba95227-720e-4d91-b66e-3a8da2b709de.jpeg" ,
      alt : ''
    },
    img6 :{
      src : "src/assets/pictures/real pic/magazin/Maison Standards, Paris July 2019.jpeg" ,
      alt : ''
    }
  }


  return (
    <div>
      <Navbar/>
        <AptGreating></AptGreating>
        <RegionInfo title ={'had soualem'} content={'Jaouda offers a range of apartments and commercial spaces in Had Soualem, a strategic location near Casablanca. This area provides excellent access to the city while offering a quieter, more relaxed environment. Whether you are looking for a space to live or set up a business, Jaouda in Had Soualem presents great opportunities, with easy connectivity to Casablanca and the surrounding areas.'} />
        <BuildInformations imgs={hsAptImg} title={'appartement'}  content={'Welcome to our Apartments Section in Had Soualem! Discover well-designed 72m² apartments, offering a perfect blend of comfort and modern living. Each apartment includes two bedrooms, a Moroccan-style living room, a European-style lounge, a kitchen, and a bathroom. Ideally located in Had Soualem, these spaces provide both convenience and a high-quality environment.'}/>
        <BuildInformations imgs={hsEcImg} title={'Espace Commercial'} backgroundColor={'yellow'}  content={'Welcome to our Commercial Spaces Section in Had Soualem! Explore our top-tier commercial spaces, designed to meet the needs of expanding businesses. With modern architecture, outstanding facilities, and a prime location in the heart of Had Soualem, these spaces are perfectly positioned for success.'}/>
      <Footer/>
    </div>
  )
}

export default HadSoualem