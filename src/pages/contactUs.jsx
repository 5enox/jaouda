import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/contact.css"; // Custom styles

// Fix default marker issue in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: ("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: ("leaflet/dist/images/marker-icon.png"),
  shadowUrl: ("leaflet/dist/images/marker-shadow.png"),
});

const ContactUs = () => {
  return (<>
    <Navbar/>
    <div className="contact-container">
      {/* Right Section - Info & Map (shows first on mobile) */}
      <div className="contact-info">
        <div className="info-section">
          <h3>CALL US</h3>
          <p><a href="tel:+212661986244">+212661986244</a></p>
          <p><a href="tel:+212660282412">+212660282412</a></p>
        </div>

        <div className="info-section">
          <h3>LOCATION</h3>
          <p>dar bouaaza, route azemmour<br/> Casa Blanca 27223</p>
        </div>

        <div className="info-section">
          <h3>OUR TOP SERVICES</h3>
          <p>Appartements</p>
          <p>Offices</p>
          <p>Commercial Spaces</p>
        </div>

        {/* Map Section */}
        <MapContainer center={[40.7128, -74.0060]} zoom={12} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.7128, -74.0060]}>
            <Popup>Our Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Left Section - Form (shows second on mobile) */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <label>Name</label>
        <input type="text" placeholder="Enter your Name" />
        
        <label>Email</label>
        <input type="email" placeholder="Enter a valid email address" />
        
        <label>Message</label>
        <textarea placeholder="Write your message here..."></textarea>
        
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I accept the <a href="#">Terms of Service</a></label>
        </div>
        
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;