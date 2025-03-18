import Hero from "../components/hero section/hero.jsx";
import TextSection from "../components/textSection/textSection.jsx";
import LuxurySection from "../components/LuxurySection/LuxurySection.jsx";
import ImageCarousel from "../components/carousel/carousel.jsx";
// import Card from '../components/card/Card.jsx'
// import cimg from "../assets/pictures/unreal pic/dicoration3.jpeg"
import Products from "../components/products/Products.jsx";

function Home() {
  return (
    <>
      <Hero></Hero>
      <TextSection></TextSection>
      <LuxurySection />
      <ImageCarousel />
      {/* <Card src={cimg} alt={'hello'} text={'Appartemets'} height={'300px'} width={'350px'}></Card> */}
      <Products />
    </>
  );
}
export default Home;
