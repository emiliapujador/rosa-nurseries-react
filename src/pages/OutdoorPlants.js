import PlantGrid from "../components/PlantGrid";
import "./OutdoorPlants.css";

function OutdoorPlants() {
  return (
    <div className="outdoor-plants-container">
      <div className="outdoor-plants-title-container">
        <h1 className="outdoor-plants-section-text">
          Outdoor plants <br></br> available online
        </h1>
      </div>
      <PlantGrid kind="outdoor" />
      <div className="outdoor-plants-add-info">
        <h3 className="outdoor-plants-add-text">
          More outdoor plants coming soon...
        </h3>
      </div>
    </div>
  );
}

export default OutdoorPlants;
