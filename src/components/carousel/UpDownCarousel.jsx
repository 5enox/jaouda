import "./UpDownCarousel.css"; // Import the styles
import img1 from "../../assets/pictures/real pic/h3appartemet.jpg";
import img2 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.29_c6e81e12.jpg";
import img3 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.22_0da47aad.jpg";
import img4 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4ac95fef.jpg";
import img5 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.30_36ef5313.jpg";
import img6 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.32_4007d8e5.jpg";
import PropTypes from "prop-types";
const UpDownCar = ({ images }) => {
    const defaultImages = [img1, img2, img3, img4, img5, img6];
    const finalImages = Array.isArray(images) && images.length ? images : defaultImages;

    return (
        <div className="carousel">
            <div className="img-track-up">
                {/* First Column - Moves Up */}
                <div className="image-track track-up">
                    {finalImages.concat(finalImages).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
                {/* Duplicated for seamless effect */}
                <div className="image-track track-up">
                    {finalImages.concat(finalImages).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
            </div>
            <div className="img-track-down">
                {/* Second Column - Moves Down */}
                <div className="image-track track-down">
                    {finalImages.concat(finalImages).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
                {/* Duplicated for seamless effect */}
                <div className="image-track track-down">
                    {finalImages.concat(finalImages).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
            </div>
        </div>
    );
};

UpDownCar.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};

UpDownCar.defaultProps = {
    images: [],
};

export default UpDownCar;
