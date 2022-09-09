import "./PlantCard.css";

function PlantCard(props) {
  return (
    <a href="./maranta.html">
      <div class="border-plants">
        <img class="indoor-image" src={props.image} alt={props.alt} />
        <div class="text-plants">
          <p class="name-plant">{props.name}</p>
          <p class="price-plant">{props.price}</p>
        </div>
      </div>
    </a>
  );
}

export default PlantCard;
