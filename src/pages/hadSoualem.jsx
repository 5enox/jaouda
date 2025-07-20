// import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"
import Grady from '../components/gradySection/Grady.jsx'
//import imgs
import hsApt1 from '../assets/pictures/real pic/srp/WhatsApp Image 2025-02-21 at 12.57.10_8094eb5b.jpg';
import hsApt2 from '../assets/pictures/real pic/srp/WhatsApp Image 2025-02-21 at 12.57.10_d8ee20af.jpg';
import hsApt3 from '../assets/pictures/real pic/srp/WhatsApp Image 2025-02-22 at 21.30.25_69f1e690.jpg';
import hsApt4 from '../assets/pictures/real pic/srp/WhatsApp Image 2025-02-27 at 21.54.20_17b9aa14.jpg';
import hsApt5 from '../assets/pictures/real pic/HDAPT.jpg';
import hsApt6 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4e619317.jpg';
import hsApt7 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_a71dde3e.jpg';

import { useTranslation } from 'react-i18next'

function HadSoualem() {
  const {t} = useTranslation()

  const hsAptImg = {
    img1: {
      src: hsApt1,
      alt: 'APPARTEMENT 1'
    },
    img2: {
      src: hsApt2,
      alt: 'APPARTEMENT 1'
    },
    img3: {
      src: hsApt3,
      alt: 'escaliers'
    },
    img4: {
      src: hsApt4,
      alt: 'appartement 2'
    },
    img5: {
      src: hsApt5,
      alt: 'appartement 2'
    },
    img6: {
      src: hsApt6,
      alt: 'ascenseur'
    },
    img7: {
      src: hsApt7,
      alt: 'ascenseur'
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
        <Grady bg = {"src/assets/gd/6ff9ea44-5916-4c17-8485-08054da30b8e.jpeg"} />
        <RegionInfo 
        title ={t('hadSoualem.regionInfo.title')} 
        content={t('hadSoualem.regionInfo.content')} />
        <BuildInformations 
        imgs={hsAptImg} 
        title={t('hadSoualem.apartments.title')}  
        content={t('hadSoualem.apartments.content')}/>
        <BuildInformations 
        imgs={hsEcImg} 
        title={t('hadSoualem.commercialSpaces.title')} 
        backgroundColor={'yellow'}  
        content={t('hadSoualem.commercialSpaces.content')}/>
      <Footer/>
    </div>
  )
}

export default HadSoualem