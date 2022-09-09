import "./PlantsSection.css";
import PlantCard from "./PlantCard";

function OutdoorSection() {
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
            name="Lavandula stoechas 'Lilac Wings'"
            price="£9.00"
            image="./Images/outdoorPlant-1.jpeg "
            alt="Outdoor image 1"
          />
          <PlantCard
            name="Rose floribunda 'Precious Ruby'"
            price="£50.00"
            image="/Images/outdoorPlant-2.jpeg"
            alt="Outdoor image 2"
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
            name="Hydrangea arborescens 'Incrediball'"
            price="£21.00"
            image="./Images/Hydrangea arborescens.jpeg"
            alt="Outdoor image 3"
          />
          <PlantCard
            name="Viola Vibrante Mixed"
            price="5.00"
            image="/Images/outdoorPlant-4.jpeg"
            alt="Outdoor image 4"
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

export default OutdoorSection;
