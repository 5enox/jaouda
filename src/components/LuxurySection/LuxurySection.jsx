import "./LuxurySection.css";
import bedroomImage from "../../assets/pictures/unreal pic/decoration.jpeg"; // Update the path accordingly
import Botton from '../botton/botton.jsx'
import { useTranslation } from "react-i18next";

const LuxurySection = () => {

  const {t} = useTranslation()
  return (
    <section className="luxury-section">
        {/* Top Introduction Section */}
      <div className="intro">
        <h1>{t('luxurySection.intro.title')}</h1>
        <p>
          {t('luxurySection.intro.description')}
        </p>
      </div> 
      <div className="luxury-container">
        {/* Left Content */}
        {/* Right Image */}
        <div className="luxury-image">
          <img src={bedroomImage} alt="Luxury Apartment" />
        </div>
        <div className="luxury-text">
          <h2>{t('luxurySection.luxuryContainer.text.title')}</h2>
          <p className="lux-text-p">
            {t("luxurySection.luxuryContainer.text.description")}
          </p>
          <div className="luxury-buttons">
            {/* <button className="explore-btn">Explore Now</button> */}
                                
            <Botton content={t('luxurySection.luxuryContainer.buttons.exploreNow')} width="150px" height="50px"/>
           </div>
        </div>

      </div>
    </section>
  );
};

export default LuxurySection;
