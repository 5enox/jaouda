import "./RoundedBotton.css";
import { Link } from "react-router-dom";

function RoundedBotton({
  content = "Click Here",
  height = "45",
  width = "120",
  bgColor = "#9e7d5f",
  fontSize = "15px",
  linkTo = "/",
}) {
  // style data
  const style = {
    height: height,
    width: width,
    background: bgColor,
    fontSize: fontSize,
    cursor: "pointer",
  };
  return (
    <button className="roundedBotton" style={style}>
      <Link to={linkTo}>
        <p className="roundedbottonparagraph">{content}</p>
      </Link>
    </button>
  );
}

export default RoundedBotton;
