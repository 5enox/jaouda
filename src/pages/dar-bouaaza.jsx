import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"
import Grady from '../components/gradySection/Grady.jsx'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function DarBouaaza() {
  const {t} = useTranslation()

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


  //the script to scroll down into a id section
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // Small delay to allow React to render before scrolling
    }
  }, [location]);




  return (
    <div>
      <Navbar/>
        <Grady bg={"src/assets/gd/bggreenline.jpeg"}/>
        <RegionInfo title={t("darBouaaza.regionInfo.title")} content={t('darBouaaza.regionInfo.content')} />
        <BuildInformations  imgs={dbAptImg} title={t('darBouaaza.apartments.title')}  content={t('darBouaaza.apartments.content')}/>
        <BuildInformations  imgs={dbBrImg} title={t('darBouaaza.offices.title')} backgroundColor={'purple'}  content={t('darBouaaza.offices.content')}/>
        <BuildInformations id='br'  imgs={dbEcImg} title={t('darBouaaza.commercialSpaces.title')} backgroundColor={'yellow'}  content={t('darBouaaza.commercialSpaces.content')}/>
      <Footer/>
    </div>
  )
}

export default DarBouaaza