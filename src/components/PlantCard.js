import "./PlantCard.css";
import { Link } from "react-router-dom";

function PlantCard(props) {
  return (
    <Link to={"/plant/" + props.slug}>
      <div className="border-plants">
        <img className="indoor-image" src={props.image} alt={props.alt} />
        <div className="text-plants">
          <p className="name-plant">{props.name}</p>
          <p className="price-plant">{props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default PlantCard;
