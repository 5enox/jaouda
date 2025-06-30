import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import DarBouaaza from "./pages/dar-bouaaza.jsx";
import SidiRahal from "./pages/sr.jsx";
import HadSoualem from './pages/hadSoualem.jsx'
import ContactUs from './pages/contactUs.jsx'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DarBouaaza" element={<DarBouaaza />} />
        <Route path="/SidiRahal" element={<SidiRahal />} />
        <Route path="/HadSoualem" element={<HadSoualem />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
