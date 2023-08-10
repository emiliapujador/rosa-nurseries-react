import "./PlantGrid.css";
import PlantCard from "./PlantCard";
import { plants } from "../data";

function PlantGrid(props) {
  const filteredPlants = plants.filter((plant) => {
    return plant.kind === props.kind;
  });

  return (
    <div className="grid grid-cols-2 grid-rows-2  md:grid-cols-3 md:grid-rows-2  lg:grid-cols-3 lg:grid-rows-2 gap-[15px] md:gap-[25px]">
      {filteredPlants.map((plant) => (
        <PlantCard image={plant.image} alt={plant.alt} slug={plant.slug} />
      ))}
    </div>
  );
}

export default PlantGrid;
