import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="hero1"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero2"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero3"></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
