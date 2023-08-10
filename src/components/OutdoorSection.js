import "./PlantsSection.css";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PlantGrid from "./PlantGrid";

function OutdoorSection() {
  return (
    <div className="pt-[60px] flex flex-col px-[30px] md:pt-[60px] lg:pt-[150px] lg:px-[100px]">
      <div className="flex flex-col container mx-auto px-[30px]">
        <h2 className="text-[20px] md:text-[30px] lg:text-[40px] text-darkGreen font-serif text-center pb-[10px] lg:pb-[40px]">
          Outdoor plants
        </h2>
        <p className="text-[15px] md:text-[20px] lg:text-[25px] text-blackR text-center leading-normal pb-[20px] lg:pb-[30px]">
          Different foliage, sizes and heights to embelish your garden
        </p>
      </div>
      <div className="container lg:mx-auto ">
        <PlantGrid kind="outdoor" />
      </div>
      <button className="md:mt-[40px] lg:mt-[100px] mt-[30px] text-[15px] md:text-[16px] lg:text-[18px]">
        <Link to="/outdoor-plants">
          <span>View more</span>
        </Link>
      </button>
    </div>
  );
}

export default OutdoorSection;
