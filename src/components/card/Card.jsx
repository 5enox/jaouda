import PropTypes from "prop-types";
import "./Card.scss"; 

const Card = ({ height, width, src, alt, text }) => {
  return (
    <div
      className="card"
      style={{
        height: height,
        width: width,
      }}
    >
        <img src={src} alt={alt} />
      <span className="card-text">{text}</span>
    </div>
  );
};

// Define default props (in case they are not provided)
Card.defaultProps = {
  height: "200px",
  width: "300px",
  text: "Default Text",
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
