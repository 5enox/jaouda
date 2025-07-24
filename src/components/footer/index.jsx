import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.scss";
import Logo from "../../assets/logos/logo.png"

export default function Footer({ img }) {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-container">
                <img
                  src={img || Logo}
                  alt="Jaouda Immobilier Logo"
                />
              </div>
              <h2>{t('footer.brand.name')}</h2>
            </div>
            <p className="footer-tagline">
              {t('footer.brand.tagline')}
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>{t('footer.products.title')}</h3>
              <ul>
                <li>
                  <Link to="/DarBouaaza">{t('footer.products.links.apartments')}</Link>
                </li>
                <li>
                  <Link to="/DarBouaaza">{t('footer.products.links.offices')}</Link>
                </li>
                <li>
                  <Link to="/DarBouaaza">{t('footer.products.links.stores')}</Link>
                </li>

              </ul>
            </div>

            <div className="footer-section">
              <h3>{t('footer.company.title')}</h3>
              <ul>
                <li>
                  <Link to="/z">{t('footer.company.links.about')}</Link>
                </li>
                <li>
                  <Link to="/team">{t("footer.company.links.team")}</Link>
                </li>
                <li>
                  <Link to="/careers">{t("footer.company.links.careers")}</Link>
                </li>
                <li>
                  <Link to="/blog">{t("footer.company.links.blog")}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>{t("footer.contact.title")}</h3>
              <ul className="contact-infos">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                      stroke="#9e7d5f"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 18V22"
                      stroke="#9e7d5f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 22H16"
                      stroke="#9e7d5f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t("footer.contact.info.address")}                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0376 5.31617L6.80964 2.87533C6.00612 2.27219 4.85997 2.36746 4.16275 3.08132L2.45507 4.82094C1.56849 5.72773 1.3492 7.15151 2.15985 8.11479C5.9794 12.8201 10.1796 17.0203 14.8849 20.8399C15.8482 21.6505 17.272 21.4312 18.1788 20.5446L19.9184 18.7722C20.6323 18.075 20.7275 16.9288 20.1244 16.1253L17.6644 12.8627C17.139 12.1556 16.1636 11.9988 15.4225 12.4949L13.3862 13.8251C12.0869 12.9991 10.9676 12.0856 9.94947 11.0675C8.93131 10.0493 8.0178 8.93002 7.19184 7.63069L8.52206 5.59437C9.01812 4.85329 8.86135 3.87792 8.15428 3.35249V3.35249"
                      stroke="#9e7d5f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t("footer.contact.info.phone")}
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                      stroke="#9e7d5f"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t("footer.contact.info.email")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h3>{t("footer.followUs")}</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61559156706759"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="#9e7d5f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jaouda_immobilier"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="#9e7d5f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z"
                  stroke="#9e7d5f"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.5 7C17.7761 7 18 6.77614 18 6.5C18 6.22386 17.7761 6 17.5 6C17.2239 6 17 6.22386 17 6.5C17 6.77614 17.2239 7 17.5 7Z"
                  fill="#9e7d5f"
                  stroke="#9e7d5f"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/212661986244"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.472 14.382C17.15 14.222 15.592 13.459 15.293 13.351C14.994 13.243 14.777 13.189 14.56 13.513C14.343 13.837 13.767 14.541 13.583 14.759C13.399 14.977 13.215 15.004 12.893 14.844C12.571 14.684 11.608 14.346 10.467 13.325C9.581 12.53 8.989 11.554 8.805 11.23C8.621 10.906 8.786 10.733 8.946 10.574C9.09 10.429 9.268 10.197 9.428 10.013C9.588 9.829 9.642 9.696 9.75 9.478C9.858 9.26 9.804 9.076 9.724 8.916C9.644 8.756 8.989 7.194 8.717 6.546C8.452 5.918 8.182 6.001 7.982 5.99C7.794 5.98 7.577 5.978 7.36 5.978C7.143 5.978 6.768 6.058 6.469 6.382C6.17 6.706 5.355 7.469 5.355 9.031C5.355 10.593 6.496 12.1 6.656 12.318C6.816 12.536 8.986 15.84 12.283 17.2C13.09 17.545 13.717 17.754 14.206 17.901C15.014 18.176 15.751 18.139 16.332 18.059C16.985 17.97 18.236 17.282 18.508 16.535C18.78 15.788 18.78 15.149 18.7 15.014C18.62 14.879 18.402 14.799 18.08 14.639L17.472 14.382Z"
                  fill="#9e7d5f"
                />
                <path
                  d="M12 2C6.477 2 2 6.477 2 12C2 13.89 2.525 15.66 3.438 17.168L2.546 20.2C2.49 20.374 2.498 20.562 2.569 20.731C2.64 20.9 2.769 21.038 2.934 21.118C3.039 21.168 3.153 21.194 3.268 21.194C3.339 21.194 3.41 21.184 3.479 21.163L6.832 20.562C8.34 21.475 10.11 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C10.39 20 8.85 19.58 7.534 18.813L7.222 18.622L4.623 19.377L5.378 16.778L5.187 16.466C4.42 15.15 4 13.61 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20Z"
                  fill="#9e7d5f"
                />
              </svg>
            </a>
            <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                    fill="#9e7d5f"
                  />
                </svg>
              </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()}{t("footer.bottom.rights")}
          </p>
          <div className="footer-legal">
            <Link to="/privacy">{t("footer.bottom.legal.privacy")}</Link>
            <Link to="/terms">{t("footer.bottom.legal.terms")}</Link>
            <Link to="/sitemap">{t("footer.bottom.legal.sitemap")}</Link>
          </div>
        </div>
      </div>

      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}

Footer.propTypes = {
  img: PropTypes.string,
};
