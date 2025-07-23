// import PropTypes from "prop-types";
// import "./Card.scss"; 

// const Card = ({ height, width, src, alt, text }) => {
//   return (
//     <div
//       className="card"
//       style={{
//         height: height,
//         width: width,
//       }}
//     >
//         <img src={src} alt={alt} />
//       <span className="card-text">{text}</span>
//     </div>
//   );
// };

// // Define default props (in case they are not provided)
// Card.defaultProps = {
//   height: "200px",
//   width: "300px",
//   text: "Default Text",
// };

// // Prop types for validation
// Card.propTypes = {
//   height: PropTypes.string,
//   width: PropTypes.string,
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   text: PropTypes.string,
// };

// export default Card;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ height, width, src, alt, text }) => {
  const [screenSize, setScreenSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic default props based on screen size
  const getResponsiveDefaults = () => {
    if (screenSize <= 425) {
      return {
        height: "200px",
        width: "280px",
        text: "Default Text"
      };
    }
    return {
      height: "200px",
      width: "300px",
      text: "Default Text"
    };
  };

  const defaults = getResponsiveDefaults();

  // Use provided props or fall back to responsive defaults
  const cardHeight = height || defaults.height;
  const cardWidth = width || defaults.width;
  const cardText = text || defaults.text;

  // Debug log (remove this in production)
  console.log('Screen size:', screenSize, 'Width:', cardWidth, 'Height:', cardHeight);

  return (
    <div
      className="card"
      style={{
        height: cardHeight,
        width: cardWidth,
      }}
    >
      <img src={src} alt={alt} />
      <span className="card-text">{cardText}</span>
    </div>
  );
};

// Prop types for validation
Card.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Card;