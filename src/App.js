import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoHero from "./components/InfoHero";
import IndoorSection from "./components/IndoorSection";
import OutdoorSection from "./components/OutdoorSection";

function App() {
  return (
    <div>
      <Navbar />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      <Footer />
    </div>
  );
}

export default App;
