import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import RoundedButton from "../botton/RoundedBotton.jsx";
import LangSwitcher from "../lang/langSwitcher.jsx"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navbar.scss";

export default function Navbar({ img }) {
  const [showProductList, setShowProductList] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const productListRef = useRef(null);
  const productLinkRef = useRef(null);
  const {t} = useTranslation()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        productLinkRef.current &&
        !productLinkRef.current.contains(event.target) &&
        productListRef.current &&
        !productListRef.current.contains(event.target)
      ) {
        setShowProductList(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <Link to='/'>
        <div className="navbar-logo">
          <div className="logo-container">
            <img
              src={img || "src/assets/logos/logo.png"}
              alt="Jaouda Immobilier Logo"
            />
          </div>
          <h1>{t('navbar.logo')}</h1>
        </div>
      </Link>
      <div className="nav-links">
        <div
          className="products-dropdown"
          ref={productLinkRef}
          onMouseEnter={() => setShowProductList(true)}
          onMouseLeave={() => setShowProductList(false)}
        >
          <span className="nav-item">
            {t('navbar.products')}
            <svg
              className={`dropdown-icon ${showProductList ? "active" : ""}`}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#9e7d5f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div
            ref={productListRef}
            className={`product-list ${showProductList ? "product-list-visible" : ""
              }`}
          >
            <div className="underline">
              
              <div className="product-link">
                <span className="product-dot"></span>
                {t('navbar.apartments')}
              </div>
              <div className="region-state">
                <Link to="/DarBouaaza"><div className="db-region"><span className="product-dot-r"></span> {t('navbar.regions.dar_bouazza')}</div></Link>
                <Link to="/SidiRahal"><div className="sr-region">{t('navbar.regions.sidi_rahal')}</div></Link>
                <Link to="/HadSoualem"><div className="hs-region">{t('navbar.regions.had_soualem')}</div></Link>
              </div>
            </div>
            <div className="underline">
              <div className="product-link">
                <span className="product-dot"></span>
                {t('navbar.offices')}
              </div>
              <div className="region-state">
              <Link to="/DarBouaaza"><div className="db-region"><span className="product-dot-r"></span> {t('navbar.regions.dar_bouazza')}</div></Link>
              </div>
            </div>

            <div className="underline">

              <div className="product-link">
                <span className="product-dot"></span>
                {t('navbar.stores')}
              </div>
              <div className="region-state">
              <Link to="/DarBouaaza"><div className="db-region"> {t('navbar.regions.dar_bouazza')}</div></Link>
                <Link to="/SidiRahal"><div className="sr-region">{t('navbar.regions.sidi_rahal')}</div></Link>
                <Link to="/HadSoualem"><div className="hs-region">{t('navbar.regions.had_soualem')}</div></Link>
              </div>
            </div>

          </div>
        </div>
        <LangSwitcher/>
        <RoundedButton linkTo="/ContactUs" content={t("navbar.contact_us")} height="36px" width="120px" />
      </div>
    </nav>
  );
} 

Navbar.propTypes = {
  img: PropTypes.string,
};
