import "./SummaryCard.css";
import { getFinalPrice } from "../utility";
import { useContext } from "react";
import { DataProvider } from "../DataProvider";

function SummaryCard() {
  const dataProvider = useContext(DataProvider);

  const finalPrice = getFinalPrice(dataProvider.cart);

  return (
    <div className="summary-container">
      <h2 className="summary-title">Summary</h2>
      <div className="summary-order-caract">
        <p className="summary-order-title">Your orden qualifies for:</p>
        <ul className="summary-order-condit">
          <li className="summary-li">Free standard UK mainland delivery.</li>
          <li className="summary-li">Free Click & Collect.</li>
        </ul>
      </div>
      <div className="summary-line"></div>
      <div className="summary-total">
        <p className="summary-total-text">Total</p>
        <p className="summary=total-price">£{finalPrice}</p>
      </div>
      <button className="summary-btn">Continue to check out</button>
    </div>
  );
}

export default SummaryCard;
