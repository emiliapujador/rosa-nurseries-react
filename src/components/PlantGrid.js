import "./PlantGrid.css";
import PlantCard from "./PlantCard";
import { plants } from "../data";

function PlantGrid(props) {
  const filteredPlants = plants.filter((plant) => {
    return plant.kind === props.kind;
  });

  return (
    <div className="plants-section">
      <div className="plants-grid">
        {filteredPlants.map((plant) => (
          <PlantCard
            name={plant.name}
            price={plant.price}
            image={plant.image}
            alt={plant.alt}
            slug={plant.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantGrid;
