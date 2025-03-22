import Hero from "../components/hero section/hero.jsx";
import TextSection from "../components/textSection/textSection.jsx";
import LuxurySection from "../components/LuxurySection/LuxurySection.jsx";
import ImageCarousel from "../components/carousel/carousel.jsx";
import Navbar from "../components/navigation/navbar.jsx";
import Footer from '../components/footer/index.jsx'
// import Card from '../components/card/Card.jsx'
// import cimg from "../assets/pictures/unreal pic/dicoration3.jpeg"
import Products from "../components/products/Products.jsx";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero></Hero>
      <TextSection></TextSection>
      <LuxurySection />
      <ImageCarousel />
      <Products />
      <Footer></Footer>
    </>
  );
}
export default Home;
