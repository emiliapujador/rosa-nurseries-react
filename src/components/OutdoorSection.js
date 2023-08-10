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
        <p className="text-[15px] md:text-[20px] lg:text-[25px] text-blackR text-center leading-normal pb-[20px] lg:mb-[30px]">
          Different foliage, sizes and heights to embelish your garden
        </p>
      </div>
      <div className="container lg:mx-auto lg:mb-[60px]">
        <PlantGrid kind="outdoor" />
      </div>
      <button className="mt-[30px] md:mt-[40px] lg:mt-[60px]">
        <Link to="/outdoor-plants">
          <span className="text-blackR  active:text-whiteR md:mt-[40px] mt-[30px] text-[15px] md:text-[16px] lg:text-[18px] md:mb-[60px]  rounded border-solid border-darkGreen border-2 md:border-3 lg:border-4 max-w-[170px] lg:max-w-[400px] lg:px-[146px] lg:py-[20px] px-[30px] py-[10px] self-center hover:bg-darkGreen active:bg-darkGreen hover:text-whiteR">
            View more
          </span>
        </Link>
      </button>
    </div>
  );
}

export default OutdoorSection;
