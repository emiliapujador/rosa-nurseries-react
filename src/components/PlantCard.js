import "./PlantCard.css";
import { Link } from "react-router-dom";

function PlantCard(props) {
  return (
    <Link to={"/plant/" + props.slug}>
      <div className=" ">
        <div className="overflow-hidden aspect-square ">
          <img
            className=" object-cover md:object-contain"
            src={props.image}
            alt={props.alt}
          />
        </div>
        <div className="text-plants">
          <p className="pc-name-plant">{props.name}</p>
          <p className="price-plant">{props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default PlantCard;
