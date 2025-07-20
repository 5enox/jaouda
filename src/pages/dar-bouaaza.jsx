import AptGreating from '../components/aptGreating/aptGreating.jsx'
import RegionInfo from '../components/region/regionInfo.jsx'
import BuildInformations from '../components/appartements/build-information.jsx'
import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"
import Grady from '../components/gradySection/Grady.jsx'

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
//import pictures
import Eimg1 from '../assets/pictures/real pic/magazin/1qazaq2wsx.jpeg';
import Eimg2 from '../assets/pictures/real pic/magazin/1234543.jpeg';
import Eimg3 from '../assets/pictures/real pic/magazin/8c680dbc-73dc-4d2e-985d-34c3ec508e7a.jpeg';
import Eimg4 from '../assets/pictures/real pic/magazin/8f001ac9-4f7a-477e-b856-0be90ed98a7a.jpeg';
import Eimg5 from '../assets/pictures/real pic/magazin/bba95227-720e-4d91-b66e-3a8da2b709de.jpeg';
import Eimg6 from '../assets/pictures/real pic/magazin/Maison Standards, Paris July 2019.jpeg';
import apt1 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.22_0da47aad.jpg';
import apt2 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.25_2f1de28e.jpg';
import apt3 from '../assets/pictures/real pic/WhatsApp Image 2025-02-21 at 12.57.10_7ab166bc.jpg';
import apt4 from '../assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.30.47_82be8639.jpg';
import apt5 from '../assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.43_d89192fd - Copy - Copy.jpg';
import apt6 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.24_7e200876.jpg';
import apt7 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4ac95fef.jpg';
import apt8 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.25_479b33ba.jpg';
import apt9 from '../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.32_4007d8e5.jpg';
import dbOffice1 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.21.00_73554cb1.jpg';
import dbOffice2 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.28_8ff5dea7.jpg';
import dbOffice3 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.21_bb24372c.jpg';
import dbOffice4 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_25bc686c.jpg';
import dbOffice5 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_39710626.jpg';
import dbOffice6 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_89cc358f.jpg';
import dbOffice7 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.24_dbf6d8cf.jpg';
import dbOffice8 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_d04d6e7b.jpg';
import dbOffice9 from '../assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.25_34a0b310.jpg';
// Uncomment these if you want to use them:
// import dbOffice10 from './assets/pictures/real pic/db office/WhatsApp Image 2025-02-14 at 23.19.29_ea66f03e.jpg';
// import dbOffice11 from './assets/pictures/real pic/db office/WhatsApp Image 2025-02-13 at 15.22.25_42bd3c6d.jpg';

function DarBouaaza() {
  const {t} = useTranslation()

  const dbAptImg = {
    img1: {
      src: apt1,
      alt: 'APPARTEMENT 1'
    },
    img2: {
      src: apt2,
      alt: 'APPARTEMENT 1'
    },
    img3: {
      src: apt3,
      alt: 'APPARTEMENT 1'
    },
    img4: {
      src: apt4,
      alt: 'couloir'
    },
    img5: {
      src: apt5,
      alt: 'escaliers'
    },
    img6: {
      src: apt6,
      alt: 'ascenseur'
    },
    img7: {
      src: apt7,
      alt: 'ascenseur'
    },
    img8: {
      src: apt8,
      alt: 'ascenseur'
    },
    img9: {
      src: apt9,
      alt: 'ascenseur'
    }
}

const dbBrImg = {
  img1: {
    src: dbOffice1,
    alt: 'DarB BUSINESS LOGO'
  },
  img2: {
    src: dbOffice2,
    alt: 'BUSINESS FACADE'
  },
  img3: {
    src: dbOffice3,
    alt: 'BUSINESS FACADE'
  },
  img4: {
    src: dbOffice4,
    alt: 'BUSINESS FACADE'
  },
  img5: {
    src: dbOffice5,
    alt: 'BUSINESS FACADE'
  },
  img6: {
    src: dbOffice6,
    alt: 'BUSINESS FACADE'
  },
  img7: {
    src: dbOffice7,
    alt: 'BUSINESS INTERIOR' // Added missing alt text
  },
  img8: {
    src: dbOffice8,
    alt: 'BUSINESS INTERIOR' // Added missing alt text
  },
  img9: {
    src: dbOffice9,
    alt: 'BUSINESS INTERIOR' // Added missing alt text
  }
  // Uncomment if you want to use them:
  // img10: {
  //   src: dbOffice10,
  //   alt: 'BUSINESS INTERIOR'
  // },
  // img11: {
  //   src: dbOffice11,
  //   alt: 'BUSINESS INTERIOR'
  // }
}
  const dbEcImg = {
    img1: {
      src: Eimg1,  // Use the imported variable
      alt: '𝗗𝗲𝘀𝗶𝗴𝗻𝗲𝗱 𝗯𝘆 𝗜𝗱𝗼𝘁 Bakery Facade Interior Concept Design 🥖'
    },
    img2: {
      src: Eimg2,
      alt: ''
    },
    img3: {
      src: Eimg3,
      alt: ''
    },
    img4: {
      src: Eimg4,
      alt: ''
    },
    img5: {
      src: Eimg5,
      alt: ''
    },
    img6: {
      src: Eimg6,
      alt: ''
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