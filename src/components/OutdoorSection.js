import "./PlantsSection.css";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PlantGrid from "./PlantGrid";

function OutdoorSection() {
  return (
    <div className="pt-[50px] flex flex-col ">
      <div className="flex flex-col container mx-auto px-[30px]">
        <h2 className="text-[25px] text-darkGreen font-serif text-center pb-[25px]">
          Outdoor plants
        </h2>
        <p className="text-[18px] text-blackR text-center leading-normal">
          Different foliage, sizes and heights to embelish your garden
        </p>
      </div>
      <div className="container lg:mx-auto ">
        <PlantGrid kind="outdoor" />
      </div>
      <Link to="/outdoor-plants">
        <span>VIEW MORE</span>
      </Link>
    </div>
  );
}

export default OutdoorSection;
