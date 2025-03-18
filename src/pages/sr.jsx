import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"

function SidiRahal() {

  const srAptImg = {
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
      alt : 'APPARTEMENT 1'
    },
    img4 :{
      src : 'src/assets/pictures/real pic/srp/WhatsApp Image 2025-02-27 at 21.54.20_17b9aa14.jpg',
      alt : 'couloir'
    },
    img5 :{
      src : 'src/assets/pictures/real pic/srp/h3appartemet.jpg',
      alt : 'escaliers '
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
    
  const srEcImg = {
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
        <RegionInfo title ={'sidi rahal chatii'} content={'Sidi Rahal Chatti offers a variety of commercial spaces and apartments. Located just 5 minutes from the beach, it provides easy access to the coastline for relaxation and leisure. This area is perfect for those seeking a place close to the beach, offering great potential for business or personal use. With its prime location near the sea, Sidi Rahal Chatti provides a peaceful yet accessible environment.'} />
        <BuildInformations imgs={srAptImg} title={'appartement'}  content={'Welcome to our Apartments Section in Sidi Rahal Chatia! Here, we provide you with all the essential details about our premium apartments, featuring modern designs, prime locations just 5 minutes from the beach, and a comfortable living environment. Available spaces range from 50m², 62m², 74m², 78m², 80m², to 90m², with prices starting at 370,000 DH.'}/>
        <BuildInformations imgs={srEcImg} title={'Espace Commercial'} backgroundColor={'yellow'}  content={'Welcome to our Commercial Spaces Section in Sidi Rahal! Discover our premium commercial spaces, designed for growing businesses, featuring modern architecture, excellent facilities, and a strategic location in the heart of Sidi Rahal, just minutes from the beach.'}/>
      <Footer/>
    </div>
  )
}

export default SidiRahal