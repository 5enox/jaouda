import "./ImageCarousel.css"; // Import the styles
import img1 from "../../assets/pictures/real pic/h3appartemet.jpg"; // Add your images
import img2 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-13 at 15.36.29_c6e81e12.jpg";
import img3 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.22_0da47aad.jpg";
import img4 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.26_4ac95fef.jpg";
import img5 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.30_36ef5313.jpg";
import img6 from "../../assets/pictures/real pic/WhatsApp Image 2025-02-14 at 23.19.32_4007d8e5.jpg";


const images = [img1, img2, img3, img4, img5, img6];

const ImageCarousel = () => {
    return (
        <div className="carousel">
            <div className="img-track-left">
                {/* First Row - Moves Left */}
                <div className="image-track track-left">
                    {images.concat(images).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
                {/* doublicated */}
                <div className="image-track track-left">
                    {images.concat(images).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
            </div>
            <div className="img-track-right">

                {/* Second Row - Moves Right */}
                <div className="image-track track-right">
                    {images.concat(images).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
                {/* doublicated */}
                <div className="image-track track-right">
                    {images.concat(images).map((img, index) => (
                        <img key={index} src={img} alt="Carousel" />
                    ))}
                </div>
            </div>
        </div>


    );
};

export default ImageCarousel;
