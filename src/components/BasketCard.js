import "./BasketCard.css";
import { useContext, useState } from "react";
import { plants } from "../data";
import { DataProvider } from "../DataProvider";

function BasketCard(props) {
  const cartItem = props.cartItem;

  const dataProvider = useContext(DataProvider);

  // magia que encuentra la planta en el archivo 'data.js'
  const plant = plants.find((plant) => plant.slug === cartItem.plantId);

  function increase() {
    if (cartItem.quantity < 10) {
      dataProvider.updateItemQuantity(cartItem.plantId, cartItem.quantity + 1);
    }
  }

  function decrease() {
    if (cartItem.quantity === 1) {
      dataProvider.deleteItem(cartItem.plantId);
    } else {
      dataProvider.updateItemQuantity(cartItem.plantId, cartItem.quantity - 1);
    }
  }

  return (
    <div className="bc-basket-card">
      <div
        className="bc-plant-img"
        style={{
          backgroundImage: `url(${plant.image})`,
        }}
      />
      <div className="bc-basket-text">
        <h3 className="bc-plant-name">{plant.name}</h3>
        <p className="bc-stock">Currently in stock online</p>
        <p className="bc-quantity">Quantity</p>
        <div className="bc-container-quantity-price">
          <div className="bc-quantity-buttons">
            <div className="bc-quantity-btn" onClick={decrease}>
              <span>-</span>
            </div>
            <div className="bc-quantity-btn">
              <span>{cartItem.quantity}</span>
            </div>
            <div className="bc-quantity-btn" onClick={increase}>
              <span>+</span>
            </div>
          </div>
          <div className="bc-card-total-price bc-quantity-buttons">
            <span>£{plant.price * cartItem.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCard;
