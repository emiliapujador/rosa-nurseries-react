import "./PlantsSection.css";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PlantGrid from "./PlantGrid";

function OutdoorSection() {
  return (
    <div>
      <div className="plants-section">
        <div className="indoor-column">
          <div className="title-container">
            <h2 className="indoor-plants-title">
              Outdoor plants
              <br />
              available online
            </h2>
          </div>
        </div>
        <div className="indoor-column">
          <div className="title-container title-container-center">
            <h2 className="plants-characteristics">
              Different foliage, sizes and heights
              <br />
              to embelish your garden
            </h2>
          </div>
        </div>
      </div>
      <div className="center-grid">
        <PlantGrid kind="outdoor" />
      </div>
      <Link to="/outdoor-plants">
        <div className="btn-view-more-container">
          <div className="button-view-more">
            <span>VIEW MORE</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OutdoorSection;
