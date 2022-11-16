import { useParams } from "react-router-dom";
import { plants } from "../data";
import "./PlantDetail.css";

function PlantDetail() {
  const params = useParams();

  // buscamos la planta que tenga el slug correcto
  const plant = plants.find(function (plant) {
    return plant.slug === params.slug;
  });

  // the plant doesn't exist
  if (plant === undefined) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }

  return (
    <div>
      <main className="container">
        <div className="content">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${plant.image})`,
            }}
          ></div>
          <div className="text-container">
            <div className="plant-info">
              <h2 className="name-plant">{plant.name}</h2>
              <span className="plant-price">£{plant.price} </span>
            </div>
            <p className="plants-car">{plant.description}</p>
            <div className="care-instruction">
              <img className="icon" src="/Images/sun.png" />
              <span className="care-text">Light needed</span>
            </div>
            <span className="instruction-text">{plant.light}</span>
            <div className="care-instruction">
              <img className="icon" src="/Images/water.png" />
              <span className="care-text">Watering</span>
            </div>
            <span className="instruction-text">{plant.water}</span>
            <div className="care-instruction">
              <img className="icon" src="/Images/food.png" />
              <span className="care-text">Feeding</span>
            </div>
            <span className="instruction-text">{plant.feed}</span>
            <div className="add-to-cart">
              <select className="add-to-cart-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5">6</option>
                <option value="5">7</option>
                <option value="5">8</option>
                <option value="5">9</option>
                <option value="5">10</option>
              </select>
              <button className="add-to-cart-button">ADD TO CART</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlantDetail;
