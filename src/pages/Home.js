import InfoHero from "../components/InfoHero";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import OutdoorSection from "../components/OutdoorSection";
import IndoorSection from "../components/IndoorSection";

function Home() {
  return (
    <>
      <HomeCarousel />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      {/* TODO: add contact us component */}
    </>
  );
}

export default Home;
