import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoHero from "./components/InfoHero";
import IndoorSection from "./components/IndoorSection";
import OutdoorSection from "./components/OutdoorSection";
import HomeCarousel from "./components/HomeCarousel/HomeCarousel";

function App() {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      <Footer />
    </div>
  );
}

export default App;
