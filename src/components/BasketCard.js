import "./BasketCard.css";

function BasketCard() {
  return (
    <div className="bc-basket-card">
      <img className="bc-plant-img" src="./Images/indoorPlant-1.jpeg" />
      <div className="bc-basket-text">
        <h3 className="bc-plant-name">Name of the plant</h3>
        <p className="bc-stock">Currently in stock online</p>
        <p className="bc-quantity">Quantity</p>
        <div className="bc-quantity-buttons">
          <div className="bc-quantity-btn">
            <span>-</span>
          </div>
          <div className="bc-quantity-btn">
            <span>1</span>
          </div>
          <div className="bc-quantity-btn">
            <span>+</span>
          </div>
        </div>
      </div>
      <div className="bc-card-total-price">
        <span>£1</span>
      </div>
    </div>
  );
}

export default BasketCard;
