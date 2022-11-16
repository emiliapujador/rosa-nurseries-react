import "./Basket.css";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import SummaryCard from "../components/SummaryCard";

function Basket() {
  const basketHasItems = true;

  if (basketHasItems) {
    return (
      <div className="bkt-container-items">
        <div className="bkt-title-items">
          <h3 className="bkt-title">BASKET</h3>
          <h2 className="bkt-items">1 Item</h2>
        </div>
        <div className="bkt-summary-container">
          <div className="bkt-card-container">
            <BasketCard />
            <BasketCard />
            <BasketCard />
          </div>
          <div className="bkt-summary-card-container">
            <SummaryCard />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <main>
        <div className="bkt-empty-container">
          <span className="basket-text">BASKET</span>
          <div className="line"></div>
          <span className="basket-info">Your basket is empty</span>
          <Link to="/">
            <button className="shop-button">CONTINUE SHOPPING</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Basket;
