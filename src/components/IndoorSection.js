import "./PlantsSection.css";
import PlantCard from "./PlantCard";

function IndoorSection() {
  return (
    <div>
      <div class="plants-section">
        <div class="indoor-column">
          <div class="title-container">
            <h2 class="indoor-plants-title">
              Indoor plants
              <br />
              available online
            </h2>
          </div>
          <PlantCard
            name="Maranta leuconeura"
            price="£9.00"
            image="./Images/indoorPlant-1.jpeg"
            alt="Indoor image 1"
          />
          <PlantCard
            name="Epipremnum aureum 'Neon'"
            price="£8.50"
            image="./Images/indoorPlant-2.jpeg"
            alt="Indoor image 2"
          />
        </div>
        <div class="indoor-column">
          <div class="title-container title-container-center">
            <h2 class="plants-characteristics">
              Different shapes and sizes to light
              <br />
              up every corner of your home
            </h2>
          </div>
          <PlantCard
            name="Epipremnum pinnatum"
            price="£8.00"
            image="./Images/indoorPlant-3.jpeg"
            alt="Indoor image 3"
          />
          <PlantCard
            name="Monstera adansonii"
            price="11.00"
            image="./Images/indoorPlant-4.jpeg"
            alt="Indoor image 4"
          />
        </div>
      </div>
      <a href="./indoor-plant.html" target="_blank">
        <div class="button-view-more">
          <span>VIEW MORE</span>
        </div>
      </a>
    </div>
  );
}

export default IndoorSection;
