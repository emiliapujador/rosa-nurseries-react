import "./PlantsSection.css";
import PlantCard from "./PlantCard";

function OutdoorSection() {
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
            name="Lavandula stoechas 'Lilac Wings'"
            price="£9.00"
            image="./Images/outdoorPlant-1.jpeg "
            alt="Outdoor image 1"
            slug="lavandula"
          />
          <PlantCard
            name="Rose floribunda 'Precious Ruby'"
            price="£50.00"
            image="/Images/outdoorPlant-2.jpeg"
            alt="Outdoor image 2"
            slug="rose_ruby"
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
            name="Hydrangea arborescens 'Incrediball'"
            price="£21.00"
            image="./Images/Hydrangea arborescens.jpeg"
            alt="Outdoor image 3"
            slug="hydragea"
          />
          <PlantCard
            name="Viola Vibrante Mixed"
            price="5.00"
            image="/Images/outdoorPlant-4.jpeg"
            alt="Outdoor image 4"
            slug="viola_mixed"
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

export default OutdoorSection;
