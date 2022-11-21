import "./Basket.css";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import SummaryCard from "../components/SummaryCard";
import { useContext } from "react";
import { DataProvider } from "../DataProvider";

function Basket() {
  const dataProvider = useContext(DataProvider);

  const cart = dataProvider.cart;

  if (cart.length > 0) {
    return (
      <div className="bkt-container-items">
        <div className="bkt-title-items">
          <h3 className="bkt-title">BASKET</h3>
          <h2 className="bkt-items">1 Item</h2>
        </div>
        <div className="bkt-summary-container">
          <div className="bkt-card-container">
            {cart.map((item) => {
              return <BasketCard cartItem={item} />;
            })}
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
