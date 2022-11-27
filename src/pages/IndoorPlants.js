import PlantGrid from "../components/PlantGrid";
import "./IndoorPlants.css";

function IndoorPlants() {
  return (
    <div>
      <div className="indoor-plants-title-container">
        <h1 className="indoor-plants-section-text">
          Indoor plants <br></br> available online
        </h1>
      </div>
      <PlantGrid kind="indoor" />
      <div className="indoor-plants-add-info">
        <h3 className="indoor-plants-add-text">
          More indoor plants coming soon...
        </h3>
      </div>
    </div>
  );
}

export default IndoorPlants;
