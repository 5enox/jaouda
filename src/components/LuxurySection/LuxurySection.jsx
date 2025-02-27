import "./LuxurySection.css";
import bedroomImage from "../../assets/pictures/unreal pic/decoration.jpeg"; // Update the path accordingly
import Botton from '../botton/botton.jsx'

const LuxurySection = () => {
  return (
    <section className="luxury-section">
        {/* Top Introduction Section */}
      <div className="intro">
        <h1>Introducing Our Luxury Offerings</h1>
        <p>
          Discover a world of refined elegance and unparalleled sophistication with our premium 
          properties, designed to elevate your living experience.
        </p>
      </div>
      <div className="luxury-container">
        {/* Left Content */}
        <div className="luxury-text">
          <h2>Elevate Your Lifestyle with <br /> Our Luxury Apartments</h2>
          <p className="lux-text-p">
            Immerse yourself in the epitome of luxury living. Our exquisitely crafted
            apartments in Dar Bouaazza, Had Swalem, and Sidi Rahal offer unrivaled
            sophistication, modern amenities, and breathtaking views.
          </p>
          <div className="luxury-buttons">
            {/* <button className="explore-btn">Explore Now</button> */}
            <Botton content="Explore Now" width="150px" height="50px"/>
           </div>
        </div>

        {/* Right Image */}
        <div className="luxury-image">
          <img src={bedroomImage} alt="Luxury Apartment" />
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
