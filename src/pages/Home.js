import AboutUsLanding from "../components/AboutUsLanding";
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
      <AboutUsLanding />
      <OutdoorSection />
      <IndoorSection />
      <Newsletter />
      <Comments />
      <NurseryInfo />
    </>
  );
}

export default Home;
