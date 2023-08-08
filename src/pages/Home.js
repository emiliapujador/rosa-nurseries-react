import InfoHero from "../components/InfoHero";
import HomeCarousel from "../components/HomeCarousel";
import OutdoorSection from "../components/OutdoorSection";
import IndoorSection from "../components/IndoorSection";
import NurseryInfo from "../components/NurseryInfo";
import Newsletter from "./Newsletter";
import Comments from "./Comments";

function Home() {
  return (
    <>
      <HomeCarousel />
      <InfoHero />
      <IndoorSection />
      <OutdoorSection />
      <Newsletter />
      <Comments />
      <NurseryInfo />
    </>
  );
}

export default Home;
