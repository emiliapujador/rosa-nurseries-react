import PlantCard from "./PlantCard";
import { indoorPlants } from "../data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PlantGrid from "./PlantGrid";

function IndoorSection() {
  return (
    <>
      <div className="  pt-[50px] flex flex-col ">
        <div className="flex flex-col container mx-auto px-[30px]">
          <h2 className="text-[25px] text-darkGreen font-serif text-center pb-[25px]">
            Indoor plants
          </h2>
          <p className="text-[18px] text-blackR text-center leading-normal">
            Different shapes and sizes to light up every corner of your home.
          </p>
        </div>
        <div className="container lg:mx-auto ">
          <PlantGrid kind="indoor" />
        </div>
        <Link to="/indoor-plants">
          <span>VIEW MORE</span>
        </Link>
      </div>
    </>
  );
}

export default IndoorSection;
