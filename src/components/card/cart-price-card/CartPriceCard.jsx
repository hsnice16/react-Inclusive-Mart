import "./cart-price-card.css";
import PropTypes from "prop-types";
import { PriceDiv } from "./PriceDiv";
import { getNumberInLocaleStringFormat } from "utils";

const CartPriceCard = ({ priceCardDetails, loading }) => {
  const { items, totalPrice, totalDiscount, deliveryCharge } = priceCardDetails;

  return loading ? (
    <div className="card cart-price-card loading-price-card">
      <span className="cart-price-details-text h-3p5"></span>
      <span className="my-1 h-3p5"></span>
    </div>
  ) : (
    <div className="card cart-price-card">
      <h3 className="cart-price-details-text">PRICE DETAILS</h3>

      <PriceDiv
        textLabel={`Price (${items} items)`}
        amt={`₹ ${getNumberInLocaleStringFormat(totalPrice)}`}
        className="mt-1"
      />
      <PriceDiv
        textLabel="Discount"
        amt={`₹ ${getNumberInLocaleStringFormat(totalDiscount)}`}
        className="my-1"
      />
      <PriceDiv
        textLabel="Delivery Charges"
        amt={`₹ ${getNumberInLocaleStringFormat(deliveryCharge)}`}
        className="mb-1"
      />

      <div className="cart-total-amt-text">
        <h2 className="fs-1p7">TOTAL AMOUNT</h2>
        <span>
          ₹{" "}
          {getNumberInLocaleStringFormat(
            totalPrice - totalDiscount + deliveryCharge
          )}
        </span>
      </div>

      <p className="my-1">
        You will save ₹ {getNumberInLocaleStringFormat(totalDiscount)} on this
        purchase
      </p>

      <button className="btn btn-place-order">Place Your Order</button>
    </div>
  );
};

CartPriceCard.propTypes = {
  priceCardDetails: PropTypes.shape({
    items: PropTypes.number,
    totalPrice: PropTypes.number,
    totalDiscount: PropTypes.number,
    deliveryCharge: PropTypes.number,
  }),
  loading: PropTypes.bool,
};

CartPriceCard.defaultProps = {
  priceCardDetails: {
    items: 0,
    totalPrice: 0,
    totalDiscount: 0,
    deliveryCharge: 0,
  },
  loading: false,
};

export { CartPriceCard };
