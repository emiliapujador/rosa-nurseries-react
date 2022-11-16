import "./PlantsSection.css";
import PlantCard from "./PlantCard";
import { indoorPlants } from "../data";

function IndoorSection() {
  return (
    <div>
      <div className="plants-section">
        <div className="indoor-column">
          <div className="title-container">
            <h2 className="indoor-plants-title">
              Indoor plants
              <br />
              available online
            </h2>
          </div>
          <PlantCard
            name="Maranta leuconeura"
            price="£9.00"
            image="/Images/indoorPlant-1.jpeg"
            alt="Indoor image 1"
            slug="maranta"
          />
          <PlantCard
            name="Epipremnum aureum 'Neon'"
            price="£8.50"
            image="./Images/indoorPlant-2.jpeg"
            alt="Indoor image 2"
            slug="epipremnum_aureum"
          />
        </div>
        <div className="indoor-column">
          <div className="title-container title-container-center">
            <h2 className="plants-characteristics">
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
            slug="epipremnum_pinnatum"
          />
          <PlantCard
            name="Monstera adansonii"
            price="11.00"
            image="./Images/indoorPlant-4.jpeg"
            alt="Indoor image 4"
            slug="monstera"
          />
        </div>
      </div>
      <a href="./indoor-plant.html" target="_blank">
        <div className="button-view-more">
          <span>VIEW MORE</span>
        </div>
      </a>
    </div>
  );
}

export default IndoorSection;
