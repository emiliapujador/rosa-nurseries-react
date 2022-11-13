import InfoHero from "../components/InfoHero";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import OutdoorSection from "../components/OutdoorSection";
import IndoorSection from "../components/IndoorSection";
import NurseryInfo from "../components/NurseryInfo";

function Home() {
  return (
    <>
      <HomeCarousel />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      <NurseryInfo />
      {/* TODO: add contact us component */}
    </>
  );
}

export default Home;
