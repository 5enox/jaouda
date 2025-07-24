import Navbar from "../components/navigation/navbar"
import Footer from "../components/footer/index.jsx"
import "leaflet/dist/leaflet.css";
import "../styles/contact.css"; // Custom styles




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


<div className="map">
  <iframe
    src="https://maps.google.com/maps?q=33.5148841,-7.8138276&output=embed"
    width="100%"
    height="250"
    style={{ border: 0, borderRadius: '10px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

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