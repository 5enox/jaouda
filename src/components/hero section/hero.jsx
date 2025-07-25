import "./hero.css";
import MainPic from "../../assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.29_c6e81e12.jpg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const {t} = useTranslation()

  return (
    <header>
      <div className="gradientbackgraound"></div>
      <div className="hero-text" >
        <img className="heroPicture" src={MainPic} alt="apartement" />
        <h2 className="hero-text-title">
          {t('hero.title')}
        </h2>
      </div>
    </header>
  );
}
