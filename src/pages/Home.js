import InfoHero from "../components/InfoHero";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import OutdoorSection from "../components/OutdoorSection";
import IndoorSection from "../components/IndoorSection";
import NurseryInfo from "../components/NurseryInfo";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <>
      <HomeCarousel />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      <Newsletter />
      <NurseryInfo />
    </>
  );
}

export default Home;
