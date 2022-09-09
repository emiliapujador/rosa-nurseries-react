import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class="hero1"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="hero2"></div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="hero3"></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
