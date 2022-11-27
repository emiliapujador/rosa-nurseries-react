import "./PlantsSection.css";
import PlantCard from "./PlantCard";
import { indoorPlants } from "../data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PlantGrid from "./PlantGrid";

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
        </div>
        <div className="indoor-column">
          <div className="title-container title-container-center">
            <h2 className="plants-characteristics">
              Different shapes and sizes to light
              <br />
              up every corner of your home
            </h2>
          </div>
        </div>
      </div>
      <PlantGrid kind="indoor" />
      <Link to="/indoor-plants">
        <div className="btn-view-more-container">
          <div className="button-view-more">
            <span>VIEW MORE</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default IndoorSection;
