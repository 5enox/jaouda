import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"

function DarBouaaza() {

  const dbAptImg = {
    img1 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.22_0da47aad.jpg',
      alt : 'APPARTEMENT 1'
    },
    img2 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.25_2f1de28e.jpg',
      alt : 'APPARTEMENT 1'
    },
    img3 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-21 at 12.57.10_7ab166bc.jpg',
      alt : 'APPARTEMENT 1'
    },
    img4 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.30.47_82be8639.jpg',
      alt : 'couloir'
    },
    img5 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.43_d89192fd - Copy - Copy.jpg',
      alt : 'escaliers '
    },
    img6 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.24_7e200876.jpg',
      alt : 'ascenseur'
    },
    img7 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4ac95fef.jpg',
      alt : 'ascenseur'
    },
    img8 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.25_479b33ba.jpg',
      alt : 'ascenseur'
    },
    img9 :{
      src : 'src/assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.32_4007d8e5.jpg',
      alt : 'ascenseur'
    },
  }

  const dbBrImg = {
    img1 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.21.00_73554cb1.jpg' ,
      alt : 'DarB BUSINESS LOGO'
    },
    img2 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.28_8ff5dea7.jpg' ,
      alt : 'BUSINESS FACADE'
    },
    img3 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.21_bb24372c.jpg ' ,
      alt : 'BUSINESS FACADE'
    },
    img4 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_25bc686c.jpg ' ,
      alt : 'BUSINESS FACADE'
    },
    img5 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_39710626.jpg ' ,
      alt : 'BUSINESS FACADE'
    },
    img6 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_89cc358f.jpg ' ,
      alt : 'BUSINESS FACADE'
    },
    img7 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_dbf6d8cf.jpg '
    },
    img8 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_d04d6e7b.jpg '
    },
    img9 : {
      src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.25_34a0b310.jpg'
    },
    // img10 : {
    //   src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_ea66f03e.jpg '
    // },
    // img11 : {
    //   src :'src/assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.25_42bd3c6d.jpg '
    // },
  }
    
  const dbEcImg = {
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
        <RegionInfo title={'dar bouaaza'} content={'Dar Bouaaza offers a variety of modern living and business spaces, including apartments, offices, and commercial spaces. Conveniently located near major shopping centers like MC and Mini Carrefour, these properties provide easy access to essential amenities and services. Whether you are looking for a comfortable apartment, a professional office space, or a commercial location to grow your business, Dar Bouaaza offers an ideal setting with prime accessibility.'} />
        <BuildInformations id={'apt'} imgs={dbAptImg} title={'appartement'}  content={'Welcome to our Apartments Section! Here, we provide you with all the essential details about our premium apartments, including available spaces, pricing, and prime locations.'}/>
        <BuildInformations id={'br'} imgs={dbBrImg} title={'offices'} backgroundColor={'purple'}  content={'Welcome to our Offices Section! Here, we provide you with all the essential details about our premium office spaces, featuring modern designs, top-tier amenities, and a prime location in the heart of Dar Bouazza. Prices start at 520,000 DH.'}/>
        <BuildInformations id={'ec'} imgs={dbEcImg} title={'Espace Commercial'} backgroundColor={'yellow'}  content={'Welcome to our Commercial Spaces Section! Explore our top-tier commercial spaces, designed to meet the needs of growing businesses, with modern architecture, excellent facilities, and a prime location in the heart of Dar Bouazza. Available spaces range from 20m², 22m², 25m², 35m², 47m²,to 100m², all with a cellar and mezzanine.'}/>
      <Footer/>
    </div>
  )
}

export default DarBouaaza